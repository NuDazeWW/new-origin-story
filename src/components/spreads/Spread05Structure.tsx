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

            {/* ------------------------------------------------------------------
                ONE registered typography overlay, drawn on the plate's native
                1920 × 1088 artboard and scaled with mathematically identical
                cover behaviour (slice = object-fit: cover, xMid/yMid = center).
                Decorative only — the semantic structure lives below.
               ------------------------------------------------------------------ */}
            <svg
              className="s5-overlay"
              viewBox="0 0 1920 1088"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <radialGradient id="s5shade" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#05080F" stopOpacity="0.72" />
                  <stop offset="100%" stopColor="#05080F" stopOpacity="0" />
                </radialGradient>
                <filter id="s5soft" x="-40%" y="-40%" width="180%" height="180%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#05080F" floodOpacity="0.95" />
                </filter>
                <filter id="s5cyan" x="-60%" y="-60%" width="220%" height="220%">
                  <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#5CC9F5" floodOpacity="0.35" />
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#05080F" floodOpacity="0.9" />
                </filter>
                <filter id="s5violet" x="-60%" y="-60%" width="220%" height="220%">
                  <feDropShadow dx="0" dy="0" stdDeviation="11" floodColor="#8E7BFF" floodOpacity="0.4" />
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#05080F" floodOpacity="0.9" />
                </filter>
              </defs>

              {/* localized contrast correction — no cards, only air darkening */}
              <ellipse cx="1070" cy="285" rx="230" ry="80" fill="url(#s5shade)" />
              <ellipse cx="1560" cy="262" rx="230" ry="78" fill="url(#s5shade)" />
              <ellipse cx="1080" cy="505" rx="235" ry="84" fill="url(#s5shade)" />
              <ellipse cx="1570" cy="482" rx="225" ry="74" fill="url(#s5shade)" />
              <ellipse cx="1620" cy="562" rx="200" ry="44" fill="url(#s5shade)" />
              <ellipse cx="1060" cy="642" rx="215" ry="66" fill="url(#s5shade)" />
              <ellipse cx="1250" cy="912" rx="260" ry="60" fill="url(#s5shade)" />

              {/* ---------- PARENT · uppermost glass floor ---------- */}
              <g transform="rotate(-5 950 300)">
                <text className="s5o-role s5o-role--parent" x="950" y="258">PARENT</text>
                <text className="s5o-ent s5o-ent--parent" x="950" y="304" filter="url(#s5cyan)">NicoleIsNine</text>
              </g>
              <g transform="rotate(4 1395 268)">
                <text className="s5o-ent s5o-ent--parent" x="1395" y="268" filter="url(#s5cyan)">Holdings</text>
              </g>

              {/* ---------- THE STANDARD · second illuminated floor ---------- */}
              <g transform="rotate(-5 960 528)">
                <text className="s5o-role s5o-role--std" x="960" y="462">THE STANDARD</text>
                <text className="s5o-legal" x="960" y="490" filter="url(#s5soft)">PRSC LLC</text>
                <text className="s5o-ent s5o-ent--std s5o-ent--long" x="960" y="534" filter="url(#s5soft)">Partnership Readiness</text>
              </g>
              <g transform="rotate(4 1380 498)">
                <text className="s5o-ent s5o-ent--std s5o-ent--long" x="1380" y="498" filter="url(#s5soft)">Standards Council</text>
              </g>

              {/* ---------- INDEPENDENCE FIREWALL · dark structural band ---------- */}
              <g transform="rotate(4 1620 568)">
                <text className="s5o-firewall" x="1620" y="568" filter="url(#s5soft)">INDEPENDENCE FIREWALL</text>
              </g>

              {/* ---------- THE PLATFORM · illuminated deck beneath the firewall ---------- */}
              <g transform="rotate(-5 950 674)">
                <text className="s5o-role s5o-role--dis" x="950" y="592">THE PLATFORM</text>
                <text className="s5o-legal" x="950" y="620" filter="url(#s5soft)">DIS Inc.</text>
                <text className="s5o-ent s5o-ent--dis" x="950" y="670" filter="url(#s5violet)">Decision</text>
              </g>
              <g transform="rotate(4 1380 644)">
                <text className="s5o-ent s5o-ent--dis s5o-ent--long" x="1380" y="644" filter="url(#s5violet)">Intelligence Systems</text>
              </g>

              {/* ---------- Two downward platform indicators ---------- */}
              <g className="s5o-arrow s5o-arrow--down" filter="url(#s5soft)">
                <path d="M1230 600 L1230 682 M1219 668 L1230 684 L1241 668" />
                <path d="M1790 566 L1790 648 M1779 634 L1790 650 L1801 634" />
              </g>


              {/* ---------- SAFE conversion · upward, terminating at DIS only ---------- */}
              <g className="s5o-arrow s5o-arrow--up" filter="url(#s5soft)">
                <path d="M1060 872 L1060 792 M1049 806 L1060 790 L1071 806" />
                <path d="M1520 872 L1520 792 M1509 806 L1520 790 L1531 806" />
              </g>
              <text className="s5o-safe" x="1250" y="918" filter="url(#s5soft)">SAFE CONVERTS AT DIS</text>
            </svg>
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

          {/* ---------- NuDaze · approved detached platform (unchanged) ---------- */}
          <div className="s5-marks">
            <Settle delay={0.86} className="s5-bay s5-bay--agency">
              <span className="s5-ent s5-ent--agency">NuDaze Worldwide</span>
              <span className="s5-role s5-role--agency">Arm&rsquo;s-length agency</span>
            </Settle>
          </div>

          {/* ---------- Screen-reader structure (no second visible copy) ---------- */}
          <ul className="sr-only">
            <li>NicoleIsNine Holdings — Parent</li>
            <li>PRSC LLC — The Standard (Partnership Readiness Standards Council)</li>
            <li>Independence Firewall — structurally enforced separation</li>
            <li>DIS Inc. — The Platform (Decision Intelligence Systems); the SAFE converts at DIS</li>
            <li>NuDaze Worldwide — Arm&rsquo;s-length agency</li>
          </ul>
        </div>
      </PageBody>


      <Folio volume="Vol. I · Decision Intelligence Systems" page="05" />
    </Page>
  );
}
