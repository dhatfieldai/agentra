// src/app/how-it-works/page.tsx

import JoinWaitlist from "@/components/forms/JoinWaitlist";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | AURORA9 Fully Autonomous Agentic AI",
  description: "Discover how AURORA9's Agentic AI agents automate every aspect of Amazon seller operations — from inventory and pricing to ads and compliance.",
};

export default function HowItWorksPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 pb-32">
      <h1 className="text-4xl font-bold text-center mb-8">How It Works</h1>
      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          AURORA9 is a revolutionary platform built on autonomous Agentic AI technology,
          designed to fully manage and optimize Amazon Seller Central accounts.
        </p>
        <p>
          Our ecosystem of specialized agents works collaboratively across inventory, advertising,
          compliance, customer service, and pricing to deliver a hands-free, intelligent selling
          experience.
        </p>
        <p>
          From day one, sellers simply onboard their catalog, define basic rules or KPIs, and let
          AURORA9 handle the rest with continuous learning and autonomous execution.
        </p>
        <p>
          To learn more about our agent ecosystem and unique features, visit our
          {" "}
          <Link href="/about/vision" className="text-blue-600 underline">
            Vision page
          </Link>
          .
        </p>
      </section>
      <div className="mt-16">
        <JoinWaitlist />
      </div>
    </main>
  );
}
