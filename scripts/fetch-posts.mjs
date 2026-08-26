import { mkdir, writeFile } from "node:fs/promises";

const feedUrl = "https://cognophile.hashnode.dev/rss.xml";

function unwrap(value) {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function pick(item, tag) {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match?.[1] ? unwrap(match[1]) : "";
}

async function fetchPosts() {
  try {
    const response = await fetch(feedUrl, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!response.ok) return [];

    const xml = await response.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

    return items.slice(0, 3).map((item) => {
      const description = pick(item, "description");
      return {
        title: pick(item, "title"),
        url: pick(item, "link"),
        excerpt:
          description.length > 180
            ? `${description.slice(0, 180).trimEnd()}…`
            : description,
        publishedAt: pick(item, "pubDate") || null,
      };
    });
  } catch {
    return [];
  }
}

await mkdir("public", { recursive: true });
await writeFile("public/posts.json", `${JSON.stringify(await fetchPosts(), null, 2)}\n`);