import type { Metadata } from "next";

import { PageHome } from "@/components/vivid/pages/PageHome";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return <PageHome />;
}
