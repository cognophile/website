import { createServerFn } from "@tanstack/react-start";

export type BlogPost = {
  title: string;
  url: string;
  excerpt: string;
  publishedAt: string | null;
};

const FEED_URL = "https://cognophile.hashnode.dev/rss.xml";

function unwrap(value: string): string {
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

function pick(item: string, tag: string): string {
  const match = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return match?.[1] ? unwrap(match[1]) : "";
}

export const getRecentPosts = createServerFn({ method: "GET" }).handler(
  async (): Promise<BlogPost[]> => {
    try {
      const response = await fetch(FEED_URL, {
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
  },
);
