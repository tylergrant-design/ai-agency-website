import Link from "next/link";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

const sitemap: readonly FooterLink[] = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/about", label: "About" },
] as const;

const contact: readonly FooterLink[] = [
  { href: "mailto:tyler@tylergrant.ca", label: "tyler@tylergrant.ca" },
  { href: "https://www.linkedin.com/in/tyler-grant-ai", label: "LinkedIn", external: true },
  { href: "https://github.com/tylergrant-design", label: "GitHub", external: true },
] as const;

/** Site footer — wordmark, sitemap, contact links, copyright. Rendered site-wide in the root layout. */
export function SiteFooter() {
  return (
    <footer className="bg-brand-ink text-brand-cream">
      <div className="mx-auto w-full max-w-5xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-16">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-80"
              aria-label="Tyler Grant — home"
            >
              <span
                aria-hidden="true"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5E7EB] font-sans text-[10px] font-medium leading-none text-[#9CA3AF]"
              >
                ex
              </span>
              <span className="font-serif text-lg font-medium tracking-tight">
                Tyler Grant
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-cream/70">
              Custom AI tools that handle the tedious work, letting you grow,
              not drown.
            </p>
            <p className="mt-4 text-sm text-brand-cream/60">
              Cape Breton, Nova Scotia
            </p>
          </div>

          <div>
            <p className="font-sans text-xs font-medium tracking-widest uppercase text-brand-cream/50">
              Sitemap
            </p>
            <ul role="list" className="mt-5 space-y-3 text-sm">
              {sitemap.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-cream/80 transition-colors duration-300 hover:text-brand-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs font-medium tracking-widest uppercase text-brand-cream/50">
              Get in touch
            </p>
            <ul role="list" className="mt-5 space-y-3 text-sm">
              {contact.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-brand-cream/80 transition-colors duration-300 hover:text-brand-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-brand-cream/10 pt-8 text-xs text-brand-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Tyler Grant. All rights reserved.</p>
          <Link
            href="/privacy"
            className="transition-colors duration-300 hover:text-brand-cream/80"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
