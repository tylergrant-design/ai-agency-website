/** Differentiators section — the 3 things that don't change. Soft blue panel under the hero. */
export function Differentiators() {
  return (
    <section
      id="differentiators"
      className="bg-brand-blue text-brand-cream"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-28 lg:py-32">
        <p className="font-sans text-sm font-medium tracking-widest uppercase text-brand-cream/70">
          How we build
        </p>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
          Three things that don&apos;t change.
        </h2>

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5"
        >
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-brand-cream">
                {item.icon}
              </div>
              <h3 className="mt-6 font-serif text-xl font-medium leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-cream/80">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-2xl text-sm italic leading-relaxed text-brand-cream/70 md:text-base">
          What you won&apos;t get: account managers, status decks, or a sales team
          you&apos;ve never met. You talk to the person building your tool —
          every step.
        </p>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Business first, code second.",
    body:
      "We don't open an editor until we understand how your business actually runs and the underlying problem. Half the value is figuring out what to build, not building it.",
    icon: (
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
        <rect x="3.5" y="7" width="13" height="10" rx="3" />
        <rect x="7.5" y="3" width="13" height="10" rx="3" />
      </svg>
    ),
  },
  {
    title: "You own everything.",
    body:
      "No subscriptions. No lock-in. Every tool we deliver is yours to keep, modify, or shut off. You get the code.",
    icon: (
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
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Measured, not promised.",
    body:
      "Every tool ships with analytics built in. You see exactly what it's saving you, in hours, dollars, or fewer mistakes.",
    icon: (
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
        <path d="M5 18V13" />
        <path d="M12 18V8" />
        <path d="M19 18v-6" />
      </svg>
    ),
  },
] as const;
