"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact" }
  ];

  const linkClass = (href: string) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      pathname === href
        ? "bg-indigo-600 text-white"
        : "text-gray-700 dark:text-gray-200 hover:text-indigo-600"
    }`;

  return (
    <nav className="bg-white dark:bg-zinc-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/AURORA9.png"
              alt="AURORA9 Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              AURORA9
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 text-gray-700 dark:text-gray-200 font-medium">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}

            {/* Join Waitlist */}
            <Link
              href="/contact-us"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm font-semibold"
            >
              Join Waitlist
            </Link>

            {/* Disabled Book a Demo */}
            <div className="relative group">
              <button
                disabled
                className="px-4 py-2 bg-gray-400 text-white rounded text-sm font-semibold cursor-not-allowed"
              >
                Book a Demo
              </button>
              <div className="absolute hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded shadow-md mt-2">
                Coming Soon – Subscribe to our waiting list to receive launch notification
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-800 dark:text-white"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4 text-gray-700 dark:text-gray-200 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 hover:text-indigo-600"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-green-600 font-semibold"
            >
              Join Waitlist
            </Link>
            <div className="block px-3 py-2 text-gray-400 cursor-not-allowed">
              Book a Demo (Coming Soon)
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
