import type { Metadata } from "next";

import { PageFirm } from "@/components/vivid/pages/PageFirm";

export const metadata: Metadata = {
  title: "Firm",
};

export default function FirmPage() {
  return <PageFirm />;
}
