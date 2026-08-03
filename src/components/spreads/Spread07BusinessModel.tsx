/**
 * SPREAD 07 — The Business Model
 * Deep Slate atmospheric landscape. No flywheel, no cards, no process diagram.
 * Free supply enters from the left in Cyber/Aurora atmosphere; paid demand from
 * the right in Violet/Data Purple; compounding intelligence is an Ice White seam
 * where they meet. Revenue copy sits as editorial columns within the landscape.
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

export default function Spread07BusinessModel({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ink">
      <RunningHead chapter="07 / The Business Model" issue="DIS Origin" />

      <PageBody>
        <div className="bm-stage">
          {/* atmospheric field */}
          <div className="bm-field" aria-hidden>
            <motion.div
              className="bm-field__supply"
              initial={reduce ? false : { opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.4, ease: EASE }}
            />
            <motion.div
              className="bm-field__demand"
              initial={reduce ? false : { opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.4, delay: 0.2, ease: EASE }}
            />
            <motion.div
              className="bm-field__seam"
              initial={reduce ? false : { opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.6, ease: EASE }}
            />
          </div>

          {/* left column — DIS platform revenue */}
          <div className="bm-col bm-col--supply">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-aurora-blue)" }}>Free Supply</span>
              <h2 className="ed-head" style={{ color: "var(--dis-ice-white)" }}>
                Scored free to drive ubiquity.
              </h2>
            </Settle>
            <Settle delay={0.14}>
              <p className="sec-lede" style={{ color: "var(--dis-fog)" }}>
                The model mirrors how every durable rating network monetizes: supply side scored free to drive ubiquity; demand side pays for the intelligence that de-risks capital.
              </p>
            </Settle>
            <Settle delay={0.26}>
              <div className="bm-list">
                <span className="bm-list__head">DIS Platform Revenue</span>
                <ul>
                  <li>Demand-side subscriptions (brands, investors, agencies, series)</li>
                  <li>Intelligence layer module access</li>
                  <li>Enterprise intelligence access</li>
                  <li>Ecosystem benchmarking access</li>
                </ul>
              </div>
            </Settle>
          </div>

          {/* right column — PRSC Council revenue */}
          <div className="bm-col bm-col--demand">
            <Settle delay={0.1}>
              <span className="ed-kicker" style={{ color: "var(--dis-data-purple)" }}>Paid Demand</span>
              <h2 className="ed-head" style={{ color: "var(--dis-ice-white)" }}>
                Paid for the intelligence that de-risks capital.
              </h2>
            </Settle>
            <Settle delay={0.22}>
              <div className="bm-list">
                <span className="bm-list__head">PRSC Council Revenue</span>
                <span className="bm-list__sub">Arm's-length license to DIS</span>
                <ul>
                  <li>Readiness Certified™ fees</li>
                  <li>Benchmark reports</li>
                  <li>Standard licensing</li>
                </ul>
              </div>
            </Settle>
          </div>

          {/* centre seam label */}
          <motion.div
            className="bm-seam-label"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
          >
            <span className="bm-seam-label__text">Compounding Intelligence</span>
          </motion.div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="07" />
    </Page>
  );
}
