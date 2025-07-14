// src/components/navigation/Navbar.tsx

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold">AURORA9</span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="hover:text-blue-500 font-medium">About Us</button>
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 z-10">
                <Link href="/about/mission" className="block px-4 py-2 hover:bg-gray-100">Mission Statement</Link>
                <Link href="/about/vision" className="block px-4 py-2 hover:bg-gray-100">Vision</Link>
              </div>
            </div>
            <Link href="/how-it-works" className="hover:text-blue-500 font-medium">How It Works</Link>
            <Link href="/pricing" className="hover:text-blue-500 font-medium">Pricing</Link>
            <Link href="/blog" className="hover:text-blue-500 font-medium">Blog</Link>
            <Link href="/contact-us" className="hover:text-blue-500 font-medium">Contact</Link>
            <Link href="/investors" className="hover:text-blue-500 font-medium">Investors</Link>
            <Link href="/careers" className="hover:text-blue-500 font-medium">Careers</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              disabled
              className="bg-gray-300 text-white px-4 py-2 rounded cursor-not-allowed"
            >
              Book a Demo
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="space-y-1">
            <div>
              <span className="font-semibold">About Us</span>
              <div className="ml-4 space-y-1">
                <Link href="/about/mission" className="block">Mission Statement</Link>
                <Link href="/about/vision" className="block">Vision</Link>
              </div>
            </div>
            <Link href="/how-it-works" className="block">How It Works</Link>
            <Link href="/pricing" className="block">Pricing</Link>
            <Link href="/blog" className="block">Blog</Link>
            <Link href="/contact-us" className="block">Contact</Link>
            <Link href="/investors" className="block">Investors</Link>
            <Link href="/careers" className="block">Careers</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
