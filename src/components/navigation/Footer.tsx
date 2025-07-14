// ✅ src/components/navigation/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-gray-300 py-12 border-t border-zinc-200 dark:border-zinc-700">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Left Column */}
        <div className="space-y-2">
          <FooterLink href="/about">About Us</FooterLink>
          <FooterLink href="/careers">Careers</FooterLink>
          <FooterLink href="/contact-us">Contact Us</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>
          <FooterLink href="/how-it-works">How It Works</FooterLink>
        </div>

        {/* Center Column */}
        <div className="space-y-2">
          <FooterLink href="/investors">Investors</FooterLink>
          <FooterLink href="/press">Press</FooterLink>
          <FooterLink href="/pricing">Pricing</FooterLink>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/sitemap">Sitemap</FooterLink>
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          <FooterLink href="/terms">Terms</FooterLink>
          <a
            href="mailto:aurora9ai@gmail.com"
            className="hover:underline hover:text-indigo-600 transition-colors"
          >
            Email Us
          </a>
          <a
            href="https://github.com/Oasis11217AI/aurora9agenticAI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-indigo-600 transition-colors"
          >
            GitHub Repository
          </a>
          <FooterLink href="/blog">Blog</FooterLink>
          <FooterLink href="/join-waitlist">Join Waitlist</FooterLink>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 dark:text-zinc-500 mt-10">
        &copy; {new Date().getFullYear()} AURORA9. All rights reserved.
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block hover:underline hover:text-indigo-600 transition-colors"
    >
      {children}
    </Link>
  );
}
