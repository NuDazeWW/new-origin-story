/**
 * SPREAD 00 — Cover
 * Dark stock. The photograph carries the page; typography is the masthead.
 */

import { motion, useReducedMotion } from "framer-motion";

import coverAsset from "@/assets/dis-cover.png.asset.json";
import logoAsset from "@/assets/dis-logo.png.asset.json";
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
        <div className="cover-foot" />
      </div>

      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Masthead */}
        <div className="pg__margin">
          <Settle>
            <div className="cover-lockup">
              <img src={logoAsset.url} alt="" className="cover-lockup__mark" />
              <span className="cover-lockup__name">Decision Intelligence Systems</span>
            </div>
          </Settle>
          <div style={{ height: "1px", background: "var(--rule)", margin: "1.1rem 0 0.9rem" }} />
          <Settle delay={0.12}>
            <p
              className="ed-body"
              style={{ maxWidth: "38ch", color: "var(--ink-text)" }}
            >
              Building the intelligence infrastructure layer for the $90B sponsorship market.
            </p>
          </Settle>
        </div>

        <div style={{ flex: 1 }} />

        {/* Display headline */}
        <div style={{ padding: "0 4.5rem 1.6rem" }}>
          <Settle delay={0.24}>
            <span className="ed-kicker">Origin · Issue No. 01</span>
          </Settle>
          <Settle delay={0.32}>
            <h1 className="ed-head" style={{ marginTop: "0.7rem", maxWidth: "16ch" }}>
              The Readiness Terminal<span style={{ fontSize: "0.4em", verticalAlign: "super" }}>™</span>
            </h1>
          </Settle>
        </div>

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
