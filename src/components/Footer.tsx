import { contact } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--color-border)] mt-12">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between font-mono text-[11px] text-[color:var(--color-text-dim)]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[color:var(--color-accent)]">●</span>
          <span>© {year} Antek Pietraszewski</span>
          <span className="text-[color:var(--color-text-dim)]">·</span>
          <span>{contact.location}</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--color-text)] transition-colors cursor-pointer"
          >
            github
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[color:var(--color-text)] transition-colors cursor-pointer"
          >
            linkedin
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-[color:var(--color-text)] transition-colors cursor-pointer"
          >
            email
          </a>
          <span className="text-[color:var(--color-text-dim)]">·</span>
          <span>built with next.js · deployed on vercel</span>
        </div>
      </div>
    </footer>
  );
}
