/**
 * SPREAD 07 — The Business Model
 * Free Supply → Compounding Intelligence → Paid Demand.
 * HTML is the primary surface; one decorative SVG carries the connective layer.
 * Copy is verbatim from the production brief, SLIDE 7.
 */

import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  BarChart3,
  FileText,
  Layers,
  LineChart,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

import "./spread07.css";

/* ---------------------------------------------------------------- data */

type IconKey =
  | "audience"
  | "layers"
  | "shield"
  | "benchmark"
  | "certification"
  | "analytics"
  | "license";

type RevenueItem = { id: string; label: string; icon: IconKey };

const ICONS: Record<IconKey, LucideIcon> = {
  audience: Users,
  layers: Layers,
  shield: ShieldCheck,
  benchmark: BarChart3,
  certification: Award,
  analytics: LineChart,
  license: FileText,
};

const supplyItems: RevenueItem[] = [
  { id: "subscriptions", label: "Demand-side subscriptions (brands, investors, agencies, series)", icon: "audience" },
  { id: "modules", label: "Intelligence layer module access", icon: "layers" },
  { id: "enterprise", label: "Enterprise intelligence access", icon: "shield" },
  { id: "benchmarking", label: "Ecosystem benchmarking access", icon: "benchmark" },
];

const demandItems: RevenueItem[] = [
  { id: "certification", label: "Readiness Certified\u2122 fees", icon: "certification" },
  { id: "reports", label: "Benchmark reports", icon: "analytics" },
  { id: "licensing", label: "Standard licensing", icon: "license" },
];

/** Deterministic signal-field particles — no Math.random at render time. */
type Particle = { x: number; y: number; size: number; opacity: number; delay: number };

const particles: Particle[] = [
  { x: 24, y: 18, size: 2, opacity: 0.5, delay: 0 },
  { x: 46, y: 30, size: 3, opacity: 0.75, delay: 1.2 },
  { x: 62, y: 24, size: 2, opacity: 0.45, delay: 2.1 },
  { x: 38, y: 44, size: 2, opacity: 0.6, delay: 0.6 },
  { x: 56, y: 58, size: 3, opacity: 0.7, delay: 1.8 },
  { x: 30, y: 66, size: 2, opacity: 0.45, delay: 2.6 },
  { x: 68, y: 72, size: 2, opacity: 0.55, delay: 0.9 },
  { x: 48, y: 82, size: 2, opacity: 0.5, delay: 1.5 },
];

/* ------------------------------------------------------- sub-components */

function RevenueItemRow({
  item,
  side,
  index,
  still,
}: {
  item: RevenueItem;
  side: "supply" | "demand";
  index: number;
  still: boolean;
}) {
  const Icon = ICONS[item.icon];
  return (
    <motion.li
      className={`s07-row s07-row--${side}`}
      initial={still ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay: 0.25 + index * 0.09, ease: EASE }}
    >
      <span className="s07-row__icon" aria-hidden="true">
        <Icon strokeWidth={1.4} />
      </span>
      <span className="s07-row__label">{item.label}</span>
    </motion.li>
  );
}

function RevenueList({
  items,
  side,
  still,
}: {
  items: RevenueItem[];
  side: "supply" | "demand";
  still: boolean;
}) {
  return (
    <ul className="s07-list">
      {items.map((item, i) => (
        <RevenueItemRow key={item.id} item={item} side={side} index={i} still={still} />
      ))}
    </ul>
  );
}

function SectionNarrative() {
  return (
    <p className="s07-narrative">
      The model mirrors how every durable rating network monetizes: supply side scored free to drive
      ubiquity; demand side pays for the intelligence that de-risks capital.
    </p>
  );
}

function SupplyColumn({ still }: { still: boolean }) {
  return (
    <div className="s07-col s07-col--supply">
      <Settle>
        <p className="s07-eyebrow">Free Supply</p>
      </Settle>
      <Settle delay={0.1}>
        <SectionNarrative />
      </Settle>
      <div>
        <h3 className="s07-rev-head">DIS Platform Revenue</h3>
        <RevenueList items={supplyItems} side="supply" still={still} />
      </div>
    </div>
  );
}

function RevenueHeader() {
  return (
    <h3 className="s07-rev-head">
      PRSC Council Revenue
      <span className="s07-rev-sub">Arm&rsquo;s-length license to DIS</span>
    </h3>
  );
}

function DemandColumn({ still }: { still: boolean }) {
  return (
    <div className="s07-col s07-col--demand">
      <Settle>
        <p className="s07-eyebrow">Paid Demand</p>
      </Settle>
      <div>
        <RevenueHeader />
        <RevenueList items={demandItems} side="demand" still={still} />
      </div>
    </div>
  );
}

function IntelligenceCore() {
  return (
    <div className="s07-core-wrap">
      <div className="s07-core">
        <p>
          Compounding
          <br />
          Intelligence
        </p>
      </div>
    </div>
  );
}

function SignalField() {
  return (
    <div className="s07-signal" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={`${p.x}-${p.y}`}
          className="s07-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/**
 * One decorative SVG. Coordinates are defined against a stable 1000 × 600
 * viewBox that stretches with the flow container (preserveAspectRatio="none"),
 * so no DOM measurement or ResizeObserver is required.
 */
function FlowConnectorLayer() {
  const CORE_L = 430;
  const CORE_R = 570;
  const CORE_Y = 300;

  const supplyAnchors = [372, 412, 452, 492];
  const demandAnchors = [212, 262, 306];

  return (
    <svg
      className="s07-connectors"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <g className="s07-c--supply">
        {supplyAnchors.map((y) => (
          <path key={y} d={`M300 ${y} C 370 ${y}, 380 ${CORE_Y}, ${CORE_L} ${CORE_Y}`} />
        ))}
      </g>
      <g className="s07-c--demand">
        {demandAnchors.map((y) => (
          <path key={y} d={`M${CORE_R} ${CORE_Y} C 640 ${CORE_Y}, 650 ${y}, 720 ${y}`} />
        ))}
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------ the spread */

export default function Spread07BusinessModel({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();
  const still = STATIC_REVIEW_MODE || !!reduce;

  return (
    <Page stock="slate">
      <RunningHead chapter="07 / The Business Model" issue="DIS Origin" />

      <PageBody>
        <section className={`s07${still ? " s07--still" : ""}`} aria-label="The Business Model">
          <SignalField />
          <FlowConnectorLayer />

          <div className="s07-flow">
            <SupplyColumn still={still} />
            <IntelligenceCore />
            <DemandColumn still={still} />
          </div>
        </section>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="07" />
    </Page>
  );
}
