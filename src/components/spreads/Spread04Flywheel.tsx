/**
 * SPREAD 04 — The Ecosystem Flywheel
 *
 * The publication pauses here on a single object: a photographed piece of
 * hardware, lit from within, with the editorial rail and quote band in support.
 * All copy is supplied verbatim; the six actors come from one configuration.
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE, Eyebrow } from "@/components/print/Layers";
import { useParallax } from "@/components/print/parallax";
import FlywheelObject from "@/components/print/FlywheelObject";
import { ACTORS } from "@/components/print/flywheelActors";

const CYCLE = 4500;

/* Pass 2 — motion restored: arrival illumination, then a 4.5s actor cycle. */


/** Restrained editorial glyphs — circular framing, hairline weight. */
function Glyph({ kind }: { kind: "gain" | "why" | "dis" | "traction" }) {
  return (
    <svg className="fly__glyph" viewBox="0 0 20 20" aria-hidden>
      <circle cx="10" cy="10" r="9" className="fly__glyph-ring" />
      {kind === "gain" ? <path d="M6 10.4l2.6 2.4L14.2 7.4" /> : null}
      {kind === "why" ? <path d="M10 5.4v6.2M10 14.2v.6" /> : null}
      {kind === "dis" ? <path d="M10 5.2l1.6 3.2 3.2 1.6-3.2 1.6L10 14.8l-1.6-3.2L5.2 10l3.2-1.6z" /> : null}
      {kind === "traction" ? <path d="M5.6 12.6l2.8-3.2 2.4 1.9 3.6-4.1" /> : null}
    </svg>
  );
}

export default function Spread04Flywheel({ isActive = false }: { isActive?: boolean }) {
  const reduce = useReducedMotion() ?? false;
  const [lit, setLit] = useState(false);
  const [auto, setAuto] = useState(0);
  const [held, setHeld] = useState<number | null>(null);
  const drift = useParallax(0.5, 8);

  const idx = held ?? auto;
  const actor = ACTORS[idx];

  /* arrival: the object wakes as the spread arrives, once */
  useEffect(() => {
    if (!isActive) return;
    const t = setTimeout(() => setLit(true), 120);
    return () => clearTimeout(t);
  }, [isActive]);

  /* pulse cycle runs only while this spread is active */
  useEffect(() => {
    
    if (!isActive || reduce || held !== null || !lit) return;
    const t = setInterval(() => setAuto((i) => (i + 1) % ACTORS.length), CYCLE);
    return () => clearInterval(t);
  }, [isActive, reduce, held, lit]);

  const rail = [
    { k: "gain" as const, label: "What they gain", text: actor.gain },
    { k: "why" as const, label: "Why the score matters", text: actor.why },
    { k: "dis" as const, label: "Why DIS", text: actor.dis },
  ];

  return (
    <Page stock="ink" className="fly-pg">
      <RunningHead chapter="04 / The Ecosystem Flywheel" issue="DIS Origin" />

      <PageBody>
        <div className={`fly${isActive ? " is-live" : ""}`}>
          {/* ---------- atmosphere ---------- */}
          <div className="fly__air" aria-hidden>
            <span className="fly__leak fly__leak--a" />
            <span className="fly__leak fly__leak--b" />
            <span className="fly__vig" />
            <span className="fly__ghost">READINESS</span>
            <span className="fly__grain" />
          </div>

          {/* ---------- left editorial column ---------- */}
          <header className="fly__lead">
            <Settle>
              <div className="sec-head">
                <Eyebrow>THE ECOSYSTEM FLYWHEEL</Eyebrow>
                <h2 className="fly__title">
                  Every Actor.
                  <br />
                  One Standard.
                  <br />
                  Compounding Value.
                </h2>
              </div>
            </Settle>
            <Settle delay={0.14}>
              <p className="fly__lede">
                The PRSC Readiness Score™ is not a product any single actor could build. It is
                infrastructure the entire ecosystem builds together — and depends on together.
              </p>
            </Settle>
          </header>

          {/* ---------- product stage ---------- */}
          <div className="fly__stage">
            <FlywheelObject
              actors={ACTORS}
              activeIndex={idx}
              lit={lit}
              reduce={reduce}
              running={isActive && lit}
              drift={reduce ? undefined : drift}
            />

            {/* mounted instrument capsules, attached to the rim */}
            <div className="fly__caps">
              {ACTORS.map((a, i) => (
                <div
                  key={a.index}
                  className="fly__cap-anchor"
                  style={{ ["--ang" as string]: `${a.angle}deg` }}
                >
                  <motion.button
                    type="button"
                    className={`fly__cap${a.lines[0].length > 14 ? " fly__cap--wide" : ""}${i === idx ? " is-on" : ""}`}
                    style={{ ["--edge" as string]: `var(--${a.accent})` }}
                    aria-label={a.aria}
                    aria-pressed={i === idx}
                    onClick={() => setHeld(i)}
                    onMouseEnter={() => setHeld(i)}
                    onMouseLeave={() => setHeld(null)}
                    onFocus={() => setHeld(i)}
                    initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
                    animate={{ opacity: lit || reduce ? 1 : 0 }}
                    transition={{ duration: 0.9, delay: reduce ? 0 : 0.9 + i * 0.11, ease: EASE }}
                  >
                    <span className="fly__cap-body">
                      <span className="fly__cap-n">{a.index}</span>
                      <span className="fly__cap-name">
                        {a.lines[0]}
                        {a.lines[1] ? (
                          <>
                            <br />
                            {a.lines[1]}
                          </>
                        ) : null}
                      </span>
                    </span>
                    <span className="fly__cap-screw fly__cap-screw--l" aria-hidden />
                    <span className="fly__cap-screw fly__cap-screw--r" aria-hidden />
                  </motion.button>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- editorial rail ---------- */}
          <motion.aside
            className="fly__rail"
            style={{ ["--edge" as string]: `var(--${actor.accent})` }}
            initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
            animate={{ opacity: lit || reduce ? 1 : 0 }}
            transition={{ duration: 0.9, delay: reduce ? 0 : 1.5, ease: EASE }}
          >
            <div className="fly__rail-head">
              <span className="fly__rail-n">{actor.index}</span>
              <span className="fly__rail-name">{actor.label}</span>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={actor.index}
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.7, ease: "linear" }}
              >
                {rail.map((r) => (
                  <section className={`fly__sec fly__sec--${r.k}`} key={r.k}>
                    <div className="fly__sec-head">
                      <Glyph kind={r.k} />
                      <span className="fly__sec-label">{r.label}</span>
                    </div>
                    <p className="fly__sec-text">{r.text}</p>
                  </section>
                ))}


                <section className="fly__sec fly__sec--tr">
                  <div className="fly__sec-head">
                    <Glyph kind="traction" />
                    <span className="fly__sec-label">Traction</span>
                    <span className="fly__badge">Live</span>
                  </div>
                  <p className="fly__sec-text">{actor.traction}</p>
                </section>
              </motion.div>
            </AnimatePresence>
          </motion.aside>

          {/* ---------- quote band ---------- */}
          <motion.div
            className="fly__quote"
            initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
            animate={{ opacity: lit || reduce ? 1 : 0 }}
            transition={{ duration: 1, delay: reduce ? 0 : 1.7, ease: EASE }}
          >
            <p>The flywheel does not require universal adoption to start.</p>
            <p>It requires one credible anchor.</p>
            <p>Then gravity does the rest.</p>
          </motion.div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="04 · ii" />
    </Page>
  );
}
