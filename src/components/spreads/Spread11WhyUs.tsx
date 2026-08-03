/**
 * SPREAD 11 — Why Us
 * Light, quiet, editorial. No verified portraits are available, so this spread
 * uses a typography-led treatment with environmental imagery as atmosphere only.
 * Shirley Johnson holds the primary narrative position; Allen Bestwick secondary.
 * The four unresolved council profiles appear as a deliberately unfinished roster.
 */

import { motion, useReducedMotion } from "framer-motion";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const PROFILES = [
  {
    name: "Shirley Johnson",
    role: "Founder, CEO",
    bio: "Senior digital strategy and commerce transformation leader. Originating architect of the PRSC Readiness Standard and Terminal.",
    primary: true,
  },
  {
    name: "Allen Bestwick",
    role: "Advisory Council, Motorsport Media",
    bio: "Veteran broadcaster. His endorsement changes every recruitment conversation in the paddock.",
    primary: false,
  },
];

const UNRESOLVED = ["Dave", "Chantal", "David Brody", "Bobbie"];

export default function Spread11WhyUs({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="platinum">
      <RunningHead chapter="11 / Why Us" issue="DIS Origin" />

      <PageBody>
        <div className="why-stage">
          {/* environmental atmosphere */}
          <div className="why-field" aria-hidden="false">
            <img
              src="/05_leadership_portrait_direction.png"
              alt="Leadership atmosphere"
              className="why-field__img"
              loading="lazy"
            />
            <div className="why-field__scrim" />
          </div>

          {/* primary profile — typography-led */}
          <div className="why-primary">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>Why Us</span>
              <h2 className="ed-head" style={{ color: "var(--ink-text)" }}>
                The founder, the board, and the advisors.
              </h2>
            </Settle>

            {PROFILES.map((p, i) => (
              <motion.div
                key={p.name}
                className={`why-profile ${p.primary ? "why-profile--primary" : ""}`}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.14 + i * 0.16, ease: EASE }}
              >
                <span className="why-profile__role">{p.role}</span>
                <h3 className="why-profile__name">{p.name}</h3>
                <p className="why-profile__bio">{p.bio}</p>
              </motion.div>
            ))}
          </div>

          {/* unresolved council roster */}
          <motion.div
            className="why-council"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          >
            <span className="why-council__label">Council in Formation</span>
            <div className="why-council__grid">
              {UNRESOLVED.map((name) => (
                <span key={name} className="why-council__slot">{name}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="11" />
    </Page>
  );
}
