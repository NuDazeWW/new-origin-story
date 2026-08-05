/**
 * SECTION 07 — BODY ONLY
 * Free Supply → Compounding Intelligence → Paid Demand.
 *
 * This component renders ONLY the content area between the publication
 * header divider and footer divider. It owns no shell chrome: no running
 * head, no folio, no page number, no carets, no progress dots, no outer
 * border, no viewport-level wrapper.
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Award,
  BarChart3,
  Crown,
  FileText,
  Layers,
  LineChart,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import "./spread07.css";

/* ------------------------------------------------------------------ data */

type RevenueItem = { id: string; label: string; sub?: string; subMono?: boolean; icon: LucideIcon };

const supplyItems: RevenueItem[] = [
  {
    id: "subscriptions",
    label: "Demand-side subscriptions",
    sub: "brands, investors (evaluating sponsorship assets in portfolio companies), agencies, and series",
    icon: Users,
  },
  { id: "modules", label: "Intelligence layer module access", icon: Layers },
  { id: "enterprise", label: "Enterprise intelligence access", icon: ShieldCheck },
  { id: "benchmarking", label: "Ecosystem benchmarking access", icon: BarChart3 },
];

const demandItems: RevenueItem[] = [
  {
    id: "prsc",
    label: "PRSC Council Revenue",
    sub: "Arm\u2019s-length license to DIS",
    subMono: true,
    icon: Crown,
  },
  { id: "certification", label: "Readiness Certified\u2122 fees", icon: Award },
  { id: "reports", label: "Benchmark reports", icon: LineChart },
  { id: "licensing", label: "Standard licensing", icon: FileText },
];

/* ------------------------------------------------------------ light field */

/** Deterministic bokeh field — no Math.random at render time. */
type Mote = { x: number; y: number; r: number; a: number; speed: number; hue: 0 | 1 | 2 };

const MOTES: Mote[] = Array.from({ length: 64 }, (_, i) => {
  const s = (n: number) => {
    const v = Math.sin((i + 1) * n) * 10000;
    return v - Math.floor(v);
  };
  return {
    x: 0.28 + s(12.9898) * 0.44,
    y: s(78.233),
    r: 0.6 + s(43.5453) * 2.6,
    a: 0.1 + s(21.317) * 0.42,
    speed: 0.06 + s(9.7531) * 0.22,
    hue: (Math.floor(s(4.117) * 3) as 0 | 1 | 2),
  };
});

const HUES: Record<0 | 1 | 2, [number, number, number]> = {
  0: [34, 211, 238],
  1: [123, 97, 255],
  2: [226, 244, 255],
};

function LightField({ still }: { still: boolean }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const m of MOTES) {
        const drift = still ? 0 : ((t * 0.001 * m.speed) % 1);
        const y = ((m.y - drift + 1) % 1) * h;
        const x = m.x * w;
        const [r, g, b] = HUES[m.hue];
        const flicker = still ? 1 : 0.75 + 0.25 * Math.sin(t * 0.0012 + m.x * 22);
        const grad = ctx.createRadialGradient(x, y, 0, x, y, m.r * 6);
        grad.addColorStop(0, `rgba(${r},${g},${b},${m.a * flicker})`);
        grad.addColorStop(0.4, `rgba(${r},${g},${b},${m.a * flicker * 0.35})`);
        grad.addColorStop(1, "rgba(4,7,13,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, m.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (still) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(() => {
      resize();
      if (still) draw(0);
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [still]);

  return (
    <div className="s07b-field" aria-hidden="true">
      <canvas ref={ref} />
    </div>
  );
}

/* -------------------------------------------------------------- rows */

