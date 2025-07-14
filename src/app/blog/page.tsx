// src/app/blog/page.tsx

import JoinWaitlist from "@/components/forms/JoinWaitlist";
import Link from "next/link";
import Head from "next/head";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | AURORA9 Agentic AI</title>
        <meta name="description" content="Explore how AURORA9’s AI agents are transforming Amazon Seller operations into scalable, autonomous workflows." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "AURORA9 Blog",
          "url": "https://yourdomain.com/blog",
          "description": "Insights on AI-driven e-commerce from the creators of AURORA9, the fully autonomous agentic AI platform for Amazon Sellers."
        })}} />
      </Head>

      <main className="min-h-screen pb-32 px-4 md:px-12 pt-10 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold mb-6">AURORA9 Blog</h1>
        <p className="mb-10 text-lg max-w-2xl">
          Stay updated with the latest insights on AI-powered e-commerce automation, Agentic AI, and how AURORA9 is transforming the Amazon seller experience.
        </p>

        {/* Featured Blog Post Card */}
        <article className="border rounded-lg shadow-md p-6 mb-12 bg-white dark:bg-gray-800 transition">
          <h2 className="text-2xl font-semibold mb-2">Unlock Unprecedented E-commerce Growth</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            July 12, 2025 · By AURORA9 Team
          </p>
          <p className="text-md leading-relaxed mb-4">
            Discover how AURORA9’s fully autonomous AI agents redefine Amazon Seller Central with intelligent marketing, inventory, and multi-agent coordination—delivering exponential growth and freeing sellers from micromanagement.
          </p>
          <Link
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            Read More →
          </Link>
        </article>

        {/* Join Waitlist CTA */}
        <section className="mt-16 max-w-2xl">
          <h3 className="text-2xl font-semibold mb-4">🚀 Join the AURORA9 Waitlist</h3>
          <p className="mb-4">
            Be among the first to experience autonomous Amazon selling. Enter your email to receive launch updates.
          </p>
          <JoinWaitlist />
        </section>
      </main>
    </>
  );
}
