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

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative border border-[color:var(--color-border)] rounded-xl bg-[color:var(--color-bg-elevated)] hover:border-[color:var(--color-border-hover)] transition-colors overflow-hidden"
      aria-labelledby={`${project.id}-title`}
    >
      <div className="grid md:grid-cols-12 gap-0">
        {/* Left sidebar — index + status */}
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

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="relative py-16 md:py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel
          num="02"
          title="Selected work"
          kicker={`${projects.length} projects`}
        />

        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
