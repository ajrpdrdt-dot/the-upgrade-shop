import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Outfit } from "next/font/google";
import Script from "next/script";
import { Footer, StickyBar } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ChatWidget } from "@/components/ChatWidget";
import { GoogleAdsTracking } from "@/components/GoogleAdsTracking";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "The Upgrade Shop | Performance and engine work in River Falls",
    template: "%s | The Upgrade Shop",
  },
  description:
    "TUS Shop Inc. is The Upgrade Shop in River Falls, WI. Performance upgrades, general repair, and engine swaps for European and high-end cars serving Hudson, Stillwater, and the St. Croix valley.",
  authors: [{ name: site.legalName }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: site.brand,
    locale: "en_US",
    images: [{ url: "/assets/og.webp", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${ibm.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18088070718"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18088070718');
gtag('config', 'G-QYPFRDJGZ6');`,
          }}
        ></script>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <StickyBar />
        <GoogleAdsTracking />
        {/* GHL form embed helper (needed on any page with a QuoteForm iframe) */}
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
        {/* GoHighLevel chat widget — only on pages without the phone/SMS-consent form */}
        <ChatWidget />
      </body>
    </html>
  );
}
