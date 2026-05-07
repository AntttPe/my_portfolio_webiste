interface SectionLabelProps {
  num: string;
  title: string;
  kicker?: string;
}

export default function SectionLabel({ num, title, kicker }: SectionLabelProps) {
  return (
    <div className="flex flex-col gap-6 mb-12 md:mb-16">
      <div className="flex items-center gap-3 font-mono text-[12px] text-[color:var(--color-text-dim)]">
        <span className="text-[color:var(--color-accent)]">§</span>
        <span className="tracking-wider">{num}</span>
        <span className="h-px w-12 bg-[color:var(--color-border)]" />
        {kicker && (
          <span className="uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
            {kicker}
          </span>
        )}
      </div>
      <h2 className="font-display text-3xl md:text-5xl font-medium tracking-tight text-balance">
        {title}
      </h2>
    </div>
  );
}
