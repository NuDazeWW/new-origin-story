/**
 * SPREAD 12 — Roles This Round Funds
 * FINAL COPY PASS: three tranche closes staged as receding typographic planes.
 * No cards, no tables. The amounts are the typographic anchors; each close
 * carries its date, milestone unlock, and roles. Copy is verbatim.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

type Close = {
  label: string;
  amount: string;
  date: string;
  milestone: string;
  roles: string[];
  tone: "near" | "mid" | "far";
};

const CLOSES: Close[] = [
  {
    label: "Initial Close",
    amount: "$850,000",
    date: "Oct 15, 2026",
    milestone:
      "Terminal operational, IP secured, first Vanguard cohort activated.",
    roles: [
      "Head of Platform Engineering",
      "Methodology Committee Chair",
      "Head of Data & Intelligence",
      "Board Member (Demand Side)",
      "Media Measurement Advisor (advisory — motorsport broadcast and media measurement)",
    ],
    tone: "near",
  },
  {
    label: "Second Close",
    amount: "$900,000",
    date: "Apr 1, 2027",
    milestone:
      "Benchmark dataset complete, readiness validation achieved, anchor progress confirmed.",
    roles: [
      "Board Member (Supply Side)",
      "Head of GTM / Partnerships",
      "Head of Sales (Demand Side)",
    ],
    tone: "mid",
  },
  {
    label: "Final Close",
    amount: "$750,000",
    date: "May 1, 2027",
    milestone:
      "First paid conversions, first certifications issued, commercialization underway.",
    roles: ["Commercialization and scale roles", "Seed setup for Series A readiness"],
    tone: "far",
  },
];

export default function Spread12Roles({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="ice">
      <RunningHead chapter="12 / Roles This Round Funds" issue="DIS Origin" />

      <PageBody>
        <div className="roles-stage roles2-stage roles3-stage">
          <div className="roles2-depth" aria-hidden />

          <div className="roles3-header">
            <Settle>
              <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>
                Roles This Round Funds
              </span>
              <h2 className="roles2-head roles3-head">
                The $2.5M raise funds the first 24 months of operations.
              </h2>
            </Settle>
            <Settle delay={0.12}>
              <p className="roles2-lede roles3-lede">Every hire has a milestone.</p>
            </Settle>
          </div>

          <div className="roles3-planes">
            {CLOSES.map((close, i) => (
              <motion.div
                key={close.label}
                className={`roles3-plane roles3-plane--${close.tone}`}
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 30 - i * 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.16, ease: EASE }}
              >
                <div className="roles3-plane__top">
                  <span className="roles3-plane__label">{close.label}</span>
                  <span className="roles3-plane__date">{close.date}</span>
                </div>
                <span className="roles3-plane__amount">{close.amount}</span>
                <p className="roles3-plane__milestone">
                  <span className="roles3-plane__milestoneLabel">Milestone unlocked:</span>{" "}
                  {close.milestone}
                </p>
                <ul className="roles3-plane__list">
                  {close.roles.map((role) => (
                    <li key={role} className="roles3-plane__role">{role}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="12" />
    </Page>
  );
}
