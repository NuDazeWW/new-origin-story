/**
 * SPREAD 10 — The Founding Vanguard™
 * CORRECTION PASS 02: the 25 positions are arranged as a sculptural sweeping
 * formation in perspective — varying scale, depth, overlap and atmospheric
 * falloff. No rows, no columns, no status implied. Every position is neutral.
 * Exact copy from production brief SLIDE 10.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const TRANCHES = [
  { num: "Tranche 1", title: "Build & Benchmark", question: "Can readiness be measured?" },
  { num: "Tranche 2", title: "Validate & Correlate", question: "Does readiness predict outcomes?" },
  { num: "Tranche 3", title: "Standardize & Monetize", question: "Will organizations pay for it?" },
];

/**
 * Exactly 25 positions on one continuous sweeping arc that recedes into the
 * page. Offsets are deterministic (seeded trigonometry) so the formation reads
 * as photographed rather than plotted, and never as a grid.
 */
const POSITIONS = Array.from({ length: 25 }, (_, i) => {
  const t = i / 24;
  const wobble = Math.sin(i * 2.399) * 3.4;
  const drift = Math.cos(i * 1.717) * 2.6;
  const depth = 0.32 + 0.68 * (1 - t) + Math.sin(i * 0.9) * 0.06;
  return {
    i,
    x: 4 + t * 90 + drift,
    y: 74 - Math.sin(t * Math.PI * 0.86) * 44 + wobble,
    scale: Math.max(0.3, depth),
    z: Math.round(depth * 100),
  };
});

export default function Spread10Vanguard({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ink">
      <RunningHead chapter="10 / The Founding Vanguard" issue="DIS Origin" />

      <PageBody>
        <div className="van-stage">
          <div className="van2-horizon" aria-hidden />

          <div
            className="van2-field"
            role="img"
            aria-label="Formation of 25 founding participant positions"
          >
            {POSITIONS.map((p) => (
              <motion.span
                key={p.i}
                className="van2-node"
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${(2.0 * p.scale).toFixed(3)}rem`,
                  height: `${(2.0 * p.scale).toFixed(3)}rem`,
                  opacity: 0.26 + p.scale * 0.62,
                  filter: `blur(${((1 - p.scale) * 1.5).toFixed(2)}px)`,
                  zIndex: p.z,
                }}
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 0.26 + p.scale * 0.62, scale: 1 }}
                animate={STATIC_REVIEW_MODE ? { scale: 1 } : undefined}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: p.i * 0.03, ease: EASE }}
              />
            ))}
          </div>

          <div className="van2-header">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-electric-blue)" }}>
                The Founding Vanguard™
              </span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)" }}>
                25 founding participants. The first readiness benchmark. The first readiness-to-outcome dataset.
              </h2>
            </Settle>
          </div>

          {/* Three tranches as editorial movements around the field — not a legend. */}
          <div className="van2-movements">
            {TRANCHES.map((t, i) => (
              <motion.div
                key={t.num}
                className={`van2-movement van2-movement--${i + 1}`}
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: EASE }}
              >
                <span className="van2-movement__num">{t.num}</span>
                <span className="van2-movement__title">{t.title}</span>
                <span className="van2-movement__question">{t.question}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="10" />
    </Page>
  );
}
