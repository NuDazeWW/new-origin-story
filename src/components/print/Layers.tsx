/**
 * Depth treatments — the three visual registers the publication rotates through.
 *
 *  A · Plate      solid panels offset at real depth, one rim-lit edge
 *  B · Blueprint  hairline outlines that draw themselves, corner ticks, rules
 *  C · Strata     frosted translucent panels floating over imagery
 *
 * Every treatment sits inside a parallax carrier: layers drift a few pixels
 * against the reader's pointer, front planes further than back ones, so the
 * page has real depth without ever asking to be played with.
 *
 * None of them hardcode colour: everything resolves from the tonal ramp and the
 * three accent roles declared on `.pg` in styles.css.
 */

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { useParallax } from "./parallax";

export const EASE = [0.22, 0.61, 0.36, 1] as const;

export type Accent = "spot" | "live" | "future" | "none";

function accentVar(accent: Accent) {
  if (accent === "none") return undefined;
  return { "--edge": `var(--${accent})` } as CSSProperties;
}

/* --------------------------------------------------------------- carrier */

/**
 * Wraps a layer so it drifts against the pointer. Kept as a separate element
 * from the layer itself so CSS hover transforms stay intact.
 */
export function Carrier({
  depth = 1,
  max = 10,
  className = "",
  children,
}: {
  depth?: number;
  max?: number;
  className?: string;
  children: ReactNode;
}) {
  const { x, y } = useParallax(depth, max);
  return (
    <motion.div className={`lyr ${className}`.trim()} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- A · Plate */

/** A solid raised panel. `depth` 0–2 sets how far forward it sits. */
export function Plate({
  children,
  depth = 1,
  accent = "none",
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  depth?: 0 | 1 | 2;
  accent?: Accent;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();

  return (
    <Carrier depth={0.4 + depth * 0.35}>
      <motion.div
        className={`plate plate--d${depth}${accent !== "none" ? " plate--lit" : ""} ${className}`.trim()}
        style={{ ...accentVar(accent), ...style }}
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 18, scale: 0.985 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0, scale: 1 } : undefined}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.78, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </Carrier>
  );
}

/** An image inset into a stack of offset outline frames. */
export function PlateStack({
  src,
  alt,
  caption,
  delay = 0,
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const back = useParallax(0.35, 10);
  const front = useParallax(1.15, 10);

  return (
    <Carrier depth={0.5}>
      <motion.figure
        className={`pstack ${className}`.trim()}
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        <motion.span
          className="pstack__shim pstack__shim--2"
          style={{ x: back.x, y: back.y }}
          aria-hidden
        />
        <motion.span
          className="pstack__shim pstack__shim--1"
          style={{ x: back.x, y: back.y }}
          aria-hidden
        />
        <motion.div className="pstack__frame" style={{ x: front.x, y: front.y }}>
          <motion.img
            src={src}
            alt={alt}
            className="pstack__img"
            loading="lazy"
            initial={STATIC_REVIEW_MODE || reduce ? undefined : { scale: 1.05 }}
            animate={reduce ? undefined : { scale: 1 }}
            transition={{ duration: 20, ease: "linear" }}
          />
        </motion.div>
        {caption ? <figcaption className="pstack__cap">{caption}</figcaption> : null}
      </motion.figure>
    </Carrier>
  );
}

/* ------------------------------------------------------------ B · Blueprint */

/** An outlined module with corner ticks. Draws its own outline on first view. */
export function Blueprint({
  children,
  accent = "none",
  delay = 0,
  dim = false,
  className = "",
  style,
}: {
  children: ReactNode;
  accent?: Accent;
  delay?: number;
  dim?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();

  return (
    <Carrier depth={0.55} max={8}>
      <motion.div
        className={`bp${dim ? " bp--dim" : ""}${accent !== "none" ? " bp--lit" : ""} ${className}`.trim()}
        style={{ ...accentVar(accent), ...style }}
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }} animate={STATIC_REVIEW_MODE ? { opacity: 1 } : undefined}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay, ease: EASE }}
      >
        {/* the outline draws itself around the module, once, on first view */}
        <svg className="bp__draw" aria-hidden preserveAspectRatio="none" viewBox="0 0 100 100">
          <motion.rect
            x="0.4"
            y="0.4"
            width="99.2"
            height="99.2"
            pathLength={1}
            vectorEffect="non-scaling-stroke"
            initial={STATIC_REVIEW_MODE || reduce ? false : { pathLength: 0, opacity: 0.9 }}
            whileInView={{ pathLength: 1, opacity: 1 }} animate={STATIC_REVIEW_MODE ? { pathLength: 1, opacity: 1 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.05, delay: delay + 0.04, ease: EASE }}
          />
        </svg>

        <motion.span
          className="bp__rule bp__rule--x"
          initial={STATIC_REVIEW_MODE || reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }} animate={STATIC_REVIEW_MODE ? { scaleX: 1 } : undefined}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: delay + 0.05, ease: EASE }}
          aria-hidden
        />
        {(["tl", "tr", "bl", "br"] as const).map((corner, i) => (
          <motion.span
            key={corner}
            className={`bp__tick bp__tick--${corner}`}
            initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, scale: 1 } : undefined}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.22, delay: delay + 0.85 + i * 0.06, ease: "backOut" }}
            aria-hidden
          />
        ))}
        {children}
      </motion.div>
    </Carrier>
  );
}

