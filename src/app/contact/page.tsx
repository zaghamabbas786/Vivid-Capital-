import type { Metadata } from "next";

import { PageContact } from "@/components/vivid/pages/PageContact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vivid Capital. Headquartered in Dubai with an office in London. Enquiries from qualified investors welcome.",
  alternates: { canonical: "https://www.vividcapital.co.uk/contact" },
  openGraph: {
    title: "Contact · Vivid Capital",
    description: "Get in touch with Vivid Capital. Headquartered in Dubai with an office in London. Enquiries from qualified investors welcome.",
    url: "https://www.vividcapital.co.uk/contact",
  },
};

export default function ContactPage() {
  return <PageContact />;
}
