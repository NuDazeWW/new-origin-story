# Section 04 — Ecosystem Flywheel: Visual Correction Pass

Scope: correct the appearance of the existing Section 04 spread only. No rebuild, no copy changes, no interaction/engine changes, no other spread touched. Static still frame first; motion refinement only after the frame is approved.

## Pass 1 — Freeze and calibrate the still frame

Temporarily pin the QA state to Actor 01 (auto-cycling disabled behind a single local constant, all interaction code left intact) so the static frame can be judged and screenshotted deterministically.

### Composition (at the real 1280 x 720 page canvas)
- Wheel visual diameter ~500px (up from 418).
- Wheel centre moved ~50px left and slightly down: roughly x555 / y305.
- Left column, wheel, sidebar rebalanced optically — sidebar starts ~x930, with 24–32px clear space between the right capsule and the sidebar.
- Quote band starts ~y560, height ~84px.

### Left editorial column
- Title: two-line editorial serif, ~42px, tight leading.
- "Every Actor. / One Standard. / Compounding Value." becomes editorial serif ~28px on three lines, pale steel/electric blue, normal tracking, generous leading — the emotional thesis, not an eyebrow label.
- Narrative: same wording, ~14.5px, 1.6 line height, short hairline rule above, controlled ragged-right measure.

### Outer ring material
Recalibrate the existing ring layers so the rim reads as an 18–28px precision assembly instead of one pale 45px donut: rear housing shadow, narrow dark frame, bright outer edge, transparent smoked glass band, thin inner edge, localized specular arcs, interrupted highlights, irregular grain, restrained blue internal reflection. Conic gradients broken into light/dark zones, at least one sharp white and one cool blue interruption, true blacks preserved, no uniform circumference brightness, no added global glow.

### Hub as primary light source
Hub assembly ~232px, illuminated score face ~148px, multiple metal and inset rings, warm platinum/ice-white face with dark high-contrast live type, warm reflection on nearby metal, cool blue reflected edge opposite, one crisp specular arc, fine etching, stronger lamp falloff. Rim brightness reduced so the hub clearly wins the eye.

### Actor capsules
~95 x 70px (controlled exception for the longest name), chamfered corners, restrained fasteners, dark smoked-metal body, inner bevel, thin edge highlight, rear shadow, localized channel-colour reflection, brightened active edge, index above name, optically centred type. Mounted partly over the rim; Actor 01 at twelve o'clock, Actor 04 at six o'clock, others on the reference radial positions. Two-line wrapping fixed so no "Manu- / facturers" break.

### Channels
Four optical levels per pathway — ambient conduit, wide bloom, narrow saturated body, tiny white specular core — originating beneath the hub and continuing under the glass band. All pathways faintly visible at rest; the active one materially brighter but not neon. Accent shared across pathway, ring reflection, capsule edge, particle cluster, sidebar.

### Particles
Raise static readability: broken circulating field near the inner circumference, varied size/brightness, sparse white points among coloured ones, light clustering near the active actor — visible at normal scale, still subordinate to the ring.

### Lighting environment
Strengthen locally without lifting the whole background: upper-right cool leak, lower-edge reflection, elliptical floor pool, cast and contact shadow, reflected light under the six-o'clock capsule, cropped READINESS outline, subtle blue atmosphere behind the sidebar. Deep blacks preserved.

### Sidebar
Actor heading ~19px serif treated as quiet editorial context; labels ~12px mono small caps; body ~14px at 1.55 line height; clearer accent differentiation; hairlines with enough contrast; more breathing room. Borderless — no cards, pills, or boxes. Glyphs refined and subordinate.

### Quote band
~21px editorial serif, generous leading, stronger top/bottom hairlines, restrained vertical separators, vertically centred, deliberate line breaks, equal optical weight across the three statements.

### Depth test
The corrected frame must show occlusion, front-to-back order, variable sharpness, asymmetric highlights, true transparency, localized reflection, inset/cast/contact shadow, warm-cool metal variation, and dark values adjacent to bright edges.

## Acceptance gate
Screenshot Section 04 at 1280 x 720 (plus a grayscale pass) and check all twelve stated criteria — dominance, leftward centre shift, hub brighter than rim, separated glass/metal, mounted capsules, serif thesis, readable sidebar, quote as destination, visible particles, dimensional grayscale, nothing resembling a default CSS donut, no other spread changed.

## Mandatory human approval checkpoint

Pass 1 ends with a full stop: auto-cycling stays pinned to Actor 01, no motion refinement begins, and the static frame goes to you for approval. Artifacts delivered at that stop:

- Clean 1280 x 720 PNG — no editor or browser chrome, Actor 01 active, fonts and image assets fully loaded, animation frozen in the intended static state
- Matching grayscale version
- Side-by-side comparison with the approved reference normalized to 1280 x 720
- A 50% opacity overlay comparison where feasible
- The final measured wheel diameter and centre coordinates, reported

The reference is used for comparison only — never inserted, traced, rasterized, or used as a production background layer. Only explicit human approval authorizes Pass 2. The gate is never declared passed on the basis of DOM layers present, gradient or shadow count, component completion, a clean build, working animation, or my own visual assessment.

## CSS containment

Every correction in `src/styles.css` stays scoped under the Section 04 `.fly` / `.fly-pg` namespace. No shared typography, page, button, canvas, SVG, or publication selector is changed to achieve the correction. After Pass 1, spreads 03 and 05 are captured once to confirm no global regression.

## Pass 2 — Motion (only after explicit approval)
Restore isActive-driven arrival with Actor 01 lit through the full arrival, meaningful dwell, one actor per ~4.5s cycle, click/keyboard selection preserved, auto-cycling paused after direct selection, 700ms sidebar dissolve, parallax a few pixels, animation limited to specular position and light intensity, reduced motion showing the approved static Actor 01 frame.

### Release hygiene
Remove the temporary Actor 01 QA pin, restore production `isActive` behavior, then verify: Actor 01 lit through the full arrival, click selection, keyboard selection, auto-cycling pausing after direct selection, animation stopping on inactive spreads, and reduced motion rendering the approved static Actor 01 frame. Capture one final 1280 x 720 screenshot after motion is restored and confirm the diff is limited to the four Section 04 files and the scoped `.fly*` CSS block.

## Technical notes
Work is confined to the Section 04 flywheel CSS block in `src/styles.css` and the four Section 04 files (`FlywheelObject.tsx`, `ParticleRing.tsx`, `Spread04Flywheel.tsx`, `flywheelActors.ts` line-break fields only). Geometry stays driven by the existing `--d` / `--R` custom properties on `.fly__stage`; capsule and channel placement continue to derive from the single actor config. Shared `Page`, publication engine, and global canvas untouched.
