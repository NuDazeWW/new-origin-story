/**
 * SPREAD 06 — The Four-Part Moat
 * ASSET-FIRST REBUILD: the crystalline moat object is a single production
 * raster (`section06-moat-crystal-r1.png`) carrying refraction, internal
 * density, caustics, contact shadow and ground reflection. CSS only positions,
 * scales, grounds and integrates it. The left column carries the approved
 * quotation and one disciplined four-part index.
 * Exact copy from production brief SLIDE 6.
 */

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.25, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg className="moat4-entry__icon" viewBox="0 0 24 24" aria-hidden>
      {children}
    </svg>
  );
}

const ICONS: Record<string, ReactNode> = {
  methodology: (
    <Icon>
      <rect x="5" y="10.5" width="14" height="9" rx="1.6" {...S} />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" {...S} />
      <circle cx="12" cy="15" r="1.4" {...S} />
    </Icon>
  ),
  governance: (
    <Icon>
      <path d="M12 3.5l6.5 2.4v5.5c0 4-2.7 7.2-6.5 9.1-3.8-1.9-6.5-5.1-6.5-9.1V5.9z" {...S} />
      <path d="M12 9.4v2.4" {...S} />
      <circle cx="12" cy="14.4" r="0.9" fill="currentColor" stroke="none" />
    </Icon>
  ),
  benchmark: (
    <Icon>
      <ellipse cx="12" cy="6.6" rx="6.6" ry="2.6" {...S} />
      <path d="M5.4 6.6v4.6c0 1.4 3 2.6 6.6 2.6s6.6-1.2 6.6-2.6V6.6" {...S} />
      <path d="M5.4 11.2v4.6c0 1.4 3 2.6 6.6 2.6s6.6-1.2 6.6-2.6v-4.6" {...S} />
    </Icon>
  ),
  outcome: (
    <Icon>
      <path d="M4.5 17.5l4.4-4.6 3.1 2.6 4.3-5.4" {...S} />
      <path d="M15.1 9.4h4v4" {...S} />
      <path d="M4.5 20.2h15" {...S} opacity="0.4" />
    </Icon>
  ),
};

/** Approved moat labels and statuses only — SLIDE 6. No generated descriptions. */
const STRATA = [
  {
    id: "methodology",
    label: "In Place",
    title: "Trade-Secret Methodology",
    body: "The Readiness Engine™ weighting and calibration mathematics — never trademarked, never disclosed. Backed by an active IP and trademark portfolio.",
    accent: "spot",
  },
  {
    id: "governance",
    label: "In Place",
    title: "Independent Governance",
    body: "The four-entity separation that makes independence enforceable, not promised.",
    accent: "live",
  },
  {
    id: "benchmark",
    label: "Building via Vanguard",
    title: "Benchmark Database",
    body: "A proprietary comparison set that grows more valuable with every entity rated.",
    accent: "future",
  },
  {
    id: "outcome",
    label: "Post-Vanguard · Year 2",
    title: "Outcome Intelligence",
    body: "Linking readiness scores to real commercial outcomes — the data that makes the standard indispensable and the platform irreplaceable.",
    accent: "future",
  },
];

export default function Spread06Moat({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();
  const still = STATIC_REVIEW_MODE || reduce;

  return (
    <Page stock="platinum">
      <RunningHead chapter="06 / The Four-Part Moat" issue="DIS Origin" />

      <PageBody>
        <div className="moat-stage moat-stage--plate">
          {/* One singular crystalline mass — production raster, not constructed art. */}
          <motion.div
            className="moat6-object"
            initial={still ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, delay: 0.12, ease: EASE }}
          >
            <span className="moat6-object__glow" aria-hidden />
            <img
              src="/section06-moat-crystal-r1.png"
              alt="A single crystalline engineered mass of interlocking translucent blades with a dense illuminated core"
              className="moat6-object__img"
              width={1536}
              height={1536}
              loading="lazy"
            />
          </motion.div>

          <div className="moat4-col">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>
                Defensibility That Compounds
              </span>
            </Settle>
            <Settle delay={0.12}>
              <p className="moat4-statement">“They could build a scoring tool.”</p>
            </Settle>
            <Settle delay={0.18}>
              <span className="moat4-rule" aria-hidden />
            </Settle>
            <Settle delay={0.22}>
              <p className="moat4-support">
                “They cannot build an independent standard. Independence is not a feature of PRSC — it is the entire product. You cannot replicate structural independence by building a better algorithm. That is the moat.”
              </p>
            </Settle>

            {/* One disciplined vertical index on a single shared axis. */}
            <div className="moat4-index">
              <span className="moat4-index__axis" aria-hidden />
              {STRATA.map((s, i) => (
                <motion.div
                  key={s.id}
                  className={`moat4-entry moat4-entry--${s.accent}`}
                  initial={still ? false : { opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={STATIC_REVIEW_MODE ? { opacity: 1, x: 0 } : undefined}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: EASE }}
                >
                  <span className="moat4-entry__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="moat4-entry__glyph">{ICONS[s.id]}</span>
                  <span className="moat4-entry__body">
                    <span className="moat4-entry__title">{s.title}</span>
                    <span className="moat4-entry__desc">{s.body}</span>
                    <span className="moat4-entry__status">{s.label}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Compounding note — glass card grounded in the lower-right field. */}
          <motion.aside
            className="moat6-note"
            initial={still ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
          >
            <span className="moat6-note__glyph" aria-hidden>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="7.4" {...S} />
                <circle cx="12" cy="12" r="3.4" {...S} />
                <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
                <path d="M12 2.4v2.2M12 19.4v2.2M2.4 12h2.2M19.4 12h2.2" {...S} />
              </svg>
            </span>
            <p className="moat6-note__text">
              Independence compounds. No single feature creates the moat. Together, they create a
              standard that cannot be replicated.
            </p>
          </motion.aside>
        </div>

      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="06" />
    </Page>
  );
}
