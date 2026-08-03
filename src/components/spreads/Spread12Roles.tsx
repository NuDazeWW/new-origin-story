/**
 * SPREAD 12 — Roles This Round Funds
 * Platinum ground, two broad spatial planes — Initial Close and Second Close —
 * sequenced in depth. Roles are positions in a system, set typographically.
 * No table, no cards.
 */

import { motion, useReducedMotion } from "framer-motion";

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
        <div className="roles-stage">
          <div className="roles-header">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>Roles This Round Funds</span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)" }}>
                The $2.5M raise funds the first 24 months of operations.
              </h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="sec-lede" style={{ color: "var(--ink-body)", maxWidth: "42ch" }}>
                Every hire has a milestone. Roles are positions in a system, sequenced by capital release.
              </p>
            </Settle>
          </div>

          <div className="roles-planes">
            <motion.div
              className="roles-plane roles-plane--one"
              initial={reduce ? false : { opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            >
              <div className="roles-plane__head">
                <span className="roles-plane__label">Initial Close</span>
                <span className="roles-plane__amount" style={{ color: "var(--dis-electric-blue)" }}>$850K</span>
              </div>
              <ul className="roles-plane__list">
                {CLOSE_ONE.map((role) => (
                  <li key={role} className="roles-plane__role">{role}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="roles-plane roles-plane--two"
              initial={reduce ? false : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            >
              <div className="roles-plane__head">
                <span className="roles-plane__label">Second Close</span>
                <span className="roles-plane__amount" style={{ color: "var(--dis-aurora-blue)" }}>$900K</span>
              </div>
              <ul className="roles-plane__list">
                {CLOSE_TWO.map((role) => (
                  <li key={role} className="roles-plane__role">{role}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="12" />
    </Page>
  );
}
