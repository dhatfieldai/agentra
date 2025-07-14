// src/app/about/vision/page.tsx

import { Metadata } from "next";
import JoinWaitlist from "@/components/forms/JoinWaitlist";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Vision | AURORA9",
  description: "Discover AURORA9’s long-term vision to empower every Amazon seller with fully autonomous AI agents to scale, adapt, and win in the future of eCommerce.",
};

export default function VisionPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Our Vision</h1>
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Empowering Sellers Through Autonomy</h2>
      <p className="mb-4 text-lg leading-relaxed">
        Our vision is to build the world’s most powerful agentic AI workforce — one that transforms Amazon Seller Central from a complex dashboard into a fully autonomous profit engine.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        We envision a future where eCommerce teams, solo entrepreneurs, and global brands no longer have to manage listings, campaigns, or compliance manually. Instead, our AI agents continuously learn, adapt, and make data-driven decisions across the entire Amazon ecosystem.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        AURORA9 will be the silent force behind the next generation of Amazon empires, blending autonomy with strategy, scalability with precision, and data with intuition — so sellers can do more, earn more, and stress less.
      </p>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Learn More</h3>
        <div className="space-x-4">
          <Link href="/about/mission" className="text-blue-600 hover:underline">← Mission Statement</Link>
          <Link href="/about" className="text-blue-600 hover:underline">About Us Overview</Link>
        </div>
      </div>

      <div className="mt-16">
        <JoinWaitlist />
      </div>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AURORA9 Vision",
          "description": "Discover AURORA9’s long-term vision to empower every Amazon seller with fully autonomous AI agents.",
          "url": "https://yourdomain.com/about/vision"
        })}
      </script>
    </main>
  );
}
