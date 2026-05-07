export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Intro"
      className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden"
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

            <p className="max-w-2xl text-lg md:text-xl text-[color:var(--color-text-muted)] text-pretty leading-relaxed">
              ICT engineering student at{" "}
              <span className="text-[color:var(--color-text)]">AGH Kraków</span>,
              building systems that have to work when they&rsquo;re supposed to —
              backend platforms in Java, embedded firmware in C++, and the
              occasional neural network when the problem calls for it.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-8 bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-lg overflow-hidden max-w-3xl">
            {[
              { label: "Program", value: "Teleinformatyka" },
              { label: "Year", value: "4th semester" },
              { label: "Location", value: "Kraków, PL" },
              { label: "Status", value: "Available for internships" },
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

          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a
              href="#projects"
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
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[color:var(--color-border)] rounded-md font-medium text-sm text-[color:var(--color-text)] hover:border-[color:var(--color-border-hover)] hover:bg-[color:var(--color-surface)] transition-colors cursor-pointer"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Meta row — coordinates / timestamp style */}
        <div className="mt-20 md:mt-28 pt-6 border-t border-[color:var(--color-border)] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 font-mono text-[11px] text-[color:var(--color-text-dim)]">
          <div className="flex items-center gap-2">
            <span className="text-[color:var(--color-accent)]">◈</span>
            <span>50.0647° N, 19.9450° E</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[color:var(--color-accent)]">◈</span>
            <span>currently shipping: nexora, satellite-sim</span>
          </div>
          <div className="hidden md:flex items-center gap-2 ml-auto">
            <span>v2026.1 · built with next.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
