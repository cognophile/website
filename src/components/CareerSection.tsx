import { career } from "@/content/site";
import { SectionLabel } from "@/components/SectionLabel";

export function CareerSection() {
  return (
    <section
      id="career"
      className="animate-fade-up grid grid-cols-1 gap-12 md:grid-cols-12"
    >
      <div className="md:col-span-3">
        <SectionLabel>04. Experience</SectionLabel>
      </div>
      <div className="md:col-span-9">
        {career.map((role, index) => (
          <a
            key={role.company}
            href={role.href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center py-6 ${
              index < career.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="w-28 shrink-0 font-mono text-[11px] text-muted-foreground">
              {role.period}
            </div>
            <div className="flex-1">
              <div className="font-semibold">{role.company}</div>
              <div className="text-sm text-muted-foreground">{role.title}</div>
            </div>
            <span
              aria-hidden="true"
              className="text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100"
            >
              &#8594;
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
