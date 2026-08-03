/**
 * SPREAD 04 — The Structure  ·  Treatment B · Outline Architecture
 * The entity architecture drawn as a blueprint: outlined boxes, corner ticks,
 * a labelled independence firewall and one lit SAFE conversion path.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import governedAsset from "@/assets/dis-governed.png.asset.json";
import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { Blueprint, Dimension, Eyebrow, Tag, EASE } from "@/components/print/Layers";

const RULES = [
  "Value accrues cleanly to DIS equity — the platform, the data, the subscriptions.",
  "The independence that makes the score trustworthy is structurally enforced, not promised.",
  "The IP originates with the Founder and assigns directly to the Council, never through the agency.",
  "The SAFE converts into DIS equity only — clean, unencumbered, no cross-entity complications.",
];

export default function Spread04Structure({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ink">
      <RunningHead chapter="05 / The Structure" issue="DIS Origin" />

      <PageBody>
        {/* photograph sits behind the drawing */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <img
            src={governedAsset.url}
            alt="Governed infrastructure"
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.24,
              filter: "saturate(0.5) contrast(1.1)",
            }}
          />
          <span
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(5,8,15,0.86), rgba(5,8,15,0.94))",
            }}
          />
          <span className="bp-grid" />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.85fr) minmax(0, 1.15fr)",
            gap: "3rem",
            alignItems: "center",
            padding: "1.2rem 4.5rem",
            minHeight: 0,
          }}
        >
          {/* verso — the rule */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem", minWidth: 0 }}>
            <Settle>
              <div className="sec-head">
                <Eyebrow>The Structure That Protects Your Investment</Eyebrow>
                <h2 className="ed-head">
                  Independence is not
                  <br />a compliance cost.
                </h2>
              </div>
            </Settle>

            <Settle delay={0.1}>
              <p className="sec-lede" style={{ fontStyle: "italic", color: "var(--ink-text)" }}>
                It is the source of the moat.
              </p>
            </Settle>

            <Settle delay={0.16}>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: "0.75rem" }}>
                {RULES.map((r, i) => (
                  <li
                    key={r}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.6rem 1fr",
                      gap: "0.5rem",
                      alignItems: "start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.55rem",
                        letterSpacing: "0.18em",
                        color: "var(--spot)",
                        paddingTop: "0.25rem",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', system-ui, sans-serif",
                        fontSize: "clamp(0.72rem, 0.8vw, 0.85rem)",
                        lineHeight: 1.6,
                        color: "var(--ink-body)",
                      }}
                    >
                      {r}
                    </span>
                  </li>
                ))}
              </ul>
            </Settle>
          </div>

          {/* recto — the drawing */}
          <div style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Dimension label="Holding Structure" />

            <Blueprint accent="none" delay={0.05} style={{ textAlign: "center" }}>
              <div className="bp__label">Parent</div>
              <div className="bp__title">NicoleIsNine Holdings</div>
            </Blueprint>

            {/* spine */}
            <motion.span
              initial={STATIC_REVIEW_MODE || reduce ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }} animate={STATIC_REVIEW_MODE ? { scaleY: 1 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.3, ease: EASE }}
              style={{
                width: 1,
                height: "1.1rem",
                background: "var(--edge-draw)",
                alignSelf: "center",
                transformOrigin: "top center",
              }}
              aria-hidden
            />

            <div className="grid-2" style={{ gap: "0.9rem" }}>
              <Blueprint accent="live" delay={0.34}>
                <div className="bp__label">The Standard</div>
                <div className="bp__title">PRSC LLC</div>
                <div className="bp__text">
                  The Council that defines and governs the readiness standard.
                </div>
                <div style={{ marginTop: "0.7rem" }}>
                  <Tag accent="live">Independent</Tag>
                </div>
              </Blueprint>

              <Blueprint accent="spot" delay={0.42}>
                <div className="bp__label">The Platform</div>
                <div className="bp__title">DIS Inc.</div>
                <div className="bp__text">
                  Builds and operates the Readiness Terminal. Where the SAFE converts.
                </div>
                <div style={{ marginTop: "0.7rem" }}>
                  <Tag accent="spot">SAFE converts here</Tag>
                </div>
              </Blueprint>
            </div>

            {/* firewall */}
            <motion.div
              initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }} animate={STATIC_REVIEW_MODE ? { opacity: 1 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: EASE }}
              style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}
            >
              <span
                style={{
                  flex: 1,
                  height: 1,
                  backgroundImage:
                    "repeating-linear-gradient(to right, var(--future) 0 6px, transparent 6px 12px)",
                }}
                aria-hidden
              />
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.5rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--future)",
                  whiteSpace: "nowrap",
                }}
              >
                Independence Firewall
              </span>
              <span
                style={{
                  flex: 1,
                  height: 1,
                  backgroundImage:
                    "repeating-linear-gradient(to right, var(--future) 0 6px, transparent 6px 12px)",
                }}
                aria-hidden
              />
            </motion.div>

            <Blueprint dim delay={0.68}>
              <div className="bp__label">Arm's Length</div>
              <div className="bp__title">NuDaze Worldwide</div>
              <div className="bp__text">
                Agency operations, held at arm's length from the standard and the platform.
              </div>
            </Blueprint>

            <Dimension label="One clean conversion path" delay={0.78} />
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="05" />
    </Page>
  );
}
