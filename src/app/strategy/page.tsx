import type { Metadata } from "next";

import { PageStrategy } from "@/components/vivid/pages/PageStrategy";

export const metadata: Metadata = {
  title: "Strategy",
};

export default function StrategyPage() {
  return <PageStrategy />;
}
