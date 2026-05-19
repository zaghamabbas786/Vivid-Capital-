import type { Metadata } from "next";

import { PageContact } from "@/components/vivid/pages/PageContact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Vivid Capital — systematic quantitative macro fund headquartered in Dubai with an office in London. Enquiries from qualified and institutional investors welcome.",
  keywords: [
    "contact Vivid Capital",
    "Vivid Capital Dubai office",
    "Vivid Capital London office",
    "quant fund investor enquiry",
    "hedge fund contact Dubai",
    "institutional investor contact",
    "quantitative fund enquiry",
    "invest with Vivid Capital",
  ],
  alternates: { canonical: "https://www.vividcapital.co.uk/contact" },
  openGraph: {
    title: "Contact · Vivid Capital",
    description:
      "Get in touch with Vivid Capital. Headquartered in Dubai with an office in London. Enquiries from qualified and institutional investors welcome.",
    url: "https://www.vividcapital.co.uk/contact",
  },
};

export default function ContactPage() {
  return <PageContact />;
}
