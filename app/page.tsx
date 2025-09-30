import Carousel from '@/components/carousel';
import { Button } from '@/components/ui/button';
import { stripe } from '@/lib/stripe';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
    limit: 9,
  });

  const random = Math.floor(Math.random() * 5);
  return (
    <div className="container space-y-6">
      <section className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8  bg-black/20 rounded">
        <div className="max-w-md mx-auto space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight ">
            Welcome to Next Ecommerce
          </h2>
          <p className="text-muted-foreground">
            Discover the latest products at the best prices.
          </p>
          <Button asChild variant="default" className="rounded-full px-6 py-6">
            <Link href="/products">Browse All Products</Link>
          </Button>
        </div>

        <Image
          priority
          alt="Banner Image"
          width={400}
          height={400}
          src={products.data[random].images[0]}
          className="object-cover mx-auto md:mx-0 rounded scale-125 md:scale-200"
        />
        {/* </div> */}
      </section>

      <section>
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
