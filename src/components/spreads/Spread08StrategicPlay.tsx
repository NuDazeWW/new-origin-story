/**
 * SPREAD 08 — The Strategic Play
 * Full-bleed photographic daylight. Luminous racing line with milestones.
 * Exact copy from production brief SLIDE 8.
 */

import { motion, useReducedMotion } from "framer-motion";

import section08Field from "@/assets/section08-signal-field.png.asset.json";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const STEPS = [
  { num: "1", label: "Stand up authority", detail: "Governance, Standard, IP", done: true, left: "34%", top: "58%" },
  { num: "2", label: "Land one anchor mandate", detail: "Series requires the score", done: false, left: "45%", top: "46%" },
  { num: "3", label: "Score the supply side free", detail: "Reach ubiquity", done: false, left: "56%", top: "62%" },
  { num: "4", label: "Monetize the demand side", detail: "Subscriptions, intelligence", done: false, left: "67%", top: "40%" },
  { num: "5", label: "Publish benchmarks", detail: "Extend horizontally", done: false, left: "78%", top: "26%" },
];

const ANCHORS = ["Trans Am Series (active)", "Racing Team Alliance (pending)", "IMSA WeatherTech (in progress)"];

export default function Spread08StrategicPlay({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="paper">
      <RunningHead chapter="08 / The Strategic Play" issue="DIS Origin" />

      <PageBody>
        <div className="play-stage">
          <div className="play-field">
            <img
              src={section08Field.url}
              alt="Night pit lane with luminous signal lines across the paddock"
              className="play-field__img"
              loading="lazy"
            />
            <div className="play-field__scrim" />
          </div>

          <div className="play-header">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-electric-blue)" }}>Land an Anchor. Then Compound.</span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)" }}>
                A standard becomes infrastructure the moment an entity with authority requires it.
              </h2>
            </Settle>
          </div>

          <div className="play-line" aria-hidden>
            <svg className="struct-route__svg" viewBox="0 0 1280 720" preserveAspectRatio="none">
              <defs>
                <linearGradient id="playLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(30,167,255,0.2)" />
                  <stop offset="50%" stopColor="rgba(30,167,255,0.8)" />
                  <stop offset="100%" stopColor="rgba(0,255,194,0.9)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 420 430 C 560 430, 620 340, 760 300 S 980 240, 1100 200"
                fill="none"
                stroke="url(#playLine)"
                strokeWidth="2"
                strokeDasharray="6 4"
                initial={STATIC_REVIEW_MODE || reduce ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }} animate={STATIC_REVIEW_MODE ? { pathLength: 1 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 2, delay: 0.4, ease: EASE }}
              />
            </svg>
          </div>

          <div className="play-steps">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.num}
                className="play-step"
                style={{ left: s.left, top: s.top }}
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.2, ease: EASE }}
              >
                <span className="play-step__num">{s.num}</span>
                <span className="play-step__label">{s.label}</span>
                <span className="play-step__detail">{s.detail}</span>
                {s.done && <span className="play-step__done" />}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="play-pipeline"
            initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.8, ease: EASE }}
          >
            <span className="play-pipeline__label">Anchor Pipeline</span>
            {ANCHORS.map((a, i) => (
              <span key={a} className="play-pipeline__item">{a}</span>
            ))}
            {ANCHORS.map((a, i) => i < ANCHORS.length - 1 && <span key={i} className="play-pipeline__divider" />)}
          </motion.div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="08" />
    </Page>
  );
}
