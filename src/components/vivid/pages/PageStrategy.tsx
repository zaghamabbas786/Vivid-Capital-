"use client";

import { useReveal } from "@/components/vivid/useReveal";

const STRATEGIES = [
  {
    code: "VC-01",
    title: "Systematic Macro",
    desc: "Trend-following and regime-adaptive models across FX, equity indices, and commodities, deployed through a volatility-targeted risk framework that adjusts exposure based on prevailing market conditions.",
    markets: ["FX", "Equity Idx", "Commodities", "Trend"],
  },
  {
    code: "VC-02",
    title: "FX Systematic",
    desc: "A dedicated currency programme across major G10 pairs, combining trend-following and momentum strategies with dynamic position sizing and volatility-adjusted risk controls.",
    markets: ["G10 FX", "Trend", "Momentum", "Vol-Adjusted"],
  },
  {
    code: "VC-03",
    title: "Digital Assets",
    desc: "Directional momentum and breakout models across BTC, ETH, and select liquid digital assets, executed algorithmically within a disciplined risk management framework.",
    markets: ["BTC", "ETH", "Momentum", "Breakout"],
  },
  {
    code: "VC-04",
    title: "Systematic Gold",
    desc: "A dedicated systematic programme in gold, combining medium-term momentum and breakout strategies with volatility-responsive position sizing and defined drawdown controls.",
    markets: ["Gold", "Momentum", "Breakout", "Vol-Targeted"],
  },
] as const;

export function PageStrategy() {
  useReveal();

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>
            Strategy · 02
          </div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Four <em>books.</em>
              <br />
              One <em>framework.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: "46ch" }}>
              Each strategy is independently researched and risk-budgeted, but shares infrastructure, execution, and the same disciplined research standard.
            </div>
          </div>
        </div>
      </section>

      {STRATEGIES.map((s) => (
        <section key={s.code} className="section">
          <div className="container">
            <div className="grid-asym">
              <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="eyebrow">{s.code}</div>
                <h2 className="display-md" style={{ margin: 0 }}>
                  {s.title}
                </h2>
              </div>
              <div className="reveal d1">
                <p className="body" style={{ maxWidth: "58ch", marginTop: 0 }}>
                  {s.desc}
                </p>
                <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.markets.map((m) => (
                    <span
                      key={m}
                      className="chip"
                      style={{
                        padding: "4px 10px",
                        border: "1px solid var(--rule)",
                        fontFamily: "var(--mono)",
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--ink-2)",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
