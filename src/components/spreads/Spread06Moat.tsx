/**
 * SPREAD 06 — The Four-Part Moat
 * Asymmetric luxury-product composition from supplied metallic imagery and
 * layered surfaces. Four strata overlap, crop, and vary in depth. They are not
 * equal cards or bars. Exact copy from production brief SLIDE 6.
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const STRATA = [
  {
    id: "methodology",
    label: "In Place",
    title: "Trade-Secret Methodology",
    detail: "The scoring mathematics never leaves the engine. It cannot be read off the output.",
    left: "38%",
    top: "14%",
    width: "38%",
    accent: "spot",
    depth: 1,
  },
  {
    id: "governance",
    label: "In Place",
    title: "Independent Governance",
    detail: "A Council structurally separated from the agency and the platform it scores.",
    left: "52%",
    top: "34%",
    width: "38%",
    accent: "live",
    depth: 2,
  },
  {
    id: "benchmark",
    label: "Building via Vanguard",
    title: "Benchmark Database",
    detail: "The reference set. The compounding data moat.",
    left: "42%",
    top: "54%",
    width: "34%",
    accent: "future",
    depth: 0,
  },
  {
    id: "outcome",
    label: "In Progress",
    title: "Outcome Intelligence",
    detail: "Readiness-to-outcome correlation. The loop that closes every benchmark.",
    left: "56%",
    top: "72%",
    width: "36%",
    accent: "future",
    depth: 3,
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
          <div className="moat-substrate">
            <img
              src="/02_metallic_motion_divider.png"
              alt="Metallic motion substrate"
              className="moat-substrate__img"
              loading="lazy"
            />
            <div className="moat-substrate__grain" />
          </div>

          <div className="moat-light" />

          <div className="moat-quote">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>Defensibility That Compounds</span>
            </Settle>
            <Settle delay={0.12}>
              <p className="ed-pull" style={{ color: "var(--ink-text)" }}>
                “They could build a scoring tool. They cannot build an independent standard. Independence is not a feature of PRSC — it is the entire product. You cannot replicate structural independence by building a better algorithm. That is the moat.”
              </p>
            </Settle>
          </div>

          {STRATA.map((s, i) => (
            <motion.div
              key={s.id}
              className={`moat-stratum moat-stratum--${s.accent} moat-stratum--d${s.depth}`}
              style={{ left: s.left, top: s.top, width: s.width }}
              initial={reduce ? false : { opacity: 0, y: 30, rotate: -0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.16, ease: EASE }}
            >
              <div className="moat-stratum__edge" />
              <div className="moat-stratum__shadow" />
              <div className="moat-stratum__inner">
                <span className="moat-stratum__label">{s.label}</span>
                <h3 className="moat-stratum__title">{s.title}</h3>
                <p className="moat-stratum__detail">{s.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="06" />
    </Page>
  );
}
