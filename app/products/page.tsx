import ProductList from '@/components/product-list';
import { stripe } from '@/lib/stripe';

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ['data.default_price'],
  });

  return (
    <div className="container space-y-6">
      <h1 className="mt-6 text-center text-3xl font-bold leading-none tracking-tight text-foreground">
        All Products
      </h1>
      <ProductList products={products.data} />
    </div>
  );
}