/** A labelled dimension rule, drawn like an architect's measurement. */
export function Dimension({ label, delay = 0 }: { label: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="bp-dim">
      <motion.span
        className="bp-dim__line"
        initial={STATIC_REVIEW_MODE || reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }} animate={STATIC_REVIEW_MODE ? { scaleX: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: EASE }}
        aria-hidden
      />
      <motion.span
        className="bp-dim__label"
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.5, ease: EASE }}
      >
        {label}
      </motion.span>
    </div>
  );
}

/* --------------------------------------------------------------- C · Strata */

/** A frosted panel floating above the page image. `lift` 0–2 sets its height. */
export function Strata({
  children,
  lift = 1,
  accent = "spot",
  delay = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  lift?: 0 | 1 | 2;
  accent?: Accent;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();

  return (
    <Carrier depth={0.7 + lift * 0.45} max={12}>
      <motion.div
        className={`strata strata--l${lift} ${className}`.trim()}
        style={{ ...accentVar(accent), ...style }}
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 26 + lift * 8 }}
        whileInView={{ opacity: 1, y: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.95, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </Carrier>
  );
}

/** Full-bleed backdrop image for a strata page, with a slow drift. */
export function StrataBed({
  src,
  alt,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
}) {
  const reduce = useReducedMotion();
  const { x, y } = useParallax(-0.5, 14);

  return (
    <div className="strata-bed" aria-hidden={false}>
      <motion.img
        src={src}
        alt={alt}
        className="strata-bed__img"
        style={{ objectPosition, x, y }}
        initial={STATIC_REVIEW_MODE || reduce ? undefined : { scale: 1.08 }}
        animate={reduce ? undefined : { scale: 1.04 }}
        transition={{ duration: 24, ease: "linear" }}
      />
      <span className="strata-bed__scrim" aria-hidden />
    </div>
  );
}

/* ------------------------------------------------------------------ shared */

export function Eyebrow({ children, accent = "spot" }: { children: ReactNode; accent?: Accent }) {
  return (
    <span className="ed-kicker" style={accent === "none" ? undefined : { color: `var(--${accent})` }}>
      {children}
    </span>
  );
}

/** Small monospace status chip — live / building / future. */
export function Tag({ children, accent = "spot" }: { children: ReactNode; accent?: Accent }) {
  return (
    <span className="tag" style={accentVar(accent)}>
      {children}
    </span>
  );
}
