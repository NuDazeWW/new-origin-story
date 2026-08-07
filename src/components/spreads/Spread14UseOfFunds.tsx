/**
 * SPREAD 14 — Use of Funds
 * One sculptural capital object: the full $2,500,000 is a single extruded slab in
 * perspective, divided along one continuous measurement axis at exact proportions
 * (42/18/14/10/6/4/6). No treemap, no legend, no visible table, no cards. The four
 * larger allocations carry type directly on the object; the three smallest use direct
 * leader-line annotations attached to their exact physical region.
 *
 * Final copy pass: framing sentence, full allocation descriptions, and a 24-month
 * runway total.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const ALLOCATIONS = [
  {
    label: "Staffing & Operations",
    amount: 1050000,
    pct: 42,
    color: "#1EA7FF",
    description: "Core team and business operations across the 24-month runway.",
  },
  {
    label: "Platform Engineering",
    amount: 450000,
    pct: 18,
    color: "#0B5B7A",
    description: "The Readiness Terminal™, the Readiness Engine™, and user interfaces.",
  },
  {
    label: "Intelligence & Data",
    amount: 350000,
    pct: 14,
    color: "#1B2A3D",
    description: "The Benchmark Database, scoring models, and third-party data.",
  },
  {
    label: "Founding Vanguard™ & GTM",
    amount: 250000,
    pct: 10,
    color: "#14243A",
    description: "The Founding Vanguard™ cohort, onboarding, and early commercialization.",
  },
  {
    label: "Legal & IP",
    amount: 150000,
    pct: 6,
    color: "#111A29",
    description: "Patent filings, trademark registration, governance, and contracting. IP protection is a first-order priority for a standards business.",
  },
  {
    label: "Ecosystem Partnerships",
    amount: 100000,
    pct: 4,
    color: "#0E1624",
    description: "Integrations, API access, and anchor/partner development.",
  },
  {
    label: "Strategic Contingency Reserve",
    amount: 150000,
    pct: 6,
    color: "#05080F",
    description: "Runway extension, strategic opportunities, or unforeseen needs — deployed with Board oversight.",
  },
];

const TOTAL = 2500000;

/* ---- object geometry (single slab, one measurement axis) ---- */
const X0 = 60;
const AXIS = 1120; // px of axis == 100% == $2,500,000
const BASE_Y = 470; // front-bottom edge
const FACE_H = 208; // extruded face height
const SHEAR = 46; // horizontal rake of the vertical extrusion
const DEPTH_X = 54; // top-surface depth
const DEPTH_Y = 58;

const TOP_Y = BASE_Y - FACE_H;
const BACK_Y = TOP_Y - DEPTH_Y;

type Seg = {
  a: number;
  b: number;
  mid: number;
  width: number;
} & (typeof ALLOCATIONS)[number];

const SEGMENTS: Seg[] = (() => {
  let cursor = X0;
  return ALLOCATIONS.map((alloc) => {
    const width = (alloc.pct / 100) * AXIS;
    const seg = { ...alloc, a: cursor, b: cursor + width, mid: cursor + width / 2, width };
    cursor += width;
    return seg;
  });
})();

const face = (s: Seg) =>
  `${s.a},${BASE_Y} ${s.b},${BASE_Y} ${s.b + SHEAR},${TOP_Y} ${s.a + SHEAR},${TOP_Y}`;

const top = (s: Seg) =>
  `${s.a + SHEAR},${TOP_Y} ${s.b + SHEAR},${TOP_Y} ${s.b + SHEAR + DEPTH_X},${BACK_Y} ${
    s.a + SHEAR + DEPTH_X
  },${BACK_Y}`;

const LARGE = SEGMENTS.filter((s) => s.pct > 6);
const SMALL = SEGMENTS.filter((s) => s.pct <= 6);

/** Staggered annotation altitudes so leader lines never collide. */
const ANNO_Y = [60, 118, 176];

