// v2
import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono, Source_Serif_4 } from "next/font/google";

import { SiteShell } from "@/components/vivid/SiteShell";

import "./globals.css";

// Weights/styles match the @font-face set bundled inside the standalone HTML
// (Inter Tight 300/400/500/600 normal; Source Serif 4 300/400/500 normal +
// 300/400 italic; JetBrains Mono 400/500 normal). Loading exactly those keeps
// the rendering byte-faithful to the export — no faux weights, no extras.
const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  adjustFontFallback: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const BASE_URL = "https://www.vividcapital.co.uk";
const OG_DESC = "Vivid Capital is a systematic quantitative macro fund based in Dubai. We run trend-following and model-driven strategies across FX, equity indices, commodities, digital assets and gold.";

const GLOBAL_KEYWORDS = [
  "Vivid Capital",
  "quantitative macro fund",
  "systematic macro trading",
  "quant fund Dubai",
  "hedge fund Dubai",
  "algorithmic trading firm",
  "systematic trading strategies",
  "FX systematic trading",
  "trend following fund",
  "digital assets fund",
  "systematic gold trading",
  "quantitative investment firm",
  "asset management Dubai",
  "investment firm UAE",
  "quant fund London",
  "alternative investments",
  "uncorrelated returns",
  "risk-adjusted returns",
  "liquid alternatives",
  "quantitative finance",
  "systematic FX",
  "volatility-targeted portfolio",
  "macro hedge fund",
  "algorithmic fund management",
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vivid Capital",
    template: "%s · Vivid Capital",
  },
  description: OG_DESC,
  keywords: GLOBAL_KEYWORDS,
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Vivid Capital | Systematic Quantitative Macro Fund",
    description: OG_DESC,
    url: BASE_URL,
    siteName: "Vivid Capital",
    type: "website",
    images: [
      {
        url: "/brand/vivid-capital.png",
        width: 1200,
        height: 630,
        alt: "Vivid Capital — Systematic Quantitative Macro Fund",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivid Capital | Systematic Quantitative Macro Fund",
    description: OG_DESC,
    images: ["/brand/vivid-capital.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vivid Capital",
              alternateName: ["Vivid Capital Dubai", "Vivid Capital Fund"],
              url: "https://www.vividcapital.co.uk",
              logo: "https://www.vividcapital.co.uk/brand/vivid-capital.png",
              description: OG_DESC,
              foundingLocation: "Dubai, UAE",
              numberOfEmployees: { "@type": "QuantitativeValue", minValue: 1 },
              knowsAbout: [
                "Quantitative macro trading",
                "Systematic FX strategies",
                "Trend following",
                "Digital asset management",
                "Systematic gold trading",
                "Algorithmic portfolio management",
                "Volatility-targeted risk allocation",
              ],
              address: [
                {
                  "@type": "PostalAddress",
                  addressLocality: "Dubai",
                  addressCountry: "AE",
                  addressRegion: "Dubai",
                },
                {
                  "@type": "PostalAddress",
                  addressLocality: "London",
                  addressCountry: "GB",
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "investor relations",
                url: "https://www.vividcapital.co.uk/contact",
              },
              sameAs: [
                "https://www.vividcapital.co.uk",
              ],
            }),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
