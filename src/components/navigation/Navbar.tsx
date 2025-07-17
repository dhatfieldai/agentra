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
    <nav 
      className="shadow-lg border-b fixed top-0 left-0 right-0 z-50" 
      style={{ 
        background: 'rgba(10, 11, 20, 0.95)', 
        borderColor: 'rgba(59, 130, 246, 0.2)',
        backdropFilter: 'blur(10px)'
      }}
    >
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
            className="md:hidden p-3 rounded-lg transition-all duration-200 flex items-center justify-center"
            style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              minWidth: '48px',
              minHeight: '48px',
              color: '#60a5fa'
            }}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div 
            className="md:hidden border-t"
            style={{ 
              borderColor: 'rgba(59, 130, 246, 0.3)', 
              background: 'rgba(10, 11, 20, 0.95)',
              backdropFilter: 'blur(10px)',
              position: 'relative',
              zIndex: 50
            }}
          >
            <div className="px-4 py-6 space-y-4">
              {mainNavItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 px-4 rounded-lg text-lg font-medium transition-all duration-300"
                    style={{
                      color: '#60a5fa',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.2)',
                      minHeight: '48px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {item.label}
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.hasSubmenu && item.submenu && (
                    <div className="ml-4 mt-3 space-y-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-3 px-4 rounded-lg transition-all duration-200"
                          style={{
                            color: '#cbd5e1',
                            background: 'rgba(59, 130, 246, 0.05)',
                            border: '1px solid rgba(59, 130, 246, 0.1)',
                            minHeight: '44px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t space-y-3" style={{ borderColor: 'rgba(59, 130, 246, 0.2)' }}>
                <div 
                  className="block w-full py-4 px-4 text-center rounded-lg text-lg font-bold opacity-60 cursor-not-allowed"
                  style={{
                    background: 'rgba(100, 116, 139, 0.5)',
                    color: '#cbd5e1',
                    border: '1px solid rgba(100, 116, 139, 0.3)',
                    minHeight: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
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
