/**
 * SPREAD 11 — Why Us
 * CORRECTION PASS 02: typography-led founder and advisor spread. No portraits,
 * no profile cards, no placeholder field. One approved environmental image is
 * used as atmosphere only — no person in it is identified. Shirley Johnson
 * dominates the hierarchy; Allen Bestwick holds a smaller supporting position.
 * Exact copy from production brief SLIDE 11.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const SHIRLEY = {
  name: "Shirley Johnson",
  role: "Founder, CEO",
  bio: "Senior digital strategy and commerce transformation leader. Originating architect of the PRSC Readiness Standard and Terminal.",
};

const ALLEN = {
  name: "Allen Bestwick",
  role: "Advisory Council, Motorsport Media",
  bio: "Veteran broadcaster. His endorsement changes every recruitment conversation in the paddock.",
};

export default function Spread11WhyUs({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="platinum">
      <RunningHead chapter="11 / Why Us" issue="DIS Origin" />

      <PageBody>
        <div className="why-stage why2-stage">
          {/* Environmental atmosphere only. Deliberately unlabeled and abstracted. */}
          <div className="why2-atmos" aria-hidden>
            <img
              src="/06_team_leadership.png"
              alt=""
              className="why2-atmos__img"
              loading="lazy"
            />
            <div className="why2-atmos__wash" />
          </div>

          <div className="why2-content">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>Why Us</span>
              <h2 className="why2-head">The founder, the board, and the advisors.</h2>
            </Settle>

            <motion.div
              className="why2-lead"
              initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.85, delay: 0.16, ease: EASE }}
            >
              <span className="why2-lead__role">{SHIRLEY.role}</span>
              <h3 className="why2-lead__name">{SHIRLEY.name}</h3>
              <p className="why2-lead__bio">{SHIRLEY.bio}</p>
            </motion.div>

            <motion.div
              className="why2-support"
              initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.36, ease: EASE }}
            >
              <span className="why2-support__role">{ALLEN.role}</span>
              <h4 className="why2-support__name">{ALLEN.name}</h4>
              <p className="why2-support__bio">{ALLEN.bio}</p>
            </motion.div>
          </div>

          {/*
            Unresolved council profiles (Dave, Chantal, David Brody, Bobbie) are
            named in the brief but their titles and biographies are unresolved,
            so no profile is rendered. See src/content/unresolved.ts.
          */}
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="11" />
    </Page>
  );
}
