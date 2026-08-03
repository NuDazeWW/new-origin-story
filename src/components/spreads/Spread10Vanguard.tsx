/**
 * SPREAD 10 — The Founding Vanguard™
 * Midnight Slate field. 25 sculptural apertures in precision formation.
 * Exact copy from production brief SLIDE 10.
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const TRANCHES = [
  { num: "Tranche 1", title: "Build & Benchmark", question: "Can readiness be measured?" },
  { num: "Tranche 2", title: "Validate & Correlate", question: "Does readiness predict outcomes?" },
  { num: "Tranche 3", title: "Standardize & Monetize", question: "Will organizations pay for it?" },
];

export default function Spread10Vanguard({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ink">
      <RunningHead chapter="10 / The Founding Vanguard" issue="DIS Origin" />

      <PageBody>
        <div className="van-stage">
          <div className="van-field">
            {Array.from({ length: 25 }).map((_, i) => (
              <motion.div
                key={i}
                className="van-aperture"
                initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: EASE }}
              />
            ))}
          </div>

          <div className="van-header">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-electric-blue)" }}>The Founding Vanguard™</span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)" }}>
                25 founding participants. The first benchmark. The first dataset.
              </h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="sec-lede" style={{ color: "var(--ink-body)", maxWidth: "34ch" }}>
                The beta is the proof of concept and the data moat, built simultaneously.
              </p>
            </Settle>
          </div>

          <div className="van-tranches">
            {TRANCHES.map((t, i) => (
              <motion.div
                key={t.num}
                className="van-tranche"
                initial={reduce ? false : { opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: EASE }}
              >
                <span className="van-tranche__num">{t.num}</span>
                <span className="van-tranche__title">{t.title}</span>
                <span className="van-tranche__question">{t.question}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="10" />
    </Page>
  );
}
