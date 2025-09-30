'use client';

import { useCartStore } from '@/store/cart-store';
import { Menu, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ModeToggle } from './mode-toggle';

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
    <nav className="sticky top-0 z-50 shadow bg-card">
      <div className="container py-4 flex items-center justify-between">
        <Link
          className="text-xl lg:text-2xl font-bold font-[Palatino] tracking-normal"
          href="/"
        >
          Next Ecommerce
        </Link>

        {/* absolute left-1/2 -translate-x-1/2 FOR making absolute centered*/}
        <div className="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2">
          <Link
            className="p-2 rounded-xl tracking-wider hover:bg-accent transition duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className="p-2 rounded-xl tracking-wider hover:bg-accent transition duration-300"
            href="/products"
          >
            Products
          </Link>
          <Link
            className="p-2 rounded-xl tracking-wider hover:bg-accent transition duration-300"
            href="/checkout"
          >
            Checkout
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link className="relative" href="/checkout">
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 grid place-items-center rounded-full bg-destructive text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            className="md:hidden cursor-pointer"
            variant="ghost"
            onClick={() => setMobileOpen(prev => !prev)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
          <ModeToggle />
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-card shadow-md text-center">
          <ul className="flex justify-center p-4 gap-2">
            <li>
              <Link
                className="p-2 rounded-xl tracking-widest hover:bg-accent transition duration-300"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="p-2 rounded-xl tracking-widest hover:bg-accent transition duration-300"
                href="/products"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                className="p-2 rounded-xl tracking-widest hover:bg-accent transition duration-300"
                href="/checkout"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
}
