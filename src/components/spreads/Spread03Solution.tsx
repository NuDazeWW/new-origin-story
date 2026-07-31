/**
 * SPREAD 03 — The Solution  ·  Treatment C · Glass Strata
 * The Readiness Terminal render runs full bleed; frosted strata float above it,
 * each carrying one of the four components.
 */

import terminalAsset from "@/assets/dis-terminal.png.asset.json";
import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { Strata, StrataBed, Eyebrow } from "@/components/print/Layers";

const COMPONENTS = [
  {
    title: "The Readiness Engine™",
    text: "Proprietary scoring mathematics. Trade secret.",
    accent: "spot" as const,
  },
  {
    title: "The PRSC Readiness Score™",
    text: "A single 0–100 market-facing number.",
    accent: "live" as const,
  },
  {
    title: "Diagnostic Surfaces",
    text: "Multi-dimension canvas across all six Readiness Dimensions™.",
    accent: "spot" as const,
  },
  {
    title: "Benchmark Database",
    text: "The compounding data moat.",
    accent: "future" as const,
  },
];

export default function Spread03Solution({ isActive = false }: { isActive?: boolean }) {
  void isActive;

  return (
    <Page stock="ink">
      <RunningHead chapter="04 / The Solution" issue="DIS Origin" />

      <PageBody>
        <StrataBed
          src={terminalAsset.url}
          alt="The Readiness Terminal across desktop, tablet, phone and watch"
          objectPosition="center 45%"
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 1fr)",
            gap: "3rem",
            alignItems: "center",
            padding: "1.2rem 4.5rem",
            minHeight: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem", minWidth: 0 }}>
            <Settle>
              <div className="sec-head">
                <Eyebrow>The Readiness Terminal</Eyebrow>
                <h2 className="ed-head">
                  An intelligence layer that grows
                  <br />
                  more valuable with every use.
                </h2>
              </div>
            </Settle>

            <Settle delay={0.1}>
              <p className="sec-lede">
                Decision Intelligence Systems builds and operates the Readiness Terminal — a
                proprietary intelligence layer that becomes more valuable every time someone uses
                it.
              </p>
            </Settle>

            <Settle delay={0.18}>
              <Strata lift={2} accent="spot">
                <p className="strata__title" style={{ fontStyle: "italic" }}>
                  Not a marketplace. Not an agency tool.
                </p>
                <p className="strata__text">
                  The platform where professionals measure, benchmark, and act on partnership
                  readiness.
                </p>
              </Strata>
            </Settle>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", minWidth: 0 }}>
            {COMPONENTS.map((c, i) => (
              <Strata
                key={c.title}
                lift={i === 0 ? 2 : i === 1 ? 1 : 0}
                accent={c.accent}
                delay={0.24 + i * 0.1}
                style={{ marginLeft: `${i * 0.9}rem` }}
              >
                <div className="strata__title">{c.title}</div>
                <div className="strata__text">{c.text}</div>
              </Strata>
            ))}
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="04" />
    </Page>
  );
}
