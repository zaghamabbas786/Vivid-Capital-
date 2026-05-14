"use client";

import { useSiteNavigate } from "@/components/vivid/navigation-context";
import { useReveal } from "@/components/vivid/useReveal";

function LegalSection({ n, h, children }: { n: number; h: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, paddingBlock: 28, borderTop: "1px solid var(--rule)" }}>
      <div className="eyebrow" style={{ color: "var(--ink-3)", paddingTop: 6 }}>
        {String(n).padStart(2, "0")}
      </div>
      <div>
        <h3 className="display-sm" style={{ margin: "0 0 14px" }}>{h}</h3>
        <div className="body" style={{ maxWidth: "64ch" }}>{children}</div>
      </div>
    </div>
  );
}

export function PagePrivacy() {
  useReveal();
  const navigate = useSiteNavigate();

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>Legal · Privacy</div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Privacy <em>policy.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: "46ch" }}>
              This policy explains how Vivid Capital Portal LLC collects, uses and protects
              personal information you provide through this website.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-asym">
            <div className="eyebrow reveal">Policy</div>
            <div className="reveal d1">
              <LegalSection n={1} h="Who we are">
                <p>Vivid Capital Portal LLC ("Vivid Capital") is the data controller for personal information collected through this website. We are registered in Dubai, United Arab Emirates.</p>
              </LegalSection>
              <LegalSection n={2} h="Information we collect">
                <p>We collect information that you provide directly — for example when you submit the contact form (name, organisation, email, message) or apply for a role (your application materials). We also collect limited technical information automatically when you visit the site, such as IP address, browser type, and pages viewed, for security and analytics purposes.</p>
              </LegalSection>
              <LegalSection n={3} h="How we use information">
                <p>We use personal information to respond to your enquiries, process applications, operate and improve the website, comply with legal and regulatory obligations, and protect the security of our systems. We do not sell your information to third parties.</p>
              </LegalSection>
              <LegalSection n={4} h="Legal basis">
                <p>Where applicable, we process personal information on the basis of your consent, our legitimate interests in operating our business and communicating with prospective and existing counterparties, the performance of a contract, or compliance with legal obligations.</p>
              </LegalSection>
              <LegalSection n={5} h="Sharing">
                <p>We may share personal information with service providers who help us operate the website and our business — for example hosting, email and analytics providers — and with regulators, courts or law enforcement where required by law. All service providers are required to handle data consistent with this policy.</p>
              </LegalSection>
              <LegalSection n={6} h="International transfers">
                <p>Personal information may be transferred to, and processed in, countries other than the one in which you are resident. Where we transfer personal information outside the UAE, we take steps to ensure appropriate safeguards are in place.</p>
              </LegalSection>
              <LegalSection n={7} h="Retention">
                <p>We retain personal information only for as long as necessary for the purposes set out in this policy, or as required by applicable law and regulatory obligations.</p>
              </LegalSection>
              <LegalSection n={8} h="Security">
                <p>We maintain technical and organisational measures designed to protect personal information against unauthorised access, alteration, disclosure or destruction. No internet transmission is fully secure, however, and we cannot guarantee absolute security.</p>
              </LegalSection>
              <LegalSection n={9} h="Your rights">
                <p>Subject to applicable law, you may have the right to access, correct, delete or restrict the processing of your personal information, and to object to certain processing. To exercise these rights, please contact us via the{" "}
                  <a onClick={() => { navigate("contact"); }} style={{ cursor: "pointer", borderBottom: "1px solid var(--ink-3)" }}>contact page</a>.
                </p>
              </LegalSection>
              <LegalSection n={10} h="Cookies">
                <p>This website uses a minimal set of cookies and similar technologies necessary for site operation and basic analytics. By using the site you consent to such use; you may control cookies through your browser settings.</p>
              </LegalSection>
              <LegalSection n={11} h="Changes">
                <p>We may update this policy from time to time. The current version will always be available on this page.</p>
              </LegalSection>
              <LegalSection n={12} h="Contact">
                <p>For questions about this policy, or to make a privacy-related request, please use the{" "}
                  <a onClick={() => { navigate("contact"); }} style={{ cursor: "pointer", borderBottom: "1px solid var(--ink-3)" }}>contact page</a>.
                </p>
              </LegalSection>
              <div style={{ paddingTop: 24, color: "var(--ink-3)" }} className="body-sm">
                Last updated: May 2026.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
