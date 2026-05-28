import { FadeUp } from "@/components/motion/fade-up";

/** Services section — 2x2 grid of the four service offerings. Hosts the #services anchor. */
export function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-28 lg:py-32">
        <FadeUp>
          <p className="font-sans text-sm font-medium tracking-widest uppercase text-brand-blue">
            What we build
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Four ways we help.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            One person, four services — picked for the problems small teams
            actually have.
          </p>
        </FadeUp>

        <ul
          role="list"
          className="mt-14 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6"
        >
          {services.map((service, i) => (
            <FadeUp
              as="li"
              key={service.title}
              delay={0.15 + i * 0.08}
              className="group rounded-2xl border border-brand-slate/15 bg-background p-7 transition-colors duration-500 ease-out hover:border-brand-blue/40 md:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors duration-500 ease-out group-hover:bg-brand-blue/15">
                {service.icon}
              </div>
              <h3 className="mt-6 font-serif text-xl font-medium leading-snug text-foreground md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {service.body}
              </p>
            </FadeUp>
          ))}
        </ul>
      </div>
    </section>
  );
}

const services = [
  {
    title: "AI Consulting",
    body:
      "Not sure where to start with AI or whether it's even worth it for your business? We dig into how your team actually works, find where time is leaking, and give you a straight answer on what's worth building and what isn't. No hype, no pressure. Just a clear plan in plain language.",
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
        <path d="M12 3a6 6 0 0 0-3.5 10.9V17a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3.1A6 6 0 0 0 12 3Z" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    title: "AI Agent Development",
    body:
      "An AI agent handles a task for you — automatically, every time, without being asked twice. We build agents custom to your workflow: triaging emails, following up with leads, summarizing reports, moving data between tools. The tedious work runs itself. Your team does the work that actually needs them.",
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
        <rect x="4" y="7" width="16" height="12" rx="3" />
        <path d="M12 7V4" />
        <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "SaaS Development",
    body:
      "Got a business process that needs to become a product, or an idea for a tool your industry is missing? We build it from the ground up — clean, fast, and yours to own. No bloated platforms, no subscriptions, no 90% of features you'll never touch.",
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
        <rect x="3.5" y="5" width="17" height="12" rx="3" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Web Development",
    body:
      "A website that earns its place. Clean design, fast, and built to get visitors to reach out — not to impress other designers. We build on your brand and write copy that speaks to your clients, not your peers.",
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
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17" />
        <path d="M12 3.5a13 13 0 0 1 0 17" />
        <path d="M12 3.5a13 13 0 0 0 0 17" />
      </svg>
    ),
  },
] as const;
