# Section 04 · The Ecosystem Flywheel

The approved 1536 × 1024 reference rendering is the visual source of truth. Where this plan and the reference disagree, the reference wins on composition, proportion, lighting, depth, and hierarchy. Supplied copy is used verbatim — nothing shortened or rewritten.

The page must read as a photographed luxury object inside a premium editorial publication: glass, machined aluminium, polished steel, etched surfaces, internal illumination, refraction, controlled bloom, real optical depth. Reference register: Apple hardware photography, Bang & Olufsen, Porsche Design, Nothing OS. Explicitly not: dashboards, SmartArt, Visio, PowerPoint wheels, flat infographics, generic glassmorphism, thin SVG strokes on black, card grids.

## Construction — layered product render, not an SVG drawing

The wheel is **not** one inline SVG. It is a stack of real DOM layers built from gradients (conic + radial), CSS masks, pseudo-elements, inset shadows, noise textures, controlled blur, and a small canvas. SVG is used only where it genuinely earns its place: tapered channel geometry, invisible motion paths, clip paths/masks, and animated stroke highlights. SVG is never the visible surface of the ring, hub, capsules, lighting, or atmosphere.

```text
FlywheelScene
  AtmosphericStage      BackgroundStock · Vignette · LightLeak ×2 · GrainTexture · GhostReadinessWord
  ProductStage          contain: paint
    OuterGlassAssembly  RearShadow · RefractionBand · MetalEdge · GlassFace · SpecularArc
    ChannelLayer        SVG geometry + motion paths only; visible depth from CSS glow layers
    ParticleCanvas      DPR capped ~1.5, tight particle cap
    MachinedHub         RearHousing · ConcentricMetalRings · EtchedGlassFace · InnerIllumination · HubTypography
    ActorCapsule × 6
  EditorialSidebar
  QuoteBand
  RunningFurniture      RunningHead · Folio
```

**Outer ring** — nested layers, no single stroked circle: separate rear shadow, brushed metal frame, refractive glass body, inner edge, outer edge, specular highlight. Edge weight, brightness, and transparency vary around the circumference; faint tonal irregularity/noise keeps it from looking mathematically perfect. Soft elliptical shadow beneath so it reads as suspended 5–10px above the page.

**Hub** — several concentric physical layers: rear housing, machined rings with restrained bevels and inset grooves, micro-edge highlights, a single hairline specular arc, faint etched detail, and a smoked/etched glass face with internal illumination. Brightest and most materially resolved part of the object. Hub type stays live selectable HTML: "The PRSC Readiness Score™" and its one-line definition.

**Channels** — narrow illuminated conduits embedded *beneath* the glass, never six plain lines from the centre. SVG defines the taper and the motion path; visible depth comes from layered glow, a bright core, falloff, particles, and a travelling specular highlight.

**Actor capsules** — semantic buttons positioned on the rim, overlapping it slightly so they read as mounted instruments: rear shadow, dark metal body, chamfered/clipped corners, inner bevel, edge highlight, restrained fastener detail, localized reflected channel colour. Not rounded rectangles. Index and name stay live text.

**Atmosphere** — deep black-blue photographic field (layered gradients + grain, not a flat fill), two restrained edge light leaks, subtle vignette, soft pool of reflected light under the object, and an enormous cropped outline **READINESS** at 2–3% opacity behind the wheel. The object is the only apparent light source. The reference screenshot is never used as a flattened background.

**Particles** — one lightweight canvas layer, slow and near-subliminal, intensifying briefly near the active channel then receding. No hundreds of SVG circles.

## Composition

```text
   04 / The Solution                                        DIS Origin

   THE ECOSYSTEM                          WHAT THEY GAIN
   FLYWHEEL                               Objective, portable proof…
   Every Actor.
   One Standard.            ( wheel )     WHY THE SCORE MATTERS
   Compounding Value.       ~760px        …
                            13% high
   subheadline              26px left     WHY DIS
                                          …
                                          TRACTION      ( LIVE )

   ──────────────────────────────────────────────────────────────────
     does not require        │  one credible  │  then gravity
     universal adoption      │  anchor        │  does the rest
   ──────────────────────────────────────────────────────────────────
   Vol. I · Decision Intelligence Systems                     04 · ii
```

Strong left editorial column, dominant central object, structured right editorial rail. Wheel raised ~13% above vertical centre, shifted 20–30px left of optical centre, generous gutter to the sidebar, nothing crowded against the viewport edge. Title breaks per the reference; the supporting statement is three stacked lines. The right rail is magazine typography — hairline separators between sections, never a panel or cards. LIVE keeps the reference's outlined treatment. Quote band matches the reference's three-part rhythm with vertical separators.

**Proportion is optical, not numeric.** 760px is a starting estimate only. At 1536 × 1024 the diameter and position get tuned until the silhouette and negative space match the reference — the wheel must never crowd the title column, sidebar, running head, or quote band. A stated number is dropped whenever it conflicts with the approved rendering.

