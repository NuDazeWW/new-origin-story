# Cover Slide — Reviewer Approval Pass

Goal: turn every reviewer caution/note on Section 00 into an approved state. Cover only; no other spread, shell, or global token changes.

## 1. Make the DIS lockup the first visual anchor

- Increase the masthead lockup width from its current 420px cap to roughly 620px (fluid: `min(58%, 620px)`), keeping it centered with height auto so the chrome bird + DIS letters read as the dominant element above the headline.
- Scale the "Decision Intelligence Systems" overlay line proportionally so it stays optically centered under the DIS letters and remains legible at the larger size.
- Widen the rule beneath the masthead to match the new lockup width so the masthead block still reads as one unit.
- Slightly reduce the display headline's optical weight relative to the lockup (small size step down only) so the company mark, not the product name, is the first thing the eye lands on. Headline copy is unchanged.

## 2. Replace the "Origin · 01" breadcrumb

- Swap the kicker text above the headline from "Origin · 01" to "Vol. I" — cleaner publication label, no prior-context assumption. Same kicker styling and position.

## 3. Confirm the company name and mission are unmistakable in the bottom bar

- Keep the existing folio content ("Decision Intelligence Systems, Inc. · Pre-Seed · $2.5M" / "Confidential") but give the company name in the bottom bar visual dominance: slightly larger type and brighter platinum tone for the company-name segment, with the round/amount kept at the current smaller, dimmer weight.
- Do this by rendering the folio's left slot as two spans on the cover (name + detail) rather than one string — the shared `Folio` primitive stays unchanged for other spreads.

## 4. Approved copy stays verbatim

- Tagline "Building the intelligence infrastructure layer for the $90B sponsorship market." unchanged.
- "The Readiness Terminal™" headline unchanged (product-led choice accepted).

## Technical notes

- All edits in `src/components/spreads/Spread00Cover.tsx`, plus any needed cover-scoped rules in `src/styles.css` (`.cover-*` selectors only). No new colors — existing DIS tokens only.
- `STATIC_REVIEW_MODE` behavior preserved: all cover content visible on first frame.
- Verify with a Playwright capture at 1280×720 and 1536×1024: lockup is the largest element, name line centered under DIS, kicker reads "Vol. I", bottom-bar company name visually dominant, no clipping or overlap with the headline.
