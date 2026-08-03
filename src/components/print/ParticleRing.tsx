/**
 * Circulating intelligence — one capped canvas layer.
 *
 * The field is organised, not scattered: particles are distributed into a
 * handful of angular clusters separated by gaps, so the band reads as a broken
 * circulating stream rather than an evenly spaced loading ring. Density and
 * brightness rise near the live channel. Device pixel ratio is capped and the
 * renderer stops entirely when the spread is inactive or reduced motion is set.
 */

import { useEffect, useRef } from "react";

const COUNT = 210;
const DPR_CAP = 1.5;
const CLUSTERS = 7;

type P = {
  a: number;
  r: number;
  v: number;
  s: number;
  o: number;
  /** sharp white point */
  w: boolean;
  /** phase for gentle radial breathing */
  ph: number;
};

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

    /* irregular cluster centres with unequal widths — the gaps matter as much
       as the clusters. One cluster is pinned near twelve o'clock (actor 01). */
    const live0 = ((activeAngle - 90) * Math.PI) / 180;
    const seeds = Array.from({ length: CLUSTERS }, (_, i) => ({
      c: i === 0 ? live0 : (i / CLUSTERS) * Math.PI * 2 + (Math.random() - 0.5) * 0.5,
      w: i === 0 ? 0.42 : 0.2 + Math.random() * 0.42,
      n: i === 0 ? 1.9 : 0.5 + Math.random() * 0.9,
    }));
    const weight = seeds.reduce((t, s) => t + s.n, 0);

    const parts: P[] = [];
    for (const s of seeds) {
      const n = Math.max(4, Math.round((COUNT * s.n) / weight));
      for (let i = 0; i < n; i++) {
        // gaussian-ish spread inside the cluster
        const g = (Math.random() + Math.random() + Math.random()) / 3 - 0.5;
        parts.push({
          a: s.c + g * 2 * s.w,
          // a narrow band just inside the glass aperture
          r: 0.315 + Math.random() * 0.055 + (Math.random() < 0.14 ? 0.05 : 0),
          v: 0.00016 + Math.random() * 0.00022,
          s: Math.random() < 0.16 ? 1.5 + Math.random() * 0.9 : 0.5 + Math.random() * 0.85,
          o: 0.24 + Math.random() * 0.52,
          w: Math.random() < 0.14,
          ph: Math.random() * Math.PI * 2,
        });
      }
    }

    let raf = 0;
    let t = 0;
    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const live = ((angleRef.current - 90) * Math.PI) / 180;

      for (const p of parts) {
        // shared directional flow around the circumference
        p.a += p.v;
        const rr = p.r + Math.sin(p.ph + t * 0.004) * 0.004;
        const x = cx + Math.cos(p.a) * rr * w;
        const y = cy + Math.sin(p.a) * rr * h;

        // proximity to the live channel, 0..1
        let d = Math.abs(((p.a - live + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
        d = 1 - Math.min(1, d / 0.75);
        const twinkle = 0.82 + 0.18 * Math.sin(p.ph + t * 0.03);
        const alpha = p.o * twinkle * (0.62 + d * 1.35);
        const rad = p.s * (1 + d * 0.5);

        if (p.w) {
          ctx.beginPath();
          ctx.arc(x, y, rad * 0.85, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(0.98, alpha * 1.25)})`;
          ctx.fill();
        } else {
          // faint actor-colour transition toward the live channel
          const g = Math.round(178 + d * 30);
          const b = Math.round(232 + d * 18);
          ctx.beginPath();
          ctx.arc(x, y, rad, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${Math.round(126 + d * 40)}, ${g}, ${b}, ${Math.min(0.82, alpha)})`;
          ctx.fill();
        }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return <canvas ref={ref} className="fly__particles" aria-hidden />;
}
