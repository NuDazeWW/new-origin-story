/**
 * SPREAD 06 — The Four-Part Moat
 * Platinum ground. One asymmetric luxury-product composition built from
 * supplied metallic imagery plus layered HTML/CSS surfaces: masks, reflections,
 * cast shadows, grain, and restrained vector geometry. The four strata overlap,
 * crop each other, and sit at different depths — never equal bars or cards.
 */

import { motion, useReducedMotion } from "framer-motion";

import metallicAsset from "@/assets/dis-ecosystem.png.asset.json";
import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const STRATA = [
  {
    id: "method",
    title: "Trade-Secret Methodology",
    status: "In Place",
    detail: "The scoring mathematics never leaves the engine. It cannot be read off the output.",
    depth: 2,
    tone: "live",
    x: "-3%",
    y: "6%",
    w: "62%",
  },
  {
    id: "governance",
    title: "Independent Governance",
    status: "In Place",
    detail: "A Council structurally separated from the agency and the platform it scores.",
    depth: 1,
    tone: "spot",
    x: "38%",
    y: "0%",
    w: "58%",
  },
  {
    id: "benchmark",
    title: "Benchmark Database",
    status: "Building",
    detail: "Every scored property deepens the reference set. Building via the Vanguard.",
    depth: 1,
    tone: "future",
    x: "6%",
    y: "44%",
    w: "54%",
  },
  {
    id: "outcome",
    title: "Outcome Intelligence",
    status: "In Progress",
    detail: "Scores tied back to realized partnership performance. In progress.",
    depth: 0,
    tone: "future",
    x: "46%",
    y: "50%",
    w: "58%",
  },
];

export default function Spread06Moat({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="platinum">
      <RunningHead chapter="06 / The Four-Part Moat" issue="DIS Origin" />

      <PageBody>
        <div className="moat-stage">
          {/* metallic substrate */}
          <div className="moat-substrate" aria-hidden="false">
            <img
              src={metallicAsset.url}
              alt="Ecosystem surface"
              className="moat-substrate__img"
              loading="lazy"
            />
            <div className="moat-substrate__grain" />
          </div>

          {/* verso quote */}
          <div className="moat-quote">
            <Settle>
              <span className="ed-kicker">Defensibility That Compounds</span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)", maxWidth: "16ch" }}>
                They could build a scoring tool.
              </h2>
            </Settle>
            <Settle delay={0.1}>
              <p className="ed-quote" style={{ color: "var(--ink-text)", maxWidth: "32ch" }}>
                “They cannot build an independent standard. Independence is not a feature of PRSC — it is the entire product.”
              </p>
            </Settle>
            <Settle delay={0.18}>
              <p className="sec-lede" style={{ maxWidth: "34ch" }}>
                You cannot replicate structural independence by building a better algorithm. That is the moat.
              </p>
            </Settle>
          </div>

          {/* asymmetric strata */}
          {STRATA.map((s, i) => (
            <motion.div
              key={s.id}
              className={`moat-stratum moat-stratum--d${s.depth} moat-stratum--${s.tone}`}
              style={{
                left: s.x,
                top: s.y,
                width: s.w,
              }}
              initial={reduce ? false : { opacity: 0, y: 40, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.14, ease: EASE }}
            >
              <div className="moat-stratum__edge" aria-hidden />
              <div className="moat-stratum__inner">
                <span className="moat-stratum__label">{s.status}</span>
                <h3 className="moat-stratum__title">{s.title}</h3>
                <p className="moat-stratum__detail">{s.detail}</p>
              </div>
              <div className="moat-stratum__shadow" aria-hidden />
            </motion.div>
          ))}

          {/* light pass */}
          <motion.div
            className="moat-light"
            initial={reduce ? false : { opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2.4, delay: 1.2, ease: EASE }}
            aria-hidden
          />
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="06" />
    </Page>
  );
}
