import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://southerncitiesinvestors.com"),
  title: "Southern Cities Investors | Property Review, Deal Submission, and Investor Support",
  description:
    "Southern Cities Investors helps owners, landowners, investors, wholesalers, agents, and operators determine whether a property should be sold, partnered on, improved, submitted, or reviewed as an investment opportunity.",
  keywords:
    "property review, real estate partnerships, investor support, deal submission, North Carolina real estate, landowners, wholesalers, operators",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logos/sc-investors-02.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logos/sc-investors-02.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Southern Cities Investors | Property Review, Deal Submission, and Investor Support",
    description:
      "Southern Cities Investors helps owners, landowners, investors, wholesalers, agents, and operators determine whether a property should be sold, partnered on, improved, submitted, or reviewed as an investment opportunity.",
    url: "https://southerncitiesinvestors.com",
    siteName: "Southern Cities Investors",
    images: [
      {
        url: "/logos/sc-investors-02.svg",
        width: 1200,
        height: 1200,
        alt: "Southern Cities Investors logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Southern Cities Investors | Property Review, Deal Submission, and Investor Support",
    description:
      "Southern Cities Investors helps owners, landowners, investors, wholesalers, agents, and operators determine whether a property should be sold, partnered on, improved, submitted, or reviewed as an investment opportunity.",
    images: ["/logos/sc-investors-02.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18126177237"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18126177237');
          `}
        </Script>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
