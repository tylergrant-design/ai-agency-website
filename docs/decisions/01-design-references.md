# 01 — Design references and what we're borrowing

> Captured 2026-05-26. Source references provided by Tyler. This doc records *structural* inspiration only — visual identity is governed by `CLAUDE.md` §3 and `information/brand-identity.md` (Atlantic Soft palette, Lora + sans, soft shapes, no sharp UI).

---

## References

1. [VitalFlow](https://vitalflow.framer.website/) — healthcare consultancy template
2. [LaunchFolio](https://launchfolio.framer.website/) — solo designer portfolio
3. [Archio](https://archio-template.framer.website/) — business consultancy template
4. [Lunera](https://lunera.framer.ai/) — fintech / AI agency template

**Caveat:** Framer sites are JS-rendered. Reads are structural (sections, copy, layout, CTA patterns), not pixel-level (fonts, exact colors). If we need pixel-level lock-in later, capture screenshots.

---

## The common skeleton (all four use this)

```
Hero (headline + sub + dual CTA + trust badge)
  ↓
Services grid (cards)
  ↓
How-it-works (numbered 01 / 02 / 03)
  ↓
Social proof (stats or testimonials)
  ↓
FAQ accordion
  ↓
Repeat CTA
  ↓
Footer
```

Other shared traits: pill-shaped CTAs, persistent CTA repeated 5+ times down the page, dual hero CTAs (primary + secondary), `+` symbols on stats ("180+", "5000+"), card-based service grids.

This skeleton matches the hierarchy already locked in `brand-identity.md` §7.2. No structural surprises.

---

## Borrow / skip — per reference

### VitalFlow
- **Borrow:** numbered vertical step layout for the 5-stage process; FAQ accordion; testimonial layout (for when we have more clients).
- **Skip:** 6-card icon grid for services — too dense, fights the Anthropic/Apple restraint we want.

### LaunchFolio
- **Borrow:**
  - Featured project showcase grid — slot in for the portfolio section once case studies exist.
  - Bold-text-inside-paragraphs for emphasis — fits the "conversational + confident" voice rule.
  - Single-testimonial block — matches the reality of 1 current client; do not fake plurality.
  - Personal philosophy section — pairs perfectly with the "I'm not an agency, I'm one person" About copy.
- **Skip:**
  - "99+ happy clients" badge — transparency rule (`brand-identity.md` §5.3 / CLAUDE.md §4) forbids inflating numbers.
  - Two-tier subscription pricing cards — we're project-based, not subscription.

### Archio
- **Borrow:**
  - Numbered process timeline — this *is* the 5-stage Discover → Refine table. Render it visually, not as a table.
  - 3-column repeating value-prop blocks — fits the 3 differentiators (Business first / You own everything / Measured, not promised).
  - Stat boxes with `+` ("180+ Projects, 96% Satisfaction, 15+ Years") — once we have honest numbers.
  - Hero corner-badge slot — use it for "Cape Breton, NS" or a founder tagline instead of "Award-winning."
- **Skip:** generic "expert consultancy" tone — we are more provocative and direct.

### Lunera
- **Borrow:**
  - Compression of How-It-Works to 3 visual phases at hero glance — even though we have 5 stages internally, the hero teaser version should be tighter.
  - Pill buttons + small-radius cards.
- **Skip:**
  - Fintech dashboard / metric-card vibe — we're a person, not a product.
  - Any "flashy AI agency" posture (glowing orbs, animated neural-net visuals). Counter-position deliberately.

---

## What makes our site distinct from all four

These four references all run pure sans-serif. Our **Lora-serif headlines + sans body** is the single biggest aesthetic differentiator on the page.

The **warm amber CTA (`#E8965A`)** is the second. None of the four references have a warm accent. Combined with `#5B95C9` soft blue (not generic SaaS blue), our palette stops the site from reading "Framer template."

Motion is the third lever: slow, soft, confident easing (`CLAUDE.md` §5). All four references rely on stock Framer transitions. A custom hover-reactive process diagram is where we visibly out-perform them.

---

## Open recommendations (not yet decided)

1. **Render the 5-stage process as a hover-reactive diagram, not a table.** Pill lines + arrows (per `CLAUDE.md` §3 motifs). Each stage expands or animates on hover. Inspiration: Archio's numbered timeline + the "interactive diagrams" motif Tyler called out in `brand-identity.md` §4.5.
2. **Replace generic social proof with a transparent "currently 1 client, by design" block.** Bolder than "99+ clients," fits the provocative voice, and turns a perceived weakness into positioning.
3. **Skip pricing tier cards entirely on v1.** Project-based, custom-quote. The pricing voice rule is "transparent" but that doesn't require tier cards — it requires a clear conversation about money on the contact step.

---

## Decisions still pending after this doc

- Sans-serif body font family (Inter, Geist, Söhne, etc.) — propose and confirm before installing.
- Whether to show portfolio section at all on v1 (currently 1 client, no public case study yet).
- Whether to render the contact step as an inline form or a multi-step Typeform-style flow.
