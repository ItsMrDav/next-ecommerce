'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useCartStore } from '@/store/cart-store';
import { Trash } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { checkoutAction } from './checkout-action';

export default function CheckoutPage() {
  const { items, addItem, removeItem, clearItem } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (total === 0 || items.length === 0) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="container py-8 space-y-6">
      <h1 className="text-center text-2xl md:text-3xl font-bold">Checkout</h1>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="py-6 text-lg md:text-xl border-b">
            Order Summary
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="space-y-6">
            {items.map(item => (
              <li className="pb-6 flex border-b" key={item.id}>
                {/* Image 1st column  */}
                {item.imageUrl && (
                  <Link
                    className="relative w-20 aspect-video -ml-4 md:w-3/12 overflow-hidden"
                    href={`/products/${item.id}`}
                  >
                    <Image
                      alt={item.name}
                      src={item.imageUrl}
                      priority
                      fill
                      sizes="(max-width: 1400px) 100vw, 1400px"
                      className="object-cover"
                    />
                  </Link>
                )}
                {/* Item name,price and control buttons 2nd column */}
                <div className="w-full md:w-9/12 space-y-2">
                  <div className="flex justify-between gap-4">
                    <span className="font-medium">{item.name}</span>
                    <span className="font-semibold text-right">
                      ${((item.price * item.quantity) / 100).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      className="rounded-full cursor-pointer"
                      variant="outline"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                    >
                      -
                    </Button>
                    <span className="md:text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <Button
                      className="rounded-full cursor-pointer"
                      variant="outline"
                      size="sm"
                      onClick={() => addItem({ ...item, quantity: 1 })}
                    >
                      +
                    </Button>
                    <Button
                      className="rounded-full border-destructive cursor-pointer"
                      variant="outline"
                      onClick={() => clearItem(item.id)}
                    >
                      <Trash />
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right text-lg md:text-xl font-bold">
            Total: ${(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>

      <form
        className="max-w-xs mx-auto flex justify-between"
        action={checkoutAction}
      >
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <Button
          className="w-full font-bold tracking-widest cursor-pointer"
          variant="default"
          type="submit"
        >
          Proceed to Payment
        </Button>
      </form>
    </div>
  );
}
