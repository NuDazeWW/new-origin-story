/**
 * SPREAD 10 — The Founding Vanguard™ · "The Living Dataset"
 *
 * Left: registered editorial column (kicker, headline, body, three tranche
 * bars with close amounts and status). Right: 25 illuminated data pins
 * radiating around the central PRSC READINESS BENCHMARK ring.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const TRANCHES = [
  {
    num: "TRANCHE 1",
    title: "BUILD & BENCHMARK",
    amount: "[ Initial Close · $850K ]",
    status: "COMPLETE",
    tone: "cyan" as const,
    fill: 100,
    question: "Can readiness be measured?",
    bullets: [
      "Terminal in production.",
      "First motorsport readiness benchmark.",
      "First score distribution model.",
    ],
  },
  {
    num: "TRANCHE 2",
    title: "VALIDATE & CORRELATE",
    amount: "[ Second Close · $900K ]",
    status: "IN PROGRESS",
    tone: "blue" as const,
    fill: 62,
    question: "Does readiness predict outcomes?",
    bullets: [
      "First readiness-improvement dataset.",
      "First readiness-to-outcome dataset.",
    ],
  },
  {
    num: "TRANCHE 3",
    title: "STANDARDIZE & MONETIZE",
    amount: "[ Final Close · $750K ]",
    status: "UPCOMING",
    tone: "violet" as const,
    fill: 34,
    question: "Will organizations pay for it?",
    bullets: [
      "First certifications issued.",
      "First benchmark reports published.",
      "First paid conversions.",
    ],
  },
];

/**
 * 25 sources arranged on three concentric ellipses in perspective. Each pin is
 * a stem rising from the plane with an illuminated head — data becoming signal.
 */
const RINGS = [
  { count: 8, r: 26, stem: 30, y: 0.4 },
  { count: 9, r: 37, stem: 46, y: 0.42 },
  { count: 8, r: 47, stem: 62, y: 0.44 },
];

const PINS = RINGS.flatMap((ring, ri) =>
  Array.from({ length: ring.count }, (_, i) => {
    const a = (i / ring.count) * Math.PI * 2 + ri * 0.36;
    const x = 50 + Math.cos(a) * ring.r;
    const y = 52 + Math.sin(a) * ring.r * ring.y;
    const depth = 0.55 + 0.45 * ((Math.sin(a) + 1) / 2);
    return {
      key: `${ri}-${i}`,
      x,
      y,
      stem: ring.stem * (0.8 + 0.35 * depth),
      depth,
      order: ri * 9 + i,
    };
  }),
);

export default function Spread10Vanguard({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();
  const still = STATIC_REVIEW_MODE || reduce;

  return (
    <Page stock="ink">
      <RunningHead chapter="10 / The Founding Vanguard™" issue="DIS Origin" />

      <PageBody>
        <div className="van-stage van3">
          <div className="van3__atmos" aria-hidden />

          {/* ── Editorial column ─────────────────────────────── */}
          <div className="van3__col">
            <Settle>
              <span className="van3__kicker">The Founding Vanguard™</span>
              <h2 className="van3__head">
                25 founding participants. The first readiness benchmark. The first
                readiness-to-outcome dataset.
              </h2>
            </Settle>

            <p className="van3__body">
              The Founding Vanguard™ is the 25-slot founding cohort — ecosystem
              participants across teams, brands, and series — whose scores generate the
              first readiness benchmark and the first readiness-to-outcome dataset. Each
              tranche of capital retires a specific, binary risk. Investors are not
              betting on a vision; they are funding a sequence of de-risking milestones.
            </p>

            <div className="van3__tranches">
              {TRANCHES.map((t, i) => (
                <motion.div
                  key={t.num}
                  className={`van3-tranche van3-tranche--${t.tone}`}
                  initial={still ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.14, ease: EASE }}
                >
                  <div className="van3-tranche__row">
                    <div className="van3-tranche__id">
                      <span className="van3-tranche__num">{t.num}</span>
                      <span className="van3-tranche__title">{t.title}</span>
                    </div>
                    <span className="van3-tranche__amount">{t.amount}</span>
                    <span className="van3-tranche__status">
                      {t.status}
                      <i className="van3-tranche__dot" />
                    </span>
                  </div>

                  <div className="van3-tranche__track">
                    <motion.span
                      className="van3-tranche__fill"
                      initial={still ? false : { width: 0 }}
                      whileInView={{ width: `${t.fill}%` }}
                      animate={STATIC_REVIEW_MODE ? { width: `${t.fill}%` } : undefined}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 1.1, delay: 0.6 + i * 0.14, ease: EASE }}
                    />
                  </div>

                  <div className="van3-tranche__meta">
                    <span className="van3-tranche__question">{t.question}</span>
                    <span className="van3-tranche__bullets">{t.bullets.join(" ")}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Living dataset ───────────────────────────────── */}
          <div className="van3__dataset">
            <div
              className="van3-field"
              role="img"
              aria-label="25 founding participant data sources feeding one central readiness benchmark"
            >
              <div className="van3-field__plane" aria-hidden />

              <div className="van3-core" aria-hidden>
                <span className="van3-core__ring van3-core__ring--outer" />
                <span className="van3-core__ring van3-core__ring--inner" />
                <span className="van3-core__label">
                  PRSC
                  <br />
                  READINESS
                  <br />
                  BENCHMARK
                </span>
              </div>

              {PINS.map((p) => (
                <motion.span
                  key={p.key}
                  className="van3-pin"
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    height: `${p.stem}px`,
                    opacity: 0.4 + p.depth * 0.6,
                    zIndex: Math.round(p.depth * 100),
                  }}
                  initial={still ? false : { opacity: 0, scaleY: 0.2 }}
                  whileInView={{ opacity: 0.4 + p.depth * 0.6, scaleY: 1 }}
                  animate={STATIC_REVIEW_MODE ? { scaleY: 1 } : undefined}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: p.order * 0.028, ease: EASE }}
                >
                  <i className="van3-pin__head" />
                </motion.span>
              ))}
            </div>

            <div className="van3__caption">
              <span className="van3__captionHead">Data becomes intelligence.</span>
              <span className="van3__captionSub">
                25 sources. One benchmark. Living and learning.
              </span>
            </div>
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="10" />
    </Page>
  );
}
