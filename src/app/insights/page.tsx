import type { Metadata } from "next";

import { PageInsights } from "@/components/vivid/pages/PageInsights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Research notes and quarterly letters from the Vivid Capital investment team on systematic macro, FX, digital assets and gold.",
  alternates: { canonical: "https://www.vividcapital.co.uk/insights" },
  openGraph: {
    title: "Insights · Vivid Capital",
    description: "Research notes and quarterly letters from the Vivid Capital investment team on systematic macro, FX, digital assets and gold.",
    url: "https://www.vividcapital.co.uk/insights",
  },
};

export default function InsightsPage() {
  return <PageInsights />;
}
