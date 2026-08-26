import { person } from "@/content/site";
import { SectionLabel } from "@/components/SectionLabel";

export function SummarySection() {
  return (
    <section
        id="summary"
        className="animate-fade-up grid grid-cols-1 gap-12 md:grid-cols-12"
    >
        <div className="md:col-span-3">
        <SectionLabel>01. Bio</SectionLabel>
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
  );
}