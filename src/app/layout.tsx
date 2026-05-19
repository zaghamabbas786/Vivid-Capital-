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

export const metadata: Metadata = {
  title: {
    default: "Vivid Capital",
    template: "%s · Vivid Capital",
  },
  description:
    "Quantitative macro strategies across global FX, commodities, equity indices, and digital asset markets.",
  openGraph: {
    title: "Vivid Capital",
    description:
      "Quantitative macro strategies across global FX, commodities, equity indices, and digital asset markets.",
    url: "https://www.vividcapital.co.uk/",
    siteName: "Vivid Capital",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vivid Capital",
    description:
      "Quantitative macro strategies across global FX, commodities, equity indices, and digital asset markets.",
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
