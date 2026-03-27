import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Southern Cities Investors | We Buy Properties Fast in Charlotte, NC",
  description: "Sell your house fast in Charlotte. Any condition. No repairs needed. Cash offers. Close in 7-30 days. Off-market acquisitions, distressed properties, creative deals.",
  keywords: "sell house fast Charlotte, cash home buyers Charlotte NC, sell distressed property, we buy houses Charlotte, fast home sale, sell house as-is Charlotte",
  icons: {
    icon: '/logos/sc-enterprises-01.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script 
          src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places" 
          async 
          defer
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
