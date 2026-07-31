## Spread 02 — The Insight, reworked

### Image
Use `03_evidence_to_decision_field.png` from your provided set — it reads as evidence resolving into a single decision line, which matches the copy about every mature market converging on one trusted measure. It gets uploaded as a CDN asset (`dis-evidence.png.asset.json`) alongside the existing three. If it doesn't hold up at full-bleed width, I'll fall back to `05_data_at_speed.png`.

### Timeline moves onto the image
The FICO precedent chart leaves the third text column and sits **inside the photograph**, framed to it:

- Full-bleed figure keeps the top register; the timeline is absolutely positioned within the frame, inset from the image edges so it reads as printed over the plate, not floating above it
- Horizontal axis spans the framed width; three marks — **1956 Founded**, **1995 Fannie Mae mandate** (the key inflection), **Today $20B+ market cap** — spaced along it
- Legibility comes from a soft bottom scrim on the image only where the timeline sits, plus the Electric Blue accent used on the 1995 mark alone
- `Fig. 02.A` caption and credit stay in the margin as they are

### Build animation
Left-to-right, once, on first view of the spread:

- Axis line draws from left edge to right (~1.1s, ink-settling easing)
- Each tick pops as the axis passes it, with its year/label fading up just behind — staggered so it reads as one continuous sweep, not three separate reveals
- 1995 mark lands last in emphasis: slightly larger tick, accent color
- Hover on a mark still reveals its detail line; nothing requires interaction
- Respects reduced-motion — everything renders in place with no draw

### Text below
With the chart gone, the lower register reflows from three columns to **two**, sized to fill the gap:

- Left: the serif pull quote, set larger now that it has the room — "Credit has FICO. Public markets have ratings agencies. Real estate has the appraisal. Partnership readiness has nothing."
- Right: the two body paragraphs, unchanged copy, set in a comfortable measure
- Hairline rule and folio chrome unchanged; vertical rhythm rebalanced so the image + timeline take more of the page and the text block sits as a tight foot

### Technical notes
- `Figure` in `src/components/print/Editorial.tsx` gains an optional `overlay` slot so the timeline can render inside the frame without duplicating image markup
- New `.tl--overlay` styles in `src/styles.css`; existing `.tl` classes stay for reuse
- Framer Motion `useInView` + `pathLength`/`scaleX` for the axis draw, staggered children for the marks
- Verified with Playwright at landscape and at the narrow preview width
