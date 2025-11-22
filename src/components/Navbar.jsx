import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wide">
          MyWebsite
        </Link>

        {/* Menu Items */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link href="/products" className="hover:text-yellow-300 transition">
            Products
          </Link>

          <Link href="/blog" className="hover:text-yellow-300 transition">
            Blog
          </Link>

          <Link href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
