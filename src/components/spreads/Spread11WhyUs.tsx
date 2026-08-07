/**
 * SPREAD 11 — Why Us
 * FINAL COPY PASS: typography-led leadership spread. No portraits, no profile
 * cards. One approved environmental image is used as atmosphere only — no
 * person in it is identified. Founder holds the dominant column; founding team
 * and advisors are set as two editorial indexes. Copy is verbatim.
 */

import { motion, useReducedMotion } from "framer-motion";

import { STATIC_REVIEW_MODE } from "@/reviewMode";

import { Page, PageBody, RunningHead, Folio } from "@/components/print/Page";
import { Settle } from "@/components/print/Editorial";
import { EASE } from "@/components/print/Layers";

const FOUNDER = {
  name: "Shirley Johnson",
  role: "Founder, CEO & CSO",
  paras: [
    "Shirley Johnson is a growth strategist, decision architect, and commercial intelligence innovator with over a decade of senior leadership experience at the intersection of digital strategy, commerce transformation, data intelligence, and customer experience architecture. Her career spans some of the most recognized names in global marketing and technology services, including Publicis Epsilon, Publicis Commerce, Publicis Razorfish, Publicis Sapient, and Havas Worldwide — where she led strategy, marketing, CRM, media, growth, and transformation initiatives across complex enterprise environments.",
    "That experience revealed a recurring pattern: organizations rarely fail because they lack opportunities. They fail because they lack clarity. Decisions are made with fragmented information. Resources are allocated without sufficient visibility into impact. The PRSC Readiness Standard™ and the Readiness Terminal™ are the direct product of that insight.",
    "Shirley is the originating architect of the PRSC Readiness Standard™ and the Readiness Terminal™, and serves as Founder, CEO, CSO, and President of Decision Intelligence Systems.",
  ],
};

const FOUNDING_TEAM = [
  {
    name: "Bobbie Laurel",
    role: "Founding Team Member, Target COO",
    bio: "Founding shareholder and volunteer board member. Brings operational leadership and agency/GTM expertise. Contributor to the IP architecture. Target full-time COO.",
  },
  {
    name: "David Broady",
    role: "Founding Team Member (Non-Executive), Target CBO",
    bio: "Board of directors. Brings agency and GTM expertise. Contributor to the IP architecture. Target Chief Business Officer.",
  },
  {
    name: "Doug Kibby",
    role: "Founding Team Member, Strategic Advisor",
    bio: "Change management and adoption strategy. Brings deep expertise in organizational adoption and the human side of platform transitions — critical for driving Vanguard cohort engagement and ecosystem-wide standard adoption.",
  },
];

const ADVISORS = [
  {
    name: "Chantal Almonord",
    role: "Board of Directors, Strategic Advisor",
    bio: "Platform architecture and global engagement. Brings the technical and organizational architecture expertise required to build a platform that scales across markets and actor types.",
  },
  {
    name: "Dave Nussbaum",
    role: "Board of Directors, Strategic Advisor",
    bio: "Data integration and strategy. Brings the data infrastructure expertise required to build the Benchmark Database and the intelligence layer that makes the platform defensible.",
  },
  {
    name: "Lee Schwartz",
    role: "Strategic Advisor, Motorsport",
    bio: "Widely respected throughout the racing community, Lee Schwartz brings decades of motorsport expertise, industry credibility, and ecosystem access to Decision Intelligence Systems. His career spans teams, drivers, manufacturers, suppliers, sponsors, and racing organizations — providing DIS with deep insight into the operational and commercial realities of the motorsport ecosystem. Beyond technical expertise, Lee contributes trust: his relationships and reputation provide direct access to the stakeholders and decision-makers who will determine how the PRSC Readiness Standard™ is adopted across motorsport. His perspective ensures DIS is built not only for the industry, but with the industry.",
  },
];

function Entry({
  name,
  role,
  bio,
  delay,
  reduce,
}: {
  name: string;
  role: string;
  bio: string;
  delay: number;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      className="why3-entry"
      initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      <h4 className="why3-entry__name">{name}</h4>
      <span className="why3-entry__role">{role}</span>
      <p className="why3-entry__bio">{bio}</p>
    </motion.div>
  );
}

export default function Spread11WhyUs({ isActive = false }: { isActive?: boolean }) {
  void isActive;
  const reduce = useReducedMotion();

  return (
    <Page stock="platinum">
      <RunningHead chapter="11 / Why Us" issue="DIS Origin" />

      <PageBody>
        <div className="why-stage why2-stage why3-stage">
          {/* Environmental atmosphere only. Deliberately unlabeled and abstracted. */}
          <div className="why2-atmos" aria-hidden>
            <img
              src="/04_executive_decision_team.png"
              alt=""
              className="why2-atmos__img"
              loading="lazy"
            />
            <div className="why2-atmos__wash" />
          </div>

          <div className="why3-content">
            <Settle>
              <div className="why3-head-row">
                <span className="ed-kicker" style={{ color: "var(--dis-steel-blue)" }}>Why Us</span>
                <h2 className="why2-head why3-head">The founder, the board, and the advisors.</h2>
              </div>
            </Settle>

            <div className="why3-grid">
              <motion.div
                className="why3-col why3-col--founder"
                initial={STATIC_REVIEW_MODE || reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={STATIC_REVIEW_MODE ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.85, delay: 0.14, ease: EASE }}
              >
                <span className="why3-col__label">Founder</span>
                <h3 className="why3-founder__name">{FOUNDER.name}</h3>
                <span className="why3-founder__role">{FOUNDER.role}</span>
                {FOUNDER.paras.map((p) => (
                  <p key={p.slice(0, 24)} className="why3-founder__bio">{p}</p>
                ))}
              </motion.div>

              <div className="why3-col">
                <span className="why3-col__label">Founding Team</span>
                {FOUNDING_TEAM.map((m, i) => (
                  <Entry key={m.name} {...m} delay={0.22 + i * 0.06} reduce={reduce} />
                ))}
              </div>

              <div className="why3-col">
                <span className="why3-col__label">Board &amp; Strategic Advisors</span>
                {ADVISORS.map((m, i) => (
                  <Entry key={m.name} {...m} delay={0.34 + i * 0.06} reduce={reduce} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageBody>

      <Folio volume="Vol. I · Decision Intelligence Systems" page="11" />
    </Page>
  );
}
