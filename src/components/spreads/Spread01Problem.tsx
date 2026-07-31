/**
 * SPREAD 01 — The Problem
 * Light Platinum stock. A magazine feature well: verso copy, recto photograph,
 * anchor statistics hanging in the outer margin.
 */

import paddockAsset from "@/assets/dis-paddock.png.asset.json";
import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Body, Figure, Lede, Settle, Stat } from "@/components/print/Editorial";

export default function Spread01Problem({ isActive = false }: { isActive?: boolean }) {
  return (
    <Page stock="paper">
      <RunningHead chapter="01 / The Problem" issue="DIS Origin · No. 01" />

      <PageBody>
        <div className="well">
          {/* Verso — the editorial column */}
          <div className="well__verso">
            <Settle>
              <span className="ed-kicker">The Market</span>
            </Settle>
            <Settle delay={0.1}>
              <h2 className="ed-head" style={{ marginTop: "0.6rem", maxWidth: "17ch" }}>
                The market has been running on gut instinct for a century.
              </h2>
            </Settle>

            <div style={{ height: "1px", background: "var(--rule)", margin: "1.3rem 0 1.1rem" }} />

            <Settle delay={0.2} className="ed-cols-2">
              <Lede>
                The global sports sponsorship market is $90 billion annually. No independent
                standard exists for measuring commercial readiness on either side of that market.
              </Lede>
              <Body>
                Every deal is negotiated on instinct, relationships, and incomplete data. Brands
                overpay for underperforming assets. Teams undersell themselves because they cannot
                prove their value.
              </Body>
            </Settle>
          </div>

          {/* Recto — photograph and the hanging stat rail */}
          <div />
          <div className="well__recto">
            <Figure
              src={paddockAsset.url}
              alt="Technicians working on a race car in a lit garage bay"
              label="Fig. 01.A"
              caption="Precision everywhere except the deal."
              credit="Photograph — DIS Field Archive"
              objectPosition="center"
            />

            <div style={{ display: "flex", gap: "2.5rem", marginTop: "1.4rem" }}>
              <Settle delay={0.3}>
                <Stat
                  countTo={90}
                  prefix="$"
                  suffix="B"
                  label="Global sponsorship market"
                  note="Annual spend across sponsorship rights worldwide."
                  active={isActive}
                />
              </Settle>
              <Settle delay={0.38}>
                <Stat
                  value="Zero"
                  label="Independent standards"
                  note="No neutral body measures commercial readiness on either side."
                />
              </Settle>
            </div>
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="02" />
    </Page>
  );
}
