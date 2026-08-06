/**
 * SECTION 05 — BODY ONLY
 *
 * Ported from the approved Magic Patterns Section 05 composition. This file
 * contains no publication chrome: the Lovable header, folio, navigation carats,
 * rail transform and page-transition system are untouched and live outside.
 *
 * Structure:
 *   Section05Body
 *     ├── Section05Editorial   (kicker, headline, four statements)
 *     ├── TowerStage           (five pre-rendered layers + label overlay)
 *     └── SafeAnnotation       (terminates only at the DIS platform floor)
 */

import { useCallback, useRef, useState } from "react";

import "./spread05.css";

const TOWER_BASE = "/assets/section05/tower";

/** Five registration-matched layers, top-down. */
const LAYERS = [
  { key: "parent", src: `${TOWER_BASE}/section05_tower_01_parent.png` },
  { key: "standard", src: `${TOWER_BASE}/section05_tower_02_standard.png` },
  { key: "platform", src: `${TOWER_BASE}/section05_tower_03_platform.png` },
  { key: "firewall", src: `${TOWER_BASE}/section05_tower_04_firewall.png` },
  { key: "agency", src: `${TOWER_BASE}/section05_tower_05_agency.png` },
] as const;

/** Approved statements — verbatim. */
const STATEMENTS = [
  "Value accrues cleanly to DIS equity — the platform, the data, the subscriptions",
  "The independence that makes the score trustworthy is structurally enforced — not promised",
  "The IP originates with the Founder and assigns directly to the Council, never through the agency",
  "The SAFE converts to DIS equity only — clean, unencumbered, no cross-entity complications",
];

const STAGGER = 92;
const SEQUENCE_MS = 980;

/**
 * One controlled top-down restack per pointer entry. No looping, no reverse on
 * exit; `will-change` is only live while the sequence runs.
 */
function useRestack() {
  const [running, setRunning] = useState(false);
  const timer = useRef<number | null>(null);

  const start = useCallback(() => {
    if (timer.current !== null) return;
    if (typeof window !== "undefined") {
      const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!fine || reduce) return;
    }
    setRunning(true);
    timer.current = window.setTimeout(() => {
      timer.current = null;
      setRunning(false);
    }, SEQUENCE_MS);
  }, []);

  return { running, start };
}

function Section05Editorial() {
  return (
    <div className="s05b__col">
      <span className="s05b__kicker">The Structure That Protects Your Investment</span>
      <h2 className="s05b__head">
        The rule that protects your investment: independence is not a compliance cost
        here — it is the source of the moat.
      </h2>
      <div className="s05b__rule" />
      <ul className="s05b__claims">
        {STATEMENTS.map((s, i) => (
          <li className="s05b__claim" key={s}>
            <span className="s05b__num">{String(i + 1).padStart(2, "0")}</span>
            <span className="s05b__text">{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SafeAnnotation() {
  return (
    <div className="s05b__safe" aria-hidden="true">
      <span>SAFE Converts at DIS</span>
      <svg viewBox="0 0 120 12" preserveAspectRatio="none" focusable="false">
        <path d="M0 6 H112" />
        <path d="M104 1.5 L112 6 L104 10.5" />
      </svg>
    </div>
  );
}

function TowerStage() {
  const { running, start } = useRestack();

  return (
    <div className="s05b__stageWrap">
      <div
        className="s05b__stage"
        data-restack={running ? "running" : "idle"}
        onPointerEnter={start}
      >
        {LAYERS.map((l, i) => (
          <img
            key={l.key}
            className="s05b__layer"
            style={{
              "--d": `${i * STAGGER}ms`,
              willChange: running ? "transform, opacity, filter" : "auto",
            } as React.CSSProperties}
            src={l.src}
            alt=""
            aria-hidden="true"
            width={1154}
            height={1363}
            decoding="async"
          />
        ))}

        <div className="s05b__pulse s05b__pulse--cyan" aria-hidden="true" />
        <div className="s05b__pulse s05b__pulse--violet" aria-hidden="true" />

        {/* Live typographic overlay, registered to the same 1154 × 1363 canvas */}
        <div className="s05b__labels" aria-hidden="true">
          <div
            className="s05b__label s05b__label--parent"
            style={{ "--d": "0ms" } as React.CSSProperties}
          >
            <span className="s05b__role">Parent</span>
            <span className="s05b__ent">NicoleIsNine Holdings</span>
          </div>

          <div
            className="s05b__label s05b__label--standard"
            style={{ "--d": `${STAGGER}ms` } as React.CSSProperties}
          >
            <span className="s05b__role">The Standard</span>
            <span className="s05b__ent">
              Partnership Readiness
              <br />
              Standards Council
            </span>
          </div>

          <div
            className="s05b__label s05b__label--platform"
            style={{ "--d": `${STAGGER * 2}ms` } as React.CSSProperties}
          >
            <span className="s05b__role">The Platform</span>
            <span className="s05b__ent">
              Decision Intelligence
              <br />
              Systems
            </span>
          </div>

          <div
            className="s05b__label s05b__label--firewall"
            style={{ "--d": `${STAGGER * 3}ms` } as React.CSSProperties}
          >
            <span className="s05b__role">Independence Firewall</span>
          </div>

          <div
            className="s05b__label s05b__label--agency"
            style={{ "--d": `${STAGGER * 4}ms` } as React.CSSProperties}
          >
            <span className="s05b__role">Arm&rsquo;s-Length Agency</span>
            <span className="s05b__ent">NuDaze Worldwide</span>
          </div>
        </div>

        <SafeAnnotation />
      </div>
    </div>
  );
}

export default function Section05Body() {
  return (
    <div className="s05b">
      <div className="s05b__light" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <Section05Editorial />
      <TowerStage />

      {/* One screen-reader description of the complete hierarchy */}
      <p className="sr-only">
        Entity hierarchy: NicoleIsNine Holdings is the parent. Beneath it,
        Partnership Readiness Standards Council governs the standard and acts as the
        independence firewall. Beneath the firewall, Decision Intelligence Systems is
        the platform, where the SAFE converts. NuDaze Worldwide sits apart as an
        arm&rsquo;s-length agency.
      </p>
    </div>
  );
}
