import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div className="container  flex items-center justify-between py-4">
        <Link href="/" className="hover:text-blue-600">
          Next Ecommerce
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>
        </div>
        <div className="flex items-center space-x-4"></div>
      </div>
    </nav>
  );
}
