"use client";

import { INSIGHTS } from "@/lib/site-data";

import { useSiteNavigate } from "@/components/vivid/navigation-context";
import { Ticker } from "@/components/vivid/primitives";
import { useReveal } from "@/components/vivid/useReveal";

export function PageHome() {
  useReveal();
  const navigate = useSiteNavigate();

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-head">
            <div>
              <h1 className="hero-title reveal d1" style={{ marginTop: 32 }}>
                Systematic
                <br />
                <em>macro</em>
                <br />
                for the modern
                <br />
                liquid universe.
              </h1>
            </div>
            <div className="hero-meta reveal d2">
              <div>
                <div className="eyebrow" style={{ marginBottom: 10 }}>
                  Headquarters
                </div>
                <div className="num" style={{ fontSize: 22 }}>
                  Dubai, UAE
                </div>
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 10 }}>
                  Office
                </div>
                <div className="num" style={{ fontSize: 22 }}>
                  Dubai · London
                </div>
              </div>
            </div>
          </div>
          <div className="hero-rail">
            <div className="lead reveal d3" style={{ maxWidth: "46ch" }}>
              We design quantitative strategies across global FX, commodities, equity indices, and digital asset markets —
              engineered for persistence, not narrative.
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="section tight nb">
        <div className="container">
          <div className="grid-asym">
            <div className="reveal" style={{ display: "flex", alignItems: "center" }}>
              <div className="eyebrow">Composite, since inception</div>
            </div>
            <div className="reveal d1">
              <div className="display-sm" style={{ letterSpacing: "-0.015em" }}>
                Compounded, uncorrelated,
                <br />
                <span style={{ color: "var(--ink-3)" }}>disciplined across regimes.</span>
              </div>
              <p className="body" style={{ maxWidth: "56ch", marginTop: 24 }}>
                Our flagship composite has delivered consistent risk-adjusted returns with low correlation to traditional benchmarks.
                Detailed performance available to qualified investors on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label reveal">
            <span className="num-prefix">01 ——</span>
            <span className="lbl">Approach</span>
          </div>
          <div className="grid-asym">
            <h2 className="display-md reveal d1" style={{ margin: 0 }}>
              Signal over{" "}
              <em style={{ color: "var(--accent-ink)", fontStyle: "italic" }}>
                sentiment.
              </em>
            </h2>
            <div className="body reveal d2" style={{ maxWidth: "58ch" }}>
              <p>
                Vivid Capital is built on a simple premise: durable alpha lives in the repeatable, not the prophetic. Our research process treats every idea as an engineering problem — hypothesis, data, test, validation, deployment.
              </p>
              <p>
                Our strategies run diversified, model-driven portfolios across a broad universe of liquid instruments. Every position the system takes is sized by a risk framework that explicitly accounts for regime, liquidity, and correlation drift. No narratives. No single-decision concentration. No thematic gambling.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label reveal">
            <span className="num-prefix">02 ——</span>
            <span className="lbl">Strategies</span>
          </div>
          <div className="grid-asym" style={{ marginBottom: 56 }}>
            <h2 className="display-md reveal d1" style={{ margin: 0 }}>
              Four strategies.{" "}
              <em style={{ color: "var(--accent-ink)", fontStyle: "italic" }}>
                One framework.
              </em>
            </h2>
            <div className="body reveal d2" style={{ maxWidth: "58ch" }}>
              Each strategy is independently researched, risk-budgeted and deployed through a shared infrastructure with complementary characteristics.
            </div>
          </div>
          <div className="strat-list">
            {[
              {
                idx: "VC-01",
                title: "Systematic Macro",
                desc: "Trend, carry and value signals across global rates, FX and equity indices, blended through a volatility-targeted risk allocator.",
                markets: ["Rates", "FX", "Equity idx", "Carry"],
              },
              {
                idx: "VC-02",
                title: "FX Systematic",
                desc: "A dedicated currency programme across G10 and liquid emerging markets, combining trend-following and carry signals within a unified risk framework.",
                markets: ["G10 FX", "EM FX", "Trend", "Carry"],
              },
              {
                idx: "VC-03",
                title: "Digital Assets",
                desc: "Market-neutral and directional models on liquid crypto venues, benchmarked against a bespoke execution and custody framework.",
                markets: ["BTC", "ETH", "Perp basis", "Alt beta"],
              },
              {
                idx: "VC-04",
                title: "Systematic Gold",
                desc: "A dedicated systematic programme in gold, combining medium-term momentum signals with disciplined breakout strategies across the futures curve.",
                markets: ["Gold", "Futures", "Momentum", "Breakout"],
              },
            ].map((s, i) => (
              <button
                type="button"
                key={s.idx}
                className="strat-row reveal text-left"
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => navigate("strategy")}
              >
                <div className="idx">{s.idx}</div>
                <div>
                  <h3>{s.title}</h3>
                </div>
                <div className="desc">{s.desc}</div>
                <div className="markets">
                  {s.markets.map((m) => (
                    <span key={m} className="chip">
                      {m}
                    </span>
                  ))}
                </div>
                <div className="arrow">
                  Detail <span className="arr">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label reveal">
            <span className="num-prefix">03 ——</span>
            <span className="lbl">Firm</span>
          </div>
          <div className="grid-2">
            <div className="reveal">
              <div className="split-skyline" style={{ aspectRatio: "4/5" }}>
                <SkylineSplitArt />
              </div>
            </div>
            <div className="reveal d1" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <h2 className="display-md" style={{ margin: 0 }}>
                A research firm that{" "}
                <em style={{ color: "var(--accent-ink)", fontStyle: "italic" }}>
                  trades.
                </em>
              </h2>
              <div className="body" style={{ maxWidth: "50ch" }}>
                <p>
                  Our organisation is weighted toward research and engineering. We hire for curiosity over credential, across quantitative disciplines, trading and technology. Our infrastructure — data, backtest, execution — is built entirely in-house.
                </p>
                <p>
                  We are independent, capacity-constrained and deliberately selective. We close strategies to new capital when capacity is reached, not when it is convenient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label reveal" style={{ justifyContent: "space-between" }}>
            <span style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
              <span className="num-prefix">04 ——</span>
              <span className="lbl">Latest Insights</span>
            </span>
            <button type="button" onClick={() => navigate("insights")} className="scroll-hint">
              All insights →
            </button>
          </div>
          <div className="insight-grid">
            {INSIGHTS.slice(0, 3).map((it, i) => (
              <button
                type="button"
                key={it.id}
                className="insight reveal text-left"
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => navigate("insights")}
              >
                <div className="meta">
                  <span className="tag">{it.kind}</span>
                  <span className="tag">{it.date}</span>
                </div>
                <h4 className="headline">{it.title}</h4>
                <div className="body-sm">{it.dek}</div>
                <div className="foot">
                  <span>{it.author}</span>
                  <span>
                    Read <span className="arr">→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function SkylineSplitArt() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-label="Dubai and Canary Wharf">
      <defs>
        <clipPath id="clip-dubai">
          <polygon points="0,0 400,0 0,500" />
        </clipPath>
        <clipPath id="clip-london">
          <polygon points="400,0 400,500 0,500" />
        </clipPath>
        <linearGradient id="skyA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(94% 0.012 75)" />
          <stop offset="100%" stopColor="oklch(88% 0.018 75)" />
        </linearGradient>
        <linearGradient id="skyB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(88% 0.010 230)" />
          <stop offset="100%" stopColor="oklch(80% 0.015 230)" />
        </linearGradient>
      </defs>

      <g clipPath="url(#clip-dubai)">
        <rect x="0" y="0" width="400" height="500" fill="url(#skyA)" />
        <circle cx="110" cy="160" r="60" fill="oklch(92% 0.04 70)" opacity="0.6" />
        <g fill="oklch(60% 0.02 60)" opacity="0.35">
          <rect x="10" y="300" width="18" height="180" />
          <rect x="32" y="280" width="14" height="200" />
          <rect x="50" y="320" width="22" height="160" />
          <rect x="78" y="260" width="12" height="220" />
          <rect x="96" y="290" width="20" height="190" />
          <rect x="122" y="310" width="14" height="170" />
        </g>
        <g fill="oklch(38% 0.012 50)">
          <polygon points="150,480 150,180 162,50 168,30 172,30 178,50 190,180 190,480" />
          <rect x="145" y="200" width="50" height="280" />
          <polygon points="140,480 140,260 145,240 195,240 200,260 200,480" />
          <polygon points="130,480 130,330 145,310 195,310 210,330 210,480" />
        </g>
        <g fill="oklch(42% 0.015 50)">
          <polygon points="215,480 220,220 232,208 244,220 240,480" />
          <rect x="250" y="280" width="28" height="200" />
          <polygon points="280,480 285,250 300,240 315,250 310,480" />
        </g>
        <rect x="0" y="460" width="400" height="40" fill="oklch(55% 0.020 55)" opacity="0.25" />
      </g>

      <g clipPath="url(#clip-london)">
        <rect x="0" y="0" width="400" height="500" fill="url(#skyB)" />
        <rect x="0" y="430" width="400" height="70" fill="oklch(75% 0.022 230)" opacity="0.35" />
        <g fill="oklch(36% 0.012 240)">
          <rect x="205" y="175" width="46" height="285" />
          <polygon points="205,175 228,148 251,175" />
          <rect x="158" y="230" width="42" height="230" />
          <rect x="255" y="215" width="38" height="245" />
          <rect x="297" y="245" width="34" height="215" />
          <rect x="120" y="270" width="32" height="190" />
          <rect x="335" y="260" width="30" height="200" />
          <rect x="365" y="285" width="28" height="175" />
          <rect x="85" y="295" width="28" height="165" />
        </g>
        <g fill="oklch(92% 0.018 85)" opacity="0.55">
          {Array.from({ length: 28 }, (_, row) =>
            Array.from({ length: 6 }, (_, col) => (
              <rect key={`wf-${row}-${col}`} x={209 + col * 7} y={188 + row * 10} width="2" height="4" />
            )),
          ).flat()}
          {Array.from({ length: 22 }, (_, row) =>
            Array.from({ length: 5 }, (_, col) => (
              <rect key={`wn-${row}-${col}`} x={162 + col * 7} y={240 + row * 10} width="2" height="4" />
            )),
          ).flat()}
          {Array.from({ length: 23 }, (_, row) =>
            Array.from({ length: 4 }, (_, col) => (
              <rect key={`we-${row}-${col}`} x={259 + col * 7} y={225 + row * 10} width="2" height="4" />
            )),
          ).flat()}
        </g>
        <g stroke="oklch(65% 0.025 230)" strokeWidth="0.6" opacity="0.5">
          <line x1="30" y1="470" x2="120" y2="470" />
          <line x1="180" y1="478" x2="260" y2="478" />
          <line x1="310" y1="468" x2="380" y2="468" />
          <line x1="60" y1="486" x2="170" y2="486" />
          <line x1="240" y1="490" x2="340" y2="490" />
        </g>
      </g>

      <line x1="0" y1="500" x2="400" y2="0" stroke="oklch(28% 0.01 50)" strokeWidth="1" opacity="0.8" />

      <text x="22" y="30" fill="oklch(30% 0.01 50)" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.5">
        DUBAI
      </text>
      <text x="378" y="488" textAnchor="end" fill="oklch(30% 0.01 230)" fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1.5">
        CANARY WHARF
      </text>
    </svg>
  );
}
