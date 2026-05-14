import Link from "next/link";

import { BrandLockup } from "@/components/vivid/primitives";
import { NAV_HREF } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-mono" style={{ marginBottom: 24 }}>
          ↳ Talk to us
        </div>
        <h3 className="footer-big">
          Disciplined capital,
          <br />
          systematic by design.
        </h3>
        <div className="footer-grid">
          <div className="footer-col">
            <div style={{ marginBottom: 20 }}>
              <BrandLockup size={22} onDark />
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.7, maxWidth: "32ch", margin: 0 }}>
              A systematic macro investment firm deploying quantitative strategies across global liquid markets.
            </p>
          </div>
          <div className="footer-col">
            <h5>Offices</h5>
            <ul>
              <li>
                <span className="footer-placeholder">Dubai</span>
              </li>
              <li>
                <span className="footer-placeholder">London</span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <ul>
              <li>
                <Link href={NAV_HREF.contact}>Contact</Link>
              </li>
              <li>
                <span className="footer-placeholder">Client Portal</span>
              </li>
              <li>
                <span className="footer-placeholder">LinkedIn</span>
              </li>
              <li>
                <span className="footer-placeholder">Press</span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li>
                <Link href={NAV_HREF.terms}>Terms of use</Link>
              </li>
              <li>
                <Link href={NAV_HREF.privacy}>Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-tag">
          <div className="footer-tag-row">
            <span>© 2026 Vivid Capital Portal LLC — All rights reserved</span>
            <span style={{ display: "flex", gap: 18 }}>
              <Link href={NAV_HREF.terms}>Terms</Link>
              <Link href={NAV_HREF.privacy}>Privacy</Link>
              <span>Dubai, United Arab Emirates</span>
            </span>
          </div>
          <span className="disc">
            Vivid Capital Portal LLC is registered in Dubai, United Arab Emirates. Vivid Capital acts solely as a strategy provider and does not custody client assets, execute client orders, or provide personalised investment advice. Information on this website is for professional and institutional audiences only and does not constitute an offer to sell or a solicitation to buy any security, product or service. Trading and investing in financial instruments carries a substantial risk of loss and is not suitable for every investor; past performance, simulated results and research signals are not indicative of future returns, and you may lose some or all of the capital committed to any strategy. Before engaging, you should read all relevant documentation carefully and seek independent financial, legal, tax and regulatory advice.
          </span>
        </div>
      </div>
    </footer>
  );
}
