import type { Metadata } from "next";

import { PageHome } from "@/components/vivid/pages/PageHome";
import { getTickerItems } from "@/lib/quotes";

export const metadata: Metadata = {
  title: "Vivid Capital | Systematic Quantitative Macro Fund — Dubai & London",
  description:
    "Vivid Capital is a systematic quantitative macro fund based in Dubai. We run trend-following and model-driven strategies across FX, equity indices, commodities, digital assets and gold — engineered for persistence, not narrative.",
  keywords: [
    "Vivid Capital",
    "quantitative macro fund Dubai",
    "systematic macro fund",
    "quant hedge fund Dubai",
    "algorithmic trading Dubai",
    "FX systematic fund",
    "trend following fund UAE",
    "quantitative investment firm Dubai",
    "macro hedge fund London",
    "systematic trading firm",
    "digital assets fund",
    "gold systematic strategy",
  ],
  alternates: { canonical: "https://www.vividcapital.co.uk" },
  openGraph: {
    title: "Vivid Capital | Systematic Quantitative Macro Fund — Dubai & London",
    description:
      "Systematic quantitative macro fund running trend-following strategies across FX, equity indices, commodities, digital assets and gold.",
    url: "https://www.vividcapital.co.uk",
  },
};

export const revalidate = 60;

export default async function HomePage() {
  const tickerItems = await getTickerItems();
  return <PageHome tickerItems={tickerItems} />;
}
