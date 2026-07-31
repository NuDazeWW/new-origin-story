/**
 * Editorial primitives — figures with hanging captions, drop caps and marginal
 * stat rails. Interaction is strictly optional enrichment: hovering a figure
 * clarifies its credit line, hovering a stat clarifies its source note.
 */

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Figure({
  src,
  alt,
  label,
  caption,
  credit,
  className = "",
  objectPosition = "center",
  tone = "print",
}: {
  src: string;
  alt: string;
  label: string;
  caption: string;
  credit?: string;
  className?: string;
  objectPosition?: string;
  tone?: "print" | "full";
}) {
  const reduce = useReducedMotion();

  return (
    <figure className={`fig ${className}`.trim()}>
      <div className="fig__frame">
        <motion.img
          src={src}
          alt={alt}
          className={`fig__img fig__img--${tone}`}
          style={{ objectPosition }}
          initial={reduce ? undefined : { scale: 1.06 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 18, ease: "linear" }}
        />
      </div>
      <figcaption className="fig__cap">
        <span className="fig__label">{label}</span>
        <span className="fig__text">{caption}</span>
        {credit ? <span className="fig__credit">{credit}</span> : null}
      </figcaption>
    </figure>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return <p className="ed-body ed-drop">{children}</p>;
}

export function Body({ children }: { children: ReactNode }) {
  return <p className="ed-body">{children}</p>;
}

/** Oversized numeral hanging in the outer margin. Hover clarifies the source. */
export function Stat({
  value,
  label,
  note,
  countTo,
  prefix = "",
  suffix = "",
  active = true,
}: {
  value?: string;
  label: string;
  note?: string;
  countTo?: number;
  prefix?: string;
  suffix?: string;
  active?: boolean;
}) {
  const shown = useCountUp(countTo, active);

  return (
    <div className="stat">
      <div className="stat__value">
        {countTo != null ? `${prefix}${shown}${suffix}` : value}
      </div>
      <div className="stat__label">{label}</div>
      {note ? <div className="stat__note">{note}</div> : null}
    </div>
  );
}

/** Counts once, on first activation, and never again. */
export function useCountUp(target: number | undefined, active: boolean) {
  const [n, setN] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (target == null || !active || done.current) return;
    done.current = true;
    const start = performance.now();
    const duration = 1100;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);

  return target == null ? 0 : n;
}

/** Text that settles onto the page like ink. */
export function Settle({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
