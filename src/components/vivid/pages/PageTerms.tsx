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

export function PageTerms() {
  useReveal();
  const navigate = useSiteNavigate();

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>Legal · Terms</div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Terms of <em>use.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: "46ch" }}>
              Please read these terms carefully before using this website. By accessing or
              using the site, you agree to be bound by them.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-asym">
            <div className="eyebrow reveal">Terms</div>
            <div className="reveal d1">
              <LegalSection n={1} h="Acceptance">
                <p>This website is operated by Vivid Capital Portal LLC ("Vivid Capital", "we", "our"). By accessing this website you confirm that you have read, understood and agree to these terms of use. If you do not agree, please do not use the site.</p>
              </LegalSection>
              <LegalSection n={2} h="Audience">
                <p>The information on this website is directed at professional and institutional audiences only. It is not directed at, and should not be relied upon by, retail clients. Some content may not be appropriate or available in all jurisdictions.</p>
              </LegalSection>
              <LegalSection n={3} h="No offer or solicitation">
                <p>Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy, any security, financial instrument, product or service. Nothing here constitutes investment, legal, tax or other advice. You should obtain independent professional advice before taking any decision.</p>
              </LegalSection>
              <LegalSection n={4} h="Strategy provider role">
                <p>Vivid Capital acts solely as a strategy provider. We do not custody client assets, execute client orders, or provide personalised investment advice. Any strategy described on this website is a research and signal output; deployment, execution and custody remain the responsibility of the user or their service providers.</p>
              </LegalSection>
              <LegalSection n={5} h="Risk warning">
                <p>Trading and investing in financial instruments — including FX, commodities, equity indices and digital assets — carries a substantial risk of loss and is not suitable for every investor. Past performance, simulated results and research signals are not indicative of future returns. You may lose some or all of the capital committed to any strategy.</p>
              </LegalSection>
              <LegalSection n={6} h="No warranties">
                <p>Information on this website is provided "as is" without warranty of any kind, express or implied. While we take reasonable care to ensure information is accurate at the time of publication, we make no representation that it is complete, current or free from error. The website may be unavailable from time to time without notice.</p>
              </LegalSection>
              <LegalSection n={7} h="Limitation of liability">
                <p>To the maximum extent permitted by law, Vivid Capital and its officers, employees and agents shall not be liable for any direct, indirect, incidental, special or consequential loss arising out of or in connection with the use of, or inability to use, this website or any information contained on it.</p>
              </LegalSection>
              <LegalSection n={8} h="Intellectual property">
                <p>All content on this website — text, graphics, logos, design, code — is the property of Vivid Capital Portal LLC or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, modify, distribute or republish any part of this website without prior written consent.</p>
              </LegalSection>
              <LegalSection n={9} h="Third-party links">
                <p>This website may contain links to third-party websites. We do not control or endorse such sites and accept no responsibility for their content, accuracy or any consequence arising from your use of them.</p>
              </LegalSection>
              <LegalSection n={10} h="Governing law">
                <p>These terms are governed by the laws of the United Arab Emirates. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Dubai.</p>
              </LegalSection>
              <LegalSection n={11} h="Changes">
                <p>We may update these terms from time to time. The current version will always be available on this page; continued use of the website after changes constitutes acceptance of the revised terms.</p>
              </LegalSection>
              <LegalSection n={12} h="Contact">
                <p>For questions about these terms, please use the{" "}
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
