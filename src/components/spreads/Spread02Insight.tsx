/**
 * SPREAD 02 — The Insight
 * Dark stock. Photograph runs full bleed across the top; the FICO precedent is
 * drawn as an editorial chart rather than a diagram.
 */

import coverAsset from "@/assets/dis-cover.png.asset.json";
import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Body, Figure, Settle } from "@/components/print/Editorial";

const MARKS = [
  {
    year: "1956",
    label: "Founded",
    detail: "Fair, Isaac and Company is founded to score credit risk statistically.",
    key: false,
  },
  {
    year: "1995",
    label: "Fannie Mae mandate",
    detail:
      "Fannie Mae and Freddie Mac direct lenders to use the score. The measure becomes required infrastructure — the inflection point.",
    key: true,
  },
  {
    year: "Today",
    label: "$20B+ market cap",
    detail: "Not a software company — the reference the entire market quotes.",
    key: false,
  },
];

export default function Spread02Insight({ isActive = false }: { isActive?: boolean }) {
  void isActive;

  return (
    <Page stock="ink">
      <RunningHead chapter="02 / The Insight" issue="DIS Origin · No. 01" />

      <PageBody>
        <div style={{ display: "flex", flexDirection: "column", width: "100%", minHeight: 0 }}>
          {/* Full-bleed photograph, top register */}
          <div style={{ flex: "0 0 46%", minHeight: 0, padding: "1rem 4.5rem 0" }}>
            <Figure
              src={coverAsset.url}
              alt="Light trails tracing a single line through the dark"
              label="Fig. 02.A"
              caption="Every mature market converges on one trusted measure."
              credit="Photograph — DIS Field Archive"
              tone="full"
              objectPosition="center 60%"
            />
          </div>

          {/* Text register */}
          <div
            style={{
              flex: 1,
              minHeight: 0,
              display: "grid",
              gridTemplateColumns: "1.15fr 1fr 1fr",
              gap: "2.25rem",
              padding: "1.3rem 4.5rem 0",
              borderTop: "1px solid var(--rule)",
              marginTop: "1.2rem",
            }}
          >
            <Settle>
              <p className="ed-quote">
                “Credit has FICO. Public markets have ratings agencies. Real estate has the
                appraisal. Partnership readiness has nothing.”
              </p>
            </Settle>

            <Settle delay={0.12}>
              <Body>
                The first credible, neutral body to define the score sets the reference everyone
                else quotes — and the platform that operationalizes it captures the recurring
                value.
              </Body>
              <Body>
                We are building the FICO score for that market. FICO did not reach a $20B+ market
                cap by being a software company; it got there by becoming infrastructure the entire
                market depends on.
              </Body>
            </Settle>

            {/* Editorial chart */}
            <Settle delay={0.24}>
              <span className="ed-kicker">The Precedent</span>
              <div className="tl">
                <div className="tl__axis" />
                <div className="tl__marks">
                  {MARKS.map((m) => (
                    <div key={m.year} className={`tl__mark${m.key ? " tl__mark--key" : ""}`}>
                      <span className="tl__tick" />
                      <div className="tl__year">{m.year}</div>
                      <div className="tl__label">{m.label}</div>
                      <div className="tl__detail">{m.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Settle>
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="03" />
    </Page>
  );
}
