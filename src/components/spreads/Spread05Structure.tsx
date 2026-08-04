/**
 * SPREAD 05 — The Structure That Protects Your Investment
 * ASSET-FIRST REBUILD: the governance architecture is carried entirely by the
 * production plate `section05-governance-plate-r1.webp` (photographic depth,
 * material, perspective, reflections). HTML supplies only live typography:
 * the investor rule, the four protection statements, anchored entity labels,
 * and one restrained SAFE route terminating at DIS.
 * Exact copy from production brief SLIDE 5.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

/**
 * Entity marks anchored to physical features of the plate: the uppermost
 * illuminated deck (parent), the central institutional deck (PRSC and DIS as
 * siblings, left and right of the column), the central column itself (the
 * independence firewall) and the detached violet far-field platform (NuDaze).
 * Coordinates are page-percent over the raster plate.
 */
const MARKS = [
  { id: "parent", label: "Parent", title: "NicoleIsNine Holdings" },
  { id: "standard", label: "The Standard", title: "PRSC LLC" },
  { id: "platform", label: "The Platform", title: "DIS Inc.", note: "SAFE converts here" },
  { id: "firewall", label: "Independence Firewall", title: null },
  { id: "agency", label: "Arm's-length agency", title: "NuDaze Worldwide" },
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
        <div className="struct-stage s5-stage s5-stage--plate">
          {/* ---------- The production plate carries all depth and material ---------- */}
          <div className="s5-plate">
            <img
              src="/section05-governance-plate-r1.webp"
              alt="Illuminated glass governance platforms suspended between steel columns in a dark architectural hall"
              className="s5-plate__img"
              width={1920}
              height={1088}
              loading="lazy"
            />
            <div className="s5-plate__grade" />
          </div>

          {/* ---------- LEFT · investor rule + protection statements ---------- */}
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

          {/* ---------- Anchored entity structure + single SAFE route ---------- */}
          <div className="s5-marks">
            <svg className="s5-route" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="s5SafeR1" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(30,167,255,0.35)" />
                  <stop offset="45%" stopColor="rgba(30,167,255,0.75)" />
                  <stop offset="100%" stopColor="rgba(0,255,194,0.95)" />
                </linearGradient>
              </defs>

              {/* Governance connector: parent descends the central column, then
                  one branch terminates at PRSC and one at DIS. No arrows. */}
              <motion.path
                className="s5-gov"
                d="M 68.5 24.4 L 68.5 38 M 50.8 38 L 78.2 38 M 50.8 38 L 50.8 44.4 M 78.2 38 L 78.2 44.4"
                fill="none"
                stroke="rgba(196, 216, 232, 0.55)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
                initial={still ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                animate={STATIC_REVIEW_MODE ? { pathLength: 1 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, delay: 0.5, ease: EASE }}
              />

              {/* SAFE: begins at statement 04, crosses into the architecture,
                  terminates only at DIS. */}
              <motion.path
                className="s5-safeline"
                d="M 42.4 71.5 L 72 71.5 L 78.2 47.4"
                fill="none"
                stroke="url(#s5SafeR1)"
                strokeWidth="1.6"
                vectorEffect="non-scaling-stroke"
                initial={still ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                animate={STATIC_REVIEW_MODE ? { pathLength: 1 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.5, delay: 1.1, ease: EASE }}
              />
            </svg>

            {/* Visible endpoints: branch ends at each sibling; SAFE terminal at DIS. */}
            <span className="s5-node s5-node--standard" aria-hidden />
            <span className="s5-node s5-node--branch" aria-hidden />
            <span className="s5-origin" aria-hidden />
            <span className="s5-arrow" aria-hidden />
            <motion.span
              className="s5-terminal s5-terminal--r1"
              initial={still ? false : { opacity: 0, scale: 0.4 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={STATIC_REVIEW_MODE ? { opacity: 1, scale: 1 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 2.3, ease: EASE }}
              aria-hidden
            />

            {MARKS.map((m, i) => (
              <motion.div
                key={m.id}
                className={`s5-mark s5-mark--${m.id}`}
                initial={still ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: EASE }}
              >
                <span className="s5-mark__rule" aria-hidden />
                <span className="s5-mark__label">{m.label}</span>
                {m.title ? <span className="s5-mark__title">{m.title}</span> : null}
                {"note" in m && m.note ? <span className="s5-mark__note">{m.note}</span> : null}
              </motion.div>
            ))}
          </div>

        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="05" />
    </Page>
  );
}
