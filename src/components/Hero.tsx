import Link from "next/link";
import { resume } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Intro"
      className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] pointer-events-none" />
      <div
        className="absolute left-1/2 top-32 -translate-x-1/2 w-[520px] h-[520px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 fade-up">
          <div className="flex items-center gap-3 font-mono text-[12px] text-[color:var(--color-text-dim)]">
            <span className="text-[color:var(--color-accent)]">$</span>
            <span className="text-[color:var(--color-text-muted)]">
              whoami
            </span>
            <span className="cursor-blink text-[color:var(--color-accent)]">▍</span>
          </div>

          <div className="flex flex-col gap-6">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight font-medium text-balance">
              <span className="block text-[color:var(--color-text)]">
                Antek
              </span>
              <span className="block text-[color:var(--color-text-muted)]">
                Pietraszewski.
              </span>
            </h1>

            <Link
              href="/#contact"
              className="inline-flex self-start items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[color:var(--color-accent)]/40 bg-[color:var(--color-accent)]/10 hover:bg-[color:var(--color-accent)]/15 hover:border-[color:var(--color-accent)]/60 transition-colors cursor-pointer"
              aria-label="Available for summer 2027 internship - go to contact"
            >
              <span className="relative inline-flex h-2 w-2 shrink-0">
                <span className="absolute inset-0 rounded-full bg-[color:var(--color-accent)] pulse-dot" />
                <span className="absolute inset-0 rounded-full bg-[color:var(--color-accent)]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Available · Summer 2027 internship
              </span>
            </Link>

            <p className="max-w-2xl text-lg md:text-xl text-[color:var(--color-text-muted)] text-pretty leading-relaxed">
              ICT engineering student at{" "}
              <span className="text-[color:var(--color-text)]">AGH Kraków</span>.
              Just back from an internship at{" "}
              <span className="text-[color:var(--color-text)]">Relu BV</span> in
              Leuven, Belgium - production ML pipelines on 3D medical imaging, written
              in{" "}
              <span className="text-[color:var(--color-text)]">Python</span>.
              The rest of the stack: backend platforms in Java and Spring Boot,
              embedded firmware in C++, networking in between.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-8 bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-lg overflow-hidden max-w-3xl">
            {[
              { label: "Program", value: "ICT Engineering, BSc" },
              { label: "Graduating", value: "Feb 2028" },
              { label: "Location", value: "Kraków, PL" },
              { label: "Last role", value: "Relu BV · Summer '26" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-[color:var(--color-bg)] p-4 flex flex-col gap-1"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[color:var(--color-text-dim)]">
                  {item.label}
                </span>
                <span className="text-sm text-[color:var(--color-text)]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 print-hide">
            <Link
              href="/#projects"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-[color:var(--color-text)] text-[color:var(--color-bg)] rounded-md font-medium text-sm hover:bg-[color:var(--color-accent)] transition-colors cursor-pointer"
            >
              View projects
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="inline-flex rounded-md border border-[color:var(--color-border)] overflow-hidden">
              <a
                href={resume.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 px-5 py-3 font-medium text-sm text-[color:var(--color-text)] hover:bg-[color:var(--color-surface)] transition-colors cursor-pointer"
              >
                Resume
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[color:var(--color-text-dim)]">
                  pdf
                </span>
              </a>
              <a
                href={resume.href}
                download={resume.fileName}
                aria-label="Download resume as PDF"
                title="Download PDF"
                className="inline-flex items-center justify-center px-3.5 border-l border-[color:var(--color-border)] text-[color:var(--color-text-dim)] hover:text-[color:var(--color-accent)] hover:bg-[color:var(--color-surface)] transition-colors cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
                </svg>
              </a>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-medium text-sm text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)] transition-colors cursor-pointer"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Meta row - coordinates / timestamp style */}
        <div className="mt-20 md:mt-28 pt-6 border-t border-[color:var(--color-border)] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 font-mono text-[11px] text-[color:var(--color-text-dim)]">
          <div className="flex items-center gap-2">
            <span className="text-[color:var(--color-accent)]">◈</span>
            <span>50.0647° N, 19.9450° E</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[color:var(--color-accent)]">◈</span>
            <span>client testing: whatsapp-tracker · building: ortho-planning, rocketsim</span>
          </div>
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <span>v2026.4 · built with next.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
