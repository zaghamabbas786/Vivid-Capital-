import type { Metadata } from "next";

import { PageStrategy } from "@/components/vivid/pages/PageStrategy";

export const metadata: Metadata = {
  title: "Strategy",
  description: "Four independently researched strategies — Systematic Macro, FX Systematic, Digital Assets, and Systematic Gold — sharing one disciplined risk framework.",
  alternates: { canonical: "https://www.vividcapital.co.uk/strategy" },
  openGraph: {
    title: "Strategy · Vivid Capital",
    description: "Four independently researched strategies — Systematic Macro, FX Systematic, Digital Assets, and Systematic Gold — sharing one disciplined risk framework.",
    url: "https://www.vividcapital.co.uk/strategy",
  },
};

export default function StrategyPage() {
  return <PageStrategy />;
}
