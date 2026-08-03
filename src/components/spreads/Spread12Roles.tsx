/**
 * SPREAD 12 — Roles This Round Funds
 * CORRECTION PASS 02: two broad spatial planes at different depths. No panels,
 * no cards, no table. $850K and $900K are the typographic anchors. Exact copy
 * from production brief SLIDE 12.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const CLOSE_ONE = [
  "Head of Platform Engineering",
  "Methodology Committee Chair",
  "Head of Data & Intelligence",
  "Board Member (Demand Side)",
  "Media Measurement Advisor",
];

const CLOSE_TWO = [
  "Board Member (Supply Side)",
  "Head of GTM / Partnerships",
  "Head of Sales (Demand Side)",
];

export default function Spread12Roles({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ice">
      <RunningHead chapter="12 / Roles This Round Funds" issue="DIS Origin" />

      <PageBody>
        <div className="roles-stage roles2-stage">
          <div className="roles2-depth" aria-hidden />

          <div className="roles2-header">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>
                Roles This Round Funds
              </span>
              <h2 className="roles2-head">
                The $2.5M raise funds the first 24 months of operations.
              </h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="roles2-lede">Every hire has a milestone.</p>
            </Settle>
          </div>

          {/* Far plane — the next organizational layer, set deeper into the page. */}
          <motion.div
            className="roles2-plane roles2-plane--far"
            initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, delay: 0.42, ease: EASE }}
          >
            <span className="roles2-plane__label">Second Close</span>
            <span className="roles2-plane__amount roles2-plane__amount--far">$900K</span>
            <ul className="roles2-plane__list">
              {CLOSE_TWO.map((role) => (
                <li key={role} className="roles2-plane__role">{role}</li>
              ))}
            </ul>
          </motion.div>

          {/* Near plane — immediate and foundational, closest to the reader. */}
          <motion.div
            className="roles2-plane roles2-plane--near"
            initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.95, delay: 0.2, ease: EASE }}
          >
            <span className="roles2-plane__label">Initial Close</span>
            <span className="roles2-plane__amount roles2-plane__amount--near">$850K</span>
            <ul className="roles2-plane__list">
              {CLOSE_ONE.map((role) => (
                <li key={role} className="roles2-plane__role">{role}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="12" />
    </Page>
  );
}
