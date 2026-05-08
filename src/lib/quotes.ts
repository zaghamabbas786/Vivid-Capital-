import "server-only";

export type TickerDir = "up" | "down";
export type TickerTuple = readonly [
  symbol: string,
  value: string,
  change: string,
  direction: TickerDir,
];

interface Quote {
  price: number;
  prev: number;
}

const ORDER = [
  "DXY",
  "EUR/USD",
  "USD/JPY",
  "GBP/USD",
  "BRENT",
  "GOLD",
  "COPPER",
  "SPX",
  "NKY",
  "BTC",
  "ETH",
  "US10Y",
  "BUND10Y",
] as const;

type Symbol = (typeof ORDER)[number];

const FALLBACKS: Readonly<Record<Symbol, TickerTuple>> = {
  DXY: ["DXY", "104.28", "+0.14%", "up"],
  "EUR/USD": ["EUR/USD", "1.0742", "\u22120.22%", "down"],
  "USD/JPY": ["USD/JPY", "154.11", "+0.38%", "up"],
  "GBP/USD": ["GBP/USD", "1.2564", "+0.09%", "up"],
  BRENT: ["BRENT", "82.40", "\u22120.91%", "down"],
  GOLD: ["GOLD", "2,318", "+0.44%", "up"],
  COPPER: ["COPPER", "4.212", "\u22120.18%", "down"],
  SPX: ["SPX", "5,148", "+0.27%", "up"],
  NKY: ["NKY", "39,812", "+1.02%", "up"],
  BTC: ["BTC", "68,412", "+2.14%", "up"],
  ETH: ["ETH", "3,824", "+1.68%", "up"],
  US10Y: ["US10Y", "4.284", "+2.1bp", "up"],
  BUND10Y: ["BUND10Y", "2.412", "\u22120.4bp", "down"],
};

const YAHOO: Partial<Record<Symbol, string>> = {
  DXY: "DX-Y.NYB",
  "EUR/USD": "EURUSD=X",
  "USD/JPY": "USDJPY=X",
  "GBP/USD": "GBPUSD=X",
  BRENT: "BZ=F",
  GOLD: "GC=F",
  COPPER: "HG=F",
  SPX: "^GSPC",
  NKY: "^N225",
  BTC: "BTC-USD",
  ETH: "ETH-USD",
  US10Y: "^TNX",
};

// Stooq is used as a secondary source for symbols Yahoo does not expose.
// Note: Stooq's free CSV currently returns "N/D" for `10deuy.b` (German 10Y
// bund yield); it stays here as a best-effort path. If both sources fail, the
// per-symbol FALLBACKS table is used so the marquee never breaks.
const STOOQ: Partial<Record<Symbol, string>> = {
  BUND10Y: "10deuy.b",
};

const REVALIDATE_SECONDS = 60;

interface YahooMeta {
  regularMarketPrice?: number;
  regularMarketTime?: number;
  chartPreviousClose?: number;
  previousClose?: number;
}

interface YahooQuoteIndicator {
  close?: (number | null)[];
}

interface YahooIndicators {
  quote?: YahooQuoteIndicator[];
}

interface YahooChartResult {
  meta?: YahooMeta;
  timestamp?: number[];
  indicators?: YahooIndicators;
}

interface YahooChartResponse {
  chart?: {
    result?: YahooChartResult[] | null;
    error?: unknown;
  };
}

const SECONDS_PER_DAY = 86_400;

