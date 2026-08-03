/**
 * SPREAD 13 — The Ask
 * Oxford Blue / Signal Black. $2.5M as an Ice White typographic event. Three
 * closes as a rising progression in space and light (Electric → Aurora → Violet).
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const CLOSES = [
  {
    label: "Initial Close",
    amount: "$850,000",
    date: "Dec 15, 2026",
    trigger: "Terminal live, core hires",
    color: "#1EA7FF",
  },
  {
    label: "Second Close",
    amount: "$900,000",
    date: "Apr 1, 2027",
    trigger: "Anchor partnership, benchmarks",
    color: "#22D3EE",
  },
  {
    label: "Final Close",
    amount: "$750,000",
    date: "Aug 1, 2027",
    trigger: "Paid conversions, commercialization",
    color: "#7B61FF",
  },
];

export default function Spread13Ask({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ink">
      <RunningHead chapter="13 / The Ask" issue="DIS Origin" />

      <PageBody>
        <div className="ask-stage">
          {/* rising light beams */}
          <div className="ask-beams" aria-hidden>
            {CLOSES.map((c, i) => (
              <motion.div
                key={c.label}
                className="ask-beam"
                style={{ background: c.color, left: `${20 + i * 28}%` }}
                initial={reduce ? false : { opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.2, ease: EASE }}
              />
            ))}
          </div>

          {/* headline */}
          <div className="ask-head">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-electric-blue)" }}>The Ask</span>
              <h2 className="ask-hero" style={{ color: "var(--dis-ice-white)" }}>
                $2.5M
              </h2>
              <p className="sec-lede" style={{ color: "var(--dis-fog)", maxWidth: "42ch" }}>
                Investors fund a sequence of increasingly valuable proofs — not 24 months of uncertainty in one leap.
              </p>
            </Settle>
          </div>

          {/* closes */}
          <div className="ask-closes">
            {CLOSES.map((c, i) => (
              <motion.div
                key={c.label}
                className="ask-close"
                initial={reduce ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.18, ease: EASE }}
              >
                <span className="ask-close__label" style={{ color: c.color }}>{c.label}</span>
                <span className="ask-close__amount">{c.amount}</span>
                <span className="ask-close__date">{c.date}</span>
                <span className="ask-close__trigger">{c.trigger}</span>
              </motion.div>
            ))}
          </div>

          {/* terms band */}
          <motion.div
            className="ask-terms"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
          >
            <span className="ask-terms__line">
              YC Post-Money SAFE · $15M post-money cap · 15% discount · Rule 506(b) · SAFE converts to DIS equity only.
            </span>
            <span className="ask-terms__close">
              The $15M cap is not a ceiling. It is the entry point for investors who want to be in the room when the standard gets set.
            </span>
          </motion.div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="13" />
    </Page>
  );
}
