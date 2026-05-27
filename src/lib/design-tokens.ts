/**
 * Atlantic Soft palette — the single TypeScript source of truth for brand colors.
 * Mirrored as CSS custom properties in `src/app/globals.css` (via Tailwind v4 `@theme`).
 * Use these constants when you need a raw hex in TypeScript (e.g. Motion color animations,
 * canvas/SVG fills). For className styling, use the matching Tailwind utility (`bg-brand-blue`).
 */
export const tokens = {
  primaryBlue: "#5B95C9",
  deepInk: "#202A38",
  warmWhite: "#FAFBFC",
  warmAccent: "#E8965A",
  slateNeutral: "#6B7785",
} as const;

export type BrandColor = keyof typeof tokens;
