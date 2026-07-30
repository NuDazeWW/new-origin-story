/**
 * SPREAD 02 — THE INSIGHT
 * Background: Midnight Slate #111A29 — dark, still, one idea.
 * Left: Editorial argument — FICO analogy, large headline, body copy, conclusion as clean italic.
 * Right: Fully designed animated FICO → DIS timeline — vertical line draws down,
 *        events illuminate sequentially, FICO → DIS transition appears last.
 * No boxes. No borders on conclusion. Clean editorial magazine composition.
 * All text colors calibrated for dark background.
 */

import { useEffect, useRef, useState } from "react";

const TIMELINE_EVENTS = [
  {
    year: "1956",
    label: "FICO Founded",
    sub: "Bill Fair and Earl Isaac create the first credit scoring model",
    accent: false,
  },
  {
    year: "1975",
    label: "Industry Adoption Begins",
    sub: "Major lenders incorporate credit scores into every lending decision",
    accent: false,
  },
  {
    year: "1995",
    label: "The Inflection Point",
    sub: "Fannie Mae mandates FICO — the standard becomes infrastructure",
    accent: true,
  },
  {
    year: "Today",
    label: "$20B+ Market Cap",
    sub: "FICO didn't get there by being a software company. It became the reference.",
    accent: false,
  },
];

interface Spread02Props { isActive?: boolean; }

