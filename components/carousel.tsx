'use client';

import Stripe from 'stripe';
import { Card, CardContent, CardTitle } from './ui/card';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Props {
  products: Stripe.Product[];
}

export default function Carousel({ products }: Props) {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const currentProduct = products[current];

  const price = currentProduct.default_price as Stripe.Price;

  return (
    <Card className="container relative overflow-hidden rounded">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="relative h-[30rem] w-full">
          <Image
            alt={currentProduct.name}
            src={currentProduct.images[0]}
            fill
            className="object-cover transition-opacity duration-500 ease-in-out"
          />
        </div>
      )}
      <CardContent className="absolute inset-0 flex flex-col justify-center items-center bg-black/20">
        <CardTitle className="mb-2 text-xs sm:text-lg md:text-3xl font-bold text-white ">
          {currentProduct.name}
        </CardTitle>
        {price && price.unit_amount && (
          <p className="text-sm md:text-xl text-white">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
