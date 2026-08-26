const links = [
  { href: "#summary", label: "Summary" },
  { href: "#work", label: "Projects" },
  { href: "#career", label: "Career" },
  { href: "#writing", label: "Writing" },
];

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em]">
          Alex / Software Engineer
        </span>
        <div className="flex gap-5 sm:gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
