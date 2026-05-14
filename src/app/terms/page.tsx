import type { Metadata } from "next";

import { PageTerms } from "@/components/vivid/pages/PageTerms";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return <PageTerms />;
}
