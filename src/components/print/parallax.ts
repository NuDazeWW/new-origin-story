/**
 * Pointer parallax — a single shared field, read by every layered element.
 *
 * The publication is paged, not scrolled, so depth is expressed against the
 * reader's pointer rather than scroll position. One listener feeds a module
 * level store; each layer subscribes and springs toward its own depth-scaled
 * offset. Movement is deliberately small (a few pixels) so the page reads as
 * engineered, never playful — and it is disabled entirely under reduced motion.
 */

import { useEffect } from "react";

import { STATIC_REVIEW_MODE } from "@/reviewMode";
import { useMotionValue, useSpring, useReducedMotion, type MotionValue } from "framer-motion";

type Listener = (x: number, y: number) => void;

const listeners = new Set<Listener>();
let px = 0;
let py = 0;
let bound = false;

function bind() {
  if (bound || typeof window === "undefined") return;
  bound = true;
  const onMove = (e: PointerEvent) => {
    px = e.clientX / window.innerWidth - 0.5;
    py = e.clientY / window.innerHeight - 0.5;
    listeners.forEach((l) => l(px, py));
  };
  const onLeave = () => {
    px = 0;
    py = 0;
    listeners.forEach((l) => l(0, 0));
  };
  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("pointerleave", onLeave);
}

const SPRING = { stiffness: 60, damping: 22, mass: 0.7 } as const;

/**
 * Returns spring-smoothed x/y offsets in pixels for a layer at `depth`.
 * `depth` is a multiplier — 0 is pinned, 1 is the standard foreground drift.
 */
export function useParallax(depth = 1, max = 10): { x: MotionValue<number>; y: MotionValue<number> } {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, SPRING);
  const y = useSpring(rawY, SPRING);

  useEffect(() => {
    if (reduce || STATIC_REVIEW_MODE || depth === 0) return;
    bind();
    const amp = max * depth;
    const listener: Listener = (nx, ny) => {
      rawX.set(nx * amp);
      rawY.set(ny * amp * 0.6);
    };
    listener(px, py);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, [reduce, depth, max, rawX, rawY]);

  return { x, y };
}
