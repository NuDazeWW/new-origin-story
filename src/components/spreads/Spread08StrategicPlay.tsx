/**
 * SPREAD 08 — The Strategic Play
 * Full-bleed daylight motorsport field. A single luminous racing line runs the
 * composition on entry; five steps are milestones along it. Anchor pipeline set
 * as a quiet type band.
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const STEPS = [
  { num: "01", label: "Stand up authority", detail: "Governance, Standard, IP", done: true },
  { num: "02", label: "Land one anchor mandate", detail: "Series requires the score", done: false },
  { num: "03", label: "Score the supply side free", detail: "Reach ubiquity", done: false },
  { num: "04", label: "Monetize the demand side", detail: "Subscriptions, intelligence", done: false },
  { num: "05", label: "Publish benchmarks", detail: "Extend horizontally", done: false },
];

export default function Spread08StrategicPlay({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="paper">
      <RunningHead chapter="08 / The Strategic Play" issue="DIS Origin" />

      <PageBody>
        <div className="play-stage">
          {/* full-bleed daylight field */}
          <div className="play-field" aria-hidden="false">
            <img
              src="/01_race_horizon_cover.png"
              alt="Daylight racing field"
              className="play-field__img"
              loading="lazy"
            />
            <div className="play-field__scrim" />
          </div>

          {/* luminous racing line */}
          <svg className="play-line" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <defs>
              <linearGradient id="racingLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(30,167,255,0.85)" />
                <stop offset="100%" stopColor="rgba(0,255,194,0.25)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M -40 560 C 200 560, 340 420, 520 420 S 780 300, 980 300 S 1220 220, 1320 220"
              fill="none"
              stroke="url(#racingLine)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 2.2, ease: EASE }}
            />
          </svg>

          {/* header */}
          <div className="play-header">
            <Settle>
              <span className="ed-kicker">Land an Anchor. Then Compound.</span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)", maxWidth: "22ch" }}>
                A standard becomes infrastructure the moment an entity with authority requires it.
              </h2>
            </Settle>
          </div>

          {/* milestones along the line */}
          <div className="play-steps">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.num}
                className="play-step"
                style={{ left: `${10 + i * 18}%`, top: `${38 + (i % 2) * 18}%` }}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.8 + i * 0.16, ease: EASE }}
              >
                <span className="play-step__num">{s.num}</span>
                <span className="play-step__label">{s.label}</span>
                <span className="play-step__detail">{s.detail}</span>
                {s.done && <span className="play-step__done" aria-hidden />}
              </motion.div>
            ))}
          </div>

          {/* anchor pipeline band */}
          <motion.div
            className="play-pipeline"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.8, ease: EASE }}
          >
            <span className="play-pipeline__label">Anchor Pipeline</span>
            <span className="play-pipeline__item">Trans Am Series (active)</span>
            <span className="play-pipeline__divider" aria-hidden />
            <span className="play-pipeline__item">Racing Team Alliance (pending)</span>
            <span className="play-pipeline__divider" aria-hidden />
            <span className="play-pipeline__item">IMSA WeatherTech (in progress)</span>
          </motion.div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="08" />
    </Page>
  );
}
