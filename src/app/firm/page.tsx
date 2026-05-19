import type { Metadata } from "next";

import { PageFirm } from "@/components/vivid/pages/PageFirm";

export const metadata: Metadata = {
  title: "Firm",
  description: "Vivid Capital is a research-first quantitative firm. Independent, capacity-constrained and built entirely in-house across data, backtest and execution.",
  alternates: { canonical: "https://www.vividcapital.co.uk/firm" },
  openGraph: {
    title: "Firm · Vivid Capital",
    description: "Vivid Capital is a research-first quantitative firm. Independent, capacity-constrained and built entirely in-house across data, backtest and execution.",
    url: "https://www.vividcapital.co.uk/firm",
  },
};

export default function FirmPage() {
  return <PageFirm />;
}
