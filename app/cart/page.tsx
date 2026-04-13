import { Suspense } from "react";
import CartContent from "@/components/CartContent";

export default function CartPage() {
  return (
    <Suspense
      fallback={
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-navy mb-4">Loading cart...</h1>
          </div>
        </section>
      }
    >
      <CartContent />
    </Suspense>
  );
}
