import type { Project, ProjectStatus } from "@/lib/content";
import { projects } from "@/lib/content";
import SectionLabel from "./SectionLabel";

const statusColors: Record<ProjectStatus, string> = {
  production: "text-[color:var(--color-accent)] border-[color:var(--color-accent)]/30 bg-[color:var(--color-accent)]/5",
  active: "text-amber-400 border-amber-400/30 bg-amber-400/5",
  "in-progress": "text-amber-400 border-amber-400/30 bg-amber-400/5",
  complete: "text-[color:var(--color-text-muted)] border-[color:var(--color-border)] bg-[color:var(--color-surface)]",
};

const statusDots: Record<ProjectStatus, string> = {
  production: "bg-[color:var(--color-accent)]",
  active: "bg-amber-400",
  "in-progress": "bg-amber-400",
  complete: "bg-[color:var(--color-text-muted)]",
};

const statusText: Record<ProjectStatus, string> = {
  production: "Production",
  active: "Active",
  "in-progress": "In progress",
  complete: "Complete",
};

function renderRichText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={i}
          className="font-semibold text-[color:var(--color-text)]"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative border border-[color:var(--color-border)] rounded-xl bg-[color:var(--color-bg-elevated)] hover:border-[color:var(--color-border-hover)] transition-colors overflow-hidden"
      aria-labelledby={`${project.id}-title`}
    >
      <div className="grid md:grid-cols-12 gap-0">
        {/* Left sidebar - index + status */}
        <div className="md:col-span-3 p-6 md:p-8 md:border-r border-[color:var(--color-border)] flex md:flex-col justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="font-mono text-[11px] text-[color:var(--color-text-dim)] tracking-widest">
              PROJECT / {project.index}
            </div>
            <div className="font-display text-4xl md:text-5xl text-[color:var(--color-text-muted)] group-hover:text-[color:var(--color-accent)] transition-colors">
              {project.index}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span
              className={`inline-flex items-center gap-2 self-start px-2.5 py-1 rounded-md border font-mono text-[10.5px] uppercase tracking-wider ${statusColors[project.status]}`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${statusDots[project.status]}`} />
              {project.statusLabel}
            </span>
            <span className="font-mono text-[11px] text-[color:var(--color-text-dim)]">
              {project.year}
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className="md:col-span-9 p-6 md:p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3
              id={`${project.id}-title`}
              className="font-display text-2xl md:text-3xl font-medium tracking-tight text-[color:var(--color-text)]"
            >
              {project.title}
            </h3>
            <p className="text-[color:var(--color-text-muted)] text-[15px]">
              {project.subtitle}
            </p>
          </div>

          <p className="text-[color:var(--color-text-muted)] leading-relaxed text-pretty">
            {renderRichText(project.description)}
          </p>

          {project.highlights.length > 0 && (
            <ul className="flex flex-col gap-2.5">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-3 text-[14px] text-[color:var(--color-text-muted)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-[5px] w-[5px] rounded-full bg-[color:var(--color-accent)] shrink-0"
                  />
                  <span className="text-pretty">{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-2 py-1 rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text-muted)]"
              >
                {t}
              </span>
            ))}
          </div>

          {project.wow && (
            <div className="mt-2 pl-4 border-l-2 border-[color:var(--color-accent)]/40">
              <p className="text-[color:var(--color-text)] italic text-[15px] leading-relaxed text-pretty">
                &ldquo;{project.wow}&rdquo;
              </p>
            </div>
          )}

          {project.media && (
            <div className="pt-2 print-hide">
              <a
                href={project.media.href}
                target={project.media.external ? "_blank" : undefined}
                rel={project.media.external ? "noopener noreferrer" : undefined}
                className="group/cta inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)]/50 hover:bg-[color:var(--color-surface)] transition-colors text-[13px] font-medium text-[color:var(--color-text)] cursor-pointer"
              >
                <span>{project.media.ctaLabel}</span>
                {project.media.external ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[color:var(--color-text-dim)] group-hover/cta:text-[color:var(--color-accent)] group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5 transition-all"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[color:var(--color-text-dim)] group-hover/cta:text-[color:var(--color-accent)] group-hover/cta:translate-x-0.5 transition-all"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function CompactProjectCard({ project }: { project: Project }) {
  const hasDetailPage = project.media && !project.media.external;
  const detailHref = hasDetailPage ? project.media!.href : undefined;

  const content = (
    <article
      className="group h-full flex flex-col gap-4 p-5 border border-[color:var(--color-border)] rounded-xl bg-[color:var(--color-bg-elevated)] hover:border-[color:var(--color-border-hover)] transition-colors"
      aria-labelledby={`${project.id}-title`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="font-mono text-[11px] text-[color:var(--color-text-dim)] tracking-widest">
          {project.index}
        </div>
        <StatusChip project={project} />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3
          id={`${project.id}-title`}
          className="font-display text-lg md:text-xl font-medium tracking-tight text-[color:var(--color-text)] group-hover:text-[color:var(--color-accent)] transition-colors"
        >
          {project.title}
        </h3>
        <p className="text-[13px] text-[color:var(--color-text-muted)] text-pretty leading-relaxed">
          {project.subtitle}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-1">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="font-mono text-[10.5px] px-1.5 py-0.5 rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text-muted)]"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="font-mono text-[10.5px] px-1.5 py-0.5 text-[color:var(--color-text-dim)]">
            +{project.tech.length - 4}
          </span>
        )}
      </div>

      {project.media && (
        <div className="pt-1 flex items-center gap-1.5 text-[12px] font-mono text-[color:var(--color-text-dim)] group-hover:text-[color:var(--color-accent)] transition-colors">
          <span>{project.media.external ? "visit" : "open"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-0.5 transition-transform"
            aria-hidden="true"
          >
            {project.media.external ? (
              <path d="M7 17L17 7M7 7h10v10" />
            ) : (
              <path d="M5 12h14M13 5l7 7-7 7" />
            )}
          </svg>
        </div>
      )}
    </article>
  );

  if (detailHref) {
    return (
      <a href={detailHref} className="block h-full">
        {content}
      </a>
    );
  }

  if (project.media?.external) {
    return (
      <a
        href={project.media.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {content}
      </a>
    );
  }

  return <div className="h-full">{content}</div>;
}

function GroupLabel({ title, note }: { title: string; note?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        <span>{title}</span>
        <span className="h-px flex-1 bg-[color:var(--color-border)]" />
      </div>
      {note && (
        <p className="text-[14px] text-[color:var(--color-text-muted)] text-pretty max-w-2xl">
          {note}
        </p>
      )}
    </div>
  );
}

function StatusChip({ project }: { project: Project }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border font-mono text-[10px] uppercase tracking-wider ${statusColors[project.status]}`}
    >
      <span className={`h-1 w-1 rounded-full ${statusDots[project.status]}`} />
      {statusText[project.status]}
    </span>
  );
}

function PairProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group h-full flex flex-col gap-5 p-6 md:p-7 border border-[color:var(--color-border)] rounded-xl bg-[color:var(--color-bg-elevated)] hover:border-[color:var(--color-border-hover)] transition-colors"
      aria-labelledby={`${project.id}-title`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-[color:var(--color-text-dim)] tracking-widest">
          PROJECT / {project.index}
        </span>
        <StatusChip project={project} />
      </div>

      <div className="flex flex-col gap-2">
        <h3
          id={`${project.id}-title`}
          className="font-display text-2xl font-medium tracking-tight text-[color:var(--color-text)] group-hover:text-[color:var(--color-accent)] transition-colors"
        >
          {project.title}
        </h3>
        <p className="text-[14.5px] leading-relaxed text-[color:var(--color-text-muted)] text-pretty">
          {project.pitch ?? project.subtitle}
        </p>
      </div>

      {project.highlights.length > 0 && (
        <ul className="flex flex-col gap-2">
          {project.highlights.slice(0, 3).map((h) => (
            <li
              key={h}
              className="flex items-start gap-3 text-[13.5px] text-[color:var(--color-text-muted)]"
            >
              <span
                aria-hidden="true"
                className="mt-[7px] h-[5px] w-[5px] rounded-full bg-[color:var(--color-accent)] shrink-0"
              />
              <span className="text-pretty">{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-col gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-1 rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>

        {project.media && (
          <a
            href={project.media.href}
            className="group/cta self-start inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)]/50 hover:bg-[color:var(--color-surface)] transition-colors text-[13px] font-medium text-[color:var(--color-text)] cursor-pointer"
          >
            <span>{project.media.ctaLabel}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[color:var(--color-text-dim)] group-hover/cta:text-[color:var(--color-accent)] group-hover/cta:translate-x-0.5 transition-all"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

function PairConnector() {
  return (
    <div
      aria-hidden="true"
      className="flex md:flex-col items-center justify-center gap-2 py-1 md:py-0 md:px-1"
    >
      <span className="h-px w-8 md:h-8 md:w-px bg-[color:var(--color-accent)]/40" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[color:var(--color-accent)] rotate-90 md:rotate-0"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
      <span className="h-px w-8 md:h-8 md:w-px bg-[color:var(--color-accent)]/40" />
    </div>
  );
}

function NowBuildingCard({ project }: { project: Project }) {
  return (
    <article
      className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 md:p-7 rounded-xl border border-dashed border-[color:var(--color-accent)]/40 bg-[color:var(--color-accent)]/[0.03]"
      aria-labelledby={`${project.id}-title`}
    >
      <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2 shrink-0 md:w-40">
        <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] pulse-dot" />
          Now building
        </span>
        <span className="font-mono text-[11px] text-[color:var(--color-text-dim)]">
          {project.year}
        </span>
      </div>

      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <h3
          id={`${project.id}-title`}
          className="font-display text-xl md:text-2xl font-medium tracking-tight text-[color:var(--color-text)]"
        >
          {project.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-[color:var(--color-text-muted)] text-pretty">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[10.5px] px-1.5 py-0.5 rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text-muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const sorted = [...projects].sort((a, b) => a.index.localeCompare(b.index));
  const lead = sorted.filter((p) => p.placement === "lead");
  const pair = sorted.filter((p) => p.placement === "pair");
  const now = sorted.filter((p) => p.placement === "now");
  const more = sorted.filter((p) => p.placement === "more");

  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative py-16 md:py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          num="03"
          title="Selected work"
          kicker={`${projects.length} projects`}
        />

        <div className="flex flex-col gap-14">
          {lead.length > 0 && (
            <div className="flex flex-col gap-6">
              <GroupLabel title="Built for a client" />
              {lead.map((p) => (
                <FeaturedProjectCard key={p.id} project={p} />
              ))}
            </div>
          )}

          {pair.length === 2 && (
            <div className="flex flex-col gap-6">
              <GroupLabel
                title="Dental & orthodontic tooling"
                note="Two finished learning projects covering both sides of one workflow: the generator designs the aligner, Nexora takes the order through printing and delivery. Together they led to what I'm building now."
              />
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-3 md:gap-4 items-stretch">
                <PairProjectCard project={pair[0]} />
                <PairConnector />
                <PairProjectCard project={pair[1]} />
              </div>
              {now.map((p) => (
                <NowBuildingCard key={p.id} project={p} />
              ))}
            </div>
          )}

          {more.length > 0 && (
            <details className="group/more">
              <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors">
                <span className="group-open/more:hidden">
                  Show {more.length} more projects
                </span>
                <span className="hidden group-open/more:inline">
                  Hide projects
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-open/more:rotate-180"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
                <span className="h-px flex-1 bg-[color:var(--color-border)]" />
              </summary>

              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {more.map((p) => (
                  <CompactProjectCard key={p.id} project={p} />
                ))}
              </div>
            </details>
          )}
        </div>
      </div>
    </section>
  );
}
