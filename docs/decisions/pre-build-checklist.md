# Pre-build checklist

> Tick these off before scaffolding the Next.js project. Roughly ordered — the decisions at the top affect the scaffold, the assets and copy gaps can be done in parallel.

---

## 1. Decisions to make (these affect the scaffold)

- [x] **Sans-serif body font.** Geist
- [x] **Portfolio section in v1?** hide until you have at least 1 public case study
- [x] **Contact form location.** dedicated `/contact` page
- [x] **Logo.** placeholder just a lower case t in a circle

## 2. Accounts and credentials

- [x] Create [Resend](https://resend.com) account (free tier is fine to start).
- [x] In Resend, add `tylergrant.ca` as a verified sending domain — adds 3 DNS records you'll paste into Cloudflare.
- [x] Generate a Resend API key. Store it in a `.dev.vars` file (gitignored) for local dev, and as a Cloudflare Worker secret for production.

## 3. Local environment

- [x] Confirm Node.js ≥ 20 installed (`node -v`).
- [x] Pick a package manager: **npm**
- [x] Install Wrangler globally: WSL2

## 4. Hosting confirmation

- [ ] Confirm: deploy to Cloudflare via **`@opennextjs/cloudflare`** (preserves Server Actions for the contact form). The alternative is static export + a separate Worker for form POST — simpler but more moving parts.
- [ ] Update `CLAUDE.md` §2 hosting line: **"Vercel"** → **"Cloudflare Workers (OpenNext)"**.

## 5. Assets to gather (drop into `/public` once scaffolded)

- [ ] **Logo SVG** — primary mark.
- [ ] **Favicon** — SVG ideal, plus a 32×32 PNG fallback.
- [ ] **OG image** — 1200×630 PNG for social share previews.
- [ ] **Headshot** *(optional)* — used on About page if you want a personal touch.

## 6. Copy gaps to fill

Most copy is already locked in `information/brand-identity.md`. These are the holes:

- [x] **FAQ Q&A** — write 5–8 questions a prospect would ask before hiring. Seed them from the fears in `brand-identity.md` §2.2 (AI hype, lock-in, hallucinations, wasted spend, etc.). just generate them
- [x] **Contact form fields** — minimum: name, email, company, "what's the project" textarea. Add anything else you'd want before a discovery call.
- [x] **Homepage meta title + description** — ≤ 60 chars title, ≤ 160 chars description, used by Google + link previews. generate it
- [x] **Footer content** — links to include (services, about, contact, privacy), copyright line, location. everything is found in @company-information.md

## 7. Already done — no action needed

- [x] Brand identity locked (Atlantic Soft palette, voice, motifs).
- [x] Homepage content hierarchy locked.
- [x] 5-stage process table written.
- [x] Service descriptions written (AI consulting, agents, SaaS, web dev).
- [x] About page copy written.
- [x] Tagline locked: *Your workflow, without you in it*.
- [x] Design references catalogued (`docs/decisions/01-design-references.md`).
- [x] Privacy policy drafted (`privacy-policy.md`).
- [x] GitHub repo exists, branch `master`.
- [x] Cloudflare account + `tylergrant.ca` domain owned.

---

## After this checklist

When everything above is ticked, ping me and I'll run the scaffold in one pass:

1. Wipe placeholder `index.html` + old `wrangler.jsonc`.
2. `create-next-app` into the root (TypeScript, Tailwind v4, App Router).
3. `shadcn init` with Atlantic Soft palette wired into `design-tokens.ts`.
4. Install Motion, react-hook-form, zod, Resend, `@opennextjs/cloudflare`.
5. New `wrangler.jsonc` for OpenNext.
6. Stub the folder structure per `CLAUDE.md` §7.
7. Verify dev server runs at `localhost:3000` and a baseline `wrangler dev` build succeeds.

Then we move to building the actual sections, starting with the hero.
