/**
 * SPREAD 09 — Traction & Proof Points
 * Ice White high-key ledger. "THE FIRST 90 DAYS" as the typographic event.
 * Restrained status ink: Electric Blue primary, Neon Teal for completed/live,
 * Data Purple used once. Exact copy from production brief SLIDE 9.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const ROWS = [
  { label: "PRSC Readiness Score dashboard", status: "LIVE", color: "teal" },
  { label: "Readiness Terminal front-end prototype", status: "LIVE", color: "teal" },
  { label: "Founding Vanguard™ cohort", status: "UNDERWAY AT WATKINS GLEN", color: "blue" },
  { label: "Vanguard Participation Agreement", status: "EXECUTED", color: "teal" },
  { label: "Trademark filings", status: "FILED", color: "blue" },
  { label: "Four-entity governance structure", status: "IN PLACE", color: "blue" },
  { label: "Allen Bestwick advisory relationship", status: "CONFIRMED", color: "purple" },
];

export default function Spread09Traction({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ice">
      <RunningHead chapter="09 / Traction" issue="DIS Origin" />

      <PageBody>
        <div className="traction-stage">
          <div className="traction-head">
            <Settle delay={0.12}>
              <h2 className="traction-hero" style={{ color: "var(--ink-text)" }}>
                THE FIRST<br />90 DAYS
              </h2>
            </Settle>
            <Settle delay={0.2}>
              <p className="sec-lede" style={{ color: "var(--ink-body)", maxWidth: "32ch" }}>
                At pre-seed, we are not pitching a concept — we are pitching the first 90 days of a category being created.
              </p>
            </Settle>
          </div>

          <div className="traction-ledger">
            {ROWS.map((r, i) => (
              <motion.div
                key={r.label}
                className="traction-row"
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, x: 0 } : undefined}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: EASE }}
              >
                <span className="traction-row__line" />
                <span className="traction-row__label">{r.label}</span>
                <span className={`traction-row__status traction-row__status--${r.color}`}>{r.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="09" />
    </Page>
  );
}
