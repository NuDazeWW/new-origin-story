/**
 * SPREAD 05 — The Structure That Protects Your Investment
 * Dark architectural seam. Four entity annotations as pins. Luminous SAFE route.
 * Exact copy from production brief SLIDE 5.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

/**
 * Entity identifiers and functional labels only — the approved source brief
 * supplies no descriptive copy for these entities, so none is rendered.
 */
const PINS = [
  {
    id: "parent",
    label: "Parent",
    title: "NicoleIsNine Holdings",
    right: "16%",
    top: "12%",
  },
  {
    id: "standard",
    label: "The Standard",
    title: "PRSC LLC",
    right: "16%",
    top: "31%",
  },
  {
    id: "platform",
    label: "The Platform · SAFE converts here",
    title: "DIS Inc.",
    right: "16%",
    top: "50%",
  },
  {
    id: "agency",
    label: "Arm's-length agency",
    title: "NuDaze Worldwide",
    right: "16%",
    top: "72%",
  },
  {
    id: "firewall",
    label: "Independence Firewall",
    title: "",
    left: "42%",
    top: "88%",
  },
];

/** Approved investment-protection statements — verbatim, SLIDE 5. */
const STATEMENTS = [
  "Value accrues cleanly to DIS equity — the platform, the data, the subscriptions",
  "The independence that makes the score trustworthy is structurally enforced — not promised",
  "The IP originates with the Founder and assigns directly to the Council, never through the agency",
  "The SAFE converts into DIS equity only — clean, unencumbered, no cross-entity complications",
];

export default function Spread05Structure({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ink">
      <RunningHead chapter="05 / The Structure" issue="DIS Origin" />

      <PageBody>
        <div className="struct-stage">
          <div className="struct-bed">
            <img
              src="/06_governed_infrastructure.png"
              alt="Governed infrastructure atmosphere"
              className="struct-bed__img"
              loading="lazy"
            />
            <div className="struct-bed__scrim" />
            <div className="struct-bed__seam" />
          </div>

          <div className="struct-title">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-electric-blue)" }}>The Structure That Protects Your Investment</span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)", fontSize: "clamp(1.3rem, 2vw, 2rem)", maxWidth: "24ch" }}>
                The rule that protects your investment: independence is not a compliance cost here — it is the source of the moat.
              </h2>
            </Settle>
          </div>

          <div className="struct-claims">
            {STATEMENTS.map((s, i) => (
              <motion.p
                key={s}
                className="struct-claim"
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.18 + i * 0.12, ease: EASE }}
              >
                {s}
              </motion.p>
            ))}
          </div>

          {PINS.map((p, i) => (
            <motion.div
              key={p.id}
              className="struct-pin"
              style={{ left: p.left, right: p.right, top: p.top }}
              initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.14, ease: EASE }}
            >
              <span className="struct-pin__label">{p.label}</span>
              {p.title ? <span className="struct-pin__title">{p.title}</span> : null}
            </motion.div>
          ))}

          <div className="struct-route">
            <svg className="struct-route__svg" viewBox="0 0 1280 720" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="safeRoute" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(30,167,255,0.85)" />
                  <stop offset="100%" stopColor="rgba(0,255,194,0.85)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 280 360 C 500 360, 720 200, 920 220"
                fill="none"
                stroke="url(#safeRoute)"
                strokeWidth="1.5"
                initial={STATIC_REVIEW_MODE || reduce ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }} animate={STATIC_REVIEW_MODE ? { pathLength: 1 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, delay: 0.6, ease: EASE }}
              />
              <motion.circle
                cx="920"
                cy="220"
                r="5"
                fill="#00FFC2"
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, scale: 1 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.8, ease: EASE }}
              />
            </svg>

            <div className="struct-route__label">
              <motion.span
                className="struct-route__pill"
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 2, ease: EASE }}
              >
                SAFE converts at DIS
              </motion.span>
            </div>
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="05" />
    </Page>
  );
}
