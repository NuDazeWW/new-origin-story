# Project ORIGIN — Complete Publication Pass (Sections 05–15)

One continuous editorial build. Cover and Sections 01–04 (including the approved Ecosystem Flywheel) are untouched. Sections 05 and 06 are visually rebuilt; Sections 07–15 are new spreads. One QA pass and a contact sheet at the end, then stop.

## Tonal sequence

```text
05 dark architectural   06 platinum material   07 deep-slate economics
08 cinematic daylight   09 bright ledger       10 dark sculptural field
11 light portrait       12 bright planes       13 dark capital crescendo
14 bright quantitative  15 Signal Black close
```

No more than two dark spreads adjacent; six of eleven read light, photographic, or high-key.

## Palette discipline

Only the DIS side of the palette. Colour arrives as paper changes, large fields, split compositions, tinted photography, translucent material, oversized type, and edge rules — never as card borders, badges, status chips, or category rainbows. Section signal colours: 05 Electric Blue, 06 Electric/Cyber/Data Purple by moat layer, 07 Cyber–Aurora vs Violet–Data Purple with Ice White at the exchange, 08 daylight silver, 09 four proof-status inks on Platinum, 10 Aurora/Violet, 11 Fog/Steel, 12 Steel–Electric vs Fog–Cyber, 13 Ice White $2.5M with Electric→Aurora→Violet closes, 14 proportional bands, 15 one Electric horizon.

## Section builds

**05 — The Structure That Protects Your Investment.** Replace the entity diagram. The supplied governed-infrastructure image becomes the visual surface, composed on a hard architectural seam. Entities read as editorial annotations pinned to the architecture: NicoleIsNine Holdings (parent), PRSC LLC (independent standard, crest here only), DIS Inc. (platform, sole SAFE destination), NuDaze at arm's length across the seam. The firewall is spatial and material, not a labelled box. One luminous SAFE route resolving at DIS, once. Slow parallax; annotations sequence in.

**06 — The Four-Part Moat.** Replace the 2×2 grid with one asymmetric luxury-product composition on a platinum ground, built from supplied metallic imagery plus layered HTML/CSS surfaces, masks, reflections, cast and contact shadows, grain, and restrained vector geometry. It must read as photographed hardware; no new imagery is generated or invented. The four strata overlap, crop each other, and sit at different depths and scales — never four equal bars, cards, or labelled rectangles. Trade-Secret Methodology and Independent Governance are fully formed and lit; Benchmark Database accumulates; Outcome Intelligence is translucent and extending past the crop. Status words sit as hairline annotations. The independence quotation is set at object scale as the co-anchor. Light travels the completed layers once.

**07 — The Business Model.** No flywheel, no cards, no process diagram. An atmospheric editorial landscape on Deep Slate: free supply entering from the left in Cyber/Aurora atmosphere, paid demand from the right in Violet/Data Purple, compounding intelligence as a dense Ice White seam where the two atmospheres meet. No arrows between labelled nodes, and no symmetrical node-and-connector layout. DIS platform revenue and PRSC Council revenue sit as editorial text columns set directly into the landscape — not inside panels — kept visually and financially distinct.

**08 — The Strategic Play.** Full-bleed daylight motorsport field, natural sky and silver preserved. A single luminous racing line runs the composition once on entry; the five steps are milestones along it — step 1 established, step 2 in focus, 3–5 receding to the horizon. Anchor pipeline set as a quiet type band, text only.

**09 — Traction & Proof Points.** High-key Platinum evidence spread, Steel Blue type, generous negative space. "THE FIRST 90 DAYS" is the dominant element; the seven proof points are ledger entries with status set as typography (LIVE, UNDERWAY, EXECUTED, FILED, IN PLACE, CONFIRMED) in the four accent inks. No badges, no dashboard.

**10 — The Founding Vanguard™.** Midnight Slate field of 25 sculptural apertures in a precision formation with real depth — not a grid, not a seating chart. All positions neutral (no filled/unfilled colour coding). The three tranches read as successive movements through the field with their questions as editorial captions.

**11 — Why Us.** Light, quiet, portrait-led. Shirley Johnson holds the primary narrative position, Allen Bestwick secondary. No portrait is shown for anyone without a supplied verified image; no generated faces. The four unresolved council profiles appear as a deliberately unfinished "Council in formation" roster with no invented titles or bios. No blue wash over faces.

**12 — Roles This Round Funds.** Platinum ground, two broad spatial planes — Initial Close $850K in Steel/Electric, Second Close $900K in Fog/Cyber — sequenced in depth. Roles are positions in a system, set typographically. No table, no cards.

**13 — The Ask.** Oxford Blue / Signal Black. $2.5M as an Ice White typographic event. Three closes as a rising progression in space and light (Electric → Aurora → restrained Violet), each carrying amount, date, trigger, and proof. Terms sit as a quiet legal band; closing statement as the last line.

**14 — Use of Funds.** Ice White annual-report spread. Seven proportional bands, widths mathematically exact to 42/18/14/10/6/4/6, total $2,500,000 led with the total and the largest allocation. A semantic table is included for assistive technology and print. No donut.

**15 — Closing Card.** Signal Black full bleed, one restrained light horizon, approved DIS mark, Ice White type. The quietest spread. No invented contact or confidential notice beyond the supplied lines.

## Technical notes

- New spread components in `src/components/spreads/`, section CSS appended to `src/styles.css` under section-scoped roots so earlier spreads cannot be affected. Existing `Page`/`PageBody`/`RunningHead`/`Folio` and the `Settle`, `Plate`, `Blueprint`, `Strata`, `useParallax` primitives are reused.
- `pg--paper` gains light variants (platinum, ice) as additional stock values rather than new page shells.
- `src/routes/index.tsx` registers Sections 07–15 and passes `isActive` per spread; the progress count derives from the spread collection instead of a hardcoded `spreadCount`, so `Publication` takes the children length.
- Imagery: supplied assets only, wired through the existing `*.asset.json` import pattern. No stock, no generated portraits or logos.
- Motion: Framer Motion only (already installed) — parallax, fades, depth, light and type sequencing, single-run signal moves, image scale within 1.00–1.04. Only the active spread animates; reduced motion drops to static.
- Responsive: 1280×720 desktop reference preserved; tablet keeps composition and drops peripheral annotations first; mobile recomposes each spread into editorial panels with parallax and expensive effects removed.
- Copy is used verbatim; only line breaks and emphasis change. Unresolved fields (council titles/bios, DIS contact) stay as tokens in the content source, never displayed as bracketed placeholders, and are reported as content dependencies at the end.

## Final QA

Playwright sweep of every spread at 1280×720, large desktop, tablet landscape/portrait, mobile, reduced motion, and keyboard-only; checks that 01–04 and the flywheel are unchanged, that each banned composition is absent, that no adjacent spreads share a dominant silhouette, that totals and percentages are exact, that navigation reaches every spread, and that no overflow or collisions exist. Ends with a contact sheet of Sections 05–15 for holistic review, then stop.
