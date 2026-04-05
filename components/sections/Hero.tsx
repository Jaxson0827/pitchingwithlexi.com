import Image from "next/image";

const HERO_SRC = encodeURI("/homepage images/hero.jpg");

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] min-h-[100vh] bg-ink lg:min-h-0"
      aria-label="Introduction"
    >
      <div className="flex min-h-[100svh] flex-col lg:grid lg:min-h-[100svh] lg:grid-cols-[42%_58%]">
        <div className="relative order-1 h-[52vh] min-h-[240px] sm:h-[58vh] sm:min-h-[280px] lg:order-2 lg:h-auto lg:min-h-[100svh]">
          <Image
            src={HERO_SRC}
            alt="Lexi Atcitty — Pitching with Lexi"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-ink/25 lg:to-ink/75"
            aria-hidden
          />
        </div>

        <div className="relative z-[1] order-2 -mt-6 flex flex-1 flex-col justify-end rounded-t-2xl bg-bg px-4 pb-[max(2.75rem,env(safe-area-inset-bottom))] pt-8 text-ink sm:px-6 sm:pb-12 sm:pt-10 lg:order-1 lg:mt-0 lg:justify-center lg:rounded-none lg:bg-transparent lg:px-10 lg:pb-0 lg:pl-16 lg:pr-8 lg:pt-20 lg:text-white">
          <p className="mb-3 font-sans text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-ink-faint sm:text-[0.75rem] sm:tracking-[0.12em] lg:text-white/60">
            Private softball pitching · Utah County
          </p>
          <h1 className="font-display text-[clamp(1.875rem,6.5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance lg:text-white">
            Train with intention.
            <br />
            Pitch with confidence.
          </h1>
          <p className="mt-5 max-w-[24rem] font-sans text-base leading-relaxed text-ink-muted italic sm:mt-6 sm:text-lg lg:text-white/75">
            Former Division I pitcher helping athletes build confidence, power,
            and command in the circle.
          </p>
          <p className="mt-8 font-sans text-base sm:mt-10">
            <a
              href="#waitlist"
              className="inline-flex min-h-11 items-center font-medium text-accent underline decoration-accent/35 underline-offset-[0.22em] transition-colors hover:text-accent-hover lg:text-white lg:decoration-white/40 lg:hover:text-cream"
            >
              Join the waitlist
            </a>
          </p>
        </div>
      </div>

      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 motion-safe:animate-bounce motion-reduce:animate-none lg:flex"
        aria-hidden
      >
        <span className="h-8 w-px bg-white/40" />
      </div>
    </section>
  );
}
