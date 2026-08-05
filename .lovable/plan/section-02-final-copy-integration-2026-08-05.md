# Section 02 — Final Copy Integration

Replace the current Section 02 copy and running head with the approved final copy, restructure the text register around the new pull quote + two-column body + bridge sentence, and keep the timeline build intact.

## Copy changes

- **Running head**: `02 / The Precedent` (was `02 / The Insight`).
- **Kicker / section label**: `THE PRECEDENT` (timeline plate kicker stays uppercase).
- **Timeline anchor**: update the first mark to `1956 — FICO FOUNDED` (was `Founded`). Keep the 1995 and Today marks as the approved precedent narrative, but let the 1956 anchor drive the left-to-right build.
- **Pull quote** (full-width, top of text register):  
  “Credit has FICO. Public markets have ratings agencies. Real estate has the appraisal. Partnership readiness has nothing.”
- **Body — Left**:  
  Every mature market converges on one trusted measure. The first credible, neutral body to define the score sets the reference everyone else quotes — and the platform that operationalizes it captures the recurring value.
- **Body — Right**:  
  We are building the FICO score for that market. FICO did not reach a $20B+ market cap by being a software company; it got there by becoming infrastructure the entire market depends on.
- **Bridge sentence** (new, full-width below the two-column body):  
  The mechanism that makes this possible is structural independence — a governance model that separates the standard from the platform, and the platform from the commercial interests of any single actor. That structure is already in place.
- **Image caption**: `Every mature market converges on one trusted measure.` (unchanged).

## Layout changes

- Image + timeline overlay: unchanged composition and left-to-right animation. The timeline still starts at 1956 and ends at Today.
- Text register below the image is reorganized from the current “quote left / body right” split into a stacked magazine sequence:
  1. Full-width pull quote (large, class `ed-quote`).
  2. Two-column body grid: `BODY — LEFT` on the left, `BODY — RIGHT` on the right, separated by a vertical rule or column gap.
  3. Full-width bridge sentence with a subtle top rule (`border-top`) to set it apart from the body and lead the eye toward Section 03/05.
- Keep the same `PageBody` padding and `ink` stock; no changes to the global color system or other spreads.

## Motion changes

- Preserve the existing `Settle` staggers and `PrecedentTimeline` left-to-right build.
- Pull quote, left body, right body, and bridge sentence each get their own `Settle` stagger so the text register reads in sequence after the image/timeline build.
- No new complex animation; `STATIC_REVIEW_MODE` / `prefers-reduced-motion` still renders final state instantly.

## File changes

- Edit `src/components/spreads/Spread02Insight.tsx` only.
- No new assets, no CSS file changes, no other spread changes.

## Verification

- Typecheck / build passes.
- Playwright screenshot at 1280 × 720: running head reads `02 / The Precedent`, kicker reads `THE PRECEDENT`, timeline starts with `1956 — FICO FOUNDED`, body is two columns, bridge sentence sits below as a full-width line with a top rule, no overflow or collisions, reduced-motion still renders final state.
