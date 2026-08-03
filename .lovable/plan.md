# Section 04 · The Ecosystem Flywheel

The publication pauses here. One object, perfect lighting, everything else in support. Beautiful from twenty feet, incredibly clear up close.

## Composition

```text
        04 / The Solution                             DIS Origin

        THE ECOSYSTEM FLYWHEEL
        Every Actor. One Standard. Compounding Value.
        subheadline, quiet, one line

                                                WHAT THEY GAIN
              ( 760px flywheel, offset          Objective, portable proof…
                ~26px left of centre )
              01 ─────  ●  ───── 02             WHY THE SCORE MATTERS
              06   machined hub   03            …
                  05 ───── 04                   WHY DIS
                                                …
                                                TRACTION   LIVE

        ────────────────────────────────────────────────────────────

              The flywheel does not require
              universal adoption to start.

              It requires one credible anchor.

              Then gravity does the rest.

        ────────────────────────────────────────────────────────────
        Vol. I · Decision Intelligence Systems              04 · ii
```

- Wheel raised ~13% off vertical centre and shifted **20–30px left of optical centre** so the composition reads designed, not generated.
- Generous margins: rim capsules never come within a wide gutter of the page edge or the sidebar. Negative space carries the luxury.
- **No detail panel.** The supporting copy is an editorial sidebar — no border, no card, no glass. Small-caps mono labels (WHAT THEY GAIN / WHY THE SCORE MATTERS / WHY DIS / TRACTION), generous leading, ragged-right measure, optically aligned to the wheel's hub line. Traction is a single word set in the accent (LIVE / IN PIPELINE / OPEN), no chip.
- **Invisible layer:** a gigantic outline-set word — READINESS — behind the wheel at 2–3% opacity, cropped by the page. Depth you feel, not read.

## The object

- **Hub** — precision hardware: concentric machined rings, etched-glass face, soft internal illumination, one hairline specular arc. Holds "The PRSC Readiness Score™" and "The shared reference point that makes the ecosystem legible."
- **Ring** — a physical glass band: inner and outer edge highlights, faint refraction, outer glow, soft shadow so it floats 5–10px above the page, slight perspective.
- **Pathways, not wedges** — six narrow tapered light channels from hub to rim. Dim at rest; the live one carries light.
- **Labels** — mounted capsules on the rim, engraved-instrument style: tiny mono index above a two-line name, hairline border, faint inner shading.

## Motion — slow enough to feel expensive

- **Arrival ~2s:** hub illumination rises, emits one pulse, the pulse travels the ring, the first actor lights, the sidebar resolves last.
- **Pulse cycle 4.5s:** hub emits, pulse travels to the next actor, lights it. Only while this spread is active.
- **Crossfade 700ms** on the sidebar copy — no slide, just a slow dissolve.
- **Specular pass:** as a pathway lights, a small travelling highlight runs its length once, like polished aluminium catching light, then it's gone.
- **Circulating intelligence:** a near-imperceptible particle stream drifts continuously around the ring, briefly intensifying where a segment goes live. Very slow.
- **Hover:** nothing jumps — glow rises, sidebar updates. Pointer parallax drifts the ring a few pixels against the sidebar.
- **Inbound handoff:** the Readiness Terminal's motes converge into the hub as this page enters.
- No animation beyond the above. Reduced motion: static wheel, first actor lit.

## The pull quote as a destination

Separated from the wheel by a full band of space and framed by two hairline rules. Centred, large editorial serif, broken across four quiet lines exactly as written. It reads as its own spread within the page — the line investors remember.

## Lighting

Brightest page in the run. Dark quiet stock so the object is the only light source: hub bloom, ring edge light, two faint corner light leaks, subtle vignette. Electric Blue leads; steel and future tones differentiate the six channels.

## Copy

All six actor entries verbatim as supplied. Headline set as three stacked lines: "Every Actor. / One Standard. / Compounding Value."

## Technical notes

- New `src/components/spreads/Spread04Flywheel.tsx`, `isActive`-driven; inserted in `src/routes/index.tsx` after `Spread03Solution`, `spreadCount` 6 → 7. Folio `04 · ii`; later spreads unchanged.
- Wheel is one inline SVG: ring bands, six tapered channels, hub rings, `<defs>` gradients, blur filter for bloom, mask for the specular arc and the travelling highlight. Capsules and sidebar are HTML over it so type stays crisp and selectable.
- Pulse, specular pass, and particle stream share one Framer Motion timeline keyed off the active index; capped element count, GPU transforms only.
- Ring float and pointer drift reuse `Carrier` / `useParallax`.
- New CSS in `src/styles.css` beside the depth/print section: `.fly`, `.fly__ring`, `.fly__hub`, `.fly__chan`, `.fly__cap`, `.fly__aside`, `.fly__ghost`, `.fly__quote`, `.fly__leak` — colour from `--layer-*`, `--edge`, `--spot`, `--live`, `--future`. No hardcoded hex.
- Reuses `Page`, `RunningHead`, `Folio`, `PageBody`, `Eyebrow`, `Settle`, `EASE`.
