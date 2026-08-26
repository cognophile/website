import { projects } from "@/content/site";

export function ProjectsSection() {
  return (
    <section id="work" className="animate-fade-up space-y-12">
      <div className="flex items-end justify-between border-b border-border pb-6">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          02. Selected Work
        </h2>
        <span className="font-mono text-[10px] text-muted-foreground/50">
          {projects.length} projects
        </span>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="rounded-[10px] border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/40"
          >
            <span className="mb-4 block font-mono text-[10px] text-accent">
              {String(index + 1).padStart(2, "0")} / {project.category}
            </span>
            <h3 className="mb-2 font-semibold">{project.name}</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            <div className="flex gap-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
