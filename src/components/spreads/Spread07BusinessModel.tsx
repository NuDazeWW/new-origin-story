/**
 * SPREAD 07 — The Business Model
 * Deep Slate foundation. Atmospheric landscape, not a diagram. Editorial columns
 * for supply and demand. No arrows, no nodes. Exact copy from production brief SLIDE 7.
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const DIS_REVENUE = [
  "Demand-side subscriptions (brands, investors, agencies, series)",
  "Intelligence layer module access",
  "Enterprise intelligence access",
  "Ecosystem benchmarking access",
];

const PRSC_REVENUE = [
  "Readiness Certified™ fees",
  "Benchmark reports",
  "Standard licensing",
];

export default function Spread07BusinessModel({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="slate">
      <RunningHead chapter="07 / The Business Model" issue="DIS Origin" />

      <PageBody>
        <div className="bm-stage">
          <div className="bm-field" aria-hidden>
            <div className="bm-field__supply" />
            <div className="bm-field__demand" />
            <motion.div
              className="bm-field__seam"
              initial={reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
            />
          </div>

          <div className="bm-col bm-col--supply">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-aurora-blue)" }}>Free Supply</span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)" }}>
                Scored free to drive ubiquity.
              </h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="sec-lede" style={{ color: "var(--ink-body)", maxWidth: "42ch" }}>
                The model mirrors how every durable rating network monetizes: supply side scored free to drive ubiquity; demand side pays for the intelligence that de-risks capital.
              </p>
            </Settle>
            <motion.div
              className="bm-list"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            >
              <span className="bm-list__head">DIS Platform Revenue</span>
              <ul>
                {DIS_REVENUE.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="bm-col bm-col--demand">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-violet)" }}>Paid Demand</span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)" }}>
                Paid for the intelligence that de-risks capital.
              </h2>
            </Settle>
            <motion.div
              className="bm-list"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            >
              <span className="bm-list__head">PRSC Council Revenue</span>
              <span className="bm-list__sub">Arm's-length license to DIS</span>
              <ul>
                {PRSC_REVENUE.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="bm-seam-label">
            <span className="bm-seam-label__text">Compounding Intelligence</span>
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="07" />
    </Page>
  );
}
