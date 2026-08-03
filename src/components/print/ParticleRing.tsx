/**
 * Circulating intelligence — one capped canvas layer.
 *
 * Particles drift slowly around the ring band and briefly intensify near the
 * live channel, then recede. Device pixel ratio is capped and the renderer
 * stops entirely when the spread is not active or reduced motion is set, so it
 * costs nothing off screen.
 */

import { useEffect, useRef } from "react";

const COUNT = 132;
const DPR_CAP = 1.5;

type P = { a: number; r: number; v: number; s: number; o: number; w: boolean };

export default function ParticleRing({
  activeAngle,
  running,
}: {
  /** degrees clockwise from twelve o'clock */
  activeAngle: number;
  running: boolean;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const angleRef = useRef(activeAngle);
  angleRef.current = activeAngle;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !running) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(DPR_CAP, window.devicePixelRatio || 1);
    let w = 0;
    let h = 0;

    const size = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();

    const parts: P[] = Array.from({ length: COUNT }, () => ({
      a: Math.random() * Math.PI * 2,
      // sit inside the inner circumference of the glass band
      r: 0.385 + Math.random() * 0.062,
      v: 0.00014 + Math.random() * 0.00026,
      s: 0.55 + Math.random() * 1.25,
      o: 0.2 + Math.random() * 0.45,
      w: Math.random() < 0.22,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      // live channel direction, in canvas radians (0 = twelve o'clock)
      const live = ((angleRef.current - 90) * Math.PI) / 180;

      for (const p of parts) {
        p.a += p.v;
        const x = cx + Math.cos(p.a) * p.r * w;
        const y = cy + Math.sin(p.a) * p.r * h;

        // proximity to the live channel, 0..1
        let d = Math.abs(((p.a - live + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
        d = 1 - Math.min(1, d / 0.6);
        // broken field: a slow angular modulation keeps the ring from reading
        // as an evenly spaced row of dots
        const gap = 0.55 + 0.45 * Math.abs(Math.sin(p.a * 3.4 + p.r * 40));
        const alpha = p.o * gap * (0.7 + d * 1.5);

        ctx.beginPath();
        ctx.arc(x, y, p.s * (1 + d * 0.55), 0, Math.PI * 2);
        ctx.fillStyle = p.w
          ? `rgba(255, 255, 255, ${Math.min(0.95, alpha * 1.15)})`
          : `rgba(150, 200, 245, ${Math.min(0.8, alpha)})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(size);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [running]);

  return <canvas ref={ref} className="fly__particles" aria-hidden />;
}
