"use client";

import { useReveal } from "@/components/vivid/useReveal";

export function PageFirm() {
  useReveal();

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>
            Firm · 01
          </div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Built for the long <em>compounding.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: "46ch" }}>
              Vivid Capital is an independent systematic macro firm. We design, test and develop quantitative strategies across global liquid markets.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-asym">
            <div className="eyebrow reveal">Principles</div>
            <div className="reveal d1" style={{ display: "grid", gap: 40 }}>
              {(
                [
                  [
                    "Process compounds, prediction decays.",
                    "A disciplined research framework outperforms individual conviction over time. We invest in the process, not the prophet.",
                  ],
                  [
                    "Capacity is a feature, not a bug.",
                    "We close strategies when capacity is reached. Scale exists in service of investors, not fees.",
                  ],
                  [
                    "Research is the product.",
                    "Our organisation is weighted toward research and engineering. Every edge is earned through work done in-house.",
                  ],
                  [
                    "Risk is the first constraint.",
                    "Every position is sized through an explicit risk framework that accounts for regime, liquidity and correlation.",
                  ],
                ] as const
              ).map(([h, b], i) => (
                <div
                  key={h}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: 32,
                    paddingBottom: 32,
                    borderBottom: "1px solid var(--rule-2)",
                  }}
                >
                  <div className="num-prefix mono" style={{ color: "var(--ink-3)", fontSize: 11, letterSpacing: "0.14em" }}>
                    0{i + 1}
                  </div>
                  <div>
                    <h3 className="display-sm" style={{ margin: "0 0 12px" }}>
                      {h}
                    </h3>
                    <p className="body" style={{ margin: 0, maxWidth: "58ch" }}>
                      {b}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
