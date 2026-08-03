/**
 * SPREAD 10 — The Founding Vanguard™
 * Midnight Slate field of 25 sculptural apertures in a precision formation with
 * real depth — not a grid, not a seating chart. All positions neutral. Three
 * tranches read as successive movements through the field.
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const TRANCHES = [
  { num: "01", title: "Build & Benchmark", question: "Can readiness be measured?", delay: 0 },
  { num: "02", title: "Validate & Correlate", question: "Does readiness predict outcomes?", delay: 1 },
  { num: "03", title: "Standardize & Monetize", question: "Will organizations pay for it?", delay: 2 },
];

export default function Spread10Vanguard({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  const slots = Array.from({ length: 25 }, (_, i) => i);

  return (
    <Page stock="ink">
      <RunningHead chapter="10 / The Founding Vanguard" issue="DIS Origin" />

      <PageBody>
        <div className="van-stage">
          {/* sculptural field */}
          <div className="van-field" aria-hidden>
            {slots.map((i) => {
              const row = Math.floor(i / 5);
              const col = i % 5;
              return (
                <motion.div
                  key={i}
                  className="van-aperture"
                  initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.05 * i, ease: EASE }}
                  style={{ gridRow: row + 1, gridColumn: col + 1 }}
                />
              );
            })}
          </div>

          {/* header */}
          <div className="van-header">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-aurora-blue)" }}>The Founding Vanguard™</span>
              <h2 className="ed-head" style={{ maxWidth: "20ch" }}>
                25 founding participants. The first benchmark. The first dataset.
              </h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="sec-lede" style={{ maxWidth: "38ch" }}>
                The beta is the proof of concept and the data moat, built simultaneously.
              </p>
            </Settle>
          </div>

          {/* tranche captions */}
          <div className="van-tranches">
            {TRANCHES.map((t, i) => (
              <motion.div
                key={t.num}
                className="van-tranche"
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.18, ease: EASE }}
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
