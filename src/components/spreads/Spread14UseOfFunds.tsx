/**
 * SPREAD 14 — Use of Funds
 * Ice White annual-report spread. The seven allocations form one continuous
 * proportional capital field. Proportions are mathematically exact at 42/18/14/10/6/4/6.
 * Labels are typeset directly into the field; exact values are repeated in a
 * semantic table for accessibility and print.
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const ALLOCATIONS = [
  { label: "Staffing & Operations", amount: 1050000, pct: 42, color: "#1EA7FF" },
  { label: "Platform Engineering", amount: 450000, pct: 18, color: "#22D3EE" },
  { label: "Intelligence & Data", amount: 350000, pct: 14, color: "#7B61FF" },
  { label: "Beta Program & GTM", amount: 250000, pct: 10, color: "#6B7582" },
  { label: "Legal & IP", amount: 150000, pct: 6, color: "#A6AFB8" },
  { label: "Ecosystem Partnerships", amount: 100000, pct: 4, color: "#1B2A3D" },
  { label: "Strategic Contingency", amount: 150000, pct: 6, color: "#2B3644" },
];

const TOTAL = 2500000;

export default function Spread14UseOfFunds({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ice">
      <RunningHead chapter="14 / Use of Funds" issue="DIS Origin" />

      <PageBody>
        <div className="fund-stage">
          <div className="fund-header">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>Use of Funds</span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)" }}>
                Capital deployed with discipline.
              </h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="fund-total" style={{ color: "var(--ink-text)" }}>
                Total: <strong>${TOTAL.toLocaleString()}</strong>
              </p>
            </Settle>
          </div>

          {/* continuous proportional field */}
          <div className="fund-field" role="img" aria-label={`Capital allocation field totalling $${TOTAL.toLocaleString()}`}>
            {ALLOCATIONS.map((a, i) => (
              <motion.div
                key={a.label}
                className="fund-segment"
                style={{ width: `${a.pct}%`, backgroundColor: a.color }}
                initial={reduce ? false : { opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: EASE }}
              >
                <span className="fund-segment__label">{a.label}</span>
                <span className="fund-segment__value">{a.pct}%</span>
              </motion.div>
            ))}
          </div>

          {/* semantic table for accessibility / print */}
          <table className="fund-table">
            <caption className="sr-only">Use of funds allocation table</caption>
            <thead>
              <tr>
                <th>Allocation</th>
                <th>Amount</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {ALLOCATIONS.map((a) => (
                <tr key={a.label}>
                  <td>{a.label}</td>
                  <td>${a.amount.toLocaleString()}</td>
                  <td>{a.pct}%</td>
                </tr>
              ))}
              <tr className="fund-table__total">
                <td>Total</td>
                <td>${TOTAL.toLocaleString()}</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="14" />
    </Page>
  );
}
