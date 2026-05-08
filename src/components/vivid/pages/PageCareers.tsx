"use client";

import { useReveal } from "@/components/vivid/useReveal";

export function PageCareers() {
  useReveal();

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>
            Careers · 04
          </div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Hire for <em>curiosity,</em>
              <br />
              train for <em>rigour.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: "46ch" }}>
              We recruit selectively across research, technology and operations. Most of our hiring happens through introduction.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-asym">
            <div className="eyebrow reveal">Enquiries</div>
            <div className="reveal d1" style={{ display: "grid", gap: 32 }}>
              <p className="body" style={{ margin: 0, maxWidth: "58ch" }}>
                We are not currently publishing an open-roles list. If your background is a strong match for the work we do, we would be glad to hear from you.
              </p>
              <div style={{ paddingTop: 32, borderTop: "1px solid var(--rule)" }}>
                <a href="mailto:careers@vividcapitalportal.com?subject=Career%20enquiry" className="btn primary" style={{ display: "inline-flex" }}>
                  Apply now <span className="arr" style={{ marginLeft: 10 }}>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
