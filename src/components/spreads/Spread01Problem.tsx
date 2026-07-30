/**
 * SPREAD 01 — THE PROBLEM
 * Design: Deep Slate bg. Paddock precision image (car in hangar) bleeds right 62%.
 * Left 38% = editorial text column. Headline kept exactly as approved.
 * Sequence:
 *   1. Image fades in immediately.
 *   2. Tags build one at a time, left-to-right reading order, 200ms stagger —
 *      like a pile of fragmented documents assembling. Ordered, purposeful.
 *   3. After all tags are visible, stats animate in as the payoff.
 * Color: Deep Slate bg (#0E1624).
 */

import paddockImg from "@/assets/dis-paddock.png.asset.json";
import { useEffect, useRef, useState } from "react";

interface Props { isActive?: boolean; }

const TAGS = [
  "Sponsorship Proposal",
  "Brand Activation Report",
  "Audience Demographics",
  "Media Value Estimate",
  "Partnership Agreement",
  "ROI Projection",
  "Activation Brief",
];

// Tag positions — arranged in a natural reading flow across the image
const TAG_POSITIONS = [
  { x: "8%",  y: "14%" },
  { x: "38%", y: "10%" },
  { x: "62%", y: "18%" },
  { x: "18%", y: "42%" },
  { x: "52%", y: "48%" },
  { x: "10%", y: "70%" },
  { x: "45%", y: "74%" },
];

function useCountUp(target: number, duration: number, active: boolean, prefix = "", suffix = "") {
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const rafRef = useRef<number>(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(`${prefix}${current.toLocaleString()}${suffix}`);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration, prefix, suffix]);
  return display;
}

