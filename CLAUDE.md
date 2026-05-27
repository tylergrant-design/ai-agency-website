# CLAUDE.md

## 1. Project

**What this is:** the marketing / portfolio website for **Tyler Grant**, a one-person AI consulting and custom-tool agency based in Cape Breton, Nova Scotia.

**Live domain:** `tylergrant.ca`
**Primary conversion goal:** contact form submission → email to `tyler@tylergrant.ca`.
**Scale:** no users, no auth, no database. Just a fast, animated, polished marketing site.

**Owner / contact in code:**
- Name: Tyler Grant
- Email destination for forms: `tyler@tylergrant.ca`
- Location: Cape Breton, Nova Scotia, Canada

---

## 2. Tech stack

| Layer | Pick |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript (strict mode) |
| **Styling** | Tailwind CSS v4 |
| **Component base** | shadcn/ui |
| **Premium components** | 21st.dev (paste in as needed) |
| **Animations (primary)** | Motion (`motion/react`) |
| **Animations (advanced)** | GSAP |
| **Forms (frontend)** | react-hook-form + zod |
| **Form backend** | Next.js Server Action → Resend |
| **Hosting** | Vercel — chosen 2026-05-26 because the Cloudflare workerd runtime ships no Windows ARM64 binary. See `docs/decisions/02-hosting-on-vercel.md`. |
| **DNS** | Cloudflare (unchanged) — `tylergrant.ca` stays on Cloudflare; Vercel hosts the app via a CNAME. |
| **Repo** | GitHub |

**Stack rules:**
- Don't introduce another framework, CSS library, or animation library without asking.
- Don't add a database, auth provider, or CMS. The site is intentionally static.
- Server Actions for forms — never expose form endpoints as public API routes.

---

## 3. Brand — visual identity

### Colors ("Atlantic Soft" palette)
| Role | Hex | Use |
|---|---|---|
| Primary Blue | `#5B95C9` | Brand color, headers, hero blocks |
| Deep Ink | `#202A38` | Body text, dark backgrounds, emphasis |
| Warm White | `#FAFBFC` | Main background |
| Warm Accent | `#E8965A` | CTAs, links, highlights — the "fun" |
| Slate Neutral | `#6B7785` | Secondary text, borders, captions |

**60-30-10 split:** 60% warm white background / 30% soft blue surfaces / 10% warm amber accents (CTAs only).

**Critical:** these hex codes live in `design-tokens.ts` (or `tailwind.config`). Always reference the token — never hardcode a hex in a component.

### Typography
- **Titles & some headers:** Lora (serif) — `next/font/google`
- **Body & UI:** Geist Sans — `next/font/google` (confirmed 2026-05-26)

### Aesthetic adjectives
Modern · Minimalist · Precise · Fun & friendly

### Visual references
Anthropic, Apple. Restraint, generous whitespace, intentional motion.

### Motifs
Smooth soft shapes. Pill lines and arrows for workflows. Interactive diagrams that react on hover.

---

## 4. Brand — voice & content

- **Tone:** conversational with a confident, transparent edge. Provocative, bold — never corporate or hedged.
- **Audience:** business owners (1–25 employees), not engineers. Business-major reading level. **No technical jargon** in user-facing copy.
- **Pricing voice:** transparent. Never "contact for pricing" without a reason.
- **Failure voice:** direct accountability — name delays and problems plainly.
- **Tagline (locked):** *Your workflow, without you in it*
- **Single transformation promised:** hours back in their week, permanently.

### Content hierarchy (homepage)
1. **Hero:** name → tagline → description → primary CTA
2. **How we build / differentiators:** Business first, code second. You own everything. Measured, not promised.
3. **Process:** 5-stage table (Discover → Design → Plan → Prototype → Refine & hand off)
4. **Services list:** AI consulting · AI agent development · SaaS development · Web development
5. **CTA repeat**
6. About → separate page

