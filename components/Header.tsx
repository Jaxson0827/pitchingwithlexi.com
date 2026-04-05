"use client";

import { useCallback, useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";

const SECTION_IDS = ["about", "services", "waitlist", "faq", "contact"] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: reduced ? 0.2 : [0.15, 0.25, 0.35],
      },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const navLinkClass = (id: string) => {
    const isActive = active === id;
    return `relative text-[0.8125rem] font-medium uppercase tracking-[0.08em] transition-colors duration-100 ${
      scrolled
        ? isActive
          ? "text-ink"
          : "text-ink-muted hover:text-ink"
        : isActive
          ? "text-white"
          : "text-white/80 hover:text-white"
    }`;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,height] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          scrolled
            ? "border-b border-line bg-bg-elevated shadow-[var(--shadow-header)]"
            : "border-b border-transparent bg-transparent"
        } ${scrolled ? "h-16 md:h-16" : "h-16 md:h-[4.5rem]"}`}
      >
        {!scrolled && (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[7.5rem] bg-gradient-to-b from-[rgba(20,18,15,0.42)] to-transparent"
            aria-hidden
          />
        )}
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-10 lg:px-16">
          <a
            href="#"
            className={`relative z-10 font-sans text-base font-medium tracking-tight ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            Pitching with Lexi
          </a>

          <nav
            className="relative z-10 hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace("#", "");
              return (
                <a key={href} href={href} className={navLinkClass(id)}>
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full transition-transform duration-200 ${
                      active === id ? "scale-x-100" : "scale-x-0"
                    } ${scrolled ? "bg-accent" : "bg-white"}`}
                    aria-hidden
                  />
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className={`relative z-10 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden ${
              scrolled ? "text-ink" : "text-white"
            }`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                mobileOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                mobileOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-24 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav className="flex flex-1 flex-col gap-6" aria-label="Mobile primary">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMobile}
                className="font-sans text-2xl font-medium tracking-tight text-cream"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
