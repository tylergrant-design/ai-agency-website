import { Differentiators } from "@/components/sections/differentiators";

/** Marketing homepage — hero + differentiators. Process, services, contact, FAQ get added below. */
export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32 lg:py-40">
        <p className="font-sans text-sm font-medium tracking-widest uppercase text-brand-blue">
          Tyler Grant
        </p>
        <h1 className="mt-6 max-w-3xl font-serif text-5xl font-medium leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Your workflow, without you in it.
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
          Custom AI tools that handle the tedious work, letting you grow, not drown.
        </p>
        <p className="mt-3 max-w-xl text-base text-muted-foreground">
          Time saved. Money gained. Stress gone. You own everything we build.
        </p>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-foreground shadow-sm transition-opacity duration-300 hover:opacity-90"
          >
            Contact me
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </section>
      <Differentiators />
    </main>
  );
}
