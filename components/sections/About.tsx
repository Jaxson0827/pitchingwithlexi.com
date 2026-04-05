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
              alt="Coach working with an athlete"
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
              The coach in your corner.
            </h2>
            <div className="mt-8 max-w-[36rem] space-y-5 text-ink-muted">
              <p>
                I&apos;m Lexi—pitching coach focused on building repeatable
                mechanics, arm health, and the kind of confidence that shows up
                in games, not just lessons.
              </p>
              <p>
                Every session is tailored to the athlete in front of me:
                video when it helps, drills that transfer to the circle, and
                honest feedback parents and players can act on.
              </p>
            </div>
            <blockquote className="mt-10 border-l-[3px] border-accent pl-6 font-display text-2xl font-normal italic leading-snug text-ink">
              Small adjustments, done with intention, change everything.
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
