import Link from "next/link";
import { FadeUp } from "@/components/motion/fade-up";

/** Big CTA section — last conversion punch before the footer. Hosts the #contact anchor. */
export function ContactCta() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto w-full max-w-5xl px-6 py-28 md:py-36 lg:py-44">
        <FadeUp>
          <p className="font-sans text-sm font-medium tracking-widest uppercase text-brand-blue">
            Ready when you are
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Your workflow, without you in it.
          </h2>
        </FadeUp>
        <FadeUp delay={0.25}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            One honest conversation. Where time is leaking, where AI fits, and what
            isn&apos;t worth building. No deck, no pressure.
          </p>
        </FadeUp>
        <FadeUp delay={0.4}>
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-base font-medium text-foreground shadow-sm transition-opacity duration-300 hover:opacity-90 md:px-10 md:py-5 md:text-lg"
            >
              Start the conversation
              <svg
                viewBox="0 0 16 16"
                className="h-4 w-4 md:h-5 md:w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
