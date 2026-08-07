/**
 * The flywheel as a layered product render.
 *
 * Every visible surface — rear shadow, refraction band, machined frame, glass
 * body, edge lighting, specular arc, hub housing, hub glass — is a real DOM
 * layer built from gradients, masks and inset shadows. SVG is used only for the
 * hairline etched guides inside the hub, where geometry is genuinely easier to
 * express as a path. Nothing here is a stroked circle.
 */

import { motion, type MotionValue } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import ParticleRing from "./ParticleRing";
import type { FlywheelActor } from "./flywheelActors";

type V = Record<string, string | number>;

export default function FlywheelObject({
  actors,
  activeIndex,
  lit,
  reduce,
  running,
  drift,
}: {
  actors: FlywheelActor[];
  activeIndex: number;
  /** the object has woken up — arrival illumination has begun */
  lit: boolean;
  reduce: boolean;
  /** motion timeline + particles run only while the spread is active */
  running: boolean;
  drift?: { x: MotionValue<number>; y: MotionValue<number> };
}) {
  const active = actors[activeIndex];
  const on = reduce ? true : lit;

  return (
    <motion.div
      className="fly__obj"
      style={{ ...(drift ? { x: drift.x, y: drift.y } : null) }}
      initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0.08 }}
      animate={{ opacity: on ? 1 : 0.08 }}
      transition={{ duration: 2, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {/* volumetric aura the object throws into the surrounding air */}
      <span className="fly__aura" aria-hidden />

      {/* contact + cast shadow, then the pool of light the object throws down */}
      <span className="fly__cast" aria-hidden />
      <motion.span
        className="fly__pool"
        aria-hidden
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
        animate={{ opacity: on ? 1 : 0 }}
        transition={{ duration: 1.8, delay: 0.5 }}
      />

      {/* ---- channels: illuminated conduits, occluded by the glass above ---- */}
      <div className="fly__chans" aria-hidden>
        {actors.map((a, i) => {
          const isOn = i === activeIndex;
          return (
            <span
              key={a.index}
              className={`fly__chan${isOn ? " is-on" : ""}`}
              style={{ "--ang": `${a.angle}deg`, "--edge": `var(--${a.accent})` } as V}
            >
              <span className="fly__chan-amb" />
              <span className="fly__chan-bloom" />
              <span className="fly__chan-core" />
              {isOn && running && !reduce ? (
                <motion.span
                  className="fly__chan-spec"
                  key={`spec-${a.index}`}
                  initial={{ opacity: 0, top: "88%" }}
                  animate={{ opacity: [0, 1, 0.9, 0], top: ["88%", "6%"] }}
                  transition={{ duration: 1.15, ease: "easeOut", delay: 0.18 }}
                />
              ) : null}
            </span>
          );
        })}
      </div>

      {/* ---- luminous orbital arcs inside the glass (light trails) ---- */}
      <motion.span
        className="fly__arc fly__arc--a"
        aria-hidden
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
        animate={{ opacity: on ? 1 : 0 }}
        transition={{ duration: 1.6, delay: 0.4 }}
      />
      <motion.span
        className="fly__arc fly__arc--b"
        aria-hidden
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
        animate={{ opacity: on ? 1 : 0 }}
        transition={{ duration: 1.8, delay: 0.55 }}
      />
      <motion.span
        className="fly__arc fly__arc--c"
        aria-hidden
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
        animate={{ opacity: on ? 1 : 0 }}
        transition={{ duration: 2, delay: 0.7 }}
      />
      <span className="fly__sparkle" aria-hidden />
      {running && !reduce ? <span className="fly__comet" aria-hidden /> : null}

      {/* ---- outer glass assembly ---- */}
      <span className="fly__rear" aria-hidden />
      <span className="fly__refract" aria-hidden />
      <span className="fly__metal" aria-hidden />
      <span className="fly__glass" aria-hidden />
      <span className="fly__edge fly__edge--out" aria-hidden />
      <span className="fly__edge fly__edge--in" aria-hidden />
      <span className="fly__ringgrain" aria-hidden />

      <motion.span
        className="fly__spec"
        aria-hidden
        initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
        animate={{ opacity: on ? 1 : 0 }}
        transition={{ duration: 1.4, delay: 0.35 }}
      />

      {/* pulse travelling the band toward the live actor */}
      {running && !reduce ? (
        <motion.span
          className="fly__pulse"
          aria-hidden
          style={{ "--edge": `var(--${active.accent})` } as V}
          animate={{ rotate: active.angle, opacity: [0, 0.85, 0] }}
          transition={{
            rotate: { duration: 1.25, ease: [0.22, 0.61, 0.36, 1] },
            opacity: { duration: 1.6, times: [0, 0.35, 1] },
          }}
        />
      ) : null}

      {running && !reduce ? (
        <ParticleRing activeAngle={active.angle} running={running} />
      ) : null}

      {/* ---- machined hub ---- */}
      <div className="fly__hub" style={{ "--edge": `var(--${active.accent})` } as V}>
        <span className="fly__hub-rear" aria-hidden />
        <span className="fly__hub-metal" aria-hidden />
        <span className="fly__hub-chrome fly__hub-chrome--1" aria-hidden />
        <span className="fly__hub-chrome fly__hub-chrome--2" aria-hidden />
        <span className="fly__hub-chrome fly__hub-chrome--3" aria-hidden />
        <span className="fly__hub-groove" aria-hidden />

        <span className="fly__hub-bevel" aria-hidden />
        <span className="fly__hub-glass" aria-hidden />
        <motion.span
          className="fly__hub-lamp"
          aria-hidden
          initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0 }}
          animate={{ opacity: on ? 1 : 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        <span className="fly__hub-spec" aria-hidden />
        <svg className="fly__hub-etch" viewBox="0 0 200 200" aria-hidden>
          <circle cx="100" cy="100" r="72" />
          <circle cx="100" cy="100" r="88" />
          <path d="M100 12 v10 M100 178 v10 M12 100 h10 M178 100 h10" />
        </svg>

        <div className="fly__hub-type">
          <span className="fly__hub-mark">The PRSC Readiness Score™</span>
          <span className="fly__hub-sub">
            The shared reference point that makes the ecosystem legible.
          </span>
        </div>
      </div>
    </motion.div>
  );
}
