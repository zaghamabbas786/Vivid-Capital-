import type { Metadata } from "next";

import { PageContact } from "@/components/vivid/pages/PageContact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <PageContact />;
}
