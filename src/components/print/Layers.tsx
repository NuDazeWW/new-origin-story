/**
 * Depth treatments — the three visual registers the publication rotates through.
 *
 *  A · Plate      solid panels offset at real depth, one rim-lit edge
 *  B · Blueprint  hairline outlines, corner ticks, measurement rules
 *  C · Strata     frosted translucent panels floating over imagery
 *
 * None of them hardcode colour: everything resolves from the tonal ramp and the
 * three accent roles declared on `.pg` in styles.css.
 */

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export const EASE = [0.22, 0.61, 0.36, 1] as const;

export type Accent = "spot" | "live" | "future" | "none";

function accentVar(accent: Accent) {
  if (accent === "none") return undefined;
  return { "--edge": `var(--${accent})` } as CSSProperties;
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
    <motion.div
      className={`plate plate--d${depth}${accent !== "none" ? " plate--lit" : ""} ${className}`.trim()}
      style={{ ...accentVar(accent), ...style }}
      initial={reduce ? false : { opacity: 0, y: 18, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.78, delay, ease: EASE }}
    >
      {children}
    </motion.div>
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

  return (
    <motion.figure
      className={`pstack ${className}`.trim()}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      <span className="pstack__shim pstack__shim--2" aria-hidden />
      <span className="pstack__shim pstack__shim--1" aria-hidden />
      <div className="pstack__frame">
        <motion.img
          src={src}
          alt={alt}
          className="pstack__img"
          loading="lazy"
          initial={reduce ? undefined : { scale: 1.05 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
        />
      </div>
      {caption ? <figcaption className="pstack__cap">{caption}</figcaption> : null}
    </motion.figure>
  );
}

/* ------------------------------------------------------------ B · Blueprint */

/** An outlined module with corner ticks. Draws itself in on first view. */
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
    <motion.div
      className={`bp${dim ? " bp--dim" : ""}${accent !== "none" ? " bp--lit" : ""} ${className}`.trim()}
      style={{ ...accentVar(accent), ...style }}
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      <motion.span
        className="bp__rule bp__rule--x"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: delay + 0.05, ease: EASE }}
        aria-hidden
      />
      <span className="bp__tick bp__tick--tl" aria-hidden />
      <span className="bp__tick bp__tick--tr" aria-hidden />
      <span className="bp__tick bp__tick--bl" aria-hidden />
      <span className="bp__tick bp__tick--br" aria-hidden />
      {children}
    </motion.div>
  );
}

/** A labelled dimension rule, drawn like an architect's measurement. */
export function Dimension({ label, delay = 0 }: { label: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="bp-dim">
      <motion.span
        className="bp-dim__line"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: EASE }}
        aria-hidden
      />
      <span className="bp-dim__label">{label}</span>
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
    <motion.div
      className={`strata strata--l${lift} ${className}`.trim()}
      style={{ ...accentVar(accent), ...style }}
      initial={reduce ? false : { opacity: 0, y: 26 + lift * 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.95, delay, ease: EASE }}
    >
      {children}
    </motion.div>
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
  return (
    <div className="strata-bed" aria-hidden={false}>
      <motion.img
        src={src}
        alt={alt}
        className="strata-bed__img"
        style={{ objectPosition }}
        initial={reduce ? undefined : { scale: 1.08 }}
        animate={reduce ? undefined : { scale: 1 }}
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
