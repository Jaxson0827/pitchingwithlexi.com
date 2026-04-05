import { Reveal } from "@/components/Reveal";

/** Rough bbox for Utah County, Utah (OpenStreetMap embed) */
const UTAH_COUNTY_MAP =
  "https://www.openstreetmap.org/export/embed.html?bbox=-111.95%2C40.05%2C-111.35%2C40.55&layer=mapnik";

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
              title="Utah County area map"
              src={UTAH_COUNTY_MAP}
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
              Utah County
            </h2>
            <div className="mt-8 max-w-[36rem] space-y-8 text-ink-muted">
              <div>
                <h3 className="font-sans text-lg font-semibold text-ink">
                  In-person sessions
                </h3>
                <p className="mt-2">
                  I coach pitchers in and around{" "}
                  <strong className="font-semibold text-ink">Utah County</strong>
                  . Exact facility or field details are shared when you join the
                  waitlist or schedule a session.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-ink">
                  What to bring
                </h3>
                <p className="mt-2">
                  Cleats or turfs, water, glove, and any training tools you
                  already use. If you&apos;re filming for check-ins or review,
                  have your phone charged and a simple way to capture side /
                  front angles.
                </p>
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-ink">
                  Online check-ins
                </h3>
                <p className="mt-2">
                  Clear space for full delivery, lighting toward the camera, and
                  a stable camera angle. You&apos;ll get mechanical notes, drill
                  ideas, and adjustments you can use right away.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
