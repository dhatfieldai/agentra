// ✅ src/components/navigation/Footer.tsx

import Link from 'next/link';
import DarkModeToggle from '../ui/DarkModeToggle';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t" style={{ background: 'var(--background)', color: 'var(--foreground)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
        {/* Far Left Column - About Us */}
        <div className="space-y-4 md:pr-8">
          <h3 className="text-heading-2 text-white">About Us</h3>
          <p className="text-body leading-relaxed" style={{ color: '#cbd5e1' }}>
            AURORA9 is revolutionizing e-commerce automation with intelligent AI agents that work 24/7 to optimize your business operations. 
            Our cutting-edge technology empowers entrepreneurs to scale effortlessly while maintaining peak performance across all platforms. 
            We&apos;re dedicated to transforming how businesses operate in the digital age through autonomous AI-driven solutions.
          </p>
          <div className="flex flex-col space-y-2">
            <Link
              href="/about"
              className="inline-block font-medium hover:underline transition-colors"
              style={{ color: 'var(--accent)' }}
            >
              Read More About Us →
            </Link>
            <Link
              href="/about/mission"
              className="inline-block font-medium hover:underline transition-colors"
              style={{ color: 'var(--accent)' }}
            >
              Our Mission →
            </Link>
            <Link
              href="/about/vision"
              className="inline-block font-medium hover:underline transition-colors"
              style={{ color: 'var(--accent)' }}
            >
              Our Vision →
            </Link>
          </div>
        </div>

        {/* Far Right Column - Quick Links & Social Media */}
        <div className="space-y-3 md:pl-8 md:ml-auto md:text-right">
          <h3 className="text-heading-2 text-white mb-4">Quick Links</h3>
          <div className="space-y-2">
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/contact-us">Contact Us</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/investors">Investors</FooterLink>
            <FooterLink href="/press">Press</FooterLink>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink href="/sitemap">Sitemap</FooterLink>
            <FooterLink href="/terms">Terms</FooterLink>
          </div>

          {/* Social Media */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-zinc-700 md:flex md:justify-end">
            <a
              href="https://www.linkedin.com/in/aurora9-ai-agent-09a253364/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-medium">Follow Us on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs mt-10" style={{ color: '#64748b' }}>
        &copy; {new Date().getFullYear()} AURORA9. All rights reserved.
      </div>

      {/* Dark Mode Toggle positioned in bottom-right corner */}
      <DarkModeToggle />
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block hover:underline transition-colors md:text-right text-body"
      style={{ color: '#cbd5e1' }}
    >
      {children}
    </Link>
  );
}
