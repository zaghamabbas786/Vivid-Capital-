import type { Metadata } from "next";

import { PageCareers } from "@/components/vivid/pages/PageCareers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join Vivid Capital — a quantitative macro firm that hires for curiosity over credential, across research, trading and technology.",
  alternates: { canonical: "https://www.vividcapital.co.uk/careers" },
  openGraph: {
    title: "Careers · Vivid Capital",
    description: "Join Vivid Capital — a quantitative macro firm that hires for curiosity over credential, across research, trading and technology.",
    url: "https://www.vividcapital.co.uk/careers",
  },
};

export default function CareersPage() {
  return <PageCareers />;
}
