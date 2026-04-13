import Link from "next/link";

export default function CancelledPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8 text-center">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
            <svg
              className="h-6 w-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-navy mb-2">Payment Cancelled</h2>
        <p className="text-navy/60 mb-8">
          Your payment was not completed. No charges have been made to your account.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
