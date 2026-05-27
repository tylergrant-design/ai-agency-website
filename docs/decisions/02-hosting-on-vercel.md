# 02 — Hosting on Vercel (not Cloudflare)

> Decided 2026-05-26.

## Context

Original plan (per Tyler) was to host on Cloudflare. We previously confirmed the path would be `@opennextjs/cloudflare`, which preserves Server Actions and runs Next.js on Cloudflare Workers via the `workerd` runtime.

## The blocker

Tyler's dev machine is **Windows on ARM64** (`win32 arm64`). The `workerd` npm package — a transitive dependency of `wrangler` and `@opennextjs/cloudflare` — ships pre-built binaries for `win32-x64`, `linux-x64`, `linux-arm64`, `darwin-x64`, and `darwin-arm64`, but **not `win32-arm64`**. The install script throws `Unsupported platform: win32 arm64 LE` and rolls back the entire install.

There is no Cloudflare-supported workaround on Windows ARM. Options that *would* work but were rejected:
- Switching to x64 Node.js — Tyler can run x64 Node under emulation, but that polluted the dev environment with two Node installs.
- Building only via GitHub Actions (Linux) — works for deploys, but leaves Tyler unable to run `wrangler dev` locally for any future Worker-based feature.
- Static export — loses Server Actions, which `CLAUDE.md` §2 commits to using for the contact form.

## The decision

Host on **Vercel**. Reasons:
1. Native Next.js 16 support, including Server Actions, Cache Components, and the App Router — no shim layer.
2. Zero local platform constraints. `next dev` runs identically on ARM64.
3. Free tier is more than enough for a marketing site with no auth and no DB.
4. DNS stays on Cloudflare: `tylergrant.ca` continues to resolve via Cloudflare, with a CNAME pointing to Vercel. No DNS migration.
5. Resend integrates cleanly via standard `RESEND_API_KEY` env var, configured in the Vercel project settings.

## Consequences

- `wrangler.jsonc` and `.dev.vars` are now orphans of the old plan. Pending Tyler's confirmation before removal.
- Env vars move from `.dev.vars` (wrangler convention) to `.env.local` (Next.js convention). Already done.
- For production deploys, env vars will be set in the Vercel dashboard (or `vercel env add`).
- If Tyler ever wants to revisit Cloudflare, the migration path is small: install `@opennextjs/cloudflare` (on a non-ARM machine or CI), add an `open-next.config.ts`, and rewrite `wrangler.jsonc`. No Vercel lock-in is being introduced.

## What did not change

- The brand, palette, typography, copy hierarchy, and component conventions are unchanged.
- Server Actions remain the form backend per `CLAUDE.md` §2.
- Cloudflare is still where the domain lives.
