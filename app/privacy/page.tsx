import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Pitching with Lexi",
  description:
    "How Pitching with Lexi collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-bg px-4 py-12 text-ink sm:px-6 md:py-16">
      <div className="mx-auto max-w-[42rem]">
        <p className="font-sans text-sm text-ink-muted">
          <Link
            href="/"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:text-accent-hover"
          >
            ← Back to home
          </Link>
        </p>
        <h1 className="mt-8 font-display text-3xl font-medium tracking-[-0.02em] text-ink md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-ink-faint">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-muted">
          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Who we are
            </h2>
            <p className="mt-3">
              Pitching with Lexi (“we,” “us”) provides private softball pitching
              instruction and related services. This policy describes how we
              handle personal information when you use our website or contact us.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Information we collect
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-ink">Waitlist and inquiries:</strong>{" "}
                When you join a waitlist or reach out, we may collect your name,
                email address, and any details you choose to provide.
              </li>
              <li>
                <strong className="text-ink">Communications:</strong> If you
                email or message us, we retain those messages as needed to
                respond and provide services.
              </li>
              <li>
                <strong className="text-ink">Technical data:</strong> Like most
                sites, our hosting provider may log basic technical information
                (for example IP address, browser type, and approximate location)
                for security and reliability.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              How we use information
            </h2>
            <p className="mt-3">
              We use the information above to operate the site, communicate with
              you, manage scheduling and waitlists, improve our services, and
              comply with law. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Sharing
            </h2>
            <p className="mt-3">
              We may share information with trusted service providers who help us
              run the website or process forms (for example email or form
              tools)—only as needed for those services. We may also disclose
              information if required by law.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Children
            </h2>
            <p className="mt-3">
              Our services involve youth athletes. If you are a parent or
              guardian, you may contact us to review or request deletion of
              information associated with your child where applicable.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Your choices
            </h2>
            <p className="mt-3">
              You may unsubscribe from marketing-style emails using the link in
              those messages, or contact us to ask about access, correction, or
              deletion of your information.
            </p>
          </section>

          <section>
            <h2 className="font-sans text-lg font-semibold text-ink">
              Contact
            </h2>
            <p className="mt-3">
              Questions about this policy:{" "}
              <a
                href="mailto:alexisatcitty@gmail.com"
                className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:text-accent-hover"
              >
                alexisatcitty@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
