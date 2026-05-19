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
const OG_DESC = "Quantitative macro strategies across global FX, commodities, equity indices, and digital asset markets.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vivid Capital",
    template: "%s · Vivid Capital",
  },
  description: OG_DESC,
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Vivid Capital",
    description: OG_DESC,
    url: BASE_URL,
    siteName: "Vivid Capital",
    type: "website",
    images: [
      {
        url: "/brand/vivid-capital.png",
        width: 1200,
        height: 630,
        alt: "Vivid Capital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivid Capital",
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
              url: "https://www.vividcapital.co.uk",
              logo: "https://www.vividcapital.co.uk/brand/vivid-capital.png",
              description: OG_DESC,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "investor relations",
                url: "https://www.vividcapital.co.uk/contact",
              },
            }),
          }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