export default function Spread14UseOfFunds({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();
  const still = STATIC_REVIEW_MODE || reduce;

  return (
    <Page stock="ice">
      <RunningHead chapter="14 / Use of Funds" issue="DIS Origin" />

      <PageBody>
        <div className="fund-stage fund3-stage">
          <div className="fund3-header">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>USE OF FUNDS</span>
              <h2 className="fund3-total">$2,500,000</h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="fund3-head">Capital deployed with discipline.</p>
              <p className="fund3-frame">
                The allocation reflects the priorities of a standards business at formation: build the platform, protect the IP, seed the data network, and reach the market with enough runway to prove the hypothesis.
              </p>
            </Settle>
          </div>

          <div className="fund3-object">
            <svg
              className="fund3-svg"
              viewBox="0 0 1280 560"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label={`Single capital object totalling $${TOTAL.toLocaleString()}, divided along one axis: ${ALLOCATIONS.map(
                (a) => `${a.label} ${a.pct} percent, $${a.amount.toLocaleString()}`,
              ).join("; ")}`}
            >
              <defs>
                {SEGMENTS.map((s, i) => (
                  <linearGradient key={`gf-${i}`} id={`fund3-gf-${i}`} x1="0" y1="0" x2="0.35" y2="1">
                    <stop offset="0%" stopColor={s.color} stopOpacity="1" />
                    <stop offset="58%" stopColor={s.color} stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#05080F" stopOpacity="0.55" />
                  </linearGradient>
                ))}
                {SEGMENTS.map((s, i) => (
                  <linearGradient key={`gt-${i}`} id={`fund3-gt-${i}`} x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor={s.color} stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#E6EBF1" stopOpacity="0.72" />
                  </linearGradient>
                ))}
                <linearGradient id="fund3-spec" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
                  <stop offset="34%" stopColor="#FFFFFF" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#05080F" stopOpacity="0.14" />
                </linearGradient>
                <linearGradient id="fund3-reflect" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#05080F" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#05080F" stopOpacity="0" />
                </linearGradient>
                <filter id="fund3-contact" x="-20%" y="-120%" width="140%" height="360%">
                  <feGaussianBlur stdDeviation="14" />
                </filter>
                <clipPath id="fund3-slab">
                  <polygon
                    points={`${X0},${BASE_Y} ${X0 + AXIS},${BASE_Y} ${X0 + AXIS + SHEAR},${TOP_Y} ${
                      X0 + SHEAR
                    },${TOP_Y}`}
                  />
                </clipPath>
              </defs>

              {/* cast + contact shadow */}
              <ellipse
                cx={X0 + AXIS / 2 + 30}
                cy={BASE_Y + 26}
                rx={AXIS / 2 - 10}
                ry={16}
                fill="#05080F"
                opacity="0.34"
                filter="url(#fund3-contact)"
              />

              <motion.g
                initial={still ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={still ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.1, ease: EASE }}
              >
                {/* extruded front faces along the single measurement axis */}
                {SEGMENTS.map((s, i) => (
                  <g key={s.label}>
                    <polygon points={face(s)} fill={`url(#fund3-gf-${i})`} />
                    <polygon points={top(s)} fill={`url(#fund3-gt-${i})`} />
                    <line
                      x1={s.b}
                      y1={BASE_Y}
                      x2={s.b + SHEAR + DEPTH_X}
                      y2={BACK_Y}
                      stroke="#05080F"
                      strokeOpacity="0.3"
                      strokeWidth="0.75"
                    />
                  </g>
                ))}

                {/* controlled reflection across the whole object */}
                <polygon
                  points={`${X0},${BASE_Y} ${X0 + AXIS},${BASE_Y} ${X0 + AXIS + SHEAR},${TOP_Y} ${
                    X0 + SHEAR
                  },${TOP_Y}`}
                  fill="url(#fund3-spec)"
                  style={{ mixBlendMode: "screen" }}
                />
                <g clipPath="url(#fund3-slab)">
                  <polygon
                    points={`${X0 + SHEAR * 0.35},${BASE_Y} ${X0 + AXIS * 0.42},${BASE_Y} ${
                      X0 + AXIS * 0.42 + SHEAR
                    },${TOP_Y} ${X0 + SHEAR},${TOP_Y}`}
                    fill="#FFFFFF"
                    opacity="0.07"
                  />
                </g>

                {/* silhouette */}
                <polygon
                  points={`${X0},${BASE_Y} ${X0 + AXIS},${BASE_Y} ${X0 + AXIS + SHEAR},${TOP_Y} ${
                    X0 + AXIS + SHEAR + DEPTH_X
                  },${BACK_Y} ${X0 + SHEAR + DEPTH_X},${BACK_Y} ${X0 + SHEAR},${TOP_Y}`}
                  fill="none"
                  stroke="#05080F"
                  strokeOpacity="0.34"
                  strokeWidth="1"
                />

                {/* surface reflection below the object */}
                <polygon
                  points={`${X0},${BASE_Y} ${X0 + AXIS},${BASE_Y} ${X0 + AXIS - SHEAR * 0.5},${
                    BASE_Y + 62
                  } ${X0 - SHEAR * 0.5},${BASE_Y + 62}`}
                  fill="url(#fund3-reflect)"
                />

                {/* typography carried directly on the four larger lengths */}
                {LARGE.map((s) => (
                  <g key={`t-${s.label}`}>
                    <text
                      className="fund3-onpct"
                      x={s.a + SHEAR * 0.55 + 16}
                      y={BASE_Y - 118}
                    >
                      {s.pct}%
                    </text>
                    <text
                      className="fund3-onlabel"
                      x={s.a + SHEAR * 0.4 + 16}
                      y={BASE_Y - 86}
                    >
                      {s.label}
                    </text>
                    <text
                      className="fund3-onamount"
                      x={s.a + SHEAR * 0.35 + 16}
                      y={BASE_Y - 64}
                    >
                      ${s.amount.toLocaleString()}
                    </text>
                  </g>
                ))}

                {/* direct annotations attached to the three smallest regions */}
                {SMALL.map((s, i) => {
                  const anchorX = s.mid + SHEAR + DEPTH_X * 0.5;
                  const anchorY = BACK_Y + DEPTH_Y * 0.45;
                  const y = ANNO_Y[i];
                  const textX = anchorX + 26;
                  return (
                    <g key={`a-${s.label}`}>
                      <circle cx={anchorX} cy={anchorY} r="2.4" fill="#05080F" opacity="0.7" />
                      <path
                        d={`M${anchorX},${anchorY} L${anchorX},${y + 12} L${textX - 8},${y + 12}`}
                        fill="none"
                        stroke="#05080F"
                        strokeOpacity="0.45"
                        strokeWidth="0.9"
                      />
                      <text className="fund3-annopct" x={textX} y={y}>
                        {s.pct}%
                      </text>
                      <text className="fund3-annolabel" x={textX} y={y + 18}>
                        {s.label}
                      </text>
                      <text className="fund3-annoamount" x={textX} y={y + 34}>
                        ${s.amount.toLocaleString()}
                      </text>
                    </g>
                  );
                })}
              </motion.g>
            </svg>
          </div>

          {/* Allocation spec ledger — visible editorial reference below the object. */}
          <motion.div
            className="fund3-ledger"
            initial={still ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={still ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
          >
            <div className="fund3-ledger__grid">
              {ALLOCATIONS.map((a) => (
                <div className="fund3-ledger__item" key={a.label}>
                  <div className="fund3-ledger__row">
                    <span className="fund3-ledger__label">{a.label}</span>
                    <span className="fund3-ledger__amt">${a.amount.toLocaleString()}</span>
                    <span className="fund3-ledger__pct">{a.pct}%</span>
                  </div>
                  <p className="fund3-ledger__desc">{a.description}</p>
                </div>
              ))}
            </div>
            <div className="fund3-ledger__total">
              <span className="fund3-ledger__total-label">Total</span>
              <span className="fund3-ledger__total-figure">${TOTAL.toLocaleString()}</span>
              <span className="fund3-ledger__total-note">24-month runway</span>
            </div>
          </motion.div>

          {/* Semantic data retained for assistive technology and print output. */}
          <table className="fund3-table">
            <caption>Use of funds allocation table</caption>
            <thead>
              <tr>
                <th>Allocation</th>
                <th>Amount</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              {ALLOCATIONS.map((a) => (
                <tr key={a.label}>
                  <td>{a.label}</td>
                  <td>${a.amount.toLocaleString()}</td>
                  <td>{a.pct}%</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td>${TOTAL.toLocaleString()}</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="14" />
    </Page>
  );
}
