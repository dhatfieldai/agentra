"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const pathname = usePathname();

  const mainNavItems = [
    {
      label: "About Us",
      href: "/about",
      hasSubmenu: true,
      submenu: [
        { label: "Mission Statement", href: "/about/mission" },
        { label: "Vision", href: "/about/vision" }
      ]
    },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" }
  ];

  const isActiveLink = (href: string) => {
    if (href === "/about") {
      return pathname === "/about" || pathname.startsWith("/about/");
    }
    return pathname === href;
  };

  const mainLinkClass = (href: string) => {
    const isActive = isActiveLink(href);
    return `px-4 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
      isActive
        ? "text-white shadow-lg"
        : "text-white hover:text-white hover:shadow-lg"
    }`;
  };

  const submenuLinkClass = (href: string) => {
    const isActive = pathname === href;
    return `block px-4 py-3 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "text-white"
        : "text-white hover:text-white"
    }`;
  };

  return (
    <nav className="shadow-lg border-b" style={{ background: 'var(--background)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-all duration-300 group"
            aria-label="AURORA9 - Go to Homepage"
          >
            <div 
              className="px-4 py-2 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
              style={{ 
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              <span 
                className="text-heading-2 font-bold tracking-wider"
                style={{ 
                  color: '#60a5fa',
                  textShadow: '0 0 20px rgba(96, 165, 250, 0.6)',
                  filter: 'brightness(1.2)'
                }}
              >
                AURORA9
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {mainNavItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasSubmenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsAboutOpen(true)}
                    onMouseLeave={() => setIsAboutOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`${mainLinkClass(item.href)} flex items-center space-x-1`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    </Link>
                    
                    {/* Submenu Dropdown */}
                    {isAboutOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 rounded-lg shadow-xl border py-2 z-50" style={{ background: 'var(--background)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={submenuLinkClass(subItem.href)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.href} className={mainLinkClass(item.href)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Book a Demo Button (Disabled) */}
            <div className="relative group ml-2">
              <button
                disabled
                className="px-6 py-3 text-white rounded-lg text-sm font-medium cursor-not-allowed opacity-60"
                style={{ background: '#64748b' }}
              >
                Book a Demo
              </button>
              <div className="absolute hidden group-hover:block text-white text-xs px-3 py-2 rounded-lg shadow-lg mt-2 w-64 z-50" style={{ background: 'var(--bg-tertiary)' }}>
                Coming Soon – Subscribe to our waiting list to receive launch notification
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:opacity-80 p-2 rounded-lg transition-opacity duration-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden border-t" style={{ borderColor: 'rgba(59, 130, 246, 0.2)', background: 'var(--background)' }}>
            <div className="px-4 py-4 space-y-3">
              {mainNavItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 rounded-lg text-base font-medium text-white hover:opacity-80 transition-opacity duration-300"
                  >
                    {item.label}
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.hasSubmenu && item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-300 hover:text-white rounded-lg transition-all duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-600 space-y-3">
                <div className="block w-full py-3 px-4 text-center bg-gray-400 dark:bg-gray-600 text-white rounded-lg text-base font-bold opacity-60 cursor-not-allowed">
                  Book a Demo (Coming Soon)
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
