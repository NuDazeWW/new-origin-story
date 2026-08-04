/**
 * SPREAD 06 — The Four-Part Moat
 * CORRECTION PASS 04: the approved asymmetric metallic object is preserved
 * exactly. Only the typography is rebuilt — the quotation is split into a
 * primary editorial statement plus supporting argument, and the four moat
 * elements become one vertically indexed annotation system on a single shared
 * axis. Exact copy from production brief SLIDE 6.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

/** Approved moat labels and statuses only — SLIDE 6. No generated descriptions. */
const STRATA = [
  { id: "methodology", label: "In Place", title: "Trade-Secret Methodology", accent: "spot" },
  { id: "governance", label: "In Place", title: "Independent Governance", accent: "live" },
  { id: "benchmark", label: "Building via Vanguard", title: "Benchmark Database", accent: "future" },
  { id: "outcome", label: "In Progress", title: "Outcome Intelligence", accent: "future" },
];

export default function Spread06Moat({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="platinum">
      <RunningHead chapter="06 / The Four-Part Moat" issue="DIS Origin" />

      <PageBody>
        <div className="moat-stage">
          {/* One photographed engineered object: a single laminated metallic mass. */}
          <div className="moat2-object" aria-hidden>
            <div className="moat2-object__cast" />
            {STRATA.map((s, i) => (
              <motion.div
                key={s.id}
                className={`moat2-lam moat2-lam--${s.id}`}
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: EASE }}
              >
                <div className="moat2-lam__skin" />
                <div className="moat2-lam__spec" />
                <div className="moat2-lam__edge" />
              </motion.div>
            ))}
            <div className="moat2-object__sheen" />
          </div>

          <div className="moat2-quote moat3-quote">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>
                Defensibility That Compounds
              </span>
            </Settle>
            <Settle delay={0.12}>
              <p className="moat3-statement">“They could build a scoring tool.”</p>
            </Settle>
            <Settle delay={0.22}>
              <p className="moat3-support">
                “They cannot build an independent standard. Independence is not a feature of PRSC — it is the entire product. You cannot replicate structural independence by building a better algorithm. That is the moat.”
              </p>
            </Settle>
          </div>

          {/* One vertical index on a single shared axis — no cards, no leaders
              crossing the object. Registration points align with the four
              physical layers of the same mass. */}
          <div className="moat3-index">
            <span className="moat3-index__axis" aria-hidden />
            {STRATA.map((s, i) => (
              <motion.div
                key={s.id}
                className={`moat3-entry moat3-entry--${s.accent}`}
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, x: 0 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: EASE }}
              >
                <span className="moat3-entry__reg" aria-hidden />
                <span className="moat3-entry__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="moat3-entry__title">{s.title}</span>
                <span className="moat3-entry__status">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="06" />
    </Page>
  );
}
