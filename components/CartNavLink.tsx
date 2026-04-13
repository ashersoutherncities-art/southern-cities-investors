"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CART_QUERY_KEY, parseCartParam, buildCartHref } from "@/lib/cart";
import { getCartItemsFromCookie } from "@/lib/cart-client";

export default function CartNavLink({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const searchParams = useSearchParams();
  const queryCartItems = useMemo(() => parseCartParam(searchParams.get(CART_QUERY_KEY)), [searchParams]);
  const [cookieCartItems, setCookieCartItems] = useState<string[]>([]);

  useEffect(() => {
    setCookieCartItems(getCartItemsFromCookie());
  }, [searchParams]);

  const cartItems = queryCartItems.length ? queryCartItems : cookieCartItems;
  const cartHref = buildCartHref(cartItems);

  if (mobile) {
    return (
      <Link
        href={cartHref}
        onClick={onClick}
        className="block py-2 px-0 text-sm font-medium text-white/80 hover:text-orange transition-colors"
      >
        Cart ({cartItems.length})
      </Link>
    );
  }

  return (
    <Link href={cartHref} className="text-sm font-medium text-white/80 hover:text-orange transition-colors inline-flex items-center gap-2">
      <span>Cart</span>
      <span className="inline-flex min-w-5 h-5 px-1 items-center justify-center rounded-full bg-orange text-white text-xs font-semibold">
        {cartItems.length}
      </span>
    </Link>
  );
}
