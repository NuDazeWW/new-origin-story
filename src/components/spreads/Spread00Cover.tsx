/**
 * SPREAD 00 — COVER
 * Design: Cinematic, premium, editorial. Full-bleed wing mark image (06_37_44).
 * Image is visually dominant — fills the entire viewport.
 * Left masthead: DIS full lockup top-left, large editorial headline centered-left,
 * subtitle + metadata below. No company name in micro-label.
 * Gradient: heavy left panel fades into the image — image breathes on the right.
 * Wing watermark: ghosted large behind the text for depth.
 * Motion: Staggered entrance reveals on mount.
 */

import coverImg from "@/assets/dis-cover.png.asset.json";
import logoImg from "@/assets/dis-logo.png.asset.json";
import { useEffect, useState } from "react";

export default function Spread00Cover() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), 100);
    return () => clearTimeout(t);
  }, []);

  const slide = (delay: number): React.CSSProperties => ({
    opacity: active ? 1 : 0,
    transform: active ? "translateY(0)" : "translateY(2rem)",
    transition: `opacity 1s cubic-bezier(0.23,1,0.32,1) ${delay}ms, transform 1s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
  });

  const fade = (delay: number): React.CSSProperties => ({
    opacity: active ? 1 : 0,
    transition: `opacity 1.2s cubic-bezier(0.23,1,0.32,1) ${delay}ms`,
  });

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      background: "#05080F",
      overflow: "hidden",
    }}>

      {/* FULL-BLEED COVER IMAGE — visually dominant, fills entire viewport */}
      <img
        src={coverImg.url}
        alt="Decision Intelligence Systems — The Readiness Terminal"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 30%",
          ...fade(0),
        }}
      />

      {/* Cinematic gradient — left panel darkens for text legibility, right breathes */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(105deg, rgba(5,8,15,0.97) 0%, rgba(5,8,15,0.93) 22%, rgba(5,8,15,0.72) 40%, rgba(5,8,15,0.3) 60%, rgba(5,8,15,0.08) 80%, transparent 100%)",
        zIndex: 2,
      }} />

      {/* Bottom vignette for folio readability */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "20%",
        background: "linear-gradient(to top, rgba(5,8,15,0.8), transparent)",
        zIndex: 2,
      }} />

      {/* Top vignette */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "15%",
        background: "linear-gradient(to bottom, rgba(5,8,15,0.6), transparent)",
        zIndex: 2,
      }} />



      {/* MASTHEAD COLUMN — left 42% */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: "42%",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        padding: "2.25rem 3rem 2.25rem 3rem",
      }}>

        {/* DIS Full Lockup — top left */}
        <div style={{ ...slide(80), marginBottom: "auto" }}>
          <img
            src={logoImg.url}
            alt="Decision Intelligence Systems"
            style={{
              height: "5.5rem",
              width: "auto",
              objectFit: "contain",
              objectPosition: "left center",
            }}
          />
        </div>

        {/* HEADLINE BLOCK — vertically centered */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          paddingBottom: "2rem",
        }}>

          {/* Accent rule only — no label, metadata is at bottom */}
          <div style={{
            ...slide(240),
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}>
            <div style={{ width: "2.5rem", height: "1px", background: "#1EA7FF", flexShrink: 0 }} />
          </div>

          {/* Headline — massive, commanding */}
          <div style={{ marginBottom: "0.05rem", overflow: "hidden" }}>
            <h1 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(3.5rem, 7vw, 7.5rem)",
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "#E6EBF1",
              margin: 0,
              ...slide(360),
            }}>
              The Readiness
            </h1>
          </div>

          <div style={{ marginBottom: "2.5rem", overflow: "hidden" }}>
            <h1 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(3.5rem, 7vw, 7.5rem)",
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "#1EA7FF",
              margin: 0,
              ...slide(460),
            }}>
              Terminal™
            </h1>
          </div>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Space Grotesk', system-ui, sans-serif",
            fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)",
            fontWeight: 400,
            lineHeight: 1.65,
            color: "#A6AFB8",
            maxWidth: "30rem",
            margin: "0 0 3rem 0",
            ...slide(560),
          }}>
            Building the intelligence infrastructure layer<br />
            for the $90B sponsorship market.
          </p>

          {/* Metadata row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            ...slide(660),
          }}>
            {[
              { label: "Round", value: "Pre-Seed" },
              { label: "Raise", value: "$2.5M SAFE" },
              { label: "Status", value: "Confidential" },
            ].map((item, i) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center" }}>
                {i > 0 && (
                  <div style={{ width: "1px", height: "2.25rem", background: "rgba(30,167,255,0.18)", margin: "0 1.5rem" }} />
                )}
                <div>
                  <div style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.5rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#6B7582",
                    marginBottom: "0.25rem",
                  }}>
                    {item.label}
                  </div>
                  <div style={{
                    fontFamily: "'Space Grotesk', system-ui, sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    color: "#E6EBF1",
                    letterSpacing: "0.03em",
                  }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advance cue — bottom */}
        <div style={{
          ...fade(1400),
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}>
          <div style={{
            width: "1px",
            height: "2.25rem",
            background: "linear-gradient(to bottom, #1EA7FF, transparent)",
          }} />
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.5rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(30,167,255,0.4)",
          }}>
            Press → or scroll to advance
          </span>
        </div>
      </div>

      {/* Folio — bottom right */}
      <div style={{
        position: "absolute",
        bottom: "1.5rem",
        right: "2rem",
        zIndex: 10,
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.5rem",
        letterSpacing: "0.16em",
        color: "rgba(107,117,130,0.4)",
        textTransform: "uppercase",
        ...fade(1600),
      }}>
        DIS · 2026 · Confidential
      </div>
    </div>
  );
}
