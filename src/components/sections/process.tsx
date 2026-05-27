import { FadeUp } from "@/components/motion/fade-up";

/** Process section — 5-stage vertical stepper. Hover (or tap on touch) reveals description + deliverable. */
export function Process() {
  return (
    <section id="process" className="bg-background">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-28 lg:py-32">
        <FadeUp>
          <p className="font-sans text-sm font-medium tracking-widest uppercase text-brand-blue">
            How we work
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            A process, not a guess.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Five stages, four to six weeks. Every step has a deliverable you can
            point at — nothing ships on a hunch.
          </p>
        </FadeUp>

        <ol role="list" className="mt-16 md:mt-20">
          {stages.map((stage, index) => (
            <FadeUp
              as="li"
              key={stage.name}
              delay={0.1 + index * 0.08}
              className="group grid grid-cols-[auto_1fr] gap-5 md:gap-7"
            >
              <div className="flex flex-col items-center self-stretch">
                <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue font-serif text-base font-medium text-brand-cream shadow-sm transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                  {index + 1}
                </div>
                {index < stages.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="my-2 w-px flex-1 bg-brand-slate/20"
                  />
                )}
              </div>

              <div className={index < stages.length - 1 ? "pb-12 md:pb-16" : ""}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-serif text-xl font-medium leading-snug text-foreground md:text-2xl">
                    {stage.name}
                  </h3>
                  <span className="font-sans text-xs font-medium tracking-wider uppercase text-muted-foreground">
                    {stage.weeks}
                  </span>
                </div>

                <div className="grid grid-rows-[0fr] overflow-hidden transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] motion-reduce:transition-none motion-reduce:grid-rows-[1fr] [@media(hover:none)]:grid-rows-[1fr]">
                  <div className="min-h-0">
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                      {stage.description}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground">
                      <span className="font-sans text-xs font-medium tracking-wider uppercase text-brand-blue">
                        You walk away with
                      </span>
                      <br />
                      {stage.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </ol>
      </div>
    </section>
  );
}

const stages = [
  {
    name: "Discover",
    weeks: "Week 1",
    description:
      "We learn how your business runs day-to-day and find where time is leaking.",
    deliverable:
      "A written list of opportunities, ranked by impact vs. effort.",
  },
  {
    name: "Design the workflow",
    weeks: "Week 1–2",
    description:
      "We map what the tool will do, with words and diagrams. No code yet.",
    deliverable: "A clear plan, in your language, that you sign off on.",
  },
  {
    name: "Detailed plan",
    weeks: "Week 2",
    description:
      "We spec out data, integrations, and edge cases. Every “what about when…” gets answered.",
    deliverable: "A build plan with no mid-project surprises.",
  },
  {
    name: "Prototype",
    weeks: "Week 2–4",
    description:
      "A working version, fast, using your real data. You use it in your real workflow.",
    deliverable: "Something running, not slides.",
  },
  {
    name: "Refine & hand off",
    weeks: "Week 4–6",
    description:
      "We tune the tool against how it's actually used, train your team, and hand over the docs.",
    deliverable:
      "A tool your team owns — plus everything needed to keep it running without us.",
  },
] as const;
