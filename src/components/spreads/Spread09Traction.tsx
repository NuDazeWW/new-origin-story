/**
 * SPREAD 09 — Traction & Proof Points
 * High-key Platinum evidence spread. "THE FIRST 90 DAYS" is dominant. The seven
 * proof points are ledger entries with status set as typography. Restrained ink:
 * Electric Blue primary, Neon Teal selectively for completed/live, Data Purple once.
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const PROOFS = [
  { label: "PRSC Readiness Score dashboard", status: "LIVE", tone: "teal" },
  { label: "Readiness Terminal front-end prototype", status: "LIVE", tone: "teal" },
  { label: "Founding Vanguard cohort", status: "UNDERWAY", tone: "blue" },
  { label: "Vanguard Participation Agreement", status: "EXECUTED", tone: "teal" },
  { label: "Trademark filings", status: "FILED", tone: "blue" },
  { label: "Four-entity governance structure", status: "IN PLACE", tone: "blue" },
  { label: "Allen Bestwick advisory relationship", status: "CONFIRMED", tone: "purple" },
];

export default function Spread09Traction({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ice">
      <RunningHead chapter="09 / Traction" issue="DIS Origin" />

      <PageBody>
        <div className="traction-stage">
          {/* oversized headline */}
          <div className="traction-head">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>This is not a concept. It is a category being created.</span>
              <h2 className="traction-hero" style={{ color: "var(--ink-text)" }}>
                THE FIRST<br />90 DAYS
              </h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="sec-lede" style={{ color: "var(--ink-body)", maxWidth: "40ch" }}>
                At pre-seed, we are not pitching a concept — we are pitching the first 90 days of a category being created.
              </p>
            </Settle>
          </div>

          {/* ledger entries */}
          <div className="traction-ledger">
            {PROOFS.map((p, i) => (
              <motion.div
                key={p.label}
                className="traction-row"
                initial={reduce ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: EASE }}
              >
                <span className="traction-row__line" aria-hidden />
                <span className="traction-row__label">{p.label}</span>
                <span className={`traction-row__status traction-row__status--${p.tone}`}>{p.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="09" />
    </Page>
  );
}
