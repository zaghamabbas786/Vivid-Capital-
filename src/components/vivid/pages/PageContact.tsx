"use client";

import type { SyntheticEvent } from "react";
import { useState } from "react";

import { useReveal } from "@/components/vivid/useReveal";

export function PageContact() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>
            Contact · 05
          </div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Speak with <em>us.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: "46ch" }}>
              For investor enquiries, operational due diligence, press or general questions — our teams answer within one business day.
            </div>
          </div>
        </div>
      </section>

      <section className="section tight nb">
        <div className="container">
          <div className="contact-grid">
            {[
              { city: "Dubai", addr: "Business Bay\nDubai, United Arab Emirates" },
              { city: "London", addr: "One Canada Square\nCanary Wharf\nLondon" },
            ].map((o) => (
              <div key={o.city} className="office reveal">
                <div className="tag">Office</div>
                <div className="city">{o.city}</div>
                <div className="addr" style={{ whiteSpace: "pre-line" }}>
                  {o.addr}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-asym">
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                Enquiries
              </div>
              <div className="display-sm" style={{ margin: 0, maxWidth: "14ch" }}>
                Speak with our team.
              </div>
              <p className="body" style={{ marginTop: 24, maxWidth: "36ch" }}>
                For investor, operational, press or general questions, please use the form. A member of our team will respond within one business day.
              </p>
            </div>
            <div className="reveal d1">
              <div className="eyebrow" style={{ marginBottom: 24 }}>
                Or send a note
              </div>
              {!submitted ? (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="contact-name">Name</label>
                    <input id="contact-name" name="name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-org">Organisation</label>
                    <input id="contact-org" name="organisation" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email">Email</label>
                    <input id="contact-email" name="email" type="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-type">Enquiry type</label>
                    <select id="contact-type" name="type" defaultValue="Investor">
                      <option>Investor</option>
                      <option>Operational due diligence</option>
                      <option>Press</option>
                      <option>General</option>
                    </select>
                  </div>
                  <div className="field wide">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" required />
                  </div>
                  <div className="field wide" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: 12 }}>
                    <div className="body-sm" style={{ maxWidth: "40ch" }}>
                      By submitting, you confirm you are a qualified institutional investor or professional adviser.
                    </div>
                    <button className="btn primary" type="submit">
                      Send enquiry →
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ padding: "48px 0", borderTop: "1px solid var(--rule)" }}>
                  <div className="display-sm" style={{ margin: 0 }}>
                    Received.
                  </div>
                  <p className="body" style={{ marginTop: 16, maxWidth: "48ch" }}>
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
