import { contact } from "@/lib/content";
import SectionLabel from "./SectionLabel";

const channels = [
  contact.email && {
    label: "email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    primary: true,
  },
  contact.github && {
    label: "github",
    value: contact.github.replace("https://", ""),
    href: contact.github,
  },
  contact.linkedin && {
    label: "linkedin",
    value: contact.linkedin.replace("https://", ""),
    href: contact.linkedin,
  },
].filter((c): c is { label: string; value: string; href: string; primary?: boolean } => Boolean(c));

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="relative py-16 md:py-20 scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionLabel num="04" title="Get in touch" kicker="Open to internships" />

        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          <div className="md:col-span-3 flex flex-col gap-6">
            <p className="text-lg md:text-xl leading-relaxed text-[color:var(--color-text-muted)] text-pretty">
              Looking for summer{" "}
              <span className="text-[color:var(--color-text)]">2026</span>{" "}
              internships - backend, embedded, networking, anything where
              reliability matters. If you&rsquo;re hiring, or you just want to
              talk about a project, the shortest path is email.
            </p>

            <div className="flex flex-col gap-2">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={c.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex items-center justify-between gap-4 px-4 py-4 border border-[color:var(--color-border)] rounded-lg bg-[color:var(--color-bg-elevated)] hover:border-[color:var(--color-accent)]/50 hover:bg-[color:var(--color-surface)] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[color:var(--color-text-dim)] w-16 shrink-0">
                      {c.label}
                    </span>
                    <span className="text-[color:var(--color-text)] text-[15px] truncate">
                      {c.value}
                    </span>
                  </div>
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
                    className="text-[color:var(--color-text-dim)] group-hover:text-[color:var(--color-accent)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 print-hide">
            <div className="border border-[color:var(--color-border)] rounded-lg overflow-hidden bg-[color:var(--color-bg-elevated)]">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-[11px] text-[color:var(--color-text-dim)]">
                  zsh
                </span>
              </div>
              <div className="p-5 font-mono text-[12.5px] leading-relaxed space-y-2">
                <div>
                  <span className="text-[color:var(--color-accent)]">
                    antek@agh
                  </span>
                  <span className="text-[color:var(--color-text-dim)]">:</span>
                  <span className="text-[color:var(--color-warn)]">~</span>
                  <span className="text-[color:var(--color-text-dim)]">$ </span>
                  <span className="text-[color:var(--color-text)]">
                    status --availability
                  </span>
                </div>
                <div className="text-[color:var(--color-text-muted)]">
                  accepting applications for internships
                </div>
                <div className="text-[color:var(--color-text-muted)]">
                  starting: summer 2026
                </div>
                <div className="text-[color:var(--color-text-muted)]">
                  location: Kraków · remote · on-site (EU)
                </div>
                <div className="pt-2">
                  <span className="text-[color:var(--color-accent)]">
                    antek@agh
                  </span>
                  <span className="text-[color:var(--color-text-dim)]">:</span>
                  <span className="text-[color:var(--color-warn)]">~</span>
                  <span className="text-[color:var(--color-text-dim)]">$ </span>
                  <span className="cursor-blink text-[color:var(--color-accent)]">
                    ▍
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
