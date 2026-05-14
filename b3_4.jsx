/* ----- Careers ----- */
function PageCareers({ onNavigate }) {
  useReveal();

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>Careers · 04</div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Hire for <em>curiosity,</em><br/>
              train for <em>rigour.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: '46ch' }}>
              We recruit selectively across research, technology and operations. Most of our
              hiring happens through introduction.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-asym">
            <div className="eyebrow reveal">Enquiries</div>
            <div className="reveal d1" style={{ display: 'grid', gap: 32 }}>
              <p className="body" style={{ margin: 0, maxWidth: '58ch' }}>
                We are not currently publishing an open-roles list. If your background is a
                strong match for the work we do, we would be glad to hear from you.
              </p>
              <div style={{ paddingTop: 32, borderTop: '1px solid var(--rule)' }}>
                <a href="mailto:careers@vividcapitalportal.com?subject=Career%20enquiry" className="btn primary" style={{ display: 'inline-flex' }}>
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

/* ----- Contact ----- */
function PageContact({ onNavigate }) {
  useReveal();
  const [submitted, setSubmitted] = useState(false);
  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>Contact · 05</div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Speak with <em>us.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: '46ch' }}>
              For investor enquiries, operational due diligence, press or general questions —
              our teams answer within one business day.
            </div>
          </div>
        </div>
      </section>

      <section className="section tight nb">
        <div className="container">
          <div className="contact-grid">
            {[
              {city: 'Dubai', addr: 'Business Bay\nDubai, United Arab Emirates'},
              {city: 'London', addr: 'One Canada Square\nCanary Wharf\nLondon'},
            ].map(o => (
              <div key={o.city} className="office reveal">
                <div className="tag">Office</div>
                <div className="city">{o.city}</div>
                <div className="addr" style={{ whiteSpace: 'pre-line' }}>{o.addr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-asym">
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 14 }}>Enquiries</div>
              <div className="display-sm" style={{ margin: 0, maxWidth: '14ch' }}>
                Speak with our team.
              </div>
              <p className="body" style={{ marginTop: 24, maxWidth: '36ch' }}>
                For investor, operational, press or general questions, please use the form.
                A member of our team will respond within one business day.
              </p>
            </div>
            <div className="reveal d1">
              <div className="eyebrow" style={{ marginBottom: 24 }}>Or send a note</div>
              {!submitted ? (
                <form className="form" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="field"><label>Name</label><input required defaultValue=""/></div>
                  <div className="field"><label>Organisation</label><input required/></div>
                  <div className="field"><label>Email</label><input type="email" required/></div>
                  <div className="field">
                    <label>Enquiry type</label>
                    <select defaultValue="Investor">
                      <option>Investor</option>
                      <option>Operational due diligence</option>
                      <option>Press</option>
                      <option>General</option>
                    </select>
                  </div>
                  <div className="field wide"><label>Message</label><textarea required/></div>
                  <div className="field wide" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12 }}>
                    <div className="body-sm" style={{ maxWidth: '40ch' }}>
                      By submitting, you confirm you are a qualified institutional investor or professional adviser.
                    </div>
                    <button className="btn primary" type="submit">Send enquiry →</button>
                  </div>
                </form>
              ) : (
                <div style={{ padding: '48px 0', borderTop: '1px solid var(--rule)' }}>
                  <div className="display-sm" style={{ margin: 0 }}>Received.</div>
                  <p className="body" style={{ marginTop: 16, maxWidth: '48ch' }}>
                    Thank you — a member of our team will respond within one business day.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { PageCareers, PageContact });
