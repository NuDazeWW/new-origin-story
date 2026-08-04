/**
 * SPREAD 05 — The Structure That Protects Your Investment
 * REFERENCE-MATCH PASS: left editorial column (investor thesis) at reading size
 * + right side rebuilt as ONE vertical governance architecture: stacked
 * illuminated glass platforms over the supplied governed-infrastructure plate.
 * Every line has a defined function and terminates at a labeled structural
 * point. The SAFE route enters laterally and terminates only at DIS Inc.
 * Exact copy from production brief SLIDE 5.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

/**
 * Governance platforms, top to bottom. Entity identifiers, category labels and
 * the approved SAFE terminal note only — no invented governance copy.
 */
const PLATFORMS = [
  { id: "parent", title: "NicoleIsNine Holdings", label: "Parent" },
  { id: "standard", title: "PRSC LLC", label: "The Standard" },
  { id: "firewall", title: null, label: "Independence Firewall" },
  { id: "platform", title: "DIS Inc.", label: "The Platform", note: "SAFE converts here" },
  { id: "agency", title: "NuDaze Worldwide", label: "Arm's-length agency" },
] as const;

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
  const still = STATIC_REVIEW_MODE || reduce;

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
                  initial={still ? false : { opacity: 0, y: 14 }}
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

          {/* ---------- RIGHT · one vertical governance architecture ---------- */}
          <div className="s5-plate">
            <img
              src="/06_governed_infrastructure.png"
              alt="Governed infrastructure: steel portal frames, glass planes and columns in controlled light"
              className="s5-plate__img"
              loading="lazy"
            />
            <div className="s5-plate__grade" />
            <div className="s5-plate__join" />

            {/* Functional connection geometry only. Percent coordinate space. */}
            <svg className="s5-wire" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="s5Safe" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(30,167,255,0)" />
                  <stop offset="26%" stopColor="rgba(30,167,255,0.75)" />
                  <stop offset="100%" stopColor="rgba(0,255,194,0.95)" />
                </linearGradient>
              </defs>

              {/* Governance: parent platform → DIS platform (through the standard tier). */}
              <motion.path
                d="M 45 13 L 45 65"
                fill="none"
                stroke="rgba(107,199,255,0.5)"
                strokeWidth="0.25"
                vectorEffect="non-scaling-stroke"
                initial={still ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                animate={STATIC_REVIEW_MODE ? { pathLength: 1 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
              />

              {/* Arm's-length: parent → agency, detached down the outer field. */}
              <motion.path
                d="M 24 15 L 11 22 L 11 84 L 20 88"
                fill="none"
                stroke="rgba(150,140,220,0.42)"
                strokeWidth="0.22"
                strokeDasharray="3 4"
                vectorEffect="non-scaling-stroke"
                initial={still ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                animate={STATIC_REVIEW_MODE ? { pathLength: 1 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.4, delay: 0.7, ease: EASE }}
              />

              {/* SAFE: enters laterally, terminates on the DIS platform only. */}
              <motion.path
                d="M 0 78 L 26 78 L 40 67"
                fill="none"
                stroke="url(#s5Safe)"
                strokeWidth="0.45"
                vectorEffect="non-scaling-stroke"
                initial={still ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                animate={STATIC_REVIEW_MODE ? { pathLength: 1 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, delay: 0.9, ease: EASE }}
              />
            </svg>

            {/* Terminal signal on the DIS platform. */}
            <motion.span
              className="s5-terminal"
              initial={still ? false : { opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={STATIC_REVIEW_MODE ? { opacity: 1, scale: 1 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 2.1, ease: EASE }}
              aria-hidden
            />

            {/* The stacked structure itself. */}
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.id}
                className={`s5-tier s5-tier--${p.id}`}
                initial={still ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.13, ease: EASE }}
              >
                <span className="s5-tier__slab" aria-hidden>
                  <span className="s5-tier__face" />
                  <span className="s5-tier__edge" />
                  <span className="s5-tier__glow" />
                </span>
                <span className="s5-tier__tie" aria-hidden />
                <span className="s5-tier__meta">
                  {p.title ? <span className="s5-tier__title">{p.title}</span> : null}
                  <span className="s5-tier__label">{p.label}</span>
                  {"note" in p && p.note ? <span className="s5-tier__note">{p.note}</span> : null}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="05" />
    </Page>
  );
}
