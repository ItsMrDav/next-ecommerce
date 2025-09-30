'use client';

import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cart-store';
import Link from 'next/link';
import { useEffect } from 'react';

export default function SuccessPage() {
  const { clearCart } = useCartStore();
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <section className="max-w-lg mx-auto text-center space-y-4">
      <h1 className="text-3xl font-semibold">Payment successful!</h1>
      <p>Thank you for your purchase. Your order is being processed.</p>
      <Button className="rounded-full" variant="outline">
        <Link href={'/products'}>Continue Shopping</Link>
      </Button>
    </section>
  );
}
