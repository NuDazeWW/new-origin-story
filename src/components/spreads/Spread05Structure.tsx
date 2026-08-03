/**
 * SPREAD 05 — The Structure That Protects Your Investment
 * Dark architectural seam. The supplied governed-infrastructure image becomes the
 * visual surface. Entities read as editorial annotations pinned to the
 * architecture: Parent, Standard, Platform, Agency. The firewall is spatial and
 * material, not a labelled box. One luminous SAFE route resolves at DIS.
 */

import { motion, useReducedMotion } from "framer-motion";

import governedAsset from "@/assets/dis-governed.png.asset.json";
import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const ANNOTATIONS = [
  {
    label: "Parent",
    title: "NicoleIsNine Holdings",
    detail: "Holding company. Coordinates the standard, the platform, and the arm's-length agency.",
    x: "12%",
    y: "14%",
    align: "left",
  },
  {
    label: "The Standard",
    title: "PRSC LLC",
    detail: "Independent standard setter. The Council that defines and governs readiness.",
    x: "64%",
    y: "22%",
    align: "right",
  },
  {
    label: "The Platform",
    title: "DIS Inc.",
    detail: "Builds and operates the Readiness Terminal. Where the SAFE converts.",
    x: "68%",
    y: "64%",
    align: "right",
  },
  {
    label: "Arm's Length",
    title: "NuDaze Worldwide",
    detail: "Agency operations. Held at a structural distance from the standard and the platform.",
    x: "20%",
    y: "74%",
    align: "left",
  },
];

export default function Spread05Structure({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ink">
      <RunningHead chapter="05 / The Structure" issue="DIS Origin" />

      <PageBody>
        {/* Architectural surface */}
        <div className="struct-bed" aria-hidden="false">
          <img
            src={governedAsset.url}
            alt="Governed infrastructure"
            className="struct-bed__img"
            loading="lazy"
          />
          <div className="struct-bed__scrim" />
          <div className="struct-bed__seam" />
        </div>

        {/* Title block */}
        <div className="struct-title">
          <Settle>
            <span className="ed-kicker" style={{ color: "var(--dis-electric-blue)" }}>
              The Structure That Protects Your Investment
            </span>
            <h2 className="ed-head" style={{ maxWidth: "18ch" }}>
              Independence is not a compliance cost.
            </h2>
          </Settle>
          <Settle delay={0.12}>
            <p className="sec-lede" style={{ maxWidth: "38ch", marginTop: "1rem" }}>
              It is the source of the moat. Value accrues cleanly to DIS equity — the platform, the data, the subscriptions.
            </p>
          </Settle>
        </div>

        {/* Annotations pinned to architecture */}
        {ANNOTATIONS.map((a, i) => (
          <motion.div
            key={a.title}
            className="struct-pin"
            style={{ left: a.x, top: a.y, textAlign: a.align as "left" | "right" }}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: EASE }}
          >
            <span className="struct-pin__label">{a.label}</span>
            <span className="struct-pin__title">{a.title}</span>
            <span className="struct-pin__detail">{a.detail}</span>
          </motion.div>
        ))}

        {/* Luminous SAFE route */}
        <motion.div
          className="struct-route"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8, ease: EASE }}
          aria-hidden
        >
          <svg viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice" className="struct-route__svg">
            <defs>
              <linearGradient id="safeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(30,167,255,0)" />
                <stop offset="50%" stopColor="rgba(30,167,255,0.55)" />
                <stop offset="100%" stopColor="rgba(30,167,255,0)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 180 120 C 420 120, 520 360, 760 360 S 1020 460, 1020 460"
              fill="none"
              stroke="url(#safeGlow)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, delay: 1, ease: EASE }}
            />
            <motion.circle
              cx="1020"
              cy="460"
              r="5"
              fill="#1EA7FF"
              initial={reduce ? false : { opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 2.6, ease: "backOut" }}
            />
          </svg>
          <div className="struct-route__label">
            <span className="struct-route__pill">SAFE converts at DIS</span>
          </div>
        </motion.div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="05" />
    </Page>
  );
}
