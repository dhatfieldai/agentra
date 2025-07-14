import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AURORA9",
  description: "Meet AURORA9 – your fully autonomous agentic AI workforce built for e-commerce acceleration.",
  openGraph: {
    title: "About AURORA9",
    description: "Discover how AURORA9 revolutionizes e-commerce with agentic AI automation.",
    url: "https://oasis11217ai.github.io/aurora9agenticAI",
    type: "website",
    images: [
      {
        url: "/AURORA9.png",
        width: 800,
        height: 600,
        alt: "AURORA9 Logo",
      },
    ],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">About AURORA9</h1>
      <p className="text-lg mb-4">
        AURORA9 is the future of intelligent e-commerce automation. Powered by agentic AI, our platform provides fully
        autonomous digital workforce solutions designed to handle everything from PPC and SEO to inventory, analytics, and
        customer operations—24/7.
      </p>
      <p className="mb-4">
        Built on AWS and engineered with advanced LLMs and real-time data synchronization, AURORA9 enables businesses of all
        sizes to scale without micromanagement or technical complexity.
      </p>
      <p>
        Whether you're a startup, growing DTC brand, or enterprise seller, AURORA9 adapts to your business and drives
        exponential results.
      </p>
    </main>
  );
}
