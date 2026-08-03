/**
 * SPREAD 15 — Closing Card
 * Signal Black full bleed, one restrained light horizon, approved DIS mark, Ice
 * White type. PRSCSTANDARDS.COM is rendered. No placeholder contact or
 * confidential notice shown (content dependency reported separately).
 */

import { motion, useReducedMotion } from "framer-motion";

import disLogo from "@/assets/dis-logo-masthead.png.asset.json";
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
          {/* restrained light horizon */}
          <motion.div
            className="close-horizon"
            initial={reduce ? false : { opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2, ease: EASE }}
            aria-hidden
          />

          {/* DIS mark */}
          <motion.div
            className="close-mark"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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

          {/* closing copy */}
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
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="15" />
    </Page>
  );
}
