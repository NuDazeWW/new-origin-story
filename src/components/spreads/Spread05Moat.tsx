/**
 * SPREAD 05 — The Four-Part Moat  ·  Treatment A · Stacked Plates
 * Two moats in place, two building. Plates settle back-to-front; the rim light
 * ignites only on what is already standing.
 */

import ecosystemAsset from "@/assets/dis-ecosystem.png.asset.json";
import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { Plate, PlateStack, Eyebrow, Tag } from "@/components/print/Layers";

const MOATS = [
  {
    num: "01",
    title: "Trade-Secret Methodology",
    text: "The scoring mathematics never leaves the engine. It cannot be read off the output.",
    status: "In Place",
    accent: "live" as const,
  },
  {
    num: "02",
    title: "Independent Governance",
    text: "A Council structurally separated from the agency and the platform it scores.",
    status: "In Place",
    accent: "live" as const,
  },
  {
    num: "03",
    title: "Benchmark Database",
    text: "Every scored property deepens the reference set. Building via the Vanguard.",
    status: "Building",
    accent: "spot" as const,
  },
  {
    num: "04",
    title: "Outcome Intelligence",
    text: "Scores tied back to realized partnership performance. In progress.",
    status: "In Progress",
    accent: "future" as const,
  },
];

export default function Spread05Moat({ isActive = false }: { isActive?: boolean }) {
  void isActive;

  return (
    <Page stock="ink">
      <RunningHead chapter="06 / The Four-Part Moat" issue="DIS Origin" />

      <PageBody>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.92fr) minmax(0, 1.08fr)",
            gap: "3.2rem",
            alignItems: "center",
            padding: "1.2rem 4.5rem",
            minHeight: 0,
          }}
        >
          {/* verso — argument over the stacked image */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem", minWidth: 0 }}>
            <Settle>
              <div className="sec-head">
                <Eyebrow>Defensibility That Compounds</Eyebrow>
                <h2 className="ed-head">
                  They could build
                  <br />a scoring tool.
                </h2>
              </div>
            </Settle>

            <Settle delay={0.1}>
              <p className="ed-quote" style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.5rem)" }}>
                “They cannot build an independent standard. Independence is not a feature of PRSC —
                it is the entire product.”
              </p>
            </Settle>

            <Settle delay={0.18}>
              <p className="sec-lede">
                You cannot replicate structural independence by building a better algorithm. That is
                the moat.
              </p>
            </Settle>

            <div style={{ minHeight: "9rem", display: "flex" }}>
              <PlateStack
                src={ecosystemAsset.url}
                alt="The series ecosystem the standard sits across"
                delay={0.26}
                className="moat-stack"
              />
            </div>
          </div>

          {/* recto — the four plates */}
          <div className="grid-2" style={{ gap: "0.9rem" }}>
            {MOATS.map((m, i) => (
              <Plate
                key={m.num}
                depth={i < 2 ? 2 : 1}
                accent={i < 2 ? m.accent : "none"}
                delay={0.12 + i * 0.11}
                style={{ marginTop: i % 2 === 1 ? "1.1rem" : 0 }}
              >
                <div className="plate__num" style={{ color: `var(--${m.accent})` }}>
                  {m.num}
                </div>
                <div className="plate__title">{m.title}</div>
                <div className="plate__text">{m.text}</div>
                <div style={{ marginTop: "0.85rem" }}>
                  <Tag accent={m.accent}>{m.status}</Tag>
                </div>
              </Plate>
            ))}
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="06" />
    </Page>
  );
}
