import Image from "next/image";

import {
  aboutIntro,
  aboutPhoto,
  aboutSections,
  aboutStats,
} from "@/lib/content";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative py-24 md:py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel num="01" title="About" kicker="Profile" />

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          <div className="md:col-span-3 flex flex-col gap-10">
            <p className="text-lg md:text-xl leading-relaxed text-[color:var(--color-text)] text-pretty">
              {aboutIntro}
            </p>

            <div className="flex flex-col gap-7">
              {aboutSections.map((s) => (
                <div key={s.label} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                    <span>{s.label}</span>
                    <span className="h-px w-8 bg-[color:var(--color-accent)]/30" />
                  </div>
                  <p className="text-[15px] leading-relaxed text-[color:var(--color-text-muted)] text-pretty">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="sticky top-24 flex flex-col gap-4">
              <PhotoBlock />

              <div className="grid grid-cols-3 gap-px bg-[color:var(--color-border)] border border-[color:var(--color-border)] rounded-lg overflow-hidden">
                {aboutStats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[color:var(--color-bg-elevated)] p-4 flex flex-col gap-1"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[color:var(--color-text-dim)]">
                      {s.label}
                    </span>
                    <span className="font-display text-lg text-[color:var(--color-text)]">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoBlock() {
  return (
    <figure className="flex flex-col gap-2">
      <div className="border border-[color:var(--color-border)] rounded-lg overflow-hidden bg-[color:var(--color-bg-elevated)] aspect-[3/4] relative">
        {aboutPhoto.enabled ? (
          <Image
            src={aboutPhoto.src}
            alt={aboutPhoto.alt}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-grid">
            <div className="flex flex-col items-center gap-3 px-6 py-8 mx-6 rounded-md border-2 border-dashed border-[color:var(--color-border)] bg-[color:var(--color-bg)]/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[color:var(--color-text-dim)]"
                aria-hidden="true"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3.5" />
              </svg>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-text-dim)]">
                photo placeholder
              </div>
            </div>
          </div>
        )}
      </div>
      <figcaption className="flex items-center justify-between font-mono text-[10px] text-[color:var(--color-text-dim)] px-1">
        <span>{aboutPhoto.caption}</span>
        <span className="text-[color:var(--color-accent)]">●</span>
      </figcaption>
    </figure>
  );
}
