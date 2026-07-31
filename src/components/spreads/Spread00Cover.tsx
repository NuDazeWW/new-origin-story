/**
 * SPREAD 00 — Cover
 * Dark stock. The photograph carries the page; the DIS lockup sits as a
 * centered magazine masthead, with the headline anchored at the bottom.
 */

import { motion, useReducedMotion } from "framer-motion";

import coverAsset from "@/assets/dis-cover.png.asset.json";
import logoAsset from "@/assets/dis-logo-masthead.png.asset.json";

import { Page, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";

export default function Spread00Cover() {
  const reduce = useReducedMotion();

  return (
    <Page stock="ink">
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <motion.img
          src={coverAsset.url}
          alt="A race car at speed under floodlights, light trails curving toward the horizon"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          initial={reduce ? undefined : { scale: 1.05 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 24, ease: "linear" }}
        />
        <div className="cover-head" />
        <div className="cover-foot" />
      </div>

      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Magazine masthead — centered DIS lockup */}
        <div className="pg__margin" style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "0.6rem" }}>
          <div style={{ width: "100%", maxWidth: "420px" }}>
            <Settle delay={0.08}>
              <img
                src={logoAsset.url}
                alt="Decision Intelligence Systems"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Settle>
          </div>
          <div style={{ height: "1px", background: "var(--rule)", width: "100%", maxWidth: "420px", margin: "0.8rem 0 0.7rem" }} />
          <Settle delay={0.14}>
            <p
              className="ed-body text-readable"
              style={{
                maxWidth: "46ch",
                color: "var(--ink-text)",
                textAlign: "center",
                fontSize: "clamp(1.1rem, 1.2vw, 1.3rem)",
                lineHeight: 1.6,
              }}
            >
              Building the intelligence infrastructure layer for the $90B sponsorship market.
            </p>
          </Settle>
        </div>

        {/* Display headline — moved up into the dark register */}
        <div style={{ padding: "0.8rem 4.5rem 0" }}>
          <Settle delay={0.24}>
            <span className="ed-kicker text-readable">Origin · 01</span>
          </Settle>
          <Settle delay={0.32}>
            <h1 className="ed-head text-readable--strong" style={{ marginTop: "0.5rem", maxWidth: "16ch" }}>
              The Readiness Terminal<span style={{ fontSize: "0.4em", verticalAlign: "super" }}>™</span>
            </h1>
          </Settle>
        </div>

        <div style={{ flex: 1 }} />

        <Settle delay={0.42}>
          <Folio
            volume="Decision Intelligence Systems, Inc. · Pre-Seed · $2.5M"
            page="Confidential"
          />
        </Settle>
      </div>
    </Page>
  );
}

