/* Vivid Capital — shared UI primitives */

const { useState, useEffect, useRef, useMemo } = React;

/* ---------- brand mark ---------- */
function BrandMark({ size = 22, color }) {
  // Abstract V mark echoing the Vivid Capital logo's pointed V shape
  return (
    <svg width={size} height={size * (22/26)} viewBox="0 0 26 22" fill="none" style={{ display: 'block' }}>
      <path d="M2 2 L13 20 L24 2 L18 2 L13 11 L8 2 Z" fill={color || 'var(--brand-blue)'}/>
    </svg>
  );
}

/* ---------- full brand lockup ---------- */
function BrandLockup({ size = 20, onDark = false, compact = false }) {
  const gray = onDark ? 'var(--ground)' : 'oklch(52% 0.008 260)';
  const capGray = onDark ? 'oklch(78% 0.010 260)' : 'oklch(62% 0.008 260)';
  const blue = 'var(--brand-blue)';
  if (compact) {
    // Just the VIVID wordmark + V-mark, no CAPITAL underneath — for tight nav contexts
    const h = size * 1.15;
    const w = size * 5.6;
    return (
      <svg width={w} height={h} viewBox="0 0 260 60" fill="none" style={{ display: 'block' }} aria-label="Vivid Capital">
        <path d="M4 6 L28 56 L52 6 L42 6 L28 34 L14 6 Z" fill={gray}/>
        <rect x="60" y="6" width="10" height="50" fill={gray}/>
        <path d="M82 0 L120 60 L158 0 L138 0 L120 26 L102 0 Z" fill={blue}/>
        <rect x="168" y="6" width="10" height="50" fill={gray}/>
        <path d="M188 6 L220 6 Q246 6 246 31 Q246 56 220 56 L188 56 Z M198 14 L198 48 L218 48 Q236 48 236 31 Q236 14 218 14 Z" fill={gray}/>
      </svg>
    );
  }
  const h = size * 1.6;
  const w = size * 5.6;
  return (
    <svg width={w} height={h} viewBox="0 0 260 80" fill="none" style={{ display: 'block' }} aria-label="Vivid Capital">
      {/* VIVID */}
      <path d="M4 6 L28 56 L52 6 L42 6 L28 34 L14 6 Z" fill={gray}/>
      <rect x="60" y="6" width="10" height="50" fill={gray}/>
      <path d="M82 0 L120 60 L158 0 L138 0 L120 26 L102 0 Z" fill={blue}/>
      <rect x="168" y="6" width="10" height="50" fill={gray}/>
      <path d="M188 6 L220 6 Q246 6 246 31 Q246 56 220 56 L188 56 Z M198 14 L198 48 L218 48 Q236 48 236 31 Q236 14 218 14 Z" fill={gray}/>
      {/* CAPITAL - larger font so legible at small render sizes */}
      <text x="48" y="76" fontSize="12" letterSpacing="6" fontWeight="500" fill={capGray} style={{ fontFamily: 'var(--sans)' }}>C A P I T A L</text>
    </svg>
  );
}

