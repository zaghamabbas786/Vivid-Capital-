import type { Metadata } from "next";

import { PageCareers } from "@/components/vivid/pages/PageCareers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at Vivid Capital — a systematic quantitative macro fund in Dubai and London. We hire researchers, quant developers and traders. Curiosity over credential.",
  keywords: [
    "quant finance jobs Dubai",
    "quantitative researcher jobs",
    "systematic trading jobs",
    "hedge fund careers Dubai",
    "quant developer jobs UAE",
    "algorithmic trading jobs London",
    "quant trader jobs",
    "finance jobs Dubai",
    "quantitative analyst jobs",
    "data scientist finance jobs",
  ],
  alternates: { canonical: "https://www.vividcapital.co.uk/careers" },
  openGraph: {
    title: "Careers · Vivid Capital",
    description:
      "Join Vivid Capital in Dubai or London. Quant research, trading and technology roles at a systematic macro fund that hires for curiosity over credential.",
    url: "https://www.vividcapital.co.uk/careers",
  },
};

export default function CareersPage() {
  return <PageCareers />;
}
