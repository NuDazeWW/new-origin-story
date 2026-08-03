/**
 * SPREAD 15 — Closing Card
 * Signal Black full bleed. One restrained light horizon, DIS mark, Ice White type.
 * Contact info and confidential notice are included as supplied by the source brief.
 * Exact copy from production brief SLIDE 15.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import disLogo from "@/assets/dis-emblem-closing.png.asset.json";
import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

export default function Spread15Closing({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ink">
      <RunningHead chapter="15 / Closing" issue="DIS Origin" />

      <PageBody>
        <div className="close-stage">
          <motion.div
            className="close-horizon"
            initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, scaleX: 1 } : undefined}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2, ease: EASE }}
            aria-hidden
          />

          <motion.div
            className="close-mark"
            initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }} animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
          >
            <img
              src={disLogo.url}
              alt="Decision Intelligence Systems mark"
              className="close-mark__img"
              loading="lazy"
            />
          </motion.div>

          <div className="close-text">
            <Settle delay={0.2}>
              <p className="close-lead" style={{ color: "var(--dis-fog)" }}>
                The question is not whether the market needs this. It does.
              </p>
            </Settle>
            <Settle delay={0.35}>
              <h2 className="close-hero" style={{ color: "var(--dis-ice-white)" }}>
                PERFORMANCE GETS YOU NOTICED.
                <br />
                READINESS GETS YOU CHOSEN.
              </h2>
            </Settle>
            <Settle delay={0.5}>
              <a
                href="https://prscstandards.com"
                target="_blank"
                rel="noopener noreferrer"
                className="close-url"
              >
                PRSCSTANDARDS.COM
              </a>
            </Settle>
          </div>

          {/*
            Contact block intentionally not rendered: the approved brief supplies
            only unresolved tokens ([DIS Contact Info], [Confidential Notice]).
            See src/content/unresolved.ts.
          */}
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="15" />
    </Page>
  );
}

