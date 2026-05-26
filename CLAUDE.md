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
| **Hosting** | Vercel |
| **DNS** | Cloudflare (unchanged) |
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
- **Titles & some headers:** Lora (serif)
- **Body & UI:** sans-serif (final family TBD — propose one and confirm before installing)

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
├── app/                    # Next.js App Router
│   ├── (marketing)/        # Public-facing pages
│   ├── api/                # Only if a Server Action can't do the job
│   └── layout.tsx
├── components/
│   ├── ui/                 # shadcn primitives
│   ├── sections/           # Hero, Process, Services, etc.
│   └── motion/             # Reusable animated components
├── lib/
│   ├── design-tokens.ts    # Single source of truth for colors, spacing
│   ├── utils.ts            # cn() helper
│   └── resend.ts           # Form submission server action
├── content/                # Markdown for case studies, about (when added)
├── public/                 # Static assets (favicon, OG image, logo SVG)
├── docs/decisions/         # Short markdown notes on non-obvious choices
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

External docs (outside this repo, in `../business-information/`):
- `brand-identity.md` — full brand questionnaire, positioning, voice, motion notes
- `company-information.md` — business identity, contact, legal, tools

If a detail isn't in this file and isn't in those, **ask Tyler** — don't invent.
