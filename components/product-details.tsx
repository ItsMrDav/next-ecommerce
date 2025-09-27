import Stripe from 'stripe';
import Image from 'next/image';
import { Button } from './ui/button';

interface Props {
  product: Stripe.Product;
}

export default function ProductDetail({ product }: Props) {
  const price = product.default_price as Stripe.Price;

  return (
    <div className="container flex flex-col lg:flex-row items-center">
      {product.images && product.images[0] && (
        <div className="relative h-96 w-full">
          <Image
            alt={product.name}
            src={product.images[0]}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
          />
        </div>
      )}

      <div>
        <h1>{product.name}</h1>
        {product.description && <p>{product.description}</p>}
        {price && price.unit_amount && (
          <p className="text-sm md:text-lg font-semibold">
            ${(price.unit_amount / 100).toFixed(2)}
          </p>
        )}

        <div>
          <Button variant={'outline'}>-</Button>
          <span>0</span>
          <Button variant={'outline'}>+</Button>
        </div>
      </div>
    </div>
  );
}
