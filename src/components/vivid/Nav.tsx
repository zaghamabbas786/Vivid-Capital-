"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLockup } from "@/components/vivid/primitives";
import { NAV_HREF, PRIMARY_NAV, segmentFromPathname } from "@/lib/routes";

interface NavProps {
  onMenu: () => void;
}

export function Nav({ onMenu }: NavProps) {
  const pathname = usePathname();
  const current = segmentFromPathname(pathname);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href={NAV_HREF.home} className="brand">
          <BrandLockup size={22} compact />
        </Link>
        <div className="nav-links">
          {PRIMARY_NAV.map(({ segment, label }) => (
            <Link
              key={segment}
              href={NAV_HREF[segment]}
              className={`nav-link ${current === segment ? "active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Link href={NAV_HREF.contact} className="nav-cta">
            Client Login
            <span className="arr">→</span>
          </Link>
          <button type="button" className="menu-btn" onClick={onMenu}>
            Menu <span>+</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
