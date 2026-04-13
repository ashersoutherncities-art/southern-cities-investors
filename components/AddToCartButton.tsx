"use client";

import Link from "next/link";
import { useMemo } from "react";
import { buildCartHref } from "@/lib/cart";
import { getCartItemsFromCookie, setCartItemsCookie } from "@/lib/cart-client";

export default function AddToCartButton({
  itemKey,
  label = "Add to Cart",
  className,
}: {
  itemKey: string;
  label?: string;
  className?: string;
}) {
  const href = useMemo(() => buildCartHref([itemKey]), [itemKey]);

  return (
    <Link
      href={href}
      onClick={() => {
        const existing = getCartItemsFromCookie();
        const next = Array.from(new Set([...existing, itemKey]));
        setCartItemsCookie(next);
      }}
      className={className}
    >
      {label}
    </Link>
  );
}
