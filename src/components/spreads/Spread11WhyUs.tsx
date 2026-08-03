/**
 * SPREAD 11 — Why Us
 * Light, quiet, editorial. No verified portraits are available; the supplied
 * portrait is used as environmental atmosphere only, not as a labeled likeness.
 * Shirley Johnson and Allen Bestwick are rendered as typography-led profiles.
 * Unresolved council slots are deliberately unfinished. Exact copy from production brief SLIDE 11.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

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

export default function Spread11WhyUs({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="platinum">
      <RunningHead chapter="11 / Why Us" issue="DIS Origin" />

      <PageBody>
        <div className="why-stage">
          <div className="why-content">
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
                  initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.14 + i * 0.16, ease: EASE }}
                >
                  <span className="why-profile__role">{p.role}</span>
                  <h3 className="why-profile__name">{p.name}</h3>
                  <p className="why-profile__bio">{p.bio}</p>
                </motion.div>
              ))}
            </div>

            {/*
              Unresolved council slots (Dave, Chantal, David Brody, Bobbie) are
              not rendered: the approved brief supplies only [Title TBD] and
              [Bio placeholder]. See src/content/unresolved.ts.
            */}
          </div>

          <div className="why-atmosphere" aria-hidden>
            <div className="why-atmosphere__gradient" />
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="11" />
    </Page>
  );
}
