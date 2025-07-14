// src/app/faq/page.tsx
"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is AURORA9?",
    answer:
      "AURORA9 is a fully autonomous AI agent workforce designed to optimize eCommerce operations for Amazon sellers, Shopify businesses, and multichannel sellers.",
  },
  {
    question: "How does AURORA9 help Amazon sellers?",
    answer:
      "Our agents automate pricing strategy, keyword optimization, PPC campaigns, inventory control, and customer messaging, allowing sellers to scale without manual effort.",
  },
  {
    question: "Can I use AURORA9 with Seller Central?",
    answer:
      "Yes. AURORA9 agents are fully compatible with Amazon Seller Central and operate autonomously based on your inputted business rules.",
  },
  {
    question: "Is human intervention required to run AURORA9?",
    answer:
      "Only for onboarding and initial setup. After that, AURORA9 agents operate independently and report outcomes via dashboards and logs.",
  },
  {
    question: "Does AURORA9 integrate with Shopify?",
    answer:
      "Absolutely. Our agents handle marketing, fulfillment coordination, customer retention workflows, and product optimization for Shopify stores.",
  },
  {
    question: "How secure is my data?",
    answer:
      "All data is encrypted end-to-end, and our systems are hosted securely using enterprise-grade AWS infrastructure.",
  },
  {
    question: "Can agents manage PPC and ad campaigns?",
    answer:
      "Yes. Our AI agents handle bidding, audience segmentation, A/B testing, and ad spend optimization across Amazon Ads and Google Shopping.",
  },
  {
    question: "Do I need technical skills to use AURORA9?",
    answer:
      "No. The onboarding process is user-friendly, and our agents operate based on prompts and workflow logic that require no coding.",
  },
  {
    question: "What kind of reporting is available?",
    answer:
      "You get detailed task logs, performance summaries, decision justifications, and exportable reports to Google Sheets or your CRM.",
  },
  {
    question: "Can AURORA9 scale with my business?",
    answer:
      "Yes. AURORA9 is designed to support businesses of all sizes, scaling agent deployment as your operations grow.",
  },
  {
    question: "What marketplaces are supported?",
    answer:
      "Currently: Amazon, Walmart, eBay, Wayfair, and Shopify. More integrations are planned including Target+, Alibaba, and TikTok Shop.",
  },
  {
    question: "Can I customize what tasks each agent performs?",
    answer:
      "Yes. Each agent can be tailored to your exact process — whether it’s marketing, customer service, logistics, or growth.",
  },
  {
    question: "Is there an audit trail for agent decisions?",
    answer:
      "Yes. Every agent action is logged with timestamps, rationales, and outcomes for transparency and compliance.",
  },
  {
    question: "What support is available during onboarding?",
    answer:
      "We offer live onboarding, documentation, video tutorials, and Slack support during the setup and training phase.",
  },
  {
    question: "How do I join the waitlist or request a demo?",
    answer:
      "Click 'Join Waitlist' on the navigation bar or footer. Once we're live, you'll be notified and invited to demo the platform.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white dark:bg-zinc-900 shadow">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left flex justify-between items-center font-medium text-lg"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && <p className="mt-3 text-gray-700 dark:text-zinc-300">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
