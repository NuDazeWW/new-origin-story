/**
 * SPREAD 06 — The Four-Part Moat
 * REFERENCE-MATCH PASS: the engineered object is recomposed and cropped as one
 * dominant crystalline mass at ~58% of the page. The left column carries the
 * approved quotation split into a dominant display statement plus supporting
 * argument, then one disciplined four-part index on a single shared axis.
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
  { id: "methodology", label: "In Place", title: "Trade-Secret Methodology", accent: "spot" },
  { id: "governance", label: "In Place", title: "Independent Governance", accent: "live" },
  { id: "benchmark", label: "Building via Vanguard", title: "Benchmark Database", accent: "future" },
  { id: "outcome", label: "In Progress", title: "Outcome Intelligence", accent: "future" },
];

/** Secondary crystal facets — the same laminated mass, cropped as one object. */
const FACETS = ["a", "b", "c"];

export default function Spread06Moat({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();
  const still = STATIC_REVIEW_MODE || reduce;

  return (
    <Page stock="platinum">
      <RunningHead chapter="06 / The Four-Part Moat" issue="DIS Origin" />

      <PageBody>
        <div className="moat-stage">
          {/* One dominant crystalline object — rising, cropped, centered mass. */}
          <div className="moat4-object" aria-hidden>
            <div className="moat4-halo" />
            <div className="moat4-object__cast" />
            {FACETS.map((f) => (
              <div key={f} className={`moat4-shard moat4-shard--${f}`}>
                <span className="moat4-shard__skin" />
                <span className="moat4-shard__spec" />
              </div>
            ))}
            {STRATA.map((s, i) => (
              <motion.div
                key={s.id}
                className={`moat4-shard moat4-shard--${s.id}`}
                initial={still ? false : { opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease: EASE }}
              >
                <span className="moat4-shard__skin" />
                <span className="moat4-shard__spec" />
                <span className="moat4-shard__edge" />
              </motion.div>
            ))}
            <div className="moat4-object__sheen" />
          </div>

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
                    <span className="moat4-entry__status">{s.label}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="06" />
    </Page>
  );
}
