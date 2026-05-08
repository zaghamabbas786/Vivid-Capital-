import type { Metadata } from "next";

import { PageInsights } from "@/components/vivid/pages/PageInsights";

export const metadata: Metadata = {
  title: "Insights",
};

export default function InsightsPage() {
  return <PageInsights />;
}
