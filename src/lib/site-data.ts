export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface InsightItem {
  id: number;
  kind: "Research note" | "Quarterly letter" | "White paper" | "Market view";
  date: string;
  title: string;
  dek: string;
  author: string;
}

export interface RoleOpening {
  title: string;
  team: string;
  location: string;
  type: string;
}

export interface TimelineItem {
  yr: string;
  ttl: string;
  bd: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Evelyn Marchetti",
    role: "Chief Executive Officer",
    bio: "Former Head of Systematic Macro at a London-based multi-strategy firm. 22 years across rates and FX.",
    initials: "EM",
  },
  {
    name: "Jonas Okafor",
    role: "Chief Investment Officer",
    bio: "Built cross-asset quant at a US pod shop for a decade; PhD, Stochastic Optimisation.",
    initials: "JO",
  },
  {
    name: "Priya Raghavan",
    role: "Head of Research",
    bio: "Previously led ML research at a tier-one prime broker. Author of two books on factor construction.",
    initials: "PR",
  },
  {
    name: "Thomas Leclerc",
    role: "Head of Commodities",
    bio: "Twenty years running discretionary and systematic energy books. Specialist in term-structure signals.",
    initials: "TL",
  },
  {
    name: "Sana Hiroshi",
    role: "Head of Digital Assets",
    bio: "Founded and exited a crypto market-making desk; CFA, MIT Sloan.",
    initials: "SH",
  },
  {
    name: "Alexander Voss",
    role: "Chief Technology Officer",
    bio: "Engineered low-latency infrastructure at two global market-makers. 15 years in ultra-low-latency systems.",
    initials: "AV",
  },
  {
    name: "Marisol Duarte",
    role: "Chief Operating Officer",
    bio: "Led operations at a $25B global macro manager; deep expertise in regulatory build-out across three jurisdictions.",
    initials: "MD",
  },
  {
    name: "Henrik Alm",
    role: "Head of Risk",
    bio: "Former regulator and buy-side risk officer. Designs our regime-aware volatility framework.",
    initials: "HA",
  },
  {
    name: "Ines Kovač",
    role: "Head of Investor Relations",
    bio: "Brings 18 years of allocator-side relationships across endowments, pensions and sovereigns.",
    initials: "IK",
  },
];

export const INSIGHTS: InsightItem[] = [
  {
    id: 1,
    kind: "Research note",
    date: "Apr 2026",
    title: "Regime dispersion and the limits of trend.",
    dek: "When macro regimes bifurcate, naïve trend signals decay faster than implementation frictions suggest. A framework for measuring and adapting.",
    author: "P. Raghavan",
  },
  {
    id: 2,
    kind: "Quarterly letter",
    date: "Mar 2026",
    title: "Q1 2026 — Volatility without direction.",
    dek: "Cross-asset dispersion rose while aggregate volatility fell. The implications for carry, trend and relative-value allocation.",
    author: "J. Okafor",
  },
  {
    id: 3,
    kind: "White paper",
    date: "Feb 2026",
    title: "The capacity curve of systematic crypto.",
    dek: "Liquidity, spread, and microstructure constraints in digital asset markets — a re-examination with 2023–2026 data.",
    author: "S. Hiroshi",
  },
  {
    id: 4,
    kind: "Market view",
    date: "Jan 2026",
    title: "Why copper is not the trade you think it is.",
    dek: "Decomposing the supposed electrification bid into physical flow, financial positioning, and narrative premium.",
    author: "T. Leclerc",
  },
  {
    id: 5,
    kind: "Research note",
    date: "Dec 2025",
    title: "Term-structure signals under zero-bound exit.",
    dek: "Five years of zero rates distorted carry premia. A re-examination of cross-asset term structures in the new regime.",
    author: "P. Raghavan",
  },
  {
    id: 6,
    kind: "Quarterly letter",
    date: "Dec 2025",
    title: "Q4 2025 — Year in review.",
    dek: "Reflections on a year of mean-reverting volatility, rising correlation and the continued edge of process over prediction.",
    author: "E. Marchetti",
  },
  {
    id: 7,
    kind: "White paper",
    date: "Oct 2025",
    title: "Designing risk allocators that respect regime drift.",
    dek: "A practical architecture for volatility targeting that accounts for correlation instability and liquidity asymmetry.",
    author: "H. Alm",
  },
  {
    id: 8,
    kind: "Market view",
    date: "Sep 2025",
    title: "Dollar debasement is not a trade.",
    dek: "Why long-run monetary narratives rarely translate into implementable systematic signals — and what does.",
    author: "J. Okafor",
  },
];

export const ROLES: RoleOpening[] = [
  { title: "Senior Quantitative Researcher", team: "Systematic Macro", location: "London", type: "Full-time" },
  { title: "Machine Learning Researcher", team: "Alpha Research", location: "London", type: "Full-time" },
  { title: "Execution Engineer", team: "Trading Systems", location: "New York", type: "Full-time" },
  { title: "Portfolio Risk Analyst", team: "Risk", location: "London", type: "Full-time" },
  { title: "Quantitative Developer, C++", team: "Infrastructure", location: "New York", type: "Full-time" },
  { title: "Data Engineer, Market Microstructure", team: "Data Platform", location: "London", type: "Full-time" },
  { title: "Digital Assets Researcher", team: "Digital Assets", location: "Singapore", type: "Full-time" },
  { title: "Investor Relations Associate", team: "Investor Relations", location: "London", type: "Full-time" },
];

export const TIMELINE: TimelineItem[] = [
  {
    yr: "2019",
    ttl: "Founding",
    bd: "Vivid Capital Partners LLP established in London by a small founding team with capital from a family-office anchor.",
  },
  {
    yr: "2020",
    ttl: "First external allocation",
    bd: "Systematic Macro book receives its first institutional mandate. Research headcount reaches twelve.",
  },
  {
    yr: "2021",
    ttl: "Commodities launch",
    bd: "Dedicated commodities research desk launched. New York office opens with four initial staff.",
  },
  {
    yr: "2022",
    ttl: "Crossing $1B AUM",
    bd: "Firm assets under management cross one billion USD. Digital assets research begins under a dedicated principal.",
  },
  {
    yr: "2023",
    ttl: "Digital Assets live",
    bd: "Digital Assets strategy begins trading with proprietary capital; opens to external investors mid-year.",
  },
  {
    yr: "2024",
    ttl: "Singapore",
    bd: "Singapore office established to extend Asia execution coverage and research presence.",
  },
  {
    yr: "2025",
    ttl: "Capacity close",
    bd: "Systematic Macro flagship closed to new capital. Alternative Risk Premia vehicle launched for institutional mandates.",
  },
  {
    yr: "2026",
    ttl: "Today",
    bd: "$4.2B AUM across three offices; 112 staff, 68% in research and technology.",
  },
];
