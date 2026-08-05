# Section 05 — Isolated Glass Tower Asset

Generate the approved tower as a standalone premium product render on flat chroma-magenta, key it to transparency, and swap it into Section 05 in place of the current full-bleed governance plate.

## Steps

1. **Generate the render** using the supplied prompt verbatim (premium quality tier, 1536×1536 for full silhouette with padding): three tightly stacked glass volumes with shared envelope and continuous mullions, recessed dark-glass firewall band, wider illuminated base, approved three-quarter perspective, optical/smoked glass with brushed platinum edges, restrained cyan seams and violet foundation light, flat solid chroma-magenta background, no text or scenery.
2. **Review the render** visually. Reject and regenerate if it reads as stacked cards, wireframe, infographic, is cropped, or the magenta is not flat.
3. **Key out the magenta** to a transparent PNG (tolerance-based chroma key with edge de-fringe so no magenta spill remains in glass reflections), saved as the Section 05 tower asset.
4. **Integrate into Section 05**: the tower becomes the object in the composition on the existing dark ground; the registered SVG typography overlay is re-anchored to the new tower geometry so PARENT / THE STANDARD / INDEPENDENCE FIREWALL / THE PLATFORM and the single SAFE route still land on their correct physical floors. Left column copy (investor rule + four protection statements), NuDaze arm's-length mark, screen-reader structure, running head and folio stay exactly as approved.
5. **Verify** with Playwright at 1280×720, large desktop, tablet, and mobile: no cropping, no magenta fringe, labels registered to floors, no overflow or collisions.

## Technical notes

- Asset saved under `src/assets/` and wired through the existing `*.asset.json` import pattern; the old `/section05-governance-plate-r1.webp` reference is removed only after the new composition verifies.
- Overlay stays one SVG with a fixed `viewBox` and cover-matched `preserveAspectRatio` so type and object scale together; coordinates are re-derived from the new tower, not reused.
- Motion unchanged in kind: slow parallax on the object, annotations sequencing in, one single-run SAFE move; reduced motion renders static.
- No new copy. Nothing outside Section 05 is touched.

## Open dependency

If the render cannot hit the brief after a second attempt, I will report it rather than ship a weaker object or fall back to CSS geometry.
