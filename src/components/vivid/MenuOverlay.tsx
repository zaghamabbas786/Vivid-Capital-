"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLockup } from "@/components/vivid/primitives";
import { NAV_HREF, segmentFromPathname, type NavSegment } from "@/lib/routes";

const MENU_ITEMS: readonly { segment: NavSegment; label: string }[] = [
  { segment: "home", label: "Home" },
  { segment: "firm", label: "Firm" },
  { segment: "strategy", label: "Strategy" },
  { segment: "insights", label: "Insights" },
  { segment: "careers", label: "Careers" },
  { segment: "contact", label: "Contact" },
];

interface MenuOverlayProps {
  open: boolean;
  onClose: () => void;
}

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const pathname = usePathname();
  const current = segmentFromPathname(pathname);

  return (
    <div className={`menu-overlay ${open ? "open" : ""}`} aria-hidden={!open}>
      <div className="menu-overlay-head">
        <span className="brand">
          <BrandLockup size={20} />
        </span>
        <button type="button" className="menu-btn" onClick={onClose} style={{ display: "inline-flex" }}>
          Close <span>×</span>
        </button>
      </div>
      <div className="menu-overlay-body">
        <ul className="menu-list">
          {MENU_ITEMS.map((item, i) => (
            <li key={item.segment}>
              <Link
                href={NAV_HREF[item.segment]}
                onClick={onClose}
                style={{
                  cursor: "pointer",
                  color: current === item.segment ? "var(--accent-ink)" : undefined,
                }}
              >
                <span>{item.label}</span>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <div className="menu-meta">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                Dubai
              </div>
              <div className="body-sm">
                Business Bay
                <br />
                Dubai, United Arab Emirates
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                London
              </div>
              <div className="body-sm">
                One Canada Square
                <br />
                Canary Wharf
                <br />
                London
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                Investor Relations
              </div>
              <div className="body-sm">ir@vividcapitalportal.com</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                Careers
              </div>
              <div className="body-sm">careers@vividcapitalportal.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-overlay-foot">
        <span>© 2026 Vivid Capital Portal LLC</span>
        <span>Based in Dubai, United Arab Emirates</span>
      </div>
    </div>
  );
}
