/* ----- Legal pages: Terms & Privacy ----- */

function LegalSection({ n, h, children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, paddingBlock: 28, borderTop: '1px solid var(--rule)' }}>
      <div className="num-prefix mono" style={{ color: 'var(--ink-3)', fontSize: 11, letterSpacing: '0.14em' }}>
        {String(n).padStart(2, '0')}
      </div>
      <div>
        <h3 className="display-sm" style={{ margin: '0 0 14px' }}>{h}</h3>
        <div className="body" style={{ maxWidth: '64ch' }}>{children}</div>
      </div>
    </div>
  );
}

function PageTerms({ onNavigate }) {
  useReveal();
  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>Legal · Terms</div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Terms of <em>use.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: '46ch' }}>
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
                <p>This website is operated by Vivid Capital Portal LLC (“Vivid Capital”, “we”, “our”). By accessing this website you confirm that you have read, understood and agree to these terms of use. If you do not agree, please do not use the site.</p>
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
                <p>Information on this website is provided “as is” without warranty of any kind, express or implied. While we take reasonable care to ensure information is accurate at the time of publication, we make no representation that it is complete, current or free from error. The website may be unavailable from time to time without notice.</p>
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
                <p>For questions about these terms, please use the <a onClick={() => onNavigate('contact')} style={{ cursor: 'pointer', borderBottom: '1px solid var(--ink-3)' }}>contact page</a>.</p>
              </LegalSection>
              <div style={{ paddingTop: 24, color: 'var(--ink-3)' }} className="body-sm">
                Last updated: May 2026.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PagePrivacy({ onNavigate }) {
  useReveal();
  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>Legal · Privacy</div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Privacy <em>policy.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: '46ch' }}>
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
                <p>Vivid Capital Portal LLC (“Vivid Capital”) is the data controller for personal information collected through this website. We are registered in Dubai, United Arab Emirates.</p>
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
                <p>Subject to applicable law, you may have the right to access, correct, delete or restrict the processing of your personal information, and to object to certain processing. To exercise these rights, please contact us via the <a onClick={() => onNavigate('contact')} style={{ cursor: 'pointer', borderBottom: '1px solid var(--ink-3)' }}>contact page</a>.</p>
              </LegalSection>
              <LegalSection n={10} h="Cookies">
                <p>This website uses a minimal set of cookies and similar technologies necessary for site operation and basic analytics. By using the site you consent to such use; you may control cookies through your browser settings.</p>
              </LegalSection>
              <LegalSection n={11} h="Changes">
                <p>We may update this policy from time to time. The current version will always be available on this page.</p>
              </LegalSection>
              <LegalSection n={12} h="Contact">
                <p>For questions about this policy, or to make a privacy-related request, please use the <a onClick={() => onNavigate('contact')} style={{ cursor: 'pointer', borderBottom: '1px solid var(--ink-3)' }}>contact page</a>.</p>
              </LegalSection>
              <div style={{ paddingTop: 24, color: 'var(--ink-3)' }} className="body-sm">
                Last updated: May 2026.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PageTerms, PagePrivacy });
