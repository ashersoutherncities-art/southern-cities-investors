import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Southern Cities Investors | Deep Discount Real Estate Acquisitions",
  description:
    "Southern Cities Investors acquires properties at deep discounts across North Carolina through off-market sourcing and creative finance.",
  keywords:
    "real estate acquisitions, off-market properties, deep discount real estate, North Carolina investors, private lending, JV partners, wholesale deals",
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
