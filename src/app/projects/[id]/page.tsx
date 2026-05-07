import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { projects } from "@/lib/content";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.media && !p.media.external)
    .map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
  };
}

const kindCopy = {
  demo: {
    heading: "Usage demo",
    subline:
      "Walkthrough of the platform — screens, flows, and interactions captured from the running system.",
  },
  screenshots: {
    heading: "Screenshots",
    subline:
      "Captures from the program in its current state — interface, output, intermediate steps.",
  },
  documentation: {
    heading: "Documentation & cost estimate",
    subline:
      "Project plan, network topology, bill of materials, and cost estimate prepared for the build.",
  },
  external: {
    heading: "External link",
    subline: "",
  },
} as const;

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project || !project.media || project.media.external) {
    notFound();
  }

  const techList = project.fullTech ?? project.tech;
  const kind = project.media.kind ?? "screenshots";
  const copy = kindCopy[kind];

  return (
    <>
      <Nav />
      <main className="relative pt-32 md:pt-40 pb-12">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-[12px] text-[color:var(--color-text-muted)] hover:text-[color:var(--color-accent)] transition-colors cursor-pointer mb-10"
          >
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
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>back to portfolio</span>
          </Link>

          <header className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-3 font-mono text-[12px] text-[color:var(--color-text-dim)]">
              <span className="text-[color:var(--color-accent)]">§</span>
              <span className="tracking-wider">PROJECT / {project.index}</span>
              <span className="h-px w-12 bg-[color:var(--color-border)]" />
              <span className="uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                {project.year}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-balance">
              {project.title}
            </h1>
            <p className="text-lg text-[color:var(--color-text-muted)] text-pretty">
              {project.subtitle}
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-[color:var(--color-text-dim)] mb-3">
                Overview
              </h2>
              <p className="text-[color:var(--color-text-muted)] leading-relaxed text-pretty">
                {project.description.replace(/\*\*/g, "")}
              </p>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-[color:var(--color-text-dim)] mb-3">
                Status
              </h2>
              <p className="text-[color:var(--color-text)] text-[14px]">
                {project.statusLabel}
              </p>
            </div>
          </div>

          {project.highlights.length > 0 && (
            <section className="mb-12">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-[color:var(--color-text-dim)] mb-4">
                Highlights
              </h2>
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
            </section>
          )}

          <section className="mb-16">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-[color:var(--color-text-dim)] mb-4">
              Stack
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {techList.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-2 py-1 rounded border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Media slot — placeholder until content is added */}
          <section className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-[color:var(--color-text)] mb-2">
              {copy.heading}
            </h2>
            {copy.subline && (
              <p className="text-[color:var(--color-text-muted)] text-[15px] mb-6 text-pretty">
                {copy.subline}
              </p>
            )}

            <div className="border border-dashed border-[color:var(--color-border)] rounded-xl p-12 md:p-16 bg-[color:var(--color-bg-elevated)] flex flex-col items-center justify-center text-center">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-text-dim)] mb-3">
                Coming soon
              </div>
              <p className="text-[color:var(--color-text-muted)] text-[14px] max-w-md text-pretty">
                Content for this section is being prepared. Check back shortly,
                or reach out for a direct walkthrough.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)]/50 hover:bg-[color:var(--color-surface)] transition-colors font-mono text-[12px] text-[color:var(--color-text)] cursor-pointer"
              >
                <span>Get in touch</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
