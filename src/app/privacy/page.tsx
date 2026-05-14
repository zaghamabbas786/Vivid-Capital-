import type { Metadata } from "next";

import { PagePrivacy } from "@/components/vivid/pages/PagePrivacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return <PagePrivacy />;
}
