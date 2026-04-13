import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow p-8 text-center">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-navy mb-2">Payment Successful</h2>
        <p className="text-navy/60 mb-8">
          Thank you. If you purchased a digital product or membership, we will follow up with access details. If you purchased a higher-touch service, we will reach out with next steps shortly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-navy hover:bg-navy/90 text-white font-semibold rounded-lg transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
