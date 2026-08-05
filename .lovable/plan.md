# Section 05 — Layered Tower Asset Integration

Replace the current full-bleed governance plate with the supplied isolated tower: one master image plus five registered animation layers, with all typography staying live.

## Assets

Uploaded via Lovable Assets as CDN pointers in `src/assets/` (no binaries committed):

- `section05_tower_master.png` — static and reduced-motion image
- `section05_tower_01_parent.png`
- `section05_tower_02_standard.png`
- `section05_tower_03_platform.png`
- `section05_tower_04_firewall.png`
- `section05_tower_05_agency.png`

The QA composite `section05_tower_layers_reconstructed.png` is used for verification only and is not shipped.

## Composition

- One tower stage element sized to the shared 1154 × 1363 canvas, centered on the existing Signal Black ground, with generous padding and no cropping at any breakpoint.
- Every layer is absolutely positioned at identical `inset: 0`, identical width/height, and identical `transform-origin`. No per-floor scale, crop, offset, rotation, or skew. No 3D transforms and no perspective animation.
- The master sits beneath the layers as the base plate; layers reveal on top in registration so the composite matches the master.

## Motion

- Reveal order: Parent → Standard → Platform → Firewall → Agency.
- Per layer: short opacity fade plus at most 12 px downward settle, easing to rest.
- A brief brightness lift at that floor's physical seam, returning to normal — implemented as a seam highlight element inside the same registered stage, not a transform on the floor.
- `prefers-reduced-motion: reduce` (and static review mode): master image only, all live labels visible, no layer animation.

## Typography and overlay

- All entity names, role labels, the INDEPENDENCE FIREWALL band label, and the SAFE conversion arrow remain live HTML/SVG. Nothing is baked into the render.
- The registered SVG overlay's `viewBox` and `preserveAspectRatio` are re-derived to the tower's 1154 × 1363 artboard so type scales exactly with the object; label coordinates are re-anchored to the new floor geometry (PARENT on the top volume, THE STANDARD on the second, THE PLATFORM on the third, the firewall label in the recessed dark band, NuDaze on the base volume).
- The SAFE arrow runs once and terminates only at the DIS / Platform floor.
- Approved copy is unchanged: investor rule headline, the four protection statements, the NuDaze arm's-length mark, screen-reader entity list, running head `05 / The Structure`, folio `05`.

## Technical notes

- `src/components/spreads/Spread05Structure.tsx` is rewritten around the layered stage; Section 05 CSS stays section-scoped in `src/styles.css` so no other spread is affected. Framer Motion drives the reveal; only the active spread animates.
- The old `/section05-governance-plate-r1.webp` reference is removed once the new composition verifies.
- Responsive: 1280 × 720 desktop reference preserved; tablet and mobile scale the whole stage as a unit and drop peripheral annotations first — the tower is never recomposed.

## Verification

Playwright sweep at 1280 × 720, large desktop, tablet landscape/portrait, and mobile, plus reduced motion: layer registration matches the master (no seams or ghosting), no cropping, labels land on their correct floors, SAFE terminates at the Platform floor, no overflow or collisions. Nothing outside Section 05 changes.
