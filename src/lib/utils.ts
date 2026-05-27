import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classNames with conflict resolution. Use everywhere instead of template strings. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
