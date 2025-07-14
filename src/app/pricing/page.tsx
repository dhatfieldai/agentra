// src/app/pricing/page.tsx

import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | AURORA9 Autonomous AI Agents",
  description:
    "Explore AURORA9's pricing plans. Start free for 30 days and discover how our fully autonomous AI agents transform Amazon Seller Central workflows. Plans will be announced ahead of our MVP launch on July 1, 2025.",
  openGraph: {
    title: "Pricing | AURORA9 Autonomous AI Agents",
    description:
      "Discover AURORA9's transparent pricing model. Tailored plans for businesses of all sizes, launching 4th QTR 2025.",
    url: "https://aurora9.ai/pricing",
    type: "website",
  },
};

const plans = [
  {
    name: "Freemium Trial",
    duration: "30 Days",
    pricing: "FREE (Trial Period)",
    features: [
      "Access to Core AI Agent Functions",
      "Basic Analytics Dashboard",
      "Limited SKU Support (up to 25)",
    ],
  },
  {
    name: "Standard Plan",
    duration: "Monthly / Annual",
    pricing: "TO BE ANNOUNCED",
    features: [
      "Full Access to Core Agents",
      "Advanced Inventory + Ad Optimization",
      "Unlimited SKUs",
      "Email Notifications & Agent Reports",
    ],
  },
  {
    name: "Enterprise Plan",
    duration: "Custom",
    pricing: "TO BE ANNOUNCED",
    features: [
      "Dedicated Supervisor Agent",
      "White-Glove Onboarding",
      "Priority Support & SLA",
      "API Access + Custom Integrations",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 text-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-center">AURORA9 Pricing</h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        Start with a free 30-day trial. All plans automatically upgrade to Standard after the trial ends. Pricing will be officially announced before our MVP launch on <strong>July 1, 2025</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{plan.duration}</p>
              <p className="text-lg font-bold mb-4">{plan.pricing}</p>
              <ul className="list-disc ml-5 text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-sm text-gray-600">
          Have questions about pricing or enterprise onboarding?
        </p>
        <Link href="/contact-us" className="text-blue-600 font-medium">
          Contact our team
        </Link>
      </div>
    </main>
  );
}
