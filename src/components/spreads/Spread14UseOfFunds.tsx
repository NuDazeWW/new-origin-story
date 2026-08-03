/**
 * SPREAD 14 — Use of Funds
 * CORRECTION PASS 02: one large continuous proportional capital field. The seven
 * allocations occupy exact proportional page area (42/18/14/10/6/4/6). The
 * spreadsheet table is preserved for assistive technology and print only.
 * Exact copy from production brief SLIDE 14.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

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

/**
 * Exact proportional geometry.
 * Left mass: 60% of width → 42 (70% height) + 18 (30% height).
 * Right mass: 40% of width → 14 (35%) + 10 (25%) + 6 (15%) + 4 (10%) + 6 (15%).
 * Every region's area equals its percentage of the whole field.
 */
const LEFT = [ALLOCATIONS[0], ALLOCATIONS[1]];
const RIGHT = ALLOCATIONS.slice(2);

export default function Spread14UseOfFunds({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  const region = (a: typeof ALLOCATIONS[number], i: number, side: "left" | "right") => {
    const compact = a.pct <= 6;
    return (
      <motion.div
        key={a.label}
        className={`fund2-region${compact ? " fund2-region--compact" : ""}`}
        style={{
          flexGrow: a.pct,
          backgroundColor: a.color,
        }}
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 + (side === "left" ? i : i + 2) * 0.09, ease: EASE }}
      >
        <div className="fund2-region__grade" aria-hidden />
        {!compact && (
          <div className="fund2-region__type">
            <span className="fund2-region__pct">{a.pct}%</span>
            <span className="fund2-region__label">{a.label}</span>
            <span className="fund2-region__amount">${a.amount.toLocaleString()}</span>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <Page stock="ice">
      <RunningHead chapter="14 / Use of Funds" issue="DIS Origin" />

      <PageBody>
        <div className="fund-stage fund2-stage">
          <div className="fund2-header">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>Use of Funds</span>
              <h2 className="fund2-total">$2,500,000</h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="fund2-head">Capital deployed with discipline.</p>
            </Settle>
          </div>

          <div
            className="fund2-field"
            role="img"
            aria-label={`Capital allocation field totalling $${TOTAL.toLocaleString()}`}
          >
            <div className="fund2-mass fund2-mass--left">
              {LEFT.map((a, i) => region(a, i, "left"))}
            </div>
            <div className="fund2-mass fund2-mass--right">
              {RIGHT.map((a, i) => region(a, i, "right"))}
            </div>
          </div>

          {/* External annotations for regions too small to carry readable type. */}
          <div className="fund2-annos">
            {ALLOCATIONS.filter((a) => a.pct <= 6).map((a) => (
              <span key={a.label} className="fund2-anno">
                <span className="fund2-anno__swatch" style={{ background: a.color }} />
                <span className="fund2-anno__pct">{a.pct}%</span>
                <span className="fund2-anno__label">{a.label}</span>
                <span className="fund2-anno__amount">${a.amount.toLocaleString()}</span>
              </span>
            ))}
          </div>

          {/* Semantic data retained for assistive technology and print output. */}
          <table className="fund2-table">
            <caption>Use of funds allocation table</caption>
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
              <tr>
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
