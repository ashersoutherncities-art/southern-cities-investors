"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PaymentForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tier = searchParams.get("tier") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const normalizedTier = tier.toLowerCase().replace(/ /g, "-");

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          tier: normalizedTier,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }

      // Redirect to Stripe checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError("Failed to process payment");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange/50"
          placeholder="(555) 000-0000"
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-orange hover:bg-orange/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-50"
      >
        {loading ? "Processing..." : `Continue to Payment`}
      </button>

      <p className="text-xs text-navy/60 text-center">
        Secured checkout powered by Stripe
      </p>
    </form>
  );
}
