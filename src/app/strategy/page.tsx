import type { Metadata } from "next";

import { PageStrategy } from "@/components/vivid/pages/PageStrategy";

export const metadata: Metadata = {
  title: "Strategies",
  description:
    "Four systematic quantitative strategies — Systematic Macro, FX Systematic, Digital Assets, and Systematic Gold — each independently researched and risk-budgeted, sharing one disciplined framework.",
  keywords: [
    "systematic macro strategy",
    "FX systematic trading",
    "quantitative FX fund",
    "G10 FX trend following",
    "digital assets systematic fund",
    "Bitcoin Ethereum algorithmic trading",
    "systematic gold trading strategy",
    "gold momentum fund",
    "quant trading strategies",
    "trend following strategies",
    "volatility-targeted fund",
    "risk-budgeted portfolio",
    "multi-strategy quant fund",
  ],
  alternates: { canonical: "https://www.vividcapital.co.uk/strategy" },
  openGraph: {
    title: "Strategies · Vivid Capital",
    description:
      "Four systematic strategies — Macro, FX, Digital Assets, Gold — independently researched and risk-budgeted, sharing one disciplined quantitative framework.",
    url: "https://www.vividcapital.co.uk/strategy",
  },
};

export default function StrategyPage() {
  return <PageStrategy />;
}
