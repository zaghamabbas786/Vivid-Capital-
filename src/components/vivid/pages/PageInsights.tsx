"use client";

import { useState } from "react";

import { INSIGHTS, type InsightItem } from "@/lib/site-data";

import { useReveal } from "@/components/vivid/useReveal";

type InsightFilter = "All" | InsightItem["kind"];

const KINDS: InsightFilter[] = ["All", "Research note", "Quarterly letter", "White paper", "Market view"];

export function PageInsights() {
  useReveal();
  const [filter, setFilter] = useState<InsightFilter>("All");
  const filtered = filter === "All" ? INSIGHTS : INSIGHTS.filter((i) => i.kind === filter);

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow reveal" style={{ marginBottom: 24 }}>
            Insights · 03
          </div>
          <div className="page-head-grid">
            <h1 className="page-title reveal d1">
              Research and
              <br />
              <em>commentary.</em>
            </h1>
            <div className="lead reveal d2" style={{ maxWidth: "46ch" }}>
              Quarterly letters to investors, white papers from our research desk, and short market notes. We write when we have something non-obvious to say.
            </div>
          </div>
        </div>
      </section>

      <section className="section tight nb">
        <div className="container">
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingBottom: 24, borderBottom: "1px solid var(--rule)" }}>
            {KINDS.map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setFilter(k)}
                className="tw-opt"
                style={{
                  padding: "8px 14px",
                  border: `1px solid ${filter === k ? "var(--ink)" : "var(--rule)"}`,
                  background: filter === k ? "var(--ink)" : "transparent",
                  color: filter === k ? "var(--ground)" : "var(--ink-2)",
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                {k}
              </button>
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
                  <span>
                    Read <span className="arr">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
