## One magazine, three treatments

No single look. The three directions become a **rhythm**, assigned by what each section has to do. A real magazine varies its treatment page to page while the chrome stays constant — that's what makes it feel edited rather than templated.

Constant across all 15: Signal Black → Midnight Slate → Oxford Blue tonal foundation, Platinum headlines, Fog body copy, DM Serif Display for display type, Space Grotesk / DM Mono for chrome, running heads and folios in the same position every page. Never a white page.

### The three treatments

**A · Stacked Plates** — offset solid panels at real depth, images inset into stacked outlined frames, one rim-lit edge per card. Best for hierarchy and lists.

**B · Outline Architecture** — hairline blueprint outlines, corner ticks, measurement rules, photography behind a foreground outline grid. Best for structure, systems, and anything that must read as engineered.

**C · Glass Strata** — frosted translucent panels floating over full-bleed imagery, teal/blue edge lighting, receding layers. Best for emotional and cinematic beats.

### Assignment

| # | Section | Treatment | Why |
|---|---|---|---|
| 1 | Cover | C | Existing cover stays; glass logic already fits it |
| 2 | The Problem | C | Emotional weight, full-bleed paddock imagery |
| 3 | The Insight | A | Already built as plates + overlaid timeline |
| 4 | The Solution | C | Terminal dashboard render deserves cinematic strata |
| 5 | The Structure | B | Entity architecture is literally a blueprint |
| 6 | The Four-Part Moat | A | Four peers — stacked plate grid |
| 7 | The Business Model | B | Revenue mechanics, outlined and measured |
| 8 | The Strategic Play | B | Five-step sequence on a drawn spine |
| 9 | Traction & Proof | A | Evidence tiles, one lit per proof point |
| 10 | The Founding Vanguard™ | C | Aspirational, photographic |
| 11 | Why Us | A | Credential plates behind a portrait |
| 12 | Roles This Round Funds | B | Org outline, dim boxes for unfilled roles |
| 13 | The Ask | A | One dominant plate, terms as marginalia |
| 14 | Use of Funds | B | Allocation bars as measured outlines |
| 15 | Closing Card | C | Full-bleed, single line, glass fade |

Sequence check: C C A C B A B B A C A B A B C — no treatment repeats more than twice, and every chapter turn changes texture.

### Accent logic

Electric Blue `#1EA7FF` carries structure and the single lit path. Neon Teal `#00FFC2` marks live/status states only (traction, active moats, filled roles). Violet `#7B61FF` is reserved for future-state — roadmap steps not yet reached, roles this round funds. Arctic Gray and Fog carry everything unlit, so the accents mean something by scarcity.

### Motion

Each treatment gets its own signature so the change of texture is felt, not just seen:
- **A** — plates settle in from behind, back to front, rim light igniting last
- **B** — outlines draw themselves, corner ticks snap in, dimension rules extend
- **C** — strata drift apart on scroll at differing rates, edge light blooms

Shared: reveal once on first view, hover lifts a single layer or clarifies a label, nothing ever requires interaction, full reduced-motion fallback renders everything in place.

### Technical

- Extend `src/components/print/` with `Plate`, `Blueprint`, and `Strata` primitives plus a shared `Layer` depth wrapper; `Page`, `RunningHead`, `Folio`, `Figure` stay as-is
- New tokens in `src/styles.css` for the tonal layer ramp, hairline outline colors, glass blur/tint, and the three accent roles
- One spread component per section in `src/components/spreads/`, each importing its treatment primitive
- Copy comes verbatim from `DIS_Investor_LookBook_Production_Brief.docx`; imagery from your uploaded set, with new generation only where nothing fits
- Verified with Playwright at desktop and narrow widths

### Build order

Sections 4, 5, 6 first — one of each treatment — so all three primitives get proven against real content before the remaining nine are built. Sections 1–3 get retrofitted onto the shared primitives at the end, with no visual change to the cover.
