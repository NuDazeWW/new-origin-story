/**
 * SPREAD 03 — The Solution  ·  Treatment C · Glass Strata
 * The Readiness Terminal render is the hero: the render stays lit while a
 * travelling spotlight walks device to device, and each of the four platform
 * components is defined by a light-box wired to the surface it lives on.
 */

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import terminalAsset from "@/assets/dis-terminal.png.asset.json";
import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { Eyebrow, EASE, type Accent } from "@/components/print/Layers";

type Feature = {
  n: string;
  title: string;
  text: string;
  device: string;
  accent: Accent;
  /** hotspot position on the render, in % */
  x: number;
  y: number;
  side: "l" | "r";
};

const FEATURES: Feature[] = [
  {
    n: "MODULE 01",
    title: "The Readiness Engine™",
    text: "Proprietary scoring mathematics — independently governed by the PRSC Readiness Standard™. Trade secret.",
    device: "Desktop Terminal",
    accent: "spot",
    x: 38,
    y: 30,
    side: "l",
  },
  {
    n: "MODULE 02",
    title: "The PRSC Readiness Score™",
    text: "A single 0–100 market-facing number. The score the market negotiates in.",
    device: "Mobile Score Card",
    accent: "live",
    x: 10,
    y: 66,
    side: "l",
  },
  {
    n: "MODULE 03",
    title: "Diagnostic Surfaces",
    text: "Multi-dimension canvas across all six Readiness Dimensions™ (defined in the PRSC Readiness Standard™).",
    device: "Tablet Strategy Planner",
    accent: "spot",
    x: 76,
    y: 62,
    side: "r",
  },
  {
    n: "MODULE 04",
    title: "Benchmark Database",
    text: "The compounding data moat.",
    device: "Live Telemetry",
    accent: "future",
    x: 93,
    y: 66,
    side: "r",
  },
];

const LEFT = FEATURES.filter((f) => f.side === "l");
const RIGHT = FEATURES.filter((f) => f.side === "r");

export default function Spread03Solution({ isActive = false }: { isActive?: boolean }) {
  const reduce = useReducedMotion();
  const [live, setLive] = useState(0);
  const [held, setHeld] = useState<number | null>(null);

  const idx = held ?? live;
  const active = FEATURES[idx];

  useEffect(() => {
    if (!isActive || held !== null || reduce) return;
    const t = setInterval(() => setLive((i) => (i + 1) % FEATURES.length), 3800);
    return () => clearInterval(t);
  }, [isActive, held, reduce]);

  const box = (f: Feature) => {
    const i = FEATURES.indexOf(f);
    const on = i === idx;
    return (
      <motion.div
        key={f.n}
        className={`lbox lbox--${f.side}${on ? " lbox--on" : ""}`}
        style={{ ["--edge" as string]: `var(--${f.accent})` }}
        onMouseEnter={() => setHeld(i)}
        onMouseLeave={() => setHeld(null)}
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, x: f.side === "l" ? -14 : 14 }}
        whileInView={{ opacity: 1, x: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, x: 0 } : undefined}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.18 + i * 0.09, ease: EASE }}
      >
        <span className="lbox__lead" aria-hidden />
        <div className="lbox__num">
          {f.n} — {f.device}
        </div>
        <div className="lbox__title">{f.title}</div>
        <div className="lbox__text">{f.text}</div>
      </motion.div>
    );
  };

  return (
    <Page stock="ink">
      <RunningHead chapter="03 / The Readiness Terminal™" issue="DIS Origin" />

      <PageBody>
        <div className="term" style={{ ["--edge" as string]: `var(--${active.accent})` }}>
          <div className="term__head">
            <Settle>
              <div className="sec-head">
                <Eyebrow>THE READINESS TERMINAL™</Eyebrow>
                <h2 className="ed-head" style={{ maxWidth: "22ch" }}>
                  An intelligence layer that grows more valuable with every use.
                </h2>
              </div>
            </Settle>

            <Settle delay={0.12}>
              <p
                className="sec-lede"
                style={{ maxWidth: "46ch", textAlign: "right", marginLeft: "auto" }}
              >
                Decision Intelligence Systems builds and operates the Readiness Terminal™
                — the platform layer where the standard becomes usable, subscribable
                intelligence. Not a marketplace. Not a campaign tool. The platform where
                professionals measure, benchmark, and act on partnership readiness.
              </p>
            </Settle>
          </div>

          <div className="term__col">{LEFT.map(box)}</div>

          <div className="term__stage">
            <motion.div
              style={{
                position: "relative",
                width: "100%",
                maxHeight: "100%",
                aspectRatio: "1792 / 1024",
              }}
              initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, scale: 1 } : undefined}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: EASE }}
            >
              <img
                src={terminalAsset.url}
                alt="The Readiness Terminal across desktop, tablet, phone and watch"
                className="term__img"
              />

              {/* travelling bloom over the live device */}
              <span
                className="term__bloom"
                style={{ left: `${active.x}%`, top: `${active.y}%` }}
                aria-hidden
              />

              {/* everything but the live device recedes */}
              <span
                className="term__spot"
                style={{
                  background: `radial-gradient(circle at ${active.x}% ${active.y}%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 12%, rgba(150,165,185,1) 30%, rgba(120,135,158,1) 60%)`,
                }}
                aria-hidden
              />

              {FEATURES.map((f, i) => (
                <span
                  key={f.n}
                  className={`term__dot${i === idx ? " term__dot--on" : ""}`}
                  style={{
                    left: `${f.x}%`,
                    top: `${f.y}%`,
                    ["--edge" as string]: `var(--${f.accent})`,
                  }}
                  aria-hidden
                />
              ))}
            </motion.div>
          </div>

          <div className="term__col">{RIGHT.map(box)}</div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="04" />
    </Page>
  );
}