## Two passes — static fidelity is approved before any motion

**Pass 1 · static product render.** The full 1536 × 1024 composition with zero animation. Render, compare against the reference, and refine scale, silhouette, material separation, lighting, typography, and spacing. Particles, pulse sequencing, parallax, and sidebar transitions do not begin until this still frame passes. If the first static render reads as a clean web infographic, glassmorphism component, SVG wheel, dashboard visualization, or presentation diagram, the product object gets rebuilt before anything moves.

More glow is not more depth. Depth comes from overlapping physical layers, occlusion, variable edge lighting, refractive surfaces, asymmetric highlights, localized reflections, material texture, contact and cast shadows, and controlled differences in sharpness. Having every planned layer present in the DOM is not the completion test.

**Pass 2 · motion.** Added only once the static frame reads as a premium physical object; it must never compensate for weak material rendering. A beautiful still frame is the primary deliverable.

## Motion

Arrival ≈2s: object nearly dark → hub illumination rises → one restrained pulse leaves the hub → travels a channel and around the ring → first capsule resolves → sidebar fades in last. Active cycle ≈4.5s, running only while this spread is active. A specular highlight travels the active pathway once, then is gone. Sidebar copy changes on a 700ms dissolve, no horizontal movement. Pointer parallax a few pixels, physical layers at different depths. Only opacity, transforms, mask position, and small canvas state animate — never layout. No bouncing, springs, rotating wheel, sliding panels, or attention-seeking loops. Reduced motion renders the fully composed static wheel with the first actor lit.

## One actor configuration drives everything

A single config array is the only source of actor geometry: index, exact supplied label, fixed angle, channel accent, active-state content, and accessibility label. Channel geometry, capsule placement, illumination, particle emphasis, and sidebar state all derive from it — no system positions itself independently. No actor-specific sidebar copy is invented. Until six approved sidebar states exist, capsules stay mounted labels (not fake buttons); semantic buttons appear only once activating a capsule swaps in real supplied content.

## Material colour

Brand tokens stay the chromatic foundation, but fidelity outranks token purity. Component-scoped material variables, derived colours, alpha values, `color-mix()`, gradient stops, texture maps, and neutral white/black optical values are allowed where needed for steel reflections, smoked glass, edge refraction, warm/cool metal variation, localized bloom, specular highlights, and surface noise. No unrelated brand colours are introduced.

## Sidebar glyphs

The small rail symbols may be simple SVG at that scale, treated as restrained editorial glyphs: fine optical weight, circular framing, spacing, and accents matched to the reference. No unmodified Lucide defaults. They stay subordinate to the typography and must not make the rail read as a feature list or dashboard.


## Performance and accessibility

`contain: paint` on the product stage; `will-change` only while active; timeline, particles, and pointer response pause when the spread is inactive; canvas DPR capped ≈1.5; no continuously animated large blur filters; static material layers pre-rendered where practical. Capsules are keyboard-focusable controls whose focus state uses the illumination system, not browser blue. Decorative material and particle layers are `aria-hidden`. Text stays selectable at readable contrast.

## Responsive

Desktop is authoritative. Tablet tightens margins but keeps the wheel/sidebar relationship. Mobile deliberately recomposes into editorial sections — title, product object, sidebar, quote band — keeping the physical rendering and live type, with labels legible and clear of the rim. No stacked cards.

## Files

- New `src/components/spreads/Spread04Flywheel.tsx` — scene, stages, capsules, sidebar, quote band; `isActive` driven.
- New `src/components/print/FlywheelObject.tsx` — the layered product render (ring assembly, hub, channels).
- New `src/components/print/ParticleRing.tsx` — capped canvas particle layer.
- `src/styles.css` — new `.fly*` block beside the depth/print section: atmosphere, ring layers, hub layers, channels, capsules, ghost word, sidebar, quote band. Brand tokens (`--layer-*`, `--edge`, `--spot`, `--live`, `--future`) as the base, plus component-scoped material variables where the render needs them.
- `src/routes/index.tsx` — insert after `Spread03Solution`, `spreadCount` 6 → 7; later spreads and shared components untouched.
- Reuses `Page`, `RunningHead`, `Folio`, `PageBody`, `Eyebrow`, `Settle`, `EASE`, `Carrier`, `useParallax`.

## Verification before calling it done

Render at 1536 × 1024 via Playwright and compare against the approved reference; iterate on proportion, material depth, lighting, and spacing. Checks: silhouette and spacing match the reference; a grayscale capture still reads as a dimensional physical object; ring shows distinct glass/metal/shadow/illumination layers; hub looks machined, not drawn; capsules look mounted; no part of the object looks like a default SVG stroke; right rail reads as magazine typography; quote band matches the three-part rhythm; motion feels slow and optical; reduced motion keeps the full composition; copy verbatim; no other spread touched.
