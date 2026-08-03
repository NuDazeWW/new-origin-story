/**
 * The single source of actor geometry for Section 04.
 *
 * Channel taper, capsule placement, illumination, particle emphasis and the
 * editorial rail all derive from this one array — no system positions itself
 * independently. Copy is verbatim as supplied.
 */

export type FlywheelActor = {
  index: string;
  /** exact supplied label */
  label: string;
  /** capsule label broken across two lines, per the reference */
  lines: [string, string];
  /** fixed angular position, degrees clockwise from twelve o'clock */
  angle: number;
  /** channel accent, resolved from the page accent roles */
  accent: "spot" | "live" | "future";
  gain: string;
  why: string;
  dis: string;
  traction: string;
  /** accessible name for the capsule control */
  aria: string;
};

export const ACTORS: FlywheelActor[] = [
  {
    index: "01",
    label: "Teams & Drivers",
    lines: ["Teams &", "Drivers"],
    angle: -30,
    accent: "spot",
    gain: "Objective, portable proof of commercial value — a score they can improve, track, and present in every sponsorship conversation.",
    why: "Without a standard, every negotiation starts from zero. A strong PRSC Readiness Score is leverage. A weak score is a roadmap.",
    dis: "The only platform that converts readiness into a negotiable commercial asset.",
    traction:
      "Active Vanguard cohort interest — teams and drivers across Trans Am and Formula Drift.",
    aria: "Actor 01, Teams and Drivers",
  },
  {
    index: "02",
    label: "Brands & Sponsors",
    lines: ["Brands &", "Sponsors"],
    angle: 30,
    accent: "spot",
    gain: "Standardized due diligence — comparable, auditable data before the deal is signed.",
    why: "A $90B market with no standard means brands routinely overpay or miss high-value opportunities. The score reduces risk and justifies budget.",
    dis: "A shared language for evaluating sponsorship ROI that no competitor, agency, or internal team can currently provide.",
    traction: "Romeo Vineyards, Aflac — active engagement.",
    aria: "Actor 02, Brands and Sponsors",
  },
  {
    index: "03",
    label: "Series & Sanctioning Bodies",
    lines: ["Series &", "Sanctioning Bodies"],
    angle: 90,
    accent: "live",
    gain: "A scored field is a more commercially attractive field. Adoption signals institutional maturity to brand partners.",
    why: "Series compete for brand dollars. A field with demonstrable readiness ratings is a safer, more credible investment for sponsors.",
    dis: "Adoption creates a halo effect for the series and elevates the perceived quality of the entire competitive field.",
    traction: "Trans Am Series, Formula Drift — active engagement.",
    aria: "Actor 03, Series and Sanctioning Bodies",
  },
  {
    index: "04",
    label: "Manufacturers",
    lines: ["Manu-", "facturers"],
    angle: 150,
    accent: "future",
    gain: "Partner readiness visibility — know which programs are operationally ready to represent the brand before committing resources.",
    why: "Manufacturer partnerships fail when teams are underprepared. The score surfaces risk before it becomes a brand liability.",
    dis: "A screening and monitoring tool that protects brand equity at the activation layer.",
    traction: "Pipeline in development.",
    aria: "Actor 04, Manufacturers",
  },
  {
    index: "05",
    label: "Partnership Ecosystem Operators\u2122",
    lines: ["Partnership Ecosystem", "Operators\u2122"],
    angle: 210,
    accent: "spot",
    gain: "A credibility tool and a new revenue layer — evidence-based counsel no competitor can match.",
    why: "Agencies currently advise on sponsorship without independent data. The PRSC Readiness Score gives them an evidence base and a category differentiator.",
    dis: "Move from relationship broker to intelligence-led advisor — a fundamental upgrade in positioning and margin.",
    traction: "Agency-category engagement — active preliminary conversations.",
    aria: "Actor 05, Partnership Ecosystem Operators",
  },
  {
    index: "06",
    label: "Partners & Investors",
    lines: ["Partners &", "Investors"],
    angle: 270,
    accent: "live",
    gain: "A durable, compounding infrastructure asset — not a product, not a campaign, but a standard with network-effect moat characteristics.",
    why: "Standards businesses are among the most defensible in the world. Once embedded, they are nearly impossible to displace.",
    dis: "First-mover advantage in a standard is permanent. The Vanguard cohort — 25 slots, locked — is the only entry point at founding terms.",
    traction: "$2.5M SAFE — Vanguard cohort open.",
    aria: "Actor 06, Partners and Investors",
  },
];
