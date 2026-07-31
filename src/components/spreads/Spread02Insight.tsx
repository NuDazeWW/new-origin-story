/**
 * SPREAD 02 — The Insight
 * Dark stock. Photograph runs full bleed across the top with the FICO precedent
 * printed over the plate; it builds left to right, once, on first view.
 */

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import evidenceAsset from "@/assets/dis-evidence.png.asset.json";
import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Body, Figure, Settle } from "@/components/print/Editorial";

const MARKS = [
  {
    year: "1956",
    label: "Founded",
    detail: "Fair, Isaac and Company is founded to score credit risk statistically.",
    key: false,
  },
  {
    year: "1995",
    label: "Fannie Mae mandate",
    detail:
      "Fannie Mae and Freddie Mac direct lenders to use the score. The measure becomes required infrastructure — the inflection point.",
    key: true,
  },
  {
    year: "Today",
    label: "$20B+ market cap",
    detail: "Not a software company — the reference the entire market quotes.",
    key: false,
  },
];

const EASE = [0.22, 0.61, 0.36, 1] as const;

function PrecedentTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const run = reduce ? true : inView;

  return (
    <div className="tl-plate" ref={ref}>
      <span className="ed-kicker">The Precedent</span>
      <div className="tl">
        <motion.div
          className="tl__axis"
          initial={reduce ? false : { scaleX: 0 }}
          animate={run ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        />
        <div className="tl__marks">
          {MARKS.map((m, i) => (
            <motion.div
              key={m.year}
              className={`tl__mark${m.key ? " tl__mark--key" : ""}`}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={run ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.55, delay: 0.28 + i * 0.34, ease: EASE }}
            >
              <motion.span
                className="tl__tick"
                initial={reduce ? false : { scaleY: 0 }}
                animate={run ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.32, delay: 0.22 + i * 0.34, ease: EASE }}
                style={{ transformOrigin: "top center" }}
              />
              <div className="tl__year">{m.year}</div>
              <div className="tl__label">{m.label}</div>
              <div className="tl__detail">{m.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Spread02Insight({ isActive = false }: { isActive?: boolean }) {
  void isActive;

  return (
    <Page stock="ink">
      <RunningHead chapter="02 / The Insight" issue="DIS Origin · No. 01" />

      <PageBody>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", minHeight: 0 }}>
          {/* Full-bleed photograph carrying the precedent chart */}
          <div className="fig-fill" style={{ flex: "1 1 auto", minHeight: 0, padding: "1rem 4.5rem 0" }}>
            <Figure
              src={evidenceAsset.url}
              alt="Fragments of evidence resolving into a single decision line"
              caption="Every mature market converges on one trusted measure."
              captionClassName="fig__cap--center"
              tone="full"
              objectPosition="center 50%"
              overlay={<PrecedentTimeline />}
            />
          </div>

          {/* Text register */}
          <div
            style={{
              flex: "0 0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3.5rem",
              padding: "1.3rem 4.5rem 0",
              alignItems: "start",
              borderTop: "1px solid var(--rule)",
              marginTop: "1.2rem",
            }}
          >
            <Settle>
              <p className="ed-quote" style={{ fontSize: "clamp(1.25rem, 2vw, 2.05rem)" }}>
                “Credit has FICO. Public markets have ratings agencies. Real estate has the
                appraisal. Partnership readiness has nothing.”
              </p>
            </Settle>

            <Settle delay={0.12}>
              <Body>
                The first credible, neutral body to define the score sets the reference everyone
                else quotes — and the platform that operationalizes it captures the recurring
                value.
              </Body>
              <Body>
                We are building the FICO score for that market. FICO did not reach a $20B+ market
                cap by being a software company; it got there by becoming infrastructure the entire
                market depends on.
              </Body>
            </Settle>
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="03" />
    </Page>
  );
}
