import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SocialLinks } from "@/components/SocialLinks";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CareerSection } from "@/components/CareerSection";
import { WritingSection } from "@/components/WritingSection";
import { person, socials, blogUrl } from "@/content/site";
import { getRecentPosts } from "@/lib/posts.functions";

const title = "Alex — Senior Software Engineer";
const description =
  "Personal site of Alex, a senior software engineer: professional summary, selected projects, career history and recent writing from the cognophile blog.";

export const Route = createFileRoute("/")({
  loader: async () => ({ posts: await getRecentPosts() }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { posts } = Route.useLoaderData();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    url: blogUrl,
    sameAs: socials.map((s) => s.href),
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-accent/10 selection:text-accent">
      <SiteNav />

      <main className="mx-auto max-w-6xl space-y-32 px-6 py-20">
        <section className="animate-fade-up grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="space-y-8 md:col-span-7">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
                Status: {person.role}
              </span>
              <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
                {person.headline}
              </h1>
              <p className="max-w-[46ch] text-pretty text-muted-foreground">
                {person.tagline}
              </p>
            </div>
            <SocialLinks />
          </div>
          <div className="md:col-span-5">
            <img
              src="/src/assets/portrait.png"
              alt="Portrait of Alex, senior software engineer"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full rounded-[12px] bg-secondary object-cover object-top ring-1 ring-black/5"
            />
          </div>
        </section>

        <section
          id="summary"
          className="animate-fade-up grid grid-cols-1 gap-12 md:grid-cols-12"
        >
          <div className="md:col-span-3">
            <SectionLabel>01. Summary</SectionLabel>
          </div>
          <div className="space-y-6 md:col-span-8">
            {person.summary.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-[55ch] text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <ProjectsSection />
        <CareerSection />
        <WritingSection posts={posts} />
      </main>

      <footer className="mt-32 border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="font-mono text-[11px] text-muted-foreground/60">
            &copy; {new Date().getFullYear()} {person.name}
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
