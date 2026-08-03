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

## Motion

Arrival ≈2s: object nearly dark → hub illumination rises → one restrained pulse leaves the hub → travels a channel and around the ring → first capsule resolves → sidebar fades in last. Active cycle ≈4.5s, running only while this spread is active. A specular highlight travels the active pathway once, then is gone. Sidebar copy changes on a 700ms dissolve, no horizontal movement. Pointer parallax a few pixels, physical layers at different depths. Only opacity, transforms, mask position, and small canvas state animate — never layout. No bouncing, springs, rotating wheel, sliding panels, or attention-seeking loops. Reduced motion renders the fully composed static wheel with the first actor lit.

## Performance and accessibility

`contain: paint` on the product stage; `will-change` only while active; timeline, particles, and pointer response pause when the spread is inactive; canvas DPR capped ≈1.5; no continuously animated large blur filters; static material layers pre-rendered where practical. Capsules are keyboard-focusable controls whose focus state uses the illumination system, not browser blue. Decorative material and particle layers are `aria-hidden`. Text stays selectable at readable contrast.

## Responsive

Desktop is authoritative. Tablet tightens margins but keeps the wheel/sidebar relationship. Mobile deliberately recomposes into editorial sections — title, product object, sidebar, quote band — keeping the physical rendering and live type, with labels legible and clear of the rim. No stacked cards.

## Files

- New `src/components/spreads/Spread04Flywheel.tsx` — scene, stages, capsules, sidebar, quote band; `isActive` driven.
- New `src/components/print/FlywheelObject.tsx` — the layered product render (ring assembly, hub, channels).
- New `src/components/print/ParticleRing.tsx` — capped canvas particle layer.
- `src/styles.css` — new `.fly*` block beside the depth/print section: atmosphere, ring layers, hub layers, channels, capsules, ghost word, sidebar, quote band. All colour from existing tokens (`--layer-*`, `--edge`, `--spot`, `--live`, `--future`); no hardcoded hex.
- `src/routes/index.tsx` — insert after `Spread03Solution`, `spreadCount` 6 → 7; later spreads and shared components untouched.
- Reuses `Page`, `RunningHead`, `Folio`, `PageBody`, `Eyebrow`, `Settle`, `EASE`, `Carrier`, `useParallax`.

## Verification before calling it done

Render at 1536 × 1024 via Playwright and compare against the approved reference; iterate on proportion, material depth, lighting, and spacing. Checks: silhouette and spacing match the reference; a grayscale capture still reads as a dimensional physical object; ring shows distinct glass/metal/shadow/illumination layers; hub looks machined, not drawn; capsules look mounted; no part of the object looks like a default SVG stroke; right rail reads as magazine typography; quote band matches the three-part rhythm; motion feels slow and optical; reduced motion keeps the full composition; copy verbatim; no other spread touched.
