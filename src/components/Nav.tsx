"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About", num: "01" },
  { href: "#projects", label: "Projects", num: "02" },
  { href: "#stack", label: "Stack", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--color-bg)]/70 border-b border-[color:var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between"
      >
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-[13px] tracking-tight text-[color:var(--color-text)]"
        >
          <span className="text-[color:var(--color-accent)]">●</span>
          <span className="text-[color:var(--color-text-muted)] group-hover:text-[color:var(--color-text)] transition-colors">
            antek
          </span>
          <span className="text-[color:var(--color-text-dim)]">/</span>
          <span>pietraszewski</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group flex items-center gap-2 px-3 py-2 rounded-md font-mono text-[12px] text-[color:var(--color-text-muted)] hover:text-[color:var(--color-text)] hover:bg-[color:var(--color-surface)] transition-colors cursor-pointer"
              >
                <span className="text-[color:var(--color-text-dim)] group-hover:text-[color:var(--color-accent)] transition-colors">
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 font-mono text-[12px] px-3 py-1.5 rounded-md border border-[color:var(--color-border)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors cursor-pointer"
        >
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] pulse-dot" />
          available
        </a>

        <a
          href="#contact"
          className="md:hidden inline-flex items-center gap-2 font-mono text-[12px] text-[color:var(--color-text-muted)] cursor-pointer"
        >
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)] pulse-dot" />
          contact
        </a>
      </nav>
    </header>
  );
}
