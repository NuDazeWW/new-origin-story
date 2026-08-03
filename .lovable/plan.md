# Section 04 · The Ecosystem Flywheel

A second page inside section 04 / The Solution, immediately after the Readiness Terminal spread. Same ink stock, same running head and folio chrome, same interaction grammar as the Terminal page: it plays on its own, and hovering pins it.

## The page

```text
        04 / The Solution                             DIS Origin
        THE ECOSYSTEM FLYWHEEL
        Every Actor. One Standard. Compounding Value.
        subheadline ------------------------------------------

                 01 Teams & Drivers
        06 Partners            ·            02 Brands
                    ┌──────────────────┐
                    │  PRSC READINESS  │        [ detail panel ]
                    │      SCORE™      │        What they gain
                    └──────────────────┘        Why the score matters
        05 Operators           ·            03 Series          Why DIS
                 04 Manufacturers                     Traction

        The flywheel does not require universal adoption to start...
        Vol. I · Decision Intelligence Systems              04 · ii
```

- Center: a lit disc holding **The PRSC Readiness Score™** with the line "The shared reference point that makes the ecosystem legible." Radial hairlines and a slow, continuous rotation of the outer ring only — type stays upright.
- Six slices radiate outward at 60-degree intervals, each a wedge of hairline outline plus a numbered label chip (01–06) sitting on the rim.
- Right-hand light-box carries the active slice's four-part copy verbatim: *What they gain*, *Why the score matters*, *Why DIS*, *Traction*. Traction reads as a small monospace status chip.
- Full-width anchor line beneath the diagram, in the editorial serif register.

## Motion and light

- **Build:** ring draws itself clockwise on first view, then the six wedges fade and extend outward in sequence, then the center disc blooms. All once, on entry, under 1.6s total.
- **Cycle:** the lit slice advances every ~4s while the page is the active spread — the wedge fills, its rim label brightens, a bloom travels to its position, and the detail panel cross-fades.
- **Hover:** hovering any slice or its label pins the cycle to it and lifts that wedge slightly outward; leaving resumes the cycle. Nothing requires interaction.
- Accent roles rotate across the six slices using the existing `--spot` / `--live` / `--future` tokens so the wheel is not monochrome.
- Pointer parallax via the existing carrier: the ring drifts a few pixels against the detail panel for depth.
- Everything above is disabled under reduced motion (static, first slice lit).

## Technical notes

- New `src/components/spreads/Spread04Flywheel.tsx`, taking `isActive` like the other spreads; wired into `src/routes/index.tsx` after `Spread03Solution`, `spreadCount` 6 → 7. Later spreads keep their existing folios; this page is folio `04 · ii`.
- Diagram is one inline SVG (ring, radial spokes, six wedge paths, `pathLength` draw animations via Framer Motion) with absolutely positioned HTML label chips so type stays crisp and selectable.
- New CSS in `src/styles.css` under the existing print/depth section: `.fly`, `.fly__hub`, `.fly__slice`, `.fly__chip`, `.fly__panel`, reusing `--layer-*`, `--edge`, and the existing `.lbox`/`.tag` conventions. No hardcoded hex.
- Reuses `Page`, `RunningHead`, `Folio`, `PageBody`, `Eyebrow`, `Settle`, `Carrier`, and `EASE` — no new primitives.
- Copy used exactly as supplied.
