import type { Metadata } from "next";

import { PageFirm } from "@/components/vivid/pages/PageFirm";

export const metadata: Metadata = {
  title: "About the Firm",
  description:
    "Vivid Capital is a research-first quantitative trading firm headquartered in Dubai with an office in London. Independent, capacity-constrained and built entirely in-house — data, backtest and execution.",
  keywords: [
    "Vivid Capital about",
    "quantitative trading firm Dubai",
    "quant research firm UAE",
    "systematic trading company Dubai",
    "algorithmic investment firm London",
    "independent hedge fund Dubai",
    "quantitative asset manager",
    "research-driven trading firm",
  ],
  alternates: { canonical: "https://www.vividcapital.co.uk/firm" },
  openGraph: {
    title: "About the Firm · Vivid Capital",
    description:
      "Research-first quantitative trading firm headquartered in Dubai with an office in London. Independent, capacity-constrained, built entirely in-house.",
    url: "https://www.vividcapital.co.uk/firm",
  },
};

export default function FirmPage() {
  return <PageFirm />;
}
