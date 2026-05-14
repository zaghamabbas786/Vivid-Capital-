/* ----- Home ----- */

function PageHome({ onNavigate }) {
  useReveal();

  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-head">
            <div>
              <h1 className="hero-title reveal d1" style={{ marginTop: 32 }}>
                Systematic<br/>
                <em>macro</em><br/>
                for the modern<br/>
                liquid universe.
              </h1>
            </div>
            <div className="hero-meta reveal d2">
              <div>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Headquarters</div>
                <div className="num" style={{ fontSize: 22 }}>Dubai, UAE</div>
              </div>
              <div>
                <div className="eyebrow" style={{ marginBottom: 10 }}>Office</div>
                <div className="num" style={{ fontSize: 22 }}>Dubai · London</div>
              </div>
            </div>
          </div>
            <div className="hero-rail">
              <div className="lead reveal d3" style={{ maxWidth: '46ch' }}>
                We design quantitative strategies across global FX, commodities, equity indices,
                and digital asset markets — engineered for persistence, not narrative.
              </div>
            </div>
        </div>
      </section>

      {/* Market ticker */}
      <Ticker />

      {/* PERFORMANCE STATEMENT */}
      <section className="section tight nb">
        <div className="container">
          <div className="grid-asym">
            <div className="reveal" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="eyebrow">Composite, since inception</div>
            </div>
            <div className="reveal d1">
              <div className="display-sm" style={{ letterSpacing: '-0.015em' }}>
                Compounded, uncorrelated,
                <br/><span style={{ color: 'var(--ink-3)' }}>disciplined across regimes.</span>
              </div>
              <p className="body" style={{ maxWidth: '56ch', marginTop: 24 }}>
                Our flagship composite has delivered consistent risk-adjusted returns with
                low correlation to traditional benchmarks. Detailed performance available
                to qualified investors on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section">
        <div className="container">
          <div className="section-label reveal">
            <span className="num-prefix">01 ——</span>
            <span className="lbl">Approach</span>
          </div>
          <div className="grid-asym">
            <h2 className="display-md reveal d1" style={{ margin: 0 }}>
              Signal over <em style={{ color: 'var(--accent-ink)', fontStyle: 'italic' }}>sentiment.</em>
            </h2>
            <div className="body reveal d2" style={{ maxWidth: '58ch' }}>
              <p>
                Vivid Capital is built on a simple premise: durable alpha lives in
                the repeatable, not the prophetic. Our research process treats every idea as an
                engineering problem — hypothesis, data, test, validation, deployment.
              </p>
              <p>
                Our strategies run diversified, model-driven portfolios across a broad universe
                of liquid instruments. Every position the system takes is sized by a risk
                framework that explicitly accounts for regime, liquidity, and correlation drift. No narratives. No
                single-decision concentration. No thematic gambling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIES */}
      <section className="section">
        <div className="container">
          <div className="section-label reveal">
            <span className="num-prefix">02 ——</span>
            <span className="lbl">Strategies</span>
          </div>
          <div className="grid-asym" style={{ marginBottom: 56 }}>
            <h2 className="display-md reveal d1" style={{ margin: 0 }}>
              Four strategies. <em style={{ color: 'var(--accent-ink)', fontStyle: 'italic' }}>One framework.</em>
            </h2>
            <div className="body reveal d2" style={{ maxWidth: '58ch' }}>
              Each strategy is independently researched, risk-budgeted and deployed through a
              shared infrastructure with complementary characteristics.
            </div>
          </div>
          <div className="strat-list">
            {[
              {
                idx: 'VC-01',
                title: 'Systematic Macro',
                desc: 'Trend, carry and value signals across global rates, FX and equity indices, blended through a volatility-targeted risk allocator.',
                markets: ['Rates', 'FX', 'Equity idx', 'Carry'],
              },
              {
                idx: 'VC-02',
                title: 'FX Systematic',
                desc: 'A dedicated currency programme across G10 and liquid emerging markets, combining trend-following and carry signals within a unified risk framework.',
                markets: ['G10 FX', 'EM FX', 'Trend', 'Carry'],
              },
              {
                idx: 'VC-03',
                title: 'Digital Assets',
                desc: 'Market-neutral and directional models on liquid crypto venues, benchmarked against a bespoke execution and custody framework.',
                markets: ['BTC', 'ETH', 'Perp basis', 'Alt beta'],
              },
              {
                idx: 'VC-04',
                title: 'Systematic Gold',
                desc: 'A dedicated systematic programme in gold, combining medium-term momentum signals with disciplined breakout strategies across the futures curve.',
                markets: ['Gold', 'Futures', 'Momentum', 'Breakout'],
              },
            ].map((s, i) => (
              <div key={s.idx} className="strat-row reveal" style={{ transitionDelay: `${i * 60}ms` }} onClick={() => onNavigate('strategy')}>
                <div className="idx">{s.idx}</div>
                <div>
                  <h3>{s.title}</h3>
                </div>
                <div className="desc">{s.desc}</div>
                <div className="markets">
                  {s.markets.map(m => <span key={m} className="chip">{m}</span>)}
                </div>
                <div className="arrow">Detail <span className="arr">→</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIRM */}
      <section className="section">
        <div className="container">
          <div className="section-label reveal">
            <span className="num-prefix">03 ——</span>
            <span className="lbl">Firm</span>
          </div>
          <div className="grid-2">
            <div className="reveal">
              <div className="split-skyline" style={{ aspectRatio: '4/5' }}>
                <img src={(window.__resources && window.__resources.skyline) || "assets/dubai-canary-wharf.jpg"} alt="Dubai and Canary Wharf" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
              </div>
            </div>
            <div className="reveal d1" style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <h2 className="display-md" style={{ margin: 0 }}>
                A research firm that <em style={{ color: 'var(--accent-ink)', fontStyle: 'italic' }}>trades.</em>
              </h2>
              <div className="body" style={{ maxWidth: '50ch' }}>
                <p>
                  Our organisation is weighted toward research and engineering. We hire for
                  curiosity over credential, across quantitative disciplines, trading and
                  technology. Our infrastructure — data, backtest, execution — is built
                  entirely in-house.
                </p>
                <p>
                  We are independent, capacity-constrained and deliberately selective. We
                  close strategies to new capital when capacity is reached, not when it is
                  convenient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="section">
        <div className="container">
          <div className="section-label reveal">
            <span className="num-prefix">04 ——</span>
            <span className="lbl">Insights</span>
          </div>
          <div className="grid-asym">
            <h2 className="display-md reveal d1" style={{ margin: 0 }}>
              Research and <em style={{ color: 'var(--accent-ink)', fontStyle: 'italic' }}>commentary, coming soon.</em>
            </h2>
            <div className="body reveal d2" style={{ maxWidth: '58ch' }}>
              Our first research notes and quarterly letter are in preparation. To be added
              to the distribution list, please get in touch via the{' '}
              <a onClick={() => onNavigate('contact')} style={{ cursor: 'pointer', borderBottom: '1px solid var(--ink-3)' }}>
                contact page
              </a>.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PageHome });
