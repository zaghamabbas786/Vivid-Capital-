import type { Metadata } from "next";

import { PageInsights } from "@/components/vivid/pages/PageInsights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Quantitative macro research, market commentary and quarterly letters from the Vivid Capital investment team covering FX, commodities, equity indices and digital assets.",
  keywords: [
    "quantitative macro research",
    "systematic trading research",
    "FX market research",
    "macro market commentary",
    "quant fund research notes",
    "digital assets research",
    "gold market outlook",
    "systematic investing insights",
    "hedge fund quarterly letter",
    "algorithmic trading analysis",
  ],
  alternates: { canonical: "https://www.vividcapital.co.uk/insights" },
  openGraph: {
    title: "Insights · Vivid Capital",
    description:
      "Quantitative macro research and quarterly letters from the Vivid Capital team covering FX, commodities, equity indices and digital assets.",
    url: "https://www.vividcapital.co.uk/insights",
  },
};

export default function InsightsPage() {
  return <PageInsights />;
}