export default function Spread02Insight({ isActive = false }: Spread02Props) {
  const [textVisible, setTextVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [conclusionVisible, setConclusionVisible] = useState(false);
  const [lineProgress, setLineProgress] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isActive || textVisible) return;

    const t1 = setTimeout(() => setTextVisible(true), 150);
    const t2 = setTimeout(() => {
      setTimelineVisible(true);
      const start = performance.now();
      const duration = 1600;
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 2);
        setLineProgress(eased * 100);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          setTimeout(() => setConclusionVisible(true), 300);
        }
      };
      rafRef.current = requestAnimationFrame(step);
    }, 600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isActive, textVisible]);

  const slide = (delay: number): React.CSSProperties => ({
    opacity: textVisible ? 1 : 0,
    transform: textVisible ? "translateY(0)" : "translateY(1.5rem)",
    transition: `opacity 0.85s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 0.85s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
  });

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      background: "#111A29",
      overflow: "hidden",
      display: "flex",
    }}>

      {/* Subtle radial glow at center */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(ellipse at 50% 50%, rgba(30,167,255,0.04) 0%, transparent 65%)",
        zIndex: 0,
        pointerEvents: "none",
      }} />

      {/* Vertical divider between columns */}
      <div style={{
        position: "absolute",
        left: "50%",
        top: "8%",
        bottom: "8%",
        width: "1px",
        background: "rgba(30,167,255,0.08)",
        zIndex: 2,
        opacity: textVisible ? 1 : 0,
        transition: "opacity 1s ease 0.5s",
      }} />

      {/* LEFT COLUMN — Editorial argument */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "50%",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4rem 4.5rem 4rem 4rem",
      }}>

        {/* Chapter marker */}
        <div style={{ ...slide(80), display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.18em", color: "#1EA7FF", opacity: 0.7 }}>02</span>
          <div style={{ width: "1.5rem", height: "1px", background: "rgba(30,167,255,0.4)" }} />
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B7582" }}>The Insight</span>
        </div>

        {/* Headline */}
        <h2 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "clamp(2.25rem,4vw,4rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.025em", color: "#E6EBF1", margin: "0 0 0.05rem 0", ...slide(180) }}>Every mature market</h2>
        <h2 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "clamp(2.25rem,4vw,4rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.025em", color: "#E6EBF1", margin: "0 0 0.05rem 0", ...slide(240) }}>eventually</h2>
        <h2 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontStyle: "italic", fontSize: "clamp(2.25rem,4vw,4rem)", fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.025em", color: "#1EA7FF", margin: "0 0 2.25rem 0", ...slide(300) }}>chooses a reference.</h2>

        {/* Accent rule */}
        <div style={{ ...slide(360), width: "2.5rem", height: "1px", background: "#1EA7FF", marginBottom: "1.75rem" }} />

        {/* Body copy */}
        <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "clamp(0.875rem,1.1vw,1rem)", lineHeight: 1.7, color: "#A6AFB8", margin: "0 0 1rem 0", maxWidth: "38ch", ...slide(440) }}>
          Credit has FICO. Public markets have ratings agencies. Real estate has the appraisal.
        </p>
        <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "clamp(0.875rem,1.1vw,1rem)", lineHeight: 1.7, color: "#6B7582", margin: "0 0 3rem 0", maxWidth: "38ch", ...slide(500) }}>
          The first credible, neutral body to define the score sets the reference everyone else quotes — and the platform that operationalizes it captures the recurring value.
        </p>

        {/* Conclusion — clean large italic editorial statement, no box */}
        <div style={{
          opacity: conclusionVisible ? 1 : 0,
          transform: conclusionVisible ? "translateY(0)" : "translateY(1rem)",
          transition: "opacity 1s cubic-bezier(0.23,1,0.32,1), transform 1s cubic-bezier(0.23,1,0.32,1)",
        }}>
          <p style={{
            fontFamily: "'DM Serif Display',Georgia,serif",
            fontStyle: "italic",
            fontSize: "clamp(1.25rem,2.2vw,1.9rem)",
            fontWeight: 400,
            lineHeight: 1.3,
            color: "#E6EBF1",
            margin: "0 0 0.25rem 0",
          }}>
            "Partnership readiness has nothing.
          </p>
          <p style={{
            fontFamily: "'DM Serif Display',Georgia,serif",
            fontStyle: "italic",
            fontSize: "clamp(1.25rem,2.2vw,1.9rem)",
            fontWeight: 400,
            lineHeight: 1.3,
            color: "#1EA7FF",
            margin: 0,
          }}>
            That's the opportunity."
          </p>
        </div>
      </div>

      {/* RIGHT COLUMN — Animated FICO → DIS Timeline */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "50%",
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "4rem 4rem 4rem 4.5rem",
      }}>

        {/* Timeline header */}
        <div style={{
          ...slide(300),
          fontFamily: "'DM Mono',monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#6B7582",
          marginBottom: "2.5rem",
        }}>
          The FICO Precedent
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "2.5rem" }}>

          {/* Background track line */}
          <div style={{
            position: "absolute",
            left: "7px",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "rgba(30,167,255,0.1)",
          }} />

          {/* Animated line drawing down */}
          <div style={{
            position: "absolute",
            left: "7px",
            top: 0,
            width: "1px",
            height: `${lineProgress}%`,
            background: "linear-gradient(to bottom, #1EA7FF, rgba(30,167,255,0.15))",
            transition: "height 0.05s linear",
          }} />

          {TIMELINE_EVENTS.map((event, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                marginBottom: i < TIMELINE_EVENTS.length - 1 ? "2.5rem" : 0,
                opacity: timelineVisible ? 1 : 0,
                transform: timelineVisible ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 200}ms, transform 0.7s cubic-bezier(0.23,1,0.32,1) ${i * 200}ms`,
              }}
            >
              {/* Dot */}
              <div style={{
                position: "absolute",
                left: event.accent ? "2px" : "4px",
                marginTop: "5px",
                width: event.accent ? "11px" : "7px",
                height: event.accent ? "11px" : "7px",
                borderRadius: "50%",
                background: event.accent ? "#1EA7FF" : "#111A29",
                border: event.accent ? "none" : "1px solid rgba(30,167,255,0.35)",
                boxShadow: event.accent ? "0 0 14px rgba(30,167,255,0.55)" : "none",
                flexShrink: 0,
                zIndex: 2,
              }} />

              {/* Content */}
              <div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", fontWeight: 600, color: event.accent ? "#1EA7FF" : "rgba(107,117,130,0.6)", letterSpacing: "0.08em", marginBottom: "0.3rem" }}>
                  {event.year}
                </div>
                <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "0.875rem", fontWeight: event.accent ? 600 : 400, color: event.accent ? "#E6EBF1" : "#A6AFB8", marginBottom: "0.25rem", lineHeight: 1.3 }}>
                  {event.label}
                </div>
                <div style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "0.78rem", color: "#6B7582", lineHeight: 1.55, maxWidth: "34ch" }}>
                  {event.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FICO → DIS transition */}
        <div style={{
          marginTop: "2.5rem",
          paddingLeft: "2.5rem",
          opacity: conclusionVisible ? 1 : 0,
          transform: conclusionVisible ? "translateY(0)" : "translateY(0.75rem)",
          transition: "opacity 0.9s cubic-bezier(0.23,1,0.32,1) 0.2s, transform 0.9s cubic-bezier(0.23,1,0.32,1) 0.2s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.6rem" }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.8rem", color: "rgba(107,117,130,0.4)", textDecoration: "line-through", letterSpacing: "0.1em" }}>FICO</span>
            <div style={{ width: "2.5rem", height: "1px", background: "linear-gradient(90deg, rgba(107,117,130,0.3), #1EA7FF)" }} />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.8rem", color: "#1EA7FF", letterSpacing: "0.15em", fontWeight: 600 }}>DIS</span>
          </div>
          <p style={{ fontFamily: "'Space Grotesk',system-ui,sans-serif", fontSize: "0.82rem", color: "#6B7582", lineHeight: 1.6, maxWidth: "34ch", margin: 0 }}>
            We are building the FICO score for the partnership market.
          </p>
        </div>
      </div>

      {/* Folio */}
      <div style={{
        position: "absolute",
        bottom: "1.5rem",
        right: "2rem",
        zIndex: 10,
        fontFamily: "'DM Mono',monospace",
        fontSize: "0.5rem",
        letterSpacing: "0.15em",
        color: "rgba(107,117,130,0.35)",
        textTransform: "uppercase",
        opacity: textVisible ? 1 : 0,
        transition: "opacity 1s ease 1s",
      }}>
        DIS · 2026 · Confidential
      </div>
    </div>
  );
}
