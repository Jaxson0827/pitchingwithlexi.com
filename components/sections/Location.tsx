import { Reveal } from "@/components/Reveal";

export function Location() {
  return (
    <section
      className="bg-bg px-6 py-14 md:px-10 md:py-[4.5rem] lg:px-16 lg:py-24"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-line bg-line/40">
            <iframe
              title="Lesson location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-95.5%2C29.6%2C-95.2%2C29.9&amp;layer=mapnik"
              className="absolute inset-0 h-full w-full grayscale contrast-[0.92] opacity-90"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-line"
              aria-hidden
            />
          </div>
        </Reveal>
        <Reveal delayMs={80}>
          <div>
            <h2
              id="location-heading"
              className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink"
            >
              Where we meet
            </h2>
            <div className="mt-8 max-w-[36rem] space-y-8 text-ink-muted">
              <div>
                <h3 className="font-sans text-lg font-semibold text-ink">
                  In-person sessions
                </h3>
                <p className="mt-2">
                  Replace this block with your facility address, parking notes,
                  and gate or field instructions. Parents appreciate specifics.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-ink">
                  What to bring
                </h3>
                <p className="mt-2">
                  Cleats or turfs, water, glove, and any training tools you
                  already use. If you film for review, have your phone charged.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-ink">
                  Online sessions
                </h3>
                <p className="mt-2">
                  Clear space for full delivery, decent lighting toward the
                  camera, and a stable stand or person filming. We&apos;ll send
                  the video link before your slot.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
