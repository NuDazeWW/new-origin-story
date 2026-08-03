/**
 * SPREAD 06 — The Four-Part Moat
 * CORRECTION PASS 02: one continuous asymmetric engineered object built from the
 * supplied metallic imagery and layered CSS surfaces. No cards, no equal strips.
 * The four moat labels are annotated directly against physical layers with
 * hairline leaders. Exact copy from production brief SLIDE 6.
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

          <div className="moat2-quote">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>
                Defensibility That Compounds
              </span>
            </Settle>
            <Settle delay={0.12}>
              <p className="ed-pull" style={{ color: "var(--ink-text)" }}>
                “They could build a scoring tool. They cannot build an independent standard. Independence is not a feature of PRSC — it is the entire product. You cannot replicate structural independence by building a better algorithm. That is the moat.”
              </p>
            </Settle>
          </div>

          {/* Hairline annotations — no enclosing containers. */}
          <div className="moat2-annos">
            {STRATA.map((s, i) => (
              <motion.div
                key={s.id}
                className={`moat2-anno moat2-anno--${s.id} moat2-anno--${s.accent}`}
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, x: 0 } : undefined}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.14, ease: EASE }}
              >
                <span className="moat2-anno__leader" />
                <span className="moat2-anno__label">{s.label}</span>
                <h3 className="moat2-anno__title">{s.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="06" />
    </Page>
  );
}