function priorDailyClose(result: YahooChartResult): number | undefined {
  const meta = result.meta;
  const ts = result.timestamp;
  const closes = result.indicators?.quote?.[0]?.close;
  if (
    !meta ||
    typeof meta.regularMarketTime !== "number" ||
    !Array.isArray(ts) ||
    !Array.isArray(closes)
  ) {
    return undefined;
  }
  // Yahoo's chart endpoint omits `previousClose` and exposes only
  // `chartPreviousClose`, which is the close BEFORE the first bar of the
  // requested range (5d here) — i.e. up to a week back. To compute a faithful
  // day-over-day change we walk the bars and take the most recent non-null
  // close whose UTC day is strictly before today's UTC day.
  const todayDay = Math.floor(meta.regularMarketTime / SECONDS_PER_DAY);
  for (let i = ts.length - 1; i >= 0; i -= 1) {
    const t = ts[i];
    const c = closes[i];
    if (typeof t !== "number" || typeof c !== "number" || c === 0) continue;
    const day = Math.floor(t / SECONDS_PER_DAY);
    if (day < todayDay) return c;
  }
  return undefined;
}

async function fetchYahoo(symbol: string): Promise<Quote | null> {
  try {
    const res = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=5d`,
      {
        next: { revalidate: REVALIDATE_SECONDS },
        headers: {
          "User-Agent":
            "Mozilla/5.0 (compatible; VividCapital/1.0; +https://vividcapital.example)",
          Accept: "application/json",
        },
      },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as YahooChartResponse;
    const result = data.chart?.result?.[0];
    if (!result) return null;
    const meta = result.meta;
    if (!meta || typeof meta.regularMarketPrice !== "number") return null;
    const price = meta.regularMarketPrice;
    const prev =
      priorDailyClose(result) ??
      meta.previousClose ??
      meta.chartPreviousClose;
    if (typeof prev !== "number" || prev === 0) return null;
    return { price, prev };
  } catch {
    return null;
  }
}

async function fetchStooq(symbol: string): Promise<Quote | null> {
  try {
    const res = await fetch(
      `https://stooq.com/q/l/?s=${encodeURIComponent(symbol)}&f=soc&e=csv`,
      {
        next: { revalidate: REVALIDATE_SECONDS },
        headers: { Accept: "text/csv" },
      },
    );
    if (!res.ok) return null;
    const csv = (await res.text()).trim();
    const lines = csv.split(/\r?\n/);
    if (lines.length < 2) return null;
    const row = lines[1];
    if (!row) return null;
    const cells = row.split(",");
    const open = Number(cells[1]);
    const close = Number(cells[2]);
    if (!Number.isFinite(open) || !Number.isFinite(close) || open === 0) {
      return null;
    }
    return { price: close, prev: open };
  } catch {
    return null;
  }
}

function formatValue(sym: Symbol, n: number): string {
  if (sym === "EUR/USD" || sym === "GBP/USD") return n.toFixed(4);
  if (sym === "USD/JPY" || sym === "DXY" || sym === "BRENT") return n.toFixed(2);
  if (sym === "COPPER") return n.toFixed(3);
  if (sym === "US10Y" || sym === "BUND10Y") return n.toFixed(3);
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
}

function formatChange(sym: Symbol, q: Quote): { chg: string; dir: TickerDir } {
  const diff = q.price - q.prev;
  const dir: TickerDir = diff >= 0 ? "up" : "down";
  const sign = diff >= 0 ? "+" : "\u2212";
  if (sym === "US10Y" || sym === "BUND10Y") {
    const bp = Math.abs(diff) * 100;
    return { chg: `${sign}${bp.toFixed(1)}bp`, dir };
  }
  const pct = Math.abs((diff / q.prev) * 100);
  return { chg: `${sign}${pct.toFixed(2)}%`, dir };
}

async function resolve(sym: Symbol): Promise<TickerTuple> {
  const yahoo = YAHOO[sym];
  const stooq = STOOQ[sym];
  let quote: Quote | null = null;
  if (yahoo) quote = await fetchYahoo(yahoo);
  if (!quote && stooq) quote = await fetchStooq(stooq);
  if (!quote) return FALLBACKS[sym];
  const value = formatValue(sym, quote.price);
  const { chg, dir } = formatChange(sym, quote);
  return [sym, value, chg, dir];
}

export async function getTickerItems(): Promise<readonly TickerTuple[]> {
  return Promise.all(ORDER.map(resolve));
}
