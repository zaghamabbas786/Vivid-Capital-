import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono, Source_Serif_4 } from "next/font/google";

import { SiteShell } from "@/components/vivid/SiteShell";

import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
  // Match standalone HTML: UI sans uses 300–600; variable avoids faux weights.
  weight: "variable",
});

// Bundled export embeds Source Serif 4 normal 300–500 + italic 300/400.
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
  weight: "variable",
});

export const metadata: Metadata = {
  title: {
    default: "Vivid Capital Portal",
    template: "%s · Vivid Capital Portal",
  },
  description:
    "Quantitative macro strategies across global FX, commodities, equity indices, and digital asset markets.",
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
