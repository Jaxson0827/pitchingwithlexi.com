import Image from "next/image";

const HERO_SRC =
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] min-h-[100vh] bg-ink lg:min-h-0"
      aria-label="Introduction"
    >
      {/* Mobile: image on top, text card overlaps */}
      <div className="flex min-h-[100svh] flex-col lg:grid lg:min-h-[100svh] lg:grid-cols-[42%_58%]">
        <div className="relative order-1 h-[58vh] min-h-[280px] lg:order-2 lg:h-auto lg:min-h-[100svh]">
          <Image
            src={HERO_SRC}
            alt="Athlete training on field at dusk"
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

        <div className="relative z-[1] order-2 -mt-6 flex flex-1 flex-col justify-end rounded-t-2xl bg-bg px-6 pb-12 pt-10 text-ink lg:order-1 lg:mt-0 lg:justify-center lg:rounded-none lg:bg-transparent lg:px-10 lg:pb-0 lg:pl-16 lg:pr-8 lg:pt-20 lg:text-white">
          <p className="mb-3 font-sans text-[0.75rem] font-medium uppercase tracking-[0.12em] text-ink-faint lg:text-white/60">
            Private softball pitching
          </p>
          <h1 className="font-display text-[clamp(2.75rem,5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] lg:text-white">
            Train with intention.
            <br />
            Pitch with confidence.
          </h1>
          <p className="mt-6 max-w-[22rem] font-sans text-lg leading-relaxed text-ink-muted italic lg:text-white/75">
            One-on-one lessons built around your athlete—mechanics, mindset,
            and a plan that lasts beyond the mound.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#book"
              className="inline-flex h-[52px] min-h-[44px] items-center justify-center rounded-md bg-accent px-7 font-sans text-base font-medium text-white transition-[background,transform] duration-200 hover:-translate-y-px hover:bg-accent-hover active:translate-y-0"
            >
              Book a lesson
            </a>
            <a
              href="#services"
              className="inline-flex h-[52px] min-h-[44px] items-center justify-center rounded-md border border-line bg-bg-elevated px-7 font-sans text-base font-medium text-ink transition-colors hover:border-ink-faint lg:border-white/35 lg:bg-white/10 lg:text-white lg:backdrop-blur-sm lg:hover:border-white/55 lg:hover:bg-white/15"
            >
              View services
            </a>
          </div>
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
