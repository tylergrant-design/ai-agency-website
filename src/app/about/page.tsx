import type { Metadata } from "next";
import { FadeUp } from "@/components/motion/fade-up";
import { ContactCta } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "About — Tyler Grant",
  description:
    "One person. Cape Breton based. Building custom AI tools that businesses own and that pay for themselves in time saved.",
};

/** About page — who Tyler is, the goals behind the business, and the values guiding every project. */
export default function About() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <FadeUp>
              <p className="font-sans text-sm font-medium tracking-widest uppercase text-brand-blue">
                About
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                One person, building tools you actually own.
              </h1>
            </FadeUp>
            <FadeUp delay={0.25}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                I&apos;m Tyler Grant, a computer engineering student based in
                Cape Breton, Nova Scotia, and the person behind every tool
                you&apos;ll get from this business.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                I&apos;m not an agency. I&apos;m one person who&apos;s deeply
                interested in three things: business, AI, and making things
                efficient. I spend more time understanding the problem than
                writing the code, and I follow a five-stage engineering process
                so nothing ships on a guess.
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                I started this business because most &ldquo;AI consultants&rdquo;
                sell hype, lock-in, or both. I&apos;d rather build you a tool
                you own, prove it works with real numbers, and hand it over so
                your team can use it long after I&apos;m gone.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.3}>
            <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/example-portrait.svg"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <section id="goals" className="bg-brand-blue text-brand-cream">
        <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-28 lg:py-32">
          <FadeUp>
            <p className="font-sans text-sm font-medium tracking-widest uppercase text-brand-cream/70">
              Goals
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
              Quality over volume. Word of mouth over outreach.
            </h2>
          </FadeUp>

          <ul
            role="list"
            className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-5"
          >
            {goals.map((goal, i) => (
              <FadeUp
                as="li"
                key={goal.label}
                delay={0.15 + i * 0.1}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
              >
                <p className="font-sans text-xs font-medium tracking-widest uppercase text-brand-cream/70">
                  {goal.label}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-brand-cream/85">
                  {goal.body}
                </p>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <section id="identity" className="bg-background">
        <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-28 lg:py-32">
          <FadeUp>
            <p className="font-sans text-sm font-medium tracking-widest uppercase text-brand-blue">
              Identity
            </p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Five values guide every project.
            </h2>
          </FadeUp>

          <dl className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 md:gap-y-12">
            {values.map((value, i) => (
              <FadeUp
                key={value.term}
                delay={0.1 + i * 0.06}
                className="border-l-2 border-brand-blue/30 pl-5"
              >
                <dt className="font-serif text-xl font-medium leading-snug text-foreground md:text-2xl">
                  {value.term}
                </dt>
                <dd className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                  {value.body}
                </dd>
              </FadeUp>
            ))}
          </dl>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}

const goals = [
  {
    label: "Short-term",
    body:
      "A small handful of long-term client relationships where the tools genuinely change how a business runs.",
  },
  {
    label: "Long-term",
    body:
      "A focused practice that stays small, leverages every new AI advancement, and keeps clients on by choice — because the tools keep paying off, not because they're locked in.",
  },
  {
    label: "The bigger goal",
    body:
      "Prove AI doesn't have to replace people to be valuable. The best implementations make the team you already have faster, sharper, and more useful — giving people time back for the work that actually matters.",
  },
] as const;

const values = [
  {
    term: "Competent",
    body: "I know what I know, and I'm honest about what I don't.",
  },
  {
    term: "Honest",
    body: "You'll know exactly where I am in the build, including the delays.",
  },
  {
    term: "Friendly",
    body: "No corporate distance. We're working together on your business.",
  },
  {
    term: "Approachable",
    body:
      "Ask me anything, technical or not. I'll explain it without jargon.",
  },
  {
    term: "Professional",
    body: "The work ships clean, documented, and ready to outlast me.",
  },
] as const;