Lead with **what the client gets**, never with "AI" hype. The market is saturated with hype; we counterbalance.

---

## 5. Motion principles

- **Soft and fluid.** Slow, confident easing — never snappy or aggressive.
- Default duration: 400–800ms. Default easing: `ease-out` or custom cubic-bezier with a gentle curve.
- Subtle hover/scroll interactions on diagrams and process cards.
- Respect `prefers-reduced-motion` — disable non-essential motion when set.
- **Never:** harsh bounces, fast snaps, flashing, parallax that fights the scroll.

---

## 6. Always / Never

### Always
- Use the `cn()` helper for merging Tailwind classes.
- Reference brand colors via design tokens (`tokens.primaryBlue`, etc.), never raw hex.
- Strict TypeScript — explicit prop interfaces on every component, no `any`.
- One-line JSDoc above every exported component / function: *what it is, when to use it*.
- Use path aliases (`@/components`, `@/lib`) — never deep relative imports (`../../../`).
- Round corners. `rounded-lg` minimum on cards, `rounded-full` on pill elements.
- Mobile-first: every layout works at 375px before scaling up.

### Never
- Sharp corners on UI elements (matches brand rule "avoid sharp UI").
- Fast / aggressive transitions.
- Generic SaaS blue (`#3B82F6`, `#2563EB` etc.) — we use **our** blue `#5B95C9`.
- Pure black `#000` — use Deep Ink `#202A38` for any "dark" usage.
- Lorem ipsum in committed code — use real copy from `brand-identity.md` or ask.
- Technical jargon in user-facing copy ("RAG," "LLM," "vector embeddings" — translate to business outcomes).
- Add CMS, database, auth, or backend services without explicit ask.
- Edit unrelated code while making a change — surgical edits only (see §8).
- Commit `.env`, API keys, or secrets. Resend API key lives in Vercel env vars only.

---

## 7. File & repo conventions

```
website/
├── src/                    # Path alias: @/* → ./src/*
│   ├── app/                # Next.js App Router (root layout, pages, globals.css)
│   │   ├── (marketing)/    # Public-facing pages (when split)
│   │   ├── api/            # Only if a Server Action can't do the job
│   │   ├── layout.tsx
│   │   └── globals.css     # Tailwind v4 @theme — Atlantic Soft palette lives here
│   ├── components/
│   │   ├── ui/             # shadcn primitives
│   │   ├── sections/       # Hero, Process, Services, etc.
│   │   └── motion/         # Reusable animated components
│   └── lib/
│       ├── design-tokens.ts # TS mirror of palette (raw hex)
│       ├── utils.ts         # cn() helper
│       └── resend.ts        # Form submission server action
├── public/                 # Static assets (favicon, OG image, logo SVG)
├── docs/
│   ├── decisions/          # Short markdown notes on non-obvious choices
│   ├── information/        # Brand identity + company info (source of truth for copy)
│   └── reference/          # Archived assets (old landing page, etc.)
└── CLAUDE.md               # this file
```

- New components default to `components/sections/` if page-specific, `components/ui/` if reusable primitives.
- Decisions worth a paragraph go in `docs/decisions/` — filename `NN-short-slug.md`. Stops future Claude from undoing past choices.

---

## 8. Working principles (from owner)

Tyler's global rules, applied here:

1. **Think before coding.** State assumptions, ask when uncertain, surface tradeoffs. Don't pick silently.
2. **Simplicity first.** Minimum code that solves the problem. No speculative abstractions. If you wrote 200 lines and 50 would do, rewrite.
3. **Surgical changes.** Touch only what the task requires. Don't "improve" adjacent code, comments, or formatting. Match existing style.
4. **Clean your own orphans.** Remove imports/variables/functions *your* changes made unused. Don't delete pre-existing dead code without asking.

If you're unsure about anything — even a small detail — **ask first**. Tyler prefers a 30-second clarification over a 30-minute rewrite.

