import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Southern Cities Investors",
  description:
    "Portfolio details available to qualified partners upon request.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange font-semibold text-sm uppercase tracking-wider mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Track Record of Execution
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            Our portfolio spans single-family, multifamily, land, and commercial
            assets acquired at significant discounts across multiple markets.
          </p>
        </div>
      </section>

      {/* Private Portfolio */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-navy/[0.05] mb-8">
              <svg
                className="w-8 h-8 text-navy/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Portfolio Details Available Upon Request
            </h2>
            <p className="text-lg text-navy/60 leading-relaxed mb-8">
              Detailed portfolio information -- including asset-level
              performance, acquisition metrics, and disposition history -- is
              available to qualified partners, lenders, and institutional
              investors upon request.
            </p>
            <p className="text-navy/40 text-sm mb-10">
              To request access, please reach out through our contact page with
              a brief description of your investment focus and how you would
              like to partner.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-semibold rounded-lg transition-colors"
            >
              Request Portfolio Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
