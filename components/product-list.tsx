'use client';

import Stripe from 'stripe';
import ProductCard from './product-card';
import { useState } from 'react';

interface Props {
  products: Stripe.Product[];
}

export default function ProductList({ products }: Props) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredProduct = products.filter(product => {
    const term = searchTerm.toLowerCase();
    const nameMatch = product.name.toLocaleLowerCase().includes(term);
    const decriptionMatch = product.description
      ? product.description.toLocaleLowerCase().includes(term)
      : false;

    return nameMatch || decriptionMatch;
  });

  return (
    <section>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full max-w-md border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
        {filteredProduct.map(product => {
          return (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
