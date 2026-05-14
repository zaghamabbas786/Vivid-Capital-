/* ----- Firm / About ----- */

function PageFirm({ onNavigate }) {
  useReveal();
  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>Firm · 01</div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Built for the long <em>compounding.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: '46ch' }}>
              Vivid Capital is an independent systematic macro firm. We design, test and
              develop quantitative strategies across global liquid markets.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-asym">
            <div className="eyebrow reveal">Principles</div>
            <div className="reveal d1" style={{ display: 'grid', gap: 40 }}>
              {[
                ['Process compounds, prediction decays.', 'A disciplined research framework outperforms individual conviction over time. We invest in the process, not the prophet.'],
                ['Capacity is a feature, not a bug.', 'We close strategies when capacity is reached. Scale exists in service of investors, not fees.'],
                ['Research is the product.', 'Our organisation is weighted toward research and engineering. Every edge is earned through work done in-house.'],
                ['Risk is the first constraint.', 'Every position is sized through an explicit risk framework that accounts for regime, liquidity and correlation.'],
              ].map(([h, b], i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, paddingBottom: 32, borderBottom: '1px solid var(--rule-2)' }}>
                  <div className="num-prefix mono" style={{ color: 'var(--ink-3)', fontSize: 11, letterSpacing: '0.14em' }}>0{i + 1}</div>
                  <div>
                    <h3 className="display-sm" style={{ margin: '0 0 12px' }}>{h}</h3>
                    <p className="body" style={{ margin: 0, maxWidth: '58ch' }}>{b}</p>
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

/* ----- Strategy ----- */
function PageStrategy({ onNavigate }) {
  useReveal();
  const strategies = [
    {
      code: 'VC-01', title: 'Systematic Macro', sub: '',
      desc: 'Our flagship multi-strategy vehicle. Trend, carry and value signals across rates, FX and equity indices, combined through a volatility-targeted risk allocator that explicitly respects regime change.',
      markets: ['G10 Rates', 'FX Majors + EM', 'Equity Indices', 'Cross-Asset Carry'],
    },
    {
      code: 'VC-02', title: 'FX Systematic', sub: '',
      desc: 'A dedicated currency programme across G10 and liquid emerging markets, combining trend-following and carry signals within a unified risk framework. Implementation emphasises execution quality, funding-cost awareness and cross-pair correlation control.',
      markets: ['G10 Currencies', 'EM Currencies', 'Trend', 'Carry'],
    },
    {
      code: 'VC-03', title: 'Digital Assets', sub: 'Since 2023',
      desc: 'Market-neutral basis trades and selective directional models across liquid digital asset venues. All capital custodied through institutional infrastructure with multi-venue execution routing.',
      markets: ['BTC / ETH Spot', 'Perpetual Basis', 'Funding Arbitrage', 'Liquid Alt Beta'],
    },
    {
      code: 'VC-04', title: 'Systematic Gold', sub: '',
      desc: 'A dedicated systematic programme in gold, combining medium-term momentum signals with disciplined breakout strategies across the futures curve. Designed as a liquid, risk-managed expression of trend and regime dynamics in the precious metals complex.',
      markets: ['Gold Futures', 'Spot XAU', 'Term Structure', 'Volatility Overlay'],
    },
  ];
  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>Strategy · 02</div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Four <em>books.</em><br/>
              One <em>framework.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: '46ch' }}>
              Each strategy is independently researched and risk-budgeted, but shares
              infrastructure, execution, and the same disciplined research standard.
            </div>
          </div>
        </div>
      </section>

      {strategies.map((s, i) => (
        <section key={s.code} className="section">
          <div className="container">
            <div className="grid-asym">
              <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div className="eyebrow">{s.code}</div>
                <h2 className="display-md" style={{ margin: 0 }}>{s.title}</h2>
              </div>
              <div className="reveal d1">
                <p className="body" style={{ maxWidth: '58ch', marginTop: 0 }}>{s.desc}</p>
                <div style={{ marginTop: 24, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {s.markets.map(m => <span key={m} className="chip" style={{ padding: '4px 10px', border: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-2)' }}>{m}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

/* ----- Team (removed per instruction) ----- */
function PageTeam({ onNavigate }) { return null; }

/* ----- Insights ----- */
function PageInsights({ onNavigate }) {
  useReveal();
  const [filter, setFilter] = useState('All');
  const kinds = ['All', 'Research note', 'Quarterly letter', 'White paper', 'Market view'];
  const filtered = filter === 'All' ? INSIGHTS : INSIGHTS.filter(i => i.kind === filter);
  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>Insights · 03</div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Research and<br/><em>commentary.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: '46ch' }}>
              Quarterly letters to investors, white papers from our research desk, and short
              market notes. We write when we have something non-obvious to say.
            </div>
          </div>
        </div>
      </section>

      <section className="section tight nb">
        <div className="container">
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingBottom: 24, borderBottom: '1px solid var(--rule)' }}>
            {kinds.map(k => (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className="tw-opt"
                style={{
                  padding: '8px 14px',
                  border: '1px solid ' + (filter === k ? 'var(--ink)' : 'var(--rule)'),
                  background: filter === k ? 'var(--ink)' : 'transparent',
                  color: filter === k ? 'var(--ground)' : 'var(--ink-2)',
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                }}
              >{k}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight nb">
        <div className="container">
          <div className="insight-grid">
            {filtered.map((it, i) => (
              <div key={it.id} className="insight reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="meta">
                  <span className="tag">{it.kind}</span>
                  <span className="tag">{it.date}</span>
                </div>
                <h4 className="headline">{it.title}</h4>
                <div className="body-sm">{it.dek}</div>
                <div className="foot">
                  <span>{it.author}</span>
                  <span>Read <span className="arr">→</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PageFirm, PageStrategy, PageTeam, PageInsights });
