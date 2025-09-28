import Link from 'next/link';
import Stripe from 'stripe';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import { Button } from './ui/button';

interface Props {
  product: Stripe.Product;
}

export default function ProductCard({ product }: Props) {
  const price = product.default_price as Stripe.Price;

  return (
    <Link href={`/products/${product.id}`} className="block h-full">
      <Card className="group h-full flex flex-col hover:shadow-2xl transition duration-300 ">
        {product.images && product.images[0] && (
          <div className="relative h-60 w-full">
            <Image
              alt={product.name}
              src={product.images[0]}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover group-hover:opacity-90 transition-opacity duration-300 rounded-t-lg"
            />
          </div>
        )}

        <CardHeader className="">
          <CardTitle className="text-lg md:text-xl font-bold line-clamp-1">
            {product.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="my-4 flex flex-col gap-4 flex-grow justify-between">
          {product.description && (
            <p className="text-sm md:text-base line-clamp-2">
              {product.description}
            </p>
          )}
          {price && price.unit_amount && (
            <p className="text-base md:text-lg font-bold">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
          <Button className="">View Details</Button>
        </CardContent>
      </Card>
    </Link>
  );
}
