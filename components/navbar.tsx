'use client';

import { useCartStore } from '@/store/cart-store';
import { Menu, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="hover:text-blue-600">
          Next Ecommerce
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link className="relative" href="/checkout">
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 grid place-items-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen(prev => !prev)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md text-center">
          <ul className="flex flex-col p-4 gap-2">
            <li>
              <Link className="block hover:text-blue-600" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="block hover:text-blue-600" href="/products">
                Products
              </Link>
            </li>
            <li>
              <Link className="block hover:text-blue-600" href="/checkout">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
}
