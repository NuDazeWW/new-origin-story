/**
 * SPREAD 13 — The Ask
 * CORRECTION PASS 02: $2.5M remains the typographic event. The three closes are
 * one continuous rising capital progression along a luminous ascending axis —
 * no cards. Terms sit as a quiet editorial band; the closing statement stands
 * separate. Exact copy from production brief SLIDE 13.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

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
        <div className="ask-stage ask2-stage">
          <div className="ask2-head">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-electric-blue)" }}>THE ASK</span>
              <h2 className="ask2-hero">$2.5M</h2>
              <p className="ask2-lede">
                Investors fund a sequence of increasingly valuable proofs — not 24 months of uncertainty in one leap.
              </p>
            </Settle>
          </div>

          {/* One continuous rising progression: a single luminous ascending axis. */}
          <div className="ask2-progression">
            <motion.div
              className="ask2-axis"
              aria-hidden
              initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              animate={STATIC_REVIEW_MODE ? { opacity: 1, scaleX: 1 } : undefined}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.2, delay: 0.2, ease: EASE }}
            />

            {CLOSES.map((c, i) => (
              <motion.div
                key={c.label}
                className={`ask2-threshold ask2-threshold--${i + 1}`}
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.45 + i * 0.18, ease: EASE }}
              >
                <span className="ask2-threshold__riser" style={{ background: c.color }} />
                <span className="ask2-threshold__label" style={{ color: c.color }}>{c.label}</span>
                <span className="ask2-threshold__amount">{c.amount}</span>
                <span className="ask2-threshold__date">{c.date}</span>
                <span className="ask2-threshold__trigger">{c.trigger}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="ask2-band"
            initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1, ease: EASE }}
          >
            <span className="ask2-band__terms">
              TERMS: YC Post-Money SAFE · $15M post-money cap · 15% discount · Rule 506(b) · SAFE converts to DIS equity only.
            </span>
            <span className="ask2-band__note">
              Confirm all terms with counsel before external distribution. Terms are subject to definitive documents.
            </span>
          </motion.div>

          <motion.p
            className="ask2-statement"
            initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.25, ease: EASE }}
          >
            The $15M cap is not a ceiling. It is the entry point for investors who want to be in the room when the standard gets set.
          </motion.p>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="13" />
    </Page>
  );
}
