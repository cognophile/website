import { blogUrl } from "@/content/site";
import type { BlogPost } from "@/lib/posts.functions";

function formatDate(value: string | null) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function WritingSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="writing" className="animate-fade-up space-y-12">
      <div className="flex items-end justify-between border-b border-border pb-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          04. Recent Posts
        </h2>
        <a
          href={blogUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
        >
          All posts
        </a>
      </div>

      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Posts couldn&apos;t be loaded right now —{" "}
          <a
            href={blogUrl}
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:underline"
          >
            read them on Hashnode
          </a>
          .
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.url} className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {formatDate(post.publishedAt)}
              </span>
              <h3 className="text-lg font-semibold">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {post.title}
                </a>
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
