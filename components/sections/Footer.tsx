import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-ink px-4 py-14 text-cream sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] font-medium leading-tight tracking-[-0.02em] text-cream">
            Still have questions?
          </h2>
          <p className="mt-4 max-w-md text-cream/70">
            Reach out anytime—whether you&apos;re on the waitlist or still
            exploring options for your athlete.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:gap-4">
            <a
              href="mailto:alexisatcitty@gmail.com"
              className="inline-block max-w-full break-all font-sans text-base font-medium text-cream underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-cream sm:text-lg"
            >
              alexisatcitty@gmail.com
            </a>
            <a
              href="tel:+18017873988"
              className="inline-block font-sans text-base font-medium text-cream underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-cream sm:text-lg"
            >
              (801) 787-3988
            </a>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://www.instagram.com/pitchingwithlexi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-cream/35 text-cream transition-colors hover:border-cream/55"
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
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="inline-flex min-h-11 items-center py-1 transition-colors hover:text-cream/70"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="inline-flex min-h-11 items-center py-1 transition-colors hover:text-cream/70"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
