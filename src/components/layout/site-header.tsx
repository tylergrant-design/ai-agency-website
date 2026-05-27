import Link from "next/link";

/** Sticky site nav — wordmark, 3 anchor links, and the persistent amber CTA. Lives in the root layout. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-slate/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80"
          aria-label="Tyler Grant — home"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue font-serif text-base font-semibold leading-none text-brand-cream"
          >
            t
          </span>
          <span className="font-serif text-lg font-medium tracking-tight text-foreground">
            Tyler Grant
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          <Link
            href="/#process"
            className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            Process
          </Link>
          <Link
            href="/#services"
            className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            About
          </Link>
        </nav>

        <Link
          href="/#contact"
          className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-opacity duration-300 hover:opacity-90"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
