/**
 * SPREAD 05 — The Structure That Protects Your Investment
 * CORRECTION PASS 04: left editorial column (investor thesis) + right
 * photographed governed architecture. Every entity annotation is anchored to a
 * real structural feature of the supplied governed-infrastructure image; the
 * independence firewall is the glass plane itself. One luminous SAFE trajectory
 * terminates only at DIS Inc. Exact copy from production brief SLIDE 5.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

/**
 * Entity identifiers and functional labels only — the approved source brief
 * supplies no descriptive copy for these entities, so none is rendered.
 * Each annotation is positioned against a structural feature of the plate:
 * ceiling span (parent), receding portal colonnade (standard), primary steel
 * column (platform), detached far-right glass bay (agency), glass plane
 * (firewall).
 */
const ENTITIES = [
  { id: "parent", label: "Parent", title: "NicoleIsNine Holdings" },
  { id: "standard", label: "The Standard", title: "PRSC LLC" },
  { id: "platform", label: "The Platform", title: "DIS Inc." },
  { id: "agency", label: "Arm's-length agency", title: "NuDaze Worldwide" },
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
        <div className="struct-stage s5-stage">
          {/* ---------- LEFT · investor thesis ---------- */}
          <div className="s5-col">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-electric-blue)" }}>
                The Structure That Protects Your Investment
              </span>
              <h2 className="s5-head">
                The rule that protects your investment: independence is not a compliance cost here — it is the source of the moat.
              </h2>
            </Settle>

            <div className="s5-claims">
              {STATEMENTS.map((s, i) => (
                <motion.p
                  key={s}
                  className="s5-claim"
                  initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.18 + i * 0.12, ease: EASE }}
                >
                  <span className="s5-claim__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="s5-claim__text">{s}</span>
                </motion.p>
              ))}
            </div>
          </div>

          {/* ---------- RIGHT · governed physical structure ---------- */}
          <div className="s5-plate">
            <img
              src="/06_governed_infrastructure.png"
              alt="Governed infrastructure: steel portal frames, glass planes and columns in controlled light"
              className="s5-plate__img"
              loading="lazy"
            />
            <div className="s5-plate__grade" />
            <div className="s5-plate__join" />

            {/* The firewall as a physical threshold: the glass plane and the
                hard lighting boundary between colonnade and column field. */}
            <div className="s5-firewall" aria-hidden />

            {/* One luminous SAFE trajectory — terminal only at DIS Inc. */}
            <div className="s5-route" aria-hidden>
              <svg className="struct-route__svg" viewBox="0 0 800 620" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="safeRoute" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(30,167,255,0)" />
                    <stop offset="24%" stopColor="rgba(30,167,255,0.7)" />
                    <stop offset="100%" stopColor="rgba(0,255,194,0.95)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 8 470 L 300 452 L 470 316"
                  fill="none"
                  stroke="url(#safeRoute)"
                  strokeWidth="1.6"
                  initial={STATIC_REVIEW_MODE || reduce ? false : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  animate={STATIC_REVIEW_MODE ? { pathLength: 1 } : undefined}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1.6, delay: 0.6, ease: EASE }}
                />
                <motion.circle
                  cx="470"
                  cy="316"
                  r="4.5"
                  fill="#00FFC2"
                  initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={STATIC_REVIEW_MODE ? { opacity: 1, scale: 1 } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.8, ease: EASE }}
                />
              </svg>
            </div>

            {ENTITIES.map((e, i) => (
              <motion.div
                key={e.id}
                className={`s5-anno s5-anno--${e.id}`}
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.14, ease: EASE }}
              >
                <span className="s5-anno__rule" />
                <span className="s5-anno__label">{e.label}</span>
                <span className="s5-anno__title">{e.title}</span>
              </motion.div>
            ))}

            <motion.div
              className="s5-anno s5-anno--firewall"
              initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.9, ease: EASE }}
            >
              <span className="s5-anno__rule" />
              <span className="s5-anno__label">Independence Firewall</span>
            </motion.div>

            {/* Functional SAFE label — used once, at the DIS destination. */}
            <motion.span
              className="s5-safe"
              initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 2, ease: EASE }}
            >
              SAFE converts at DIS
            </motion.span>
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="05" />
    </Page>
  );
}