/* ---------- nav ---------- */
function Nav({ current, onNavigate, onMenu }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="brand" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
          <BrandLockup size={22} compact/>
        </a>
        <div className="nav-links">
          {[
            ['firm', 'Firm'],
            ['strategy', 'Strategy'],
            ['insights', 'Insights'],
            ['careers', 'Careers'],
            ['contact', 'Contact'],
          ].map(([k, l]) => (
            <span
              key={k}
              className={'nav-link ' + (current === k ? 'active' : '')}
              onClick={() => onNavigate(k)}
            >{l}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <a className="nav-cta" onClick={() => onNavigate('contact')}>
            Client Login
            <span className="arr">→</span>
          </a>
          <button className="menu-btn" onClick={onMenu}>
            Menu <span>+</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ---------- menu overlay ---------- */
function MenuOverlay({ open, onClose, onNavigate, current }) {
  const items = [
    ['home', 'Home'],
    ['firm', 'Firm'],
    ['strategy', 'Strategy'],
    ['insights', 'Insights'],
    ['careers', 'Careers'],
    ['contact', 'Contact'],
  ];
  return (
    <div className={'menu-overlay ' + (open ? 'open' : '')} aria-hidden={!open}>
      <div className="menu-overlay-head">
        <span className="brand">
          <BrandLockup size={20}/>
        </span>
        <button className="menu-btn" onClick={onClose} style={{ display: 'inline-flex' }}>
          Close <span>×</span>
        </button>
      </div>
      <div className="menu-overlay-body">
        <ul className="menu-list">
          {items.map(([k, l], i) => (
            <li key={k}>
              <a
                onClick={() => { onNavigate(k); onClose(); }}
                style={{ cursor: 'pointer', color: current === k ? 'var(--accent-ink)' : undefined }}
              >
                <span>{l}</span>
                <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              </a>
            </li>
          ))}
        </ul>
        <div>
          <div className="menu-meta">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Dubai</div>
              <div className="body-sm">Business Bay<br/>Dubai, United Arab Emirates</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>London</div>
              <div className="body-sm">One Canada Square<br/>Canary Wharf<br/>London</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Investor Relations</div>
              <div className="body-sm">ir@vividcapitalportal.com</div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Careers</div>
              <div className="body-sm">careers@vividcapitalportal.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-overlay-foot">
        <span>© 2026 Vivid Capital Portal LLC</span>
        <span>Based in Dubai, United Arab Emirates</span>
      </div>
    </div>
  );
}

/* ---------- ticker ---------- */
function Ticker() {
  const items = [
    ['DXY', '104.28', '+0.14%', 'up'],
    ['EUR/USD', '1.0742', '−0.22%', 'down'],
    ['USD/JPY', '154.11', '+0.38%', 'up'],
    ['GBP/USD', '1.2564', '+0.09%', 'up'],
    ['BRENT', '82.40', '−0.91%', 'down'],
    ['GOLD', '2,318', '+0.44%', 'up'],
    ['COPPER', '4.212', '−0.18%', 'down'],
    ['SPX', '5,148', '+0.27%', 'up'],
    ['NKY', '39,812', '+1.02%', 'up'],
    ['BTC', '68,412', '+2.14%', 'up'],
    ['ETH', '3,824', '+1.68%', 'up'],
    ['US10Y', '4.284', '+2.1bp', 'up'],
    ['BUND10Y', '2.412', '−0.4bp', 'down'],
  ];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {[...items, ...items].map(([s, v, c, d], i) => (
          <span key={i} className="ticker-item">
            <span className="sym">{s}</span>
            <span className="val">{v}</span>
            <span className={'chg ' + d}>{c}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- waves placeholder (abstract performance curve) ---------- */
function Waves({ label = 'STRATEGY COMPOSITE', sub = 'SIMULATED', seed = 1 }) {
  // deterministic noise-driven path for a calm, monotone-ish performance curve
  const d = useMemo(() => {
    const N = 80;
    const pts = [];
    let v = 20;
    let rng = seed * 97;
    for (let i = 0; i < N; i++) {
      rng = (rng * 1103515245 + 12345) & 0x7fffffff;
      const r = (rng / 0x7fffffff) - 0.5;
      v += r * 3 + 0.18; // drift up
      pts.push([i / (N - 1) * 1000, 400 - v * 2.6]);
    }
    let p = `M ${pts[0][0]},${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) p += ` L ${pts[i][0]},${pts[i][1]}`;
    return p;
  }, [seed]);

  return (
    <div className="waves">
      <svg viewBox="0 0 1000 500" preserveAspectRatio="none">
        {/* horizontal grid */}
        {[100, 200, 300, 400].map(y => (
          <line key={y} x1="0" x2="1000" y1={y} y2={y} stroke="currentColor" opacity="0.08"/>
        ))}
        {/* vertical grid */}
        {[200, 400, 600, 800].map(x => (
          <line key={x} x1={x} x2={x} y1="0" y2="500" stroke="currentColor" opacity="0.06"/>
        ))}
        <path d={d} stroke="var(--accent)" strokeWidth="1.5" fill="none"/>
        <path d={d + ' L 1000,500 L 0,500 Z'} fill="var(--accent)" opacity="0.08"/>
      </svg>
      <div className="label">
        <span>{label}</span>
        <span>{sub}</span>
      </div>
      <div className="corner">NET OF FEES · USD</div>
    </div>
  );
}

/* ---------- scroll reveal ---------- */
function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'));
    // Staggered fade-in on mount — no scroll detection needed.
    // Everything animates in within the first second; further scroll simply shows already-visible content.
    els.forEach((el, i) => {
      const delay = Math.min(i * 40, 600);
      setTimeout(() => el.classList.add('in'), delay);
    });
  }, []);
}

/* ---------- footer ---------- */
function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-mono" style={{ marginBottom: 24 }}>↳ Talk to us</div>
        <h3 className="footer-big">
          Disciplined capital,<br/>systematic by design.
        </h3>
        <div className="footer-grid">
          <div className="footer-col">
            <div style={{ marginBottom: 20 }}>
              <BrandLockup size={22} onDark/>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.7, maxWidth: '32ch', margin: 0 }}>
              A systematic macro investment firm deploying quantitative strategies across global liquid markets.
            </p>
          </div>
          <div className="footer-col">
            <h5>Offices</h5>
            <ul>
              <li><a>Dubai</a></li>
              <li><a>London</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <ul>
              <li><a onClick={() => onNavigate('contact')}>Contact</a></li>
              <li><a>Client Portal</a></li>
              <li><a>LinkedIn</a></li>
              <li><a>Press</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a onClick={() => onNavigate('terms')}>Terms of use</a></li>
              <li><a onClick={() => onNavigate('privacy')}>Privacy policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-tag">
          <div className="footer-tag-row">
            <span>© 2026 Vivid Capital Portal LLC — All rights reserved</span>
            <span style={{ display: 'flex', gap: 18 }}>
              <a onClick={() => onNavigate('terms')} style={{ cursor: 'pointer' }}>Terms</a>
              <a onClick={() => onNavigate('privacy')} style={{ cursor: 'pointer' }}>Privacy</a>
              <span>Dubai, United Arab Emirates</span>
            </span>
          </div>
          <span className="disc">
            Vivid Capital Portal LLC is registered in Dubai, United Arab Emirates. Vivid
            Capital acts solely as a strategy provider and does not custody client assets,
            execute client orders, or provide personalised investment advice. Information on
            this website is for professional and institutional audiences only and does not
            constitute an offer to sell or a solicitation to buy any security, product or
            service. Trading and investing in financial instruments carries a substantial
            risk of loss and is not suitable for every investor; past performance, simulated
            results and research signals are not indicative of future returns, and you may
            lose some or all of the capital committed to any strategy. Before engaging, you
            should read all relevant documentation carefully and seek independent financial,
            legal, tax and regulatory advice.
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { BrandMark, Nav, MenuOverlay, Ticker, Waves, Footer, useReveal });
