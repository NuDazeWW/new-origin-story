# Cover Masthead — New Lockup + Company Name

## What changes

1. Swap the cover masthead artwork for the newly uploaded bird + "DIS" lockup, sized to occupy the same masthead space as today (same max width, centered, height auto — no stretching).
2. Add a small caps text line reading "Decision Intelligence Systems" positioned directly beneath the "DIS" letters, horizontally centered on the DIS half of the lockup (not on the whole image).

Only the cover masthead area changes. The kicker, headline, thesis line, folio, photograph, and all other spreads stay exactly as they are.

## Technical notes

- Upload `ChatGPT_Image_Jul_30_2026_09_25_36_PM.png` via the asset CLI to `src/assets/dis-lockup-cover.png.asset.json` and import it in `src/components/spreads/Spread00Cover.tsx`, replacing the current `dis-logo-masthead` import there. Other spreads that use `dis-logo-masthead` (e.g. Section 15) keep their existing asset.
- Wrap the masthead image in a `position: relative` container at the existing `maxWidth: 420px`. The uploaded artwork has the bird on the left and "DIS" on the right, so the name line is placed in an absolutely positioned block spanning roughly the right 55% of the container, `text-align: center`, sitting just below the type baseline.
- Type treatment: Space Grotesk (the existing sans), uppercase, letter-spacing ~0.22em, `clamp(0.5rem, 0.62vw, 0.68rem)`, color `var(--dis-platinum)` / existing masthead token — no new colors, no hardcoded hex.
- Alt text on the image becomes "Decision Intelligence Systems"; the overlay line is `aria-hidden` to avoid duplicate reading.
- Verify at 1280x720 with a Playwright element screenshot of the masthead to confirm the name is centered under DIS and clears the rule below.
