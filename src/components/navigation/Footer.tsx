// src/components/navigation/Footer.tsx

import Link from "next/link";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-center border-t border-gray-200 text-gray-700 text-sm w-full fixed bottom-0 left-0 z-50 py-6">
      <div className="mb-2">
        © {new Date().getFullYear()} AURORA9. All rights reserved.
      </div>

      <div className="flex justify-center items-center space-x-2 mb-2">
        <Link
          href="https://www.linkedin.com/in/aurora9-ai-agent-09a253364/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-600"
        >
          <Linkedin size={32} className="text-blue-700" />
          <span className="font-medium">Follow us on LinkedIn</span>
        </Link>
      </div>

      <div className="space-x-4">
        <Link href="/terms" className="hover:underline">Terms</Link>
        <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        <Link href="/contact-us" className="hover:underline">Contact Us</Link>
        <Link href="/investors" className="hover:underline">Investors</Link>
        <Link href="/press" className="hover:underline">Press</Link>
        <Link href="/faq" className="hover:underline">FAQ</Link>
        <Link href="/sitemap" className="hover:underline">Sitemap</Link>
      </div>
    </footer>
  );
}
