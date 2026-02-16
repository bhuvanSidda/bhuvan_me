import YahooFinance from "yahoo-finance2";
import { NextResponse } from "next/server";

const yf = new YahooFinance({ suppressNotices: ["yahooSurvey"] });

const SYMBOLS = [
  { label: "SPX", yahoo: "^GSPC" },
  { label: "NDX", yahoo: "^NDX" },
  { label: "DJI", yahoo: "^DJI" },
  { label: "BTC", yahoo: "BTC-USD" },
  { label: "ETH", yahoo: "ETH-USD" },
  { label: "10Y", yahoo: "^TNX" },
  { label: "DXY", yahoo: "DX-Y.NYB" },
  { label: "GOLD", yahoo: "GC=F" },
  { label: "OIL", yahoo: "CL=F" },
  { label: "VIX", yahoo: "^VIX" },
];

function fmt(n: number): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export async function GET() {
  try {
    const yahooSymbols = SYMBOLS.map((s) => s.yahoo);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const quotes: any[] = await (yf as any).quote(yahooSymbols);

    const quoteMap = new Map<string, Record<string, any>>();
    for (const q of quotes) {
      if (q?.symbol) {
        quoteMap.set(q.symbol, q);
      }
    }

    const items = SYMBOLS.map((s) => {
      const q = quoteMap.get(s.yahoo);
      if (!q) return null;

      const price: number = q.regularMarketPrice ?? 0;
      const change: number = q.regularMarketChange ?? 0;
      const changePct: number = q.regularMarketChangePercent ?? 0;
      const up = change >= 0;
      const sign = up ? "+" : "";

      if (s.label === "10Y") {
        return {
          symbol: s.label,
          value: `${price.toFixed(2)}%`,
          change: `${sign}${change.toFixed(2)}`,
          up,
        };
      }

      if (s.label === "VIX") {
        return {
          symbol: s.label,
          value: fmt(price),
          change: `${sign}${change.toFixed(2)}`,
          up,
        };
      }

      return {
        symbol: s.label,
        value: fmt(price),
        change: `${sign}${changePct.toFixed(2)}%`,
        up,
      };
    }).filter(Boolean);

    return NextResponse.json(items, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=120",
      },
    });
  } catch (e) {
    console.error("Ticker API error:", e);
    return NextResponse.json([], { status: 500 });
  }
}
