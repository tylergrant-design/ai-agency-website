"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type FadeUpAs = "div" | "li" | "section";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: FadeUpAs;
}

const components = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
} as const;

/** Soft fade-up on scroll into view. Honors prefers-reduced-motion. Wrap any block to animate it on entry. */
export function FadeUp({ children, delay = 0, className, as = "div" }: FadeUpProps) {
  const reduced = useReducedMotion();
  const Comp = components[as];

  if (reduced) {
    return <Comp className={className}>{children}</Comp>;
  }

  return (
    <Comp
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}
