"use client";

import { useReveal } from "@/components/vivid/useReveal";

const STRATEGIES = [
  {
    code: "VC-01",
    title: "Systematic Macro",
    desc: "Our flagship multi-strategy vehicle. Trend, carry and value signals across rates, FX and equity indices, combined through a volatility-targeted risk allocator that explicitly respects regime change.",
    markets: ["G10 Rates", "FX Majors + EM", "Equity Indices", "Cross-Asset Carry"],
  },
  {
    code: "VC-02",
    title: "FX Systematic",
    desc: "A dedicated currency programme across G10 and liquid emerging markets, combining trend-following and carry signals within a unified risk framework. Implementation emphasises execution quality, funding-cost awareness and cross-pair correlation control.",
    markets: ["G10 Currencies", "EM Currencies", "Trend", "Carry"],
  },
  {
    code: "VC-03",
    title: "Digital Assets",
    desc: "Market-neutral basis trades and selective directional models across liquid digital asset venues. All capital custodied through institutional infrastructure with multi-venue execution routing.",
    markets: ["BTC / ETH Spot", "Perpetual Basis", "Funding Arbitrage", "Liquid Alt Beta"],
  },
  {
    code: "VC-04",
    title: "Systematic Gold",
    desc: "A dedicated systematic programme in gold, combining medium-term momentum signals with disciplined breakout strategies across the futures curve. Designed as a liquid, risk-managed expression of trend and regime dynamics in the precious metals complex.",
    markets: ["Gold Futures", "Spot XAU", "Term Structure", "Volatility Overlay"],
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
