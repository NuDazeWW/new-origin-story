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
 * Entity typography is staged directly into the architecture's own negative
 * space: the uppermost glass deck is the parent, the deck below it is PRSC,
 * the dark structural band beneath PRSC is the independence firewall, the
 * illuminated deck under the firewall is DIS, and the detached violet
 * far-field platform is NuDaze. No diagram geometry is drawn — the only
 * directional graphic is one short arrow into the DIS floor.
 */

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

          {/* ---------- Entity typography staged into the architecture ---------- */}
          <div className="s5-marks" role="group" aria-label="Entity structure">
            {/* PARENT — uppermost glass deck, staged across its two bays */}
            <Settle delay={0.18} className="s5-bay s5-bay--parent-role">
              <span className="s5-role s5-role--parent">Parent</span>
            </Settle>
            <Settle delay={0.22} className="s5-bay s5-bay--parent-a">
              <span className="s5-ent s5-ent--parent">NicoleIsNine</span>
            </Settle>
            <Settle delay={0.26} className="s5-bay s5-bay--parent-b">
              <span className="s5-ent s5-ent--parent">Holdings</span>
            </Settle>

            {/* PRSC — illuminated deck directly below the parent level */}
            <Settle delay={0.38} className="s5-bay s5-bay--std-a">
              <span className="s5-role s5-role--std">The Standard</span>
              <span className="s5-legal">PRSC LLC</span>
              <span className="s5-ent s5-ent--std">Partnership Readiness</span>
            </Settle>
            <Settle delay={0.42} className="s5-bay s5-bay--std-b">
              <span className="s5-ent s5-ent--std">Standards Council</span>
            </Settle>

            {/* FIREWALL — the existing dark structural band is the firewall */}
            <Settle delay={0.5} className="s5-bay s5-bay--firewall">
              <span className="s5-role s5-role--firewall">Independence Firewall</span>
            </Settle>

            {/* DIS — illuminated deck beneath the firewall */}
            <Settle delay={0.62} className="s5-bay s5-bay--dis-a">
              <span className="s5-role s5-role--dis">The Platform</span>
              <span className="s5-legal">DIS Inc.</span>
              <span className="s5-ent s5-ent--dis">Decision</span>
            </Settle>
            <Settle delay={0.66} className="s5-bay s5-bay--dis-b">
              <span className="s5-ent s5-ent--dis">Intelligence Systems</span>
            </Settle>

            {/* Two short downward indicators in the dark band above the DIS platform */}
            <Settle delay={0.7} className="s5-bay s5-bay--drop-a">
              <span className="s5-downarrow" aria-hidden />
            </Settle>
            <Settle delay={0.74} className="s5-bay s5-bay--drop-b">
              <span className="s5-downarrow" aria-hidden />
            </Settle>

            {/* SAFE — vertical arrows rising beneath the DIS platform only */}
            <Settle delay={0.82} className="s5-bay s5-bay--safe">
              <span className="s5-safe-arrows" aria-hidden>
                <span className="s5-uparrow" />
                <span className="s5-uparrow" />
              </span>
              <span className="s5-safe-note">SAFE converts at DIS</span>
            </Settle>

            {/* NUDAZE — detached far-field platform, operationally separated */}
            <Settle delay={0.86} className="s5-bay s5-bay--agency">
              <span className="s5-ent s5-ent--agency">NuDaze Worldwide</span>
              <span className="s5-role s5-role--agency">Arm&rsquo;s-length agency</span>
            </Settle>
          </div>


        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="05" />
    </Page>
  );
}
