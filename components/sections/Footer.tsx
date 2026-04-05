import { Reveal } from "@/components/Reveal";

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-ink px-6 py-16 text-cream md:px-10 md:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-tight tracking-[-0.02em] text-cream">
            Still have questions?
          </h2>
          <p className="mt-4 max-w-md text-cream/70">
            Reach out anytime—whether you&apos;re ready to book or just
            exploring options for your athlete.
          </p>
          <a
            href="mailto:hello@pitchingwithlexi.com"
            className="mt-8 inline-block font-sans text-lg font-medium text-cream underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-cream"
          >
            hello@pitchingwithlexi.com
          </a>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/35 text-cream transition-colors hover:border-cream/55"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </Reveal>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-8 font-sans text-[0.8125rem] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Pitching with Lexi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cream/70">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-cream/70">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
