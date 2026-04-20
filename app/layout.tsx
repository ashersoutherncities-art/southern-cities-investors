import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://southerncitiesinvestors.com"),
  title: "Southern Cities Investors | Deep Discount Real Estate Acquisitions",
  description:
    "Southern Cities Investors acquires properties at deep discounts across North Carolina through off-market sourcing and creative finance.",
  keywords:
    "real estate acquisitions, off-market properties, deep discount real estate, North Carolina investors, private lending, JV partners, wholesale deals",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logos/sc-investors-02.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/logos/sc-investors-02.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title: "Southern Cities Investors | Deep Discount Real Estate Acquisitions",
    description:
      "Southern Cities Investors acquires properties at deep discounts across North Carolina through off-market sourcing and creative finance.",
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
    title: "Southern Cities Investors | Deep Discount Real Estate Acquisitions",
    description:
      "Southern Cities Investors acquires properties at deep discounts across North Carolina through off-market sourcing and creative finance.",
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
