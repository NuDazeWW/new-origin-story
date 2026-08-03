/**
 * SPREAD 05 — The Structure That Protects Your Investment
 * Dark architectural seam. Four entity annotations as pins. Luminous SAFE route.
 * Exact copy from production brief SLIDE 5.
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const PINS = [
  {
    id: "parent",
    label: "Parent",
    title: "NicoleIsNine Holdings",
    detail: "Holding company. Coordinates the standard, the platform, and the arm's-length agency.",
    left: "4.5rem",
    top: "62%",
  },
  {
    id: "standard",
    label: "The Standard",
    title: "PRSC LLC",
    detail: "Independent standard setter. The Council that defines and governs readiness.",
    right: "18%",
    top: "20%",
  },
  {
    id: "platform",
    label: "The Platform",
    title: "DIS Inc.",
    detail: "Where the SAFE converts. Owns the platform, the data, the subscriptions.",
    right: "18%",
    top: "46%",
  },
  {
    id: "agency",
    label: "Firewall",
    title: "NuDaze Worldwide",
    detail: "Arm's-length agency. Operational separation keeps the score trustworthy.",
    right: "18%",
    top: "72%",
  },
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
              <h2 className="ed-head" style={{ color: "var(--ink-text)" }}>
                Independence is not a compliance cost.
              </h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="sec-lede" style={{ color: "var(--ink-body)", maxWidth: "36ch" }}>
                It is the source of the moat. Value accrues cleanly to DIS equity — the platform, the data, the subscriptions.
              </p>
            </Settle>
          </div>

          {PINS.map((p, i) => (
            <motion.div
              key={p.id}
              className="struct-pin"
              style={{ left: p.left, right: p.right, top: p.top }}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.14, ease: EASE }}
            >
              <span className="struct-pin__label">{p.label}</span>
              <span className="struct-pin__title">{p.title}</span>
              <span className="struct-pin__detail">{p.detail}</span>
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
                initial={reduce ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, delay: 0.6, ease: EASE }}
              />
              <motion.circle
                cx="920"
                cy="220"
                r="5"
                fill="#00FFC2"
                initial={reduce ? false : { opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.8, ease: EASE }}
              />
            </svg>

            <div className="struct-route__label">
              <motion.span
                className="struct-route__pill"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
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
