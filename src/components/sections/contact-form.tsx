"use client";

import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  company?: string;
  message: string;
}

/** Contact form — name/email/company/message with client-side validation. onSubmit is stubbed; wire to Resend server action when /lib/resend.ts lands. */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onTouched" });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-brand-slate/15 bg-background p-8 md:p-10"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-brand-cream">
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h2 className="mt-6 font-serif text-2xl font-medium leading-snug text-foreground md:text-3xl">
          Got it. Talk soon.
        </h2>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
          I&apos;ll reply within one business day, usually sooner.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl border border-brand-slate/15 bg-background p-8 md:p-10"
    >
      <h2 className="font-serif text-2xl font-medium leading-snug text-foreground">
        Send a note
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Goes straight to{" "}
        <span className="text-foreground">tyler@tylergrant.ca</span>. Takes a
        minute.
      </p>

      <div className="mt-8 grid gap-5">
        <Field label="Name" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : undefined}
            className={inputClass}
            {...register("name", { required: "What should I call you?" })}
          />
        </Field>

        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? "true" : undefined}
            className={inputClass}
            {...register("email", {
              required: "Where should I reply?",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "That email doesn't look right.",
              },
            })}
          />
        </Field>

        <Field label="Company or role" optional>
          <input
            type="text"
            autoComplete="organization"
            className={inputClass}
            {...register("company")}
          />
        </Field>

        <Field label="What's on your mind?" error={errors.message?.message}>
          <textarea
            rows={5}
            aria-invalid={errors.message ? "true" : undefined}
            className={`${inputClass} min-h-32 resize-y`}
            placeholder="Where time leaks. What you've tried. What you'd love to stop doing."
            {...register("message", {
              required: "Even a sentence helps.",
              minLength: {
                value: 10,
                message: "A bit more context, please.",
              },
            })}
          />
        </Field>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-base font-medium text-foreground shadow-sm transition-opacity duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send it"}
          {!isSubmitting && (
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
          )}
        </button>
      </div>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-brand-slate/20 bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/20 aria-[invalid=true]:border-brand-amber aria-[invalid=true]:focus:ring-brand-amber/20";

function Field({
  label,
  optional,
  error,
  children,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between">
        <span className="text-sm font-medium text-foreground">{label}</span>
        {optional && (
          <span className="font-sans text-xs tracking-wider uppercase text-muted-foreground/70">
            Optional
          </span>
        )}
      </span>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-xs text-brand-amber">{error}</p>}
    </label>
  );
}
