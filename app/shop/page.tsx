import Link from "next/link";

export default function ShopPlaceholder() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center bg-bg px-4 text-center sm:px-6">
      <h1 className="font-display text-2xl font-medium text-ink sm:text-3xl">
        Shop coming soon
      </h1>
      <p className="mt-4 max-w-md text-pretty text-ink-muted">
        Equipment and training tools will be available here. For now, join the
        waitlist on the home page.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center text-base font-medium text-accent hover:text-accent-hover"
      >
        ← Back to home
      </Link>
    </div>
  );
}