---

## 9. References

Detailed brand and company docs (in `docs/information/`):
- `brand-identity.md` — full brand questionnaire, positioning, voice, motion notes
- `company-information.md` — business identity, contact, legal, tools

If a detail isn't in this file and isn't in those, **ask Tyler** — don't invent.

---

## 10. Codebase — current state (snapshot 2026-05-26)

> Reflects what's actually in the repo right now, not what's planned. Update when reality drifts from this section.

### What's installed

`package.json` dependencies actually present:

| Package | Version | Status |
|---|---|---|
| `next` | 16.2.6 | Turbopack is the default bundler in 16 — no opt-in needed |
| `react` / `react-dom` | 19.2.4 | |
| `tailwindcss` + `@tailwindcss/postcss` | ^4 | v4 config lives in `globals.css` via `@theme`, not `tailwind.config.*` |
| `motion` | ^12.40.0 | Installed, **not yet imported anywhere** |
| `react-hook-form` | ^7.76.1 | Installed, **no form code yet** |
| `zod` | ^4.4.3 | Installed, **no schemas yet** |
| `resend` | ^6.12.4 | Installed, **no server action yet** |
| `clsx` + `tailwind-merge` | ^2 / ^3 | Backing `cn()` in `src/lib/utils.ts` |

**Not yet installed:** `shadcn/ui` (no `components.json`, no `src/components/ui/`). When adding it, use the shadcn MCP server.

### Tailwind v4 token wiring

`src/app/globals.css` defines two layers inside `@theme inline`:

1. **Raw brand tokens:** `--color-brand-blue|ink|cream|amber|slate` → Tailwind generates `bg-brand-blue`, `text-brand-ink`, etc.
2. **Semantic aliases:** `--color-background|foreground|muted-foreground|accent|surface` → Tailwind generates `bg-background`, `text-foreground`, etc.

**Default to semantic utilities in components** (`text-foreground`, `bg-accent`, `text-muted-foreground`). Reach for raw `brand-*` only when the semantic alias doesn't fit.

`src/lib/design-tokens.ts` is the TypeScript mirror — import `tokens.warmAccent` etc. only when you need a raw hex string at runtime (Motion color animations, canvas/SVG fills).

### Fonts

Three Google fonts loaded in `src/app/layout.tsx` via `next/font/google`:

- `Geist` → `--font-geist-sans` → `font-sans`
- `Geist_Mono` → `--font-geist-mono` → `font-mono`
- `Lora` (weights 400/500/600/700) → `--font-lora` → `font-serif`

### What exists in `src/`

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, <SiteHeader/>, children
│   ├── page.tsx            # Homepage — HERO ONLY. No other sections yet.
│   ├── globals.css         # Tailwind v4 @theme block + body defaults
│   └── favicon.ico         # Default — replace
├── components/
│   └── layout/
│       └── site-header.tsx # Sticky nav: wordmark, 3 anchor links, amber CTA
└── lib/
    ├── design-tokens.ts    # TS palette mirror
    └── utils.ts            # cn() helper
```

**Empty / missing directories** vs the §7 plan: `src/app/(marketing)/`, `src/app/api/`, `src/app/about/`, `src/components/ui/`, `src/components/sections/`, `src/components/motion/`, `src/lib/resend.ts`.

### Broken / dead anchor links to wire up

These exist in the UI but have no destination yet — every new section closes one of these gaps:

- `<SiteHeader />` links to `/#process`, `/#services`, `/about`, `/#contact`
- `page.tsx` hero CTA links to `#contact`

### Hosting reality

Per `docs/decisions/02-hosting-on-vercel.md`: Vercel for the app, Cloudflare for DNS. `wrangler.jsonc` and `.dev.vars` have already been removed. Env vars live in `.env.local` (gitignored via the `.env*` rule) and will be mirrored in the Vercel dashboard for production.
