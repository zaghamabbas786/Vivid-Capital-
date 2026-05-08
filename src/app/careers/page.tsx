import type { Metadata } from "next";

import { PageCareers } from "@/components/vivid/pages/PageCareers";

export const metadata: Metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return <PageCareers />;
}
