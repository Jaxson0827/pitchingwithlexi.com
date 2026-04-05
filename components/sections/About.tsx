import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-6 py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] max-h-[520px] w-full overflow-hidden border border-line bg-line/30">
            <Image
              src={ABOUT_IMG}
              alt="Lexi Atcitty coaching pitching"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="pointer-events-none absolute inset-3 border border-line/80"
              aria-hidden
            />
          </div>
        </Reveal>
        <Reveal delayMs={80}>
          <div>
            <h2
              id="about-heading"
              className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
            >
              Meet Lexi
            </h2>
            <div className="mt-8 max-w-[36rem] space-y-5 text-ink-muted">
              <p className="text-ink">
                I&apos;m <strong className="font-semibold">Lexi Atcitty</strong>
                , former Division I pitcher, and I&apos;m passionate about
                helping pitchers build confidence, power, and command in the
                circle. I&apos;ve trained and competed at the highest levels, and
                now I use that experience to teach pitchers how to move
                efficiently, throw with intent, and develop pitches that actually
                translate in games. My lessons focus on mechanics,
                explosiveness, mental approach, and long-term development.
              </p>
              <p>
                I played Division I softball at{" "}
                <strong className="font-semibold text-ink">BYU</strong> and{" "}
                <strong className="font-semibold text-ink">UNM</strong> and now
                I currently coach in{" "}
                <strong className="font-semibold text-ink">Utah County</strong>.
                During my personal player development, I traveled and learned
                from coaches and players at top programs including the{" "}
                <strong className="font-semibold text-ink">
                  University of Texas
                </strong>
                ,{" "}
                <strong className="font-semibold text-ink">
                  University of Arizona
                </strong>
                ,{" "}
                <strong className="font-semibold text-ink">
                  Florida State
                </strong>
                , and more. I&apos;ve now been coaching pitchers for over{" "}
                <strong className="font-semibold text-ink">6 years</strong>,
                bringing high-level experience and intentional development to
                athletes in Utah County.
              </p>
            </div>
            <blockquote className="mt-10 border-l-[3px] border-accent pl-6 font-display text-2xl font-normal italic leading-snug text-ink">
              Move efficiently, throw with intent—and make it play in games.
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
