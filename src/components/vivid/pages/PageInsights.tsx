"use client";

import { useSiteNavigate } from "@/components/vivid/navigation-context";
import { useReveal } from "@/components/vivid/useReveal";

export function PageInsights() {
  useReveal();
  const navigate = useSiteNavigate();

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>
            Insights · 03
          </div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Research and
              <br />
              <em>commentary.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: "46ch" }}>
              Quarterly letters, white papers from our research desk, and short market notes.
              We will publish when we have something non-obvious to say.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-asym">
            <h2 className="display-md reveal d1" style={{ margin: 0 }}>
              Research and{" "}
              <em style={{ color: "var(--accent-ink)", fontStyle: "italic" }}>
                commentary, coming soon.
              </em>
            </h2>
            <div className="body reveal d2" style={{ maxWidth: "58ch" }}>
              Our first research notes and quarterly letter are in preparation. To be added
              to the distribution list, please get in touch via the{" "}
              <a
                onClick={() => { navigate("contact"); }}
                style={{ cursor: "pointer", borderBottom: "1px solid var(--ink-3)" }}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") navigate("contact"); }}
              >
                contact page
              </a>.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
