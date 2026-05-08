import type { Metadata } from "next";

import { PageHome } from "@/components/vivid/pages/PageHome";
import { getTickerItems } from "@/lib/quotes";

export const metadata: Metadata = {
  title: "Home",
};

export const revalidate = 60;

export default async function HomePage() {
  const tickerItems = await getTickerItems();
  return <PageHome tickerItems={tickerItems} />;
}
