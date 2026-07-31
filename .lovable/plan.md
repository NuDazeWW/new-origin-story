## Direction

You picked directions **1 and 2**, so the build blends them: **v1's Swiss editorial structure** (running head, hairline rules, hanging stats, folio bar) executed with **v2's printed-page discipline** (real gutter, drop cap, Fig. captions with credit lines, generous margins).

Stock alternates like a real magazine — dark for the cover, **light Platinum #E6EBF1 stock** for the interior feature, dark again for the Insight. Every page being the same dark slide is the main reason the current version reads as a deck.

The brief is now the source of truth for copy and image direction. Note: the brief calls Slide 1 a clean typographic cover with no image — you asked to keep the cover photograph, so the photo stays and the brief's copy is used verbatim over it.

## What gets removed

- Floating glass/blur chips with pulse dots over the photograph
- Telemetry-style microcopy and status readouts
- Centered "slide" composition with equal padding on all sides
- Full-bleed gradient scrims used as a legibility crutch on every page

## Shared print shell

New `src/components/print/` primitives, used by all spreads now and by 03–15 later:

- `Page` — sets stock (`ink` / `paper`), edge-to-edge
- `RunningHead` — chapter left, issue right, hairline under
- `Folio` — Vol. / date left, page number right, hairline over
- `Caption` — `Fig. 0X` label, italic caption, credit line, hangs in the margin
- `DropCap` — DM Serif Display initial, optically aligned to three lines
- `StatRail` — oversized serif numerals hanging in the outer margin

12-column grid, consistent baseline, outer margin ~4.5rem, real center gutter on two-page compositions. Composed for landscape; degrades to one column at the narrow preview width.

## Spread 00 — Cover (dark stock)

Keeps the current photograph and the DIS logo lockup with company name.

- Masthead: DIS lockup, hairline, then the brief's positioning line — "Building the intelligence infrastructure layer for the $90B sponsorship market."
- "The Readiness Terminal™" set as the display headline, reduced so the photograph carries the page
- Bottom rail, cover-line style, set from the brief: *Decision Intelligence Systems, Inc. · Pre-Seed · $2.5M · Confidential*
- Gradient reduced to a soft foot scrim; the image is no longer half-covered

## Spread 01 — The Problem (light stock)

Brief slide 2, composed as a magazine feature well:

- **Verso:** running head "01 / The Problem", serif headline "The market has been running on gut instinct for a century.", drop cap, then the brief's two body paragraphs ($90B market with no independent standard; brands overpay, teams undersell)
- **Recto:** photograph bleeding off three edges, desaturated toward print, one `Fig. 01.A` caption with credit in the gutter margin
- **Marginalia:** `$90B` and `Zero` hanging in the outer column as the brief's anchor stats

The brief's two-column noise-vs-clarity idea is honored typographically — the chaotic left copy resolving into the single hanging figure — rather than as a diagram.

## Spread 02 — The Insight (dark stock)

Brief slide 3:

- Photograph runs the top two-thirds full bleed; three text columns beneath a hairline
- Pull quote: "Credit has FICO. Public markets have ratings agencies. Real estate has the appraisal. Partnership readiness has nothing."
- Body carries the brief's two follow-on paragraphs (first credible neutral body sets the reference; FICO reached $20B+ by becoming infrastructure)
- The FICO timeline redrawn as an editorial chart — hairline axis, serif numerals, three marks: **1956** founded → **1995** Fannie Mae mandate (the inflection) → **Today** $20B+ market cap. No glass panels, no glow.

## Interaction

Nothing required, nothing distracting:

- Entry: text rises a few pixels on ink-settling easing; photograph holds a very slow scale drift
- Hover on a photograph surfaces the caption's credit line in place — no movement, no glow
- Hover on a stat reveals its source note beneath the hairline
- The 1995 timeline mark reveals the mandate detail on hover
- Numerals count up once on first view, never again

## Technical notes

- Add `framer-motion` for entry orchestration and the slow image drift
- Semantic tokens in `src/styles.css`: `--ink` #05080F, `--slate` #0E1624, `--paper` #E6EBF1, `--muted` #A6AFB8, `--accent` #1EA7FF. Accent is a spot ink — two or three appearances per page maximum
- Light-stock spreads need an inverted token set, so print primitives read stock from a wrapper rather than hardcoding colors
- Inline-style blocks in the three spread files are replaced by the shared primitives; the per-spread files shrink substantially
- Verified with Playwright at landscape and at the narrow preview width before handing back

Spreads 03–15 are out of scope for this pass; the brief content for them is captured and the print shell is built to take them next.
