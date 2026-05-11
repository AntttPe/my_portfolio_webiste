import { skillGroups } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function Skills() {
  return (
    <section
      id="stack"
      aria-label="Stack"
      className="relative py-16 md:py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel num="03" title="Stack" kicker="Tools I reach for" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-xl overflow-hidden">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-[color:var(--color-bg-elevated)] p-6 flex flex-col gap-4"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-[color:var(--color-text-dim)]">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => {
                  const isLearning = item.level === "growing";
                  return (
                    <li key={item.name}>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md border text-[12.5px] ${
                          isLearning
                            ? "italic border-dashed border-[color:var(--color-border)] text-[color:var(--color-text-dim)]"
                            : "border-[color:var(--color-border)] text-[color:var(--color-text-muted)]"
                        }`}
                      >
                        {item.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center px-2.5 py-1 rounded-md border border-[color:var(--color-border)] text-[12.5px] text-[color:var(--color-text-muted)]">
              Python
            </span>
            <span className="font-mono text-[11px] text-[color:var(--color-text-dim)]">
              used in a real project
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center px-2.5 py-1 italic rounded-md border border-dashed border-[color:var(--color-border)] text-[12.5px] text-[color:var(--color-text-dim)]">
              Rust
            </span>
            <span className="font-mono text-[11px] text-[color:var(--color-text-dim)]">
              currently learning · not yet shipped
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
