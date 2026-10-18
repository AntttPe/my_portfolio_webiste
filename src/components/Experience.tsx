import { experience } from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="relative py-16 md:py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel num="02" title="Experience" kicker="Work" />

        <div className="flex flex-col gap-6">
          {experience.map((entry) => (
            <article
              key={entry.id}
              className="group relative border border-[color:var(--color-border)] rounded-xl bg-[color:var(--color-bg-elevated)] hover:border-[color:var(--color-border-hover)] transition-colors overflow-hidden"
              aria-labelledby={`${entry.id}-role`}
            >
              <div className="grid md:grid-cols-12 gap-0">
                {/* Left sidebar - date + location */}
                <div className="md:col-span-3 p-6 md:p-8 md:border-r border-[color:var(--color-border)] flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <div className="font-mono text-[11px] text-[color:var(--color-text-dim)] tracking-widest">
                      {entry.current ? "CURRENT" : "COMPLETED"}
                    </div>
                    <div className="font-mono text-[13px] text-[color:var(--color-text)]">
                      {entry.start}
                    </div>
                    <div className="font-mono text-[11px] text-[color:var(--color-text-dim)]">
                      {"->"} {entry.end}
                    </div>
                    {entry.duration && (
                      <div className="font-mono text-[11px] text-[color:var(--color-accent)] pt-0.5">
                        {entry.duration}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 pt-3 border-t border-[color:var(--color-border)]">
                    <div className="font-mono text-[10.5px] uppercase tracking-wider text-[color:var(--color-text-dim)]">
                      Location
                    </div>
                    <div className="text-[13px] text-[color:var(--color-text-muted)]">
                      {entry.location}
                    </div>
                  </div>

                  {entry.team && (
                    <div className="flex flex-col gap-1 pt-3 border-t border-[color:var(--color-border)]">
                      <div className="font-mono text-[10.5px] uppercase tracking-wider text-[color:var(--color-text-dim)]">
                        Team
                      </div>
                      <div className="text-[13px] text-[color:var(--color-text-muted)]">
                        {entry.team}
                      </div>
                    </div>
                  )}
                </div>

                {/* Main content */}
                <div className="md:col-span-9 p-6 md:p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3
                      id={`${entry.id}-role`}
                      className="font-display text-2xl md:text-3xl font-medium tracking-tight text-[color:var(--color-text)]"
                    >
                      {entry.role}
                    </h3>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[15px]">
                      <span className="text-[color:var(--color-text)] font-medium">
                        {entry.companyUrl ? (
                          <a
                            href={entry.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[color:var(--color-accent)] transition-colors"
                          >
                            {entry.company}
                          </a>
                        ) : (
                          entry.company
                        )}
                      </span>
                      <span className="text-[color:var(--color-text-dim)]">·</span>
                      <span className="text-[color:var(--color-text-muted)]">
                        {entry.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-[color:var(--color-text-muted)] leading-relaxed text-pretty">
                    {entry.summary}
                  </p>

                  {entry.bullets.length > 0 && (
                    <ul className="flex flex-col gap-2.5">
                      {entry.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-[14px] text-[color:var(--color-text-muted)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-[7px] h-[5px] w-[5px] rounded-full bg-[color:var(--color-accent)] shrink-0"
                          />
                          <span className="text-pretty">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {entry.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[11px] px-2 py-1 rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text-muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
