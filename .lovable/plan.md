# Section 04 · The Ecosystem Flywheel

The publication pauses here. One object, perfect lighting, everything else in support. This becomes the page a reader remembers.

## Composition

```text
        04 / The Solution                             DIS Origin

        THE ECOSYSTEM FLYWHEEL
        Every Actor. One Standard. Compounding Value.
        subheadline, quiet, one line

                    ( 760px flywheel )              ┌ placard ─────┐
              01 ─────────  ●  ────────── 02        │ WHAT THEY    │
              06        machined hub       03       │ GAIN         │
                    05 ───────── 04                 │ WHY THE      │
                                                    │ SCORE MATTERS│
                                                    │ WHY DIS      │
                                                    │ TRACTION LIVE│
                                                    └──────────────┘
        ────────────────────────────────────────────────────────────
              The flywheel does not require universal adoption
              to start. It requires one credible anchor.
                      Then gravity does the rest.

        Vol. I · Decision Intelligence Systems              04 · ii
```

- Wheel sits raised ~13% off vertical centre, sized 700–800px (fluid, capped by viewport height), so the space below breathes.
- Detail placard sits to the right of the wheel, optically aligned to the hub, not stacked in a column.
- Bottom statement is a centred pull quote in the editorial serif — large, quiet, never a footnote.

## The object

- **Hub** — precision hardware, not a disc: three concentric machined rings, an etched-glass face, soft internal illumination bleeding from the centre, one hairline specular arc for reflection. Holds "The PRSC Readiness Score™" and its line "The shared reference point that makes the ecosystem legible."
- **Ring** — a physical glass band with inner and outer edge highlights, a faint refraction gradient, an outer glow and a soft drop shadow so it floats 5–10px above the page. Slight perspective tilt.
- **Pathways, not wedges** — six narrow light channels running from hub to rim, each a tapered gradient that reads as energy in a machined channel. Dim at rest, brightening when their actor is live.
- **Labels** — mounted capsules on the rim, engraved-instrument style: tiny mono index (01–06) above a two-line name, hairline border, faint inner shading. No floating text.

## Motion — light, not drawing

- **Arrival:** the hub wakes first (illumination rises from zero), emits one pulse, and that pulse travels the ring. Where it lands, that actor's channel and capsule light, then the placard resolves. No outline-draw, no rotate-in.
- **Cycle:** every ~4s the hub emits again; the pulse travels to the next actor, lights it, and the placard cross-fades. Continuous, unhurried, only while this spread is active.
- **Circulating intelligence:** a continuous, near-imperceptible stream of particles drifts around the ring at all times — the compounding metaphor. When a segment goes live the stream briefly intensifies at that point, then carries on.
- **Hover:** nothing jumps. Glow rises on that channel and capsule, the placard updates, one small tick of scale on the capsule. Pointer parallax drifts the ring a few pixels against the placard.
- **Inbound transition:** carried over from the Readiness Terminal — the data motes converge inward toward the hub as this page enters, and the hub receives them before it wakes.
- Reduced motion: static wheel, first actor lit, no particles, no pulse.

## Lighting

Brightest page in the run so far. Base stock stays dark and quiet so the object is the only light source: hub bloom, ring edge light, two faint light leaks at the page corners, and a subtle vignette pulling attention inward. Electric Blue leads; steel and future tones differentiate the six channels so the wheel is not monochrome.

## Copy

All six actor entries used verbatim as supplied — *What they gain*, *Why the score matters*, *Why DIS*, *Traction* — with Traction rendered as a small mono status chip on the placard (LIVE / IN PIPELINE / OPEN). Headline set as three stacked lines: "Every Actor. / One Standard. / Compounding Value."

## Technical notes

- New `src/components/spreads/Spread04Flywheel.tsx`, `isActive`-driven like the other spreads; inserted in `src/routes/index.tsx` after `Spread03Solution`, `spreadCount` 6 → 7. Existing later spreads keep their folios; this page is `04 · ii`.
- Wheel is one inline SVG: ring bands, six tapered channel paths, hub rings, plus `<defs>` radial/linear gradients, a blur filter for bloom and a mask for the specular arc. Capsules and placard are HTML absolutely positioned over it so type stays crisp and selectable.
- Pulse and particle stream are Framer Motion animations along the ring path (`offsetDistance` / `pathLength` on a small set of motes, one shared timeline) — capped element count, GPU transforms only.
- Ring float and pointer drift reuse `Carrier` / `useParallax`; new outbound-to-inbound handoff reads the same active-spread signal already passed down.
- New CSS in `src/styles.css` beside the depth/print section: `.fly`, `.fly__ring`, `.fly__hub`, `.fly__chan`, `.fly__cap`, `.fly__placard`, `.fly__leak`, resolving colour from `--layer-*`, `--edge`, `--spot`, `--live`, `--future`. No hardcoded hex.
- Reuses `Page`, `RunningHead`, `Folio`, `PageBody`, `Eyebrow`, `Tag`, `Settle`, `EASE`.
