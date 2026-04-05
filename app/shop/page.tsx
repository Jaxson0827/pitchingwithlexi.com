import Link from "next/link";

export default function ShopPlaceholder() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center bg-bg px-6 text-center">
      <h1 className="font-display text-3xl font-medium text-ink">
        Shop coming soon
      </h1>
      <p className="mt-4 max-w-md text-ink-muted">
        Equipment and training tools will be available here. For now, join the
        waitlist on the home page.
      </p>
      <Link
        href="/"
        className="mt-8 text-base font-medium text-accent hover:text-accent-hover"
      >
        ← Back to home
      </Link>
    </div>
  );
}
