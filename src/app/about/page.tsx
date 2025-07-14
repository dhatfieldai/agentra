// src/app/about/page.tsx

import Link from "next/link";

export const metadata = {
  title: "About Us | AURORA9 Agentic AI",
  description: "Learn how AURORA9 is redefining ecommerce with autonomous agentic AI agents managing marketing, SEO, and business growth strategies across platforms like Amazon and Shopify.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-32 px-4 md:px-12 pt-12 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <p className="text-lg mb-4 max-w-4xl">
        At <strong>AURORA9</strong>, we’re building the future of ecommerce with a bold vision: to create a fully autonomous AI workforce that drives growth—without the need for human micromanagement. Our platform empowers businesses to scale faster, smarter, and with full confidence by deploying intelligent Agentic AI-Agents that act as high-performing digital team members.
      </p>

      <p className="text-lg mb-4 max-w-4xl">
        Our service is modular by design, powered by specialized Agentic AI-Agents, each trained and responsible for managing key ecommerce functions across marketplace platforms. These include:
      </p>

      <ul className="list-disc ml-6 mb-4 text-lg space-y-1">
        <li>Marketing & Advertising</li>
        <li>Inventory Management</li>
        <li>UX/UI Optimization</li>
        <li>Keyword & SEO Strategy</li>
        <li>Data Analytics & Business Intelligence</li>
        <li>...and more</li>
      </ul>

      <p className="text-lg mb-4 max-w-4xl">
        Our technology integrates directly with marketplace backends such as Amazon Seller Central, Shopify, Walmart, and others. Each Agentic AI-Agent securely extracts and learns from historical and real-time data aligned to its area of responsibility. For example, the Marketing AI-Agent gathers all relevant advertising and sales performance data to autonomously implement and scale growth strategies.
      </p>

      <p className="text-lg mb-4 max-w-4xl">
        <strong>AURORA9</strong> offers three modes of operation to meet different business needs:
      </p>

      <ul className="list-disc ml-6 mb-4 text-lg space-y-1">
        <li><strong>Autonomous Mode</strong> – AI agents independently strategize and execute without requiring human approval.</li>
        <li><strong>Semi-autonomous Mode</strong> – AI assists with intelligent suggestions and automated execution, keeping you in control with oversight.</li>
        <li><strong>Progressive Mode</strong> – AI agents suggest data-backed decisions and wait for user approval before executing actions.</li>
      </ul>

      <p className="text-lg mb-4 max-w-4xl">
        Our platform is powered by the robust and secure AWS & IBM Watsonx Cloud, ensuring enterprise-grade performance, AI governance, and scalability. With this foundation, <strong>AURORA9</strong> delivers a governance-first, action-oriented, and explainable AI system designed to meet the trust and compliance requirements of today’s ecommerce leaders.
      </p>

      <p className="text-xl font-semibold mt-8 mb-2">This is more than automation.</p>
      <p className="text-xl mb-2">This is your 24/7 digital workforce—trained, integrated, and ready to scale.</p>
      <p className="text-xl font-bold">This is AURORA9.</p>

      <div className="mt-10 space-y-4">
        <Link href="/about/mission" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium">
          ➤ Read Our Mission Statement
        </Link>
        <Link href="/about/vision" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium">
          ➤ Read Our Vision for the Future
        </Link>
      </div>

      <script type="application/ld+json" suppressHydrationWarning>
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AURORA9",
            "url": "https://aurora9.ai",
            "logo": "https://aurora9.ai/logo.png",
            "sameAs": [
              "https://www.linkedin.com/in/aurora9-ai-agent-09a253364/"
            ],
            "description": "AURORA9 is an AI-powered SaaS platform delivering autonomous agentic AI agents to automate and optimize ecommerce operations across Amazon, Shopify, and Walmart."
          }
        `}
      </script>
    </main>
  );
}