export default function Spread01Problem({ isActive = false }: Props) {
  const [active, setActive] = useState(false);
  const [visibleTags, setVisibleTags] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    if (!isActive || active) return;
    setActive(true);

    // Build tags one at a time, 200ms stagger — ordered, left-to-right reading sequence
    TAGS.forEach((_, i) => {
      setTimeout(() => {
        setVisibleTags(i + 1);
      }, 300 + i * 200);
    });

    // Stats appear after all tags are done
    const allTagsDone = 300 + TAGS.length * 200 + 400;
    setTimeout(() => setStatsVisible(true), allTagsDone);
  }, [isActive, active]);

  const slide = (delay: number): React.CSSProperties => ({
    opacity: active ? 1 : 0,
    transform: active ? "translateY(0)" : "translateY(1.5rem)",
    transition: `opacity 0.85s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.85s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
  });

  const fade = (delay: number): React.CSSProperties => ({
    opacity: active ? 1 : 0,
    transition: `opacity 1s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
  });

  const market = useCountUp(90, 1200, statsVisible, "$", "B");

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      background: "#0E1624",
      overflow: "hidden",
      display: "flex",
    }}>

      {/* LEFT TEXT COLUMN */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "40%",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4rem 3rem 4rem 3.5rem",
      }}>

        {/* Chapter marker */}
        <div style={{ ...slide(100), display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.18em", color: "#1EA7FF", opacity: 0.7 }}>01</span>
          <div style={{ width: "1.5rem", height: "1px", background: "rgba(30,167,255,0.4)" }} />
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7582" }}>The Problem</span>
        </div>

        {/* Headline — kept exactly as approved */}
        <h2 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "clamp(2.5rem,4.5vw,4.5rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", color: "#E6EBF1", margin: "0 0 0.1rem 0", ...slide(200) }}>The Market</h2>
        <h2 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontStyle: "italic", fontSize: "clamp(2.5rem,4.5vw,4.5rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", color: "#1EA7FF", margin: "0 0 0.1rem 0", ...slide(280) }}>Runs on</h2>
        <h2 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "clamp(2.5rem,4.5vw,4.5rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.02em", color: "#E6EBF1", margin: "0 0 1.75rem 0", ...slide(360) }}>Instinct.</h2>

        {/* Accent rule */}
        <div style={{ ...slide(420), width: "2.5rem", height: "1px", background: "#1EA7FF", marginBottom: "1.75rem" }} />

        {/* Body */}
        <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "clamp(0.82rem,1vw,0.95rem)", lineHeight: 1.7, color: "#A6AFB8", margin: "0 0 0.85rem 0", maxWidth: "30rem", ...slide(480) }}>
          The global sports sponsorship market is $90 billion annually. No independent standard exists for measuring commercial readiness on either side of that market.
        </p>
        <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "clamp(0.82rem,1vw,0.95rem)", lineHeight: 1.7, color: "#A6AFB8", margin: "0 0 2.5rem 0", maxWidth: "30rem", ...slide(540) }}>
          Every deal is negotiated on instinct, relationships, and incomplete data. Brands overpay for underperforming assets. Teams undersell themselves because they cannot prove their value.
        </p>

        {/* STATS — the payoff, appear after all tags have built */}
        <div style={{ display: "flex", gap: "2.5rem" }}>
          <div style={{
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? "translateY(0) scale(1)" : "translateY(1rem) scale(0.95)",
            transition: "opacity 0.9s cubic-bezier(0.23,1,0.32,1) 0ms, transform 0.9s cubic-bezier(0.23,1,0.32,1) 0ms",
          }}>
            <div style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "clamp(2.75rem,5vw,5rem)", fontWeight: 400, lineHeight: 1, color: "#1EA7FF", marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
              {market}
            </div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7582" }}>Global Sponsorship Market</div>
          </div>

          <div style={{ width: "1px", background: "rgba(30,167,255,0.12)", flexShrink: 0, opacity: statsVisible ? 1 : 0, transition: "opacity 0.5s ease 0.4s" }} />

          <div style={{
            opacity: statsVisible ? 1 : 0,
            transform: statsVisible ? "translateY(0) scale(1)" : "translateY(1rem) scale(0.95)",
            transition: "opacity 0.9s cubic-bezier(0.23,1,0.32,1) 300ms, transform 0.9s cubic-bezier(0.23,1,0.32,1) 300ms",
          }}>
            <div style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontStyle: "italic", fontSize: "clamp(2.75rem,5vw,5rem)", fontWeight: 400, lineHeight: 1, color: "#E6EBF1", marginBottom: "0.4rem", letterSpacing: "-0.02em" }}>
              {statsVisible ? "Zero" : "—"}
            </div>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7582" }}>Independent Standards</div>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE PANEL — paddock precision / car in hangar */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "65%", height: "100%", overflow: "hidden", ...fade(0) }}>
        {/* Gradient bleed from left */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "38%", height: "100%", background: "linear-gradient(to right, #0E1624, transparent)", zIndex: 2, pointerEvents: "none" }} />

        <img
          src={paddockImg.url}
          alt="Motorsport commercial ecosystem"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />

        {/* DOCUMENT TAGS — build one at a time in reading order, left-to-right, top-to-bottom */}
        {TAGS.map((label, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: TAG_POSITIONS[i].x,
              top: TAG_POSITIONS[i].y,
              zIndex: 5,
              opacity: visibleTags > i ? 0.8 : 0,
              transform: visibleTags > i ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 0.5s cubic-bezier(0.23,1,0.32,1), transform 0.5s cubic-bezier(0.23,1,0.32,1)",
              pointerEvents: "none",
            }}
          >
            <div style={{
              background: "rgba(5,8,15,0.78)",
              border: "1px solid rgba(30,167,255,0.2)",
              backdropFilter: "blur(8px)",
              borderRadius: "2px",
              padding: "0.28rem 0.6rem",
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
              whiteSpace: "nowrap",
            }}>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#1EA7FF", opacity: 0.65, flexShrink: 0 }} />
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.5rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#A6AFB8" }}>
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Folio */}
      <div style={{ position: "absolute", bottom: "1.5rem", right: "2rem", zIndex: 10, fontFamily: "'DM Mono',monospace", fontSize: "0.52rem", letterSpacing: "0.15em", color: "rgba(107,117,130,0.4)", textTransform: "uppercase", ...fade(900) }}>
        DIS · 2026 · Confidential
      </div>
    </div>
  );
}
