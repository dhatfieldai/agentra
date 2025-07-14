// src/app/about/mission/page.tsx

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission | AURORA9",
  description: "Explore AURORA9’s mission to revolutionize eCommerce through a fully autonomous AI workforce built to scale Amazon Seller success.",
};

export default function MissionStatementPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Redefining the Future of eCommerce</h2>
      <p className="mb-4 text-lg leading-relaxed">
        At <strong>AURORA9</strong>, our mission is to eliminate friction, reduce overhead, and drive exponential growth for Amazon sellers through cutting-edge, autonomous AI agents. We believe the future of eCommerce is autonomous, intelligent, and deeply integrated.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        We are committed to creating an AI-powered workforce that operates independently — handling product research, pricing, compliance, fulfillment, and marketing — freeing entrepreneurs and enterprise teams to focus on vision, not repetition.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        With <strong>real-time decision-making</strong> and predictive intelligence, our Agentic AI is designed to unlock unprecedented speed, scalability, and profitability for every seller. Our mission is simple: let humans lead with ideas, while our AI leads execution.
      </p>
    </main>
  );
}
