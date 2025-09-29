'use client';

import Stripe from 'stripe';
import Image from 'next/image';
import { Button } from './ui/button';
import { useCartStore } from '@/store/cart-store';

interface Props {
  product: Stripe.Product;
}

export default function ProductDetail({ product }: Props) {
  const { items, addItem, removeItem } = useCartStore(); //Comes from Zustend store
  const cartItem = items.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const price = product.default_price as Stripe.Price;

  const onAddItem = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: price.unit_amount as number,
      imageUrl: product.images ? product.images[0] : null,
      quantity: 1,
    });
  };

  return (
    <div className="container flex flex-col md:flex-row items-center">
      {product.images && product.images[0] && (
        <div className="relative h-90 w-full md:w-5/12 overflow-hidden">
          <Image
            alt={product.name}
            src={product.images[0]}
            priority
            fill
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover transition hover:opacity-90 hover:scale-110 duration-300"
          />
        </div>
      )}

      <div className="md:w-7/12 flex flex-col gap-4">
        <h1 className="text-xl md:text-2xl font-bold">{product.name}</h1>
        {product.description && (
          <p className="text-base md:text-lg md:max-w-2xl">
            {product.description}
          </p>
        )}
        {price && price.unit_amount && (
          <p className="text-lg md:text-xl font-semibold">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}

        <div className="flex items-center space-x-2 md:space-x-4">
          <Button
            variant={'outline'}
            className="rounded-full"
            onClick={() => removeItem(product.id)}
          >
            -
          </Button>
          <span className="text-lg md:text-xl font-semibold">{quantity}</span>
          <Button
            variant={'outline'}
            className="rounded-full"
            onClick={onAddItem}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
