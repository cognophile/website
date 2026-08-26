export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="border-l border-accent/30 pl-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </h2>
  );
}
