import type { Metadata } from "next";
import { FadeUp } from "@/components/motion/fade-up";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact — Tyler Grant",
  description:
    "Tell me about your week. Where time leaks, where it goes, what's worth fixing. One honest conversation — no deck, no pressure.",
};

/** /contact page — hero + split form/booking. The dedicated conversion endpoint. */
export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-5xl px-6 py-24 md:py-28 lg:py-32">
        <FadeUp>
          <p className="font-sans text-sm font-medium tracking-widest uppercase text-brand-blue">
            Get in touch
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Tell me about your week.
          </h1>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Where time leaks, where it goes, what&apos;s worth fixing. One
            conversation — no deck, no pressure.
          </p>
        </FadeUp>

        <div className="mt-16 grid gap-10 md:mt-20 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-14">
          <FadeUp delay={0.35}>
            <ContactForm />
          </FadeUp>
          <FadeUp delay={0.45}>
            <BookingPlaceholder />
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

/** Placeholder card next to the form — live scheduler comes later. */
function BookingPlaceholder() {
  return (
    <aside
      aria-label="Book a call"
      className="rounded-2xl border border-brand-slate/15 bg-brand-blue/5 p-8 md:p-9"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue text-brand-cream">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="16" rx="3" />
          <path d="M3 10h18" />
          <path d="M8 3v4" />
          <path d="M16 3v4" />
        </svg>
      </div>
      <h2 className="mt-6 font-serif text-2xl font-medium leading-snug text-foreground">
        Or book a 30-min call
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        A live calendar is on its way. Until then, send a note and I&apos;ll
        come back with times that work.
      </p>
      <ul role="list" className="mt-6 space-y-3 text-sm leading-relaxed text-foreground">
        <li className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
          />
          <span>30 minutes. No deck, no pressure.</span>
        </li>
        <li className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
          />
          <span>We walk through where time is leaking.</span>
        </li>
        <li className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
          />
          <span>
            You walk away with a written take — even if we don&apos;t work
            together.
          </span>
        </li>
      </ul>
      <div className="mt-7">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-slate/20 bg-background/60 px-3 py-1.5 font-sans text-xs font-medium tracking-wider uppercase text-muted-foreground">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand-amber"
          />
          Coming soon
        </span>
      </div>
    </aside>
  );
}
