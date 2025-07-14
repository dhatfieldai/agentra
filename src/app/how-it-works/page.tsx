// src/app/how-it-works/page.tsx

import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How AURORA9 Works | Autonomous E-commerce AI Platform",
  description: "Discover how AURORA9 uses fully autonomous AI agents to streamline e-commerce operations, optimize growth, and scale intelligently across platforms like Amazon, Shopify, and Walmart.",
  openGraph: {
    title: "How AURORA9 Works",
    description:
      "Explore how AURORA9 deploys intelligent AI agents to manage marketing, inventory, analytics, and more — giving businesses the power to scale without micromanagement.",
    url: "https://aurora9agenticai.com/how-it-works",
    type: "website",
  },
  alternates: {
    canonical: "/how-it-works",
  },
};

export default function HowItWorksPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">How AURORA9 Works: Your Path to Autonomous E-commerce Growth</h1>

      <p className="mb-6 text-lg">
        AURORA9 empowers e-commerce sellers—from SMBs to enterprise—to scale faster and smarter using fully autonomous AI agents. Our platform integrates with Amazon Seller Central, Shopify, and Walmart, transforming historical and real-time data into automated, strategic actions.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Modular AI Agents for Key E-commerce Functions</h2>
        <p>
          AURORA9 includes specialized AI agents, each trained to handle critical e-commerce functions:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li><strong>Marketing AI Agent</strong>: Manages PPC, SEO, and listings.</li>
          <li><strong>Inventory Management AI Agent</strong>: Forecasts and restocks efficiently.</li>
          <li><strong>Customer Experience AI Agent</strong>: Responds to tickets and reviews.</li>
          <li><strong>Pricing AI Agent</strong>: Adjusts pricing dynamically.</li>
          <li><strong>Analytics AI Agent</strong>: Provides insights and growth forecasting.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Intelligent Operation Modes</h2>
        <p className="mb-2">
          Choose your preferred level of AI control:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Progressive Mode</strong>: You approve every decision — AI suggests only.</li>
          <li><strong>Semi-Autonomous Mode</strong>: AI handles repetitive tasks, you approve the strategic ones.</li>
          <li><strong>Full Autonomous Mode</strong>: AI agents manage operations end-to-end, 24/7.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Advanced AI Infrastructure</h2>
        <p>
          Built on AWS, AURORA9 uses:
        </p>
        <ul className="list-disc list-inside mt-3 space-y-2">
          <li><strong>Large Language Models (LLMs)</strong>: Deep contextual AI knowledge.</li>
          <li><strong>Retrieval Augmented Generation (RAG)</strong>: Factual and accurate AI responses.</li>
          <li><strong>Prompt Engineering</strong>: Targeted and explainable AI outputs.</li>
          <li><strong>AI Governance & Security</strong>: Built for scale, privacy, and control.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Build Smarter, Scale Faster</h2>
        <p>
          With AURORA9, you’re not just automating — you’re creating a resilient, intelligent, self-optimizing e-commerce business that outperforms the competition.
        </p>
      </section>
    </main>
  );
}