function Row({
  item,
  side,
  active,
  onEnter,
  onLeave,
}: {
  item: RevenueItem;
  side: "supply" | "demand";
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const Icon = item.icon;
  return (
    <li>
      <div
        className={`s07b-row s07b-row--${side}${active ? " is-active" : ""}`}
        data-flow-row={side}
        tabIndex={0}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onFocus={onEnter}
        onBlur={onLeave}
      >
        <span className="s07b-dot" aria-hidden="true">
          <span className="s07b-dot__glow" />
          {side === "demand" && (
            <>
              <span className="s07b-dot__plate" />
              <span className="s07b-dot__specular" />
            </>
          )}
          <Icon strokeWidth={1.35} />
        </span>
        <span className="s07b-row__text">
          <span className="s07b-row__label">{item.label}</span>
          {item.sub && (
            <span className={`s07b-row__sub${item.subMono ? " s07b-row__sub--mono" : ""}`}>
              {item.sub}
            </span>
          )}
        </span>
      </div>
    </li>
  );
}

/* --------------------------------------------------------- connectors */

type Geom = {
  w: number;
  h: number;
  supply: { x1: number; y1: number; x2: number; y2: number }[];
  demand: { x1: number; y1: number; x2: number; y2: number }[];
};

const NARRATIVE_TAPS = 3;

function curve(p: { x1: number; y1: number; x2: number; y2: number }) {
  const mx = (p.x1 + p.x2) / 2;
  return `M ${p.x1.toFixed(1)} ${p.y1.toFixed(1)} C ${mx.toFixed(1)} ${p.y1.toFixed(1)}, ${mx.toFixed(1)} ${p.y2.toFixed(1)}, ${p.x2.toFixed(1)} ${p.y2.toFixed(1)}`;
}

function Connectors({
  geom,
  still,
  hover,
}: {
  geom: Geom | null;
  still: boolean;
  hover: { side: "supply" | "demand" | null; index: number | null };
}) {
  if (!geom) return null;

  const groupOpacity = (side: "supply" | "demand", index: number) => {
    if (!hover.side) return 0.72;
    if (hover.side !== side) return 0.3;
    // supply narrative taps stay lit with the column
    if (side === "supply") {
      const rowIndex = index - NARRATIVE_TAPS;
      if (rowIndex < 0) return 0.45;
      return rowIndex === hover.index ? 1 : 0.28;
    }
    return index === hover.index ? 1 : 0.28;
  };

  return (
    <svg
      className="s07b-connectors"
      width={geom.w}
      height={geom.h}
      viewBox={`0 0 ${geom.w} ${geom.h}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="s07b-supply" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.10" />
          <stop offset="55%" stopColor="#22D3EE" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#9BF3FF" stopOpacity="0.62" />
        </linearGradient>
        <linearGradient id="s07b-demand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9BF3FF" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#7B61FF" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#7B61FF" stopOpacity="0.12" />
        </linearGradient>
        <filter id="s07b-bloom" x="-20%" y="-60%" width="140%" height="220%">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {geom.supply.map((p, i) => {
        const d = curve(p);
        const lit = hover.side === "supply" && hover.index === i - NARRATIVE_TAPS;
        return (
          <g key={`s-${i}`} className="s07b-flow" style={{ opacity: groupOpacity("supply", i) }}>
            <path
              className="s07b-flow__line"
              d={d}
              fill="none"
              stroke="url(#s07b-supply)"
              strokeWidth={lit ? 1.7 : 1}
              strokeLinecap="round"
            />
            {!still && (
              <path
                className="s07b-flow__pulse"
                d={d}
                fill="none"
                pathLength={1}
                stroke="#BDF6FF"
                strokeWidth={1.4}
                strokeDasharray="0.14 0.86"
                strokeLinecap="round"
                filter="url(#s07b-bloom)"
                style={{ animationDelay: `${(i * 0.22).toFixed(2)}s` }}
              />
            )}
          </g>
        );
      })}

      {geom.demand.map((p, i) => {
        const d = curve(p);
        const lit = hover.side === "demand" && hover.index === i;
        return (
          <g key={`d-${i}`} className="s07b-flow" style={{ opacity: groupOpacity("demand", i) }}>
            <path
              className="s07b-flow__line"
              d={d}
              fill="none"
              stroke="url(#s07b-demand)"
              strokeWidth={lit ? 1.7 : 1}
              strokeLinecap="round"
            />
            {!still && (
              <path
                className="s07b-flow__pulse"
                d={d}
                fill="none"
                pathLength={1}
                stroke="#C7BBFF"
                strokeWidth={1.4}
                strokeDasharray="0.14 0.86"
                strokeLinecap="round"
                filter="url(#s07b-bloom)"
                style={{ animationDelay: `${(1.15 + i * 0.22).toFixed(2)}s` }}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

/* ------------------------------------------------------------- the body */

export default function Section07Body() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const narrativeRef = useRef<HTMLParagraphElement | null>(null);
  const supplyColRef = useRef<HTMLDivElement | null>(null);
  const demandColRef = useRef<HTMLDivElement | null>(null);
  const supplyListRef = useRef<HTMLUListElement | null>(null);
  const demandListRef = useRef<HTMLUListElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);

  const [geom, setGeom] = useState<Geom | null>(null);
  const [hover, setHover] = useState<{ side: "supply" | "demand" | null; index: number | null }>({
    side: null,
    index: null,
  });

  const still = STATIC_REVIEW_MODE;

  const measure = useCallback(() => {
    const root = rootRef.current;
    const core = coreRef.current;
    const narrative = narrativeRef.current;
    const supplyCol = supplyColRef.current;
    const demandCol = demandColRef.current;
    if (!root || !core || !narrative || !supplyCol || !demandCol) return;

    const base = root.getBoundingClientRect();
    if (base.width < 2 || base.height < 2) return;
    const rel = (r: DOMRect) => ({
      left: r.left - base.left,
      right: r.right - base.left,
      top: r.top - base.top,
      bottom: r.bottom - base.top,
      cy: r.top + r.height / 2 - base.top,
    });

    const coreR = rel(core.getBoundingClientRect());
    const coreCy = (coreR.top + coreR.bottom) / 2;
    const coreH = coreR.bottom - coreR.top;

    const narrativeR = rel(narrative.getBoundingClientRect());
    const supplyColR = rel(supplyCol.getBoundingClientRect());
    const demandColR = rel(demandCol.getBoundingClientRect());

    const supplyRows = Array.from(
      supplyListRef.current?.querySelectorAll<HTMLElement>("[data-flow-row]") ?? [],
    ).map((el) => rel(el.getBoundingClientRect()));
    const demandRows = Array.from(
      demandListRef.current?.querySelectorAll<HTMLElement>("[data-flow-row]") ?? [],
    ).map((el) => rel(el.getBoundingClientRect()));

    const supplySources: { x: number; y: number }[] = [];
    for (let i = 0; i < NARRATIVE_TAPS; i += 1) {
      supplySources.push({
        x: narrativeR.right,
        y: narrativeR.top + ((i + 1) / (NARRATIVE_TAPS + 1)) * (narrativeR.bottom - narrativeR.top),
      });
    }
    for (const r of supplyRows) supplySources.push({ x: supplyColR.right, y: r.cy });

    // entries fan symmetrically across the core's left edge
    const entrySpan = coreH * 0.45;
    const supply = supplySources.map((s, i) => ({
      x1: s.x,
      y1: s.y,
      x2: coreR.left,
      y2:
        coreCy -
        entrySpan / 2 +
        (supplySources.length > 1 ? (i / (supplySources.length - 1)) * entrySpan : entrySpan / 2),
    }));

    const exitSpan = coreH * 0.28;
    const demand = demandRows.map((r, i) => ({
      x1: coreR.right,
      y1:
        coreCy -
        exitSpan / 2 +
        (demandRows.length > 1 ? (i / (demandRows.length - 1)) * exitSpan : exitSpan / 2),
      x2: demandColR.left - 6,
      y2: r.cy,
    }));

    setGeom({ w: base.width, h: base.height, supply, demand });
  }, []);

  useLayoutEffect(() => {
    measure();
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(root);
    if (coreRef.current) ro.observe(coreRef.current);
    const raf = requestAnimationFrame(measure);
    const t = window.setTimeout(measure, 260);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  // subtle pointer parallax — never required, never load-bearing
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (still) return;
    const root = rootRef.current;
    if (!root) return;
    const r = root.getBoundingClientRect();
    root.style.setProperty("--px", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    root.style.setProperty("--py", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  const onPointerLeave = () => {
    const root = rootRef.current;
    if (!root) return;
    root.style.setProperty("--px", "0");
    root.style.setProperty("--py", "0");
  };

  const bandLit = (index: number) => {
    if (!hover.side || hover.index === null) return false;
    return hover.side === "supply" ? index === hover.index * 2 : index === hover.index * 2 + 1;
  };

  return (
    <div
      ref={rootRef}
      className={[
        "s07b",
        still ? "s07b--still" : "",
        hover.side === "supply" ? "s07b--dim-supply" : "",
        hover.side === "demand" ? "s07b--dim-demand" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <Connectors geom={geom} still={still} hover={hover} />

      {/* ---------------- free supply ---------------- */}
      <section
        ref={supplyColRef}
        className="s07b-col s07b-col--supply"
        aria-labelledby="s07b-supply-heading"
      >
        <h2 id="s07b-supply-heading" className="s07b-eyebrow s07b-eyebrow--supply">
          Free Supply
        </h2>
        <p ref={narrativeRef} className="s07b-narrative">
          The model mirrors how every durable rating network monetizes: supply side scored free to
          drive ubiquity; demand side pays for intelligence that de-risks capital.
        </p>
        <span className="s07b-divider" aria-hidden="true" />
        <h3 className="s07b-revhead">DIS Platform Revenue</h3>
        <ul ref={supplyListRef} className="s07b-list s07b-list--supply">
          {supplyItems.map((item, i) => (
            <Row
              key={item.id}
              item={item}
              side="supply"
              active={hover.side === "supply" && hover.index === i}
              onEnter={() => setHover({ side: "supply", index: i })}
              onLeave={() => setHover({ side: null, index: null })}
            />
          ))}
        </ul>
      </section>

      {/* ---------------- compounding intelligence ---------------- */}
      <div className="s07b-center">
        <LightField still={still} />

        <div className="s07b-core-layer">
          <div className="s07b-core-bloom" aria-hidden="true" />
          <div className="s07b-core-ring" aria-hidden="true" />
          <div className="s07b-core-ring s07b-core-ring--b" aria-hidden="true" />

          <div className={`s07b-core${hover.side ? " is-lit" : ""}`} ref={coreRef}>
            <div className="s07b-core__plate">
              <div className="s07b-core__bands" aria-hidden="true">
                {Array.from({ length: 8 }, (_, i) => (
                  <div
                    key={i}
                    className={`s07b-core__band${bandLit(i) ? " is-lit" : ""}`}
                    style={{
                      top: `${8 + i * 10.5}%`,
                      background:
                        i % 2 === 0
                          ? "linear-gradient(90deg, rgba(34,211,238,0.3), rgba(34,211,238,0) 70%)"
                          : "linear-gradient(270deg, rgba(123,97,255,0.3), rgba(123,97,255,0) 70%)",
                    }}
                  />
                ))}
              </div>
              <div className="s07b-core__inner" aria-hidden="true" />
              <div className="s07b-core__sheen" aria-hidden="true" />
              <div className="s07b-core__scan" aria-hidden="true" />
              <p className="s07b-core__label">
                Compounding
                <br />
                Intelligence
              </p>
              <span className="s07b-core__corner s07b-core__corner--tl" aria-hidden="true" />
              <span className="s07b-core__corner s07b-core__corner--tr" aria-hidden="true" />
              <span className="s07b-core__corner s07b-core__corner--bl" aria-hidden="true" />
              <span className="s07b-core__corner s07b-core__corner--br" aria-hidden="true" />
            </div>
            <div className="s07b-core__reflection" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* ---------------- paid demand ---------------- */}
      <section
        ref={demandColRef}
        className="s07b-col s07b-col--demand"
        aria-labelledby="s07b-demand-heading"
      >
        <h2 id="s07b-demand-heading" className="s07b-eyebrow s07b-eyebrow--demand">
          Paid Demand
        </h2>
        <ul ref={demandListRef} className="s07b-list s07b-list--demand">
          {demandItems.map((item, i) => (
            <Row
              key={item.id}
              item={item}
              side="demand"
              active={hover.side === "demand" && hover.index === i}
              onEnter={() => setHover({ side: "demand", index: i })}
              onLeave={() => setHover({ side: null, index: null })}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
