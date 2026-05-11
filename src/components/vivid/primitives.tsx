"use client";

import Image from "next/image";
import { useMemo } from "react";

interface BrandMarkProps {
  size?: number;
  color?: string;
}

export function BrandMark({ size = 22, color }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size * (22 / 26)}
      viewBox="0 0 26 22"
      fill="none"
      style={{ display: "block" }}
    >
      <title>Vivid mark</title>
      <path d="M2 2 L13 20 L24 2 L18 2 L13 11 L8 2 Z" fill={color ?? "var(--brand-blue)"} />
    </svg>
  );
}

interface BrandLockupProps {
  size?: number;
  onDark?: boolean;
  compact?: boolean;
}

// Aspect ratio of the visible mark+wordmark inside the supplied square PNG.
// The asset is 1024x1024 with significant top/bottom whitespace; this ratio
// matches the actual content area so `object-fit: cover` clips the padding
// and renders a tight lockup.
const LOCKUP_ASPECT = 2.6;

export function BrandLockup({
  size = 20,
  onDark = false,
  compact = false,
}: BrandLockupProps) {
  const height = compact ? size * 1.4 : size * 1.8;
  const width = height * LOCKUP_ASPECT;
  return (
    <span
      aria-label="Vivid Capital"
      style={{
        position: "relative",
        display: "inline-block",
        height,
        width,
        overflow: "hidden",
        // Light surfaces: `multiply` collapses the near-white PNG backplate
        // into the off-white page. Dark surfaces: invert + hue-rotate flips
        // greys to whites while keeping the blue V recognisably blue.
        ...(onDark
          ? { filter: "invert(1) hue-rotate(180deg)" }
          : { mixBlendMode: "multiply" as const }),
      }}
    >
      <Image
        src="/brand/vivid-capital.png"
        alt="Vivid Capital"
        fill
        sizes={`${Math.ceil(width)}px`}
        priority={compact}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
    </span>
  );
}

export type TickerItem = readonly [string, string, string, "up" | "down"];

const TICKER_FALLBACK: readonly TickerItem[] = [
  ["DXY", "104.28", "+0.14%", "up"],
  ["EUR/USD", "1.0742", "−0.22%", "down"],
  ["USD/JPY", "154.11", "+0.38%", "up"],
  ["GBP/USD", "1.2564", "+0.09%", "up"],
  ["BRENT", "82.40", "−0.91%", "down"],
  ["GOLD", "2,318", "+0.44%", "up"],
  ["COPPER", "4.212", "−0.18%", "down"],
  ["SPX", "5,148", "+0.27%", "up"],
  ["NKY", "39,812", "+1.02%", "up"],
  ["BTC", "68,412", "+2.14%", "up"],
  ["ETH", "3,824", "+1.68%", "up"],
  ["US10Y", "4.284", "+2.1bp", "up"],
  ["BUND10Y", "2.412", "−0.4bp", "down"],
];

interface TickerProps {
  items?: readonly TickerItem[];
}

export function Ticker({ items }: TickerProps = {}) {
  const data = items && items.length > 0 ? items : TICKER_FALLBACK;
  const track = [...data, ...data];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {track.map(([sym, val, chg, dir], i) => (
          <span key={`${sym}-${i}`} className="ticker-item">
            <span className="sym">{sym}</span>
            <span className="val">{val}</span>
            <span className={`chg ${dir}`}>{chg}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

interface WavesProps {
  label?: string;
  sub?: string;
  seed?: number;
}

export function Waves({ label = "STRATEGY COMPOSITE", sub = "SIMULATED", seed = 1 }: WavesProps) {
  const d = useMemo(() => {
    const n = 80;
    const pts: [number, number][] = [];
    let v = 20;
    let rng = seed * 97;
    for (let i = 0; i < n; i += 1) {
      rng = (rng * 1103515245 + 12345) & 0x7fffffff;
      const r = rng / 0x7fffffff - 0.5;
      v += r * 3 + 0.18;
      pts.push([(i / (n - 1)) * 1000, 400 - v * 2.6]);
    }
    const first = pts[0];
    if (!first) {
      return "";
    }
    let path = `M ${first[0]},${first[1]}`;
    for (let i = 1; i < pts.length; i += 1) {
      const p = pts[i];
      if (!p) {
        continue;
      }
      path += ` L ${p[0]},${p[1]}`;
    }
    return path;
  }, [seed]);

  return (
    <div className="waves">
      <svg viewBox="0 0 1000 500" preserveAspectRatio="none">
        {[100, 200, 300, 400].map((y) => (
          <line key={y} x1="0" x2="1000" y1={y} y2={y} stroke="currentColor" opacity="0.08" />
        ))}
        {[200, 400, 600, 800].map((x) => (
          <line key={x} x1={x} x2={x} y1="0" y2="500" stroke="currentColor" opacity="0.06" />
        ))}
        <path d={d} stroke="var(--accent)" strokeWidth="1.5" fill="none" />
        <path d={`${d} L 1000,500 L 0,500 Z`} fill="var(--accent)" opacity="0.08" />
      </svg>
      <div className="label">
        <span>{label}</span>
        <span>{sub}</span>
      </div>
      <div className="corner">NET OF FEES · USD</div>
    </div>
  );
}
