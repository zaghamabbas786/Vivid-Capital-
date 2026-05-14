/* App root — routing + tweaks + menu overlay */

const { useState: useState2, useEffect: useEffect2 } = React;

function App() {
  const [page, setPage] = useState2(() => {
    const h = window.location.hash.replace('#', '');
    return h || 'home';
  });
  const [menuOpen, setMenuOpen] = useState2(false);

  const navigate = (p) => {
    setPage(p);
    window.location.hash = p;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // hash-based nav for back/forward
  useEffect2(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '') || 'home';
      setPage(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // ---- tweaks ----
  const tweakDefaults = /*EDITMODE-BEGIN*/{
    "accent": "blue",
    "mode": "light",
    "serif": "source-serif",
    "density": "standard"
  }/*EDITMODE-END*/;
  const [tweaks, setTweaks] = useState2(tweakDefaults);
  const [tweaksOpen, setTweaksOpen] = useState2(false);

  // apply tweaks as CSS variables / class on root
  useEffect2(() => {
    const root = document.documentElement;
    // mode
    root.classList.toggle('dark', tweaks.mode === 'dark');
    // accent
    const accents = {
      blue:     ['54% 0.14 240', '42% 0.12 240', '94% 0.030 240'],
      teal:     ['42% 0.09 230', '28% 0.08 230', '95% 0.020 230'],
      moss:     ['44% 0.08 150', '30% 0.07 150', '95% 0.020 150'],
      bordeaux: ['38% 0.10 22',  '26% 0.09 22',  '95% 0.022 22'],
      ink:      ['26% 0.02 260', '18% 0.02 260', '92% 0.010 260'],
    };
    const darkAccents = {
      blue:     ['72% 0.15 240', '80% 0.13 240', '24% 0.06 240'],
      teal:     ['72% 0.10 230', '80% 0.10 230', '22% 0.04 230'],
      moss:     ['74% 0.09 150', '80% 0.09 150', '22% 0.04 150'],
      bordeaux: ['70% 0.12 22',  '78% 0.12 22',  '24% 0.05 22'],
      ink:      ['82% 0.01 260', '92% 0.008 260','28% 0.015 260'],
    };
    const a = (tweaks.mode === 'dark' ? darkAccents : accents)[tweaks.accent] || accents.blue;
    root.style.setProperty('--accent', `oklch(${a[0]})`);
    root.style.setProperty('--accent-ink', `oklch(${a[1]})`);
    root.style.setProperty('--accent-wash', `oklch(${a[2]})`);
    root.style.setProperty('--brand-blue', `oklch(${tweaks.mode === 'dark' ? '72% 0.15 240' : '62% 0.16 240'})`);
    // serif
    const serifs = {
      'source-serif': '"Source Serif 4","Source Serif Pro",Georgia,serif',
      'playfair': '"Playfair Display",Georgia,serif',
      'spectral': '"Spectral",Georgia,serif',
    };
    root.style.setProperty('--serif', serifs[tweaks.serif] || serifs['source-serif']);
    // density
    const densities = {
      compact:  { page: 'clamp(16px,3vw,48px)' },
      standard: { page: 'clamp(20px,4vw,64px)' },
      generous: { page: 'clamp(28px,5vw,88px)' },
    };
    root.style.setProperty('--page-px', densities[tweaks.density].page);
  }, [tweaks]);

  // listener for host-driven tweaks toggle
  useEffect2(() => {
    const onMsg = (e) => {
      const t = e.data && e.data.type;
      if (t === '__activate_edit_mode') setTweaksOpen(true);
      else if (t === '__deactivate_edit_mode') setTweaksOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const setTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };

  const closeTweaks = () => {
    setTweaksOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const pages = {
    home: PageHome,
    firm: PageFirm,
    strategy: PageStrategy,
    insights: PageInsights,
    careers: PageCareers,
    contact: PageContact,
    terms: PageTerms,
    privacy: PagePrivacy,
  };
  const Page = pages[page] || PageHome;

  return (
    <div className="page" data-screen-label={'Page · ' + page}>
      <Nav current={page} onNavigate={navigate} onMenu={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} onNavigate={navigate} current={page} />
      <main key={page}>
        <Page onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
      {tweaksOpen && (
        <div className="tweaks-root">
          <div className="tweaks-head">
            <span className="t">Tweaks</span>
            <button onClick={closeTweaks} aria-label="Close">×</button>
          </div>
          <div className="tweaks-body">
            <div className="tw-group">
              <div className="tw-label">Mode</div>
              <div className="tw-opts">
                {['light', 'dark'].map(m => (
                  <button key={m} className={'tw-opt ' + (tweaks.mode === m ? 'on' : '')} onClick={() => setTweak('mode', m)}>{m}</button>
                ))}
              </div>
            </div>
            <div className="tw-group">
              <div className="tw-label">Accent</div>
              <div className="tw-swatches">
                {[
                  ['blue', 'oklch(54% 0.14 240)'],
                  ['teal', 'oklch(42% 0.09 230)'],
                  ['moss', 'oklch(44% 0.08 150)'],
                  ['bordeaux', 'oklch(38% 0.10 22)'],
                  ['ink', 'oklch(26% 0.02 260)'],
                ].map(([k, c]) => (
                  <button key={k} className={'tw-swatch ' + (tweaks.accent === k ? 'on' : '')} style={{ background: c }} onClick={() => setTweak('accent', k)} aria-label={k}/>
                ))}
              </div>
            </div>
            <div className="tw-group">
              <div className="tw-label">Serif</div>
              <div className="tw-opts">
                {[
                  ['source-serif', 'Source'],
                  ['playfair', 'Playfair'],
                  ['spectral', 'Spectral'],
                ].map(([k, l]) => (
                  <button key={k} className={'tw-opt ' + (tweaks.serif === k ? 'on' : '')} onClick={() => setTweak('serif', k)}>{l}</button>
                ))}
              </div>
            </div>
            <div className="tw-group">
              <div className="tw-label">Density</div>
              <div className="tw-opts">
                {['compact', 'standard', 'generous'].map(d => (
                  <button key={d} className={'tw-opt ' + (tweaks.density === d ? 'on' : '')} onClick={() => setTweak('density', d)}>{d}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
