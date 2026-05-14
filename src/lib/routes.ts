export type NavSegment = "home" | "firm" | "strategy" | "insights" | "careers" | "contact" | "terms" | "privacy";

export const NAV_HREF: Record<NavSegment, string> = {
  home: "/",
  firm: "/firm",
  strategy: "/strategy",
  insights: "/insights",
  careers: "/careers",
  contact: "/contact",
  terms: "/terms",
  privacy: "/privacy",
} as const;

export const PRIMARY_NAV: readonly { segment: Exclude<NavSegment, "home">; label: string }[] = [
  { segment: "firm", label: "Firm" },
  { segment: "strategy", label: "Strategy" },
  { segment: "insights", label: "Insights" },
  { segment: "careers", label: "Careers" },
  { segment: "contact", label: "Contact" },
] as const;

export function segmentFromPathname(pathname: string): NavSegment {
  if (pathname === "/" || pathname === "") {
    return "home";
  }
  const head = pathname.replace(/^\//, "").split("/")[0] ?? "";
  if (head === "firm" || head === "strategy" || head === "insights" || head === "careers" || head === "contact" || head === "terms" || head === "privacy") {
    return head;
  }
  return "home";
}
