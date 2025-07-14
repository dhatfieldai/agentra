// ✅ src/app/investors/page.tsx
import InvestorForm from '@/components/forms/Investorform';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invest in AURORA9 | Empower the Future of AI E-commerce',
  description: 'Join us in shaping the future of autonomous Amazon operations. Learn how to invest in AURORA9 today.',
  openGraph: {
    title: 'Invest in AURORA9',
    description: 'AURORA9 is building the future of e-commerce with autonomous AI agents. Become part of our journey.',
    url: 'https://aurora9agenticai.com/investors',
    type: 'website',
  },
  alternates: {
    canonical: '/investors',
  },
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen pb-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-5xl mx-auto pt-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Invest in the Future of E-commerce with AURORA9</h1>
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p>
            Are you ready to revolutionize e-commerce? At AURORA9, we're not just building software; we're creating the
            future of Amazon Seller Central operations with a fully autonomous, Agentic AI workforce. We're transforming
            the complex, labor-intensive world of online selling into a streamlined, highly efficient, and massively
            profitable enterprise.
          </p>
          <h2>What is AURORA9?</h2>
          <p>
            AURORA9 is a cutting-edge AI-SaaS platform designed to empower Amazon sellers with unprecedented levels of
            automation and intelligence. Our proprietary Agentic AI workforce operates independently, handling
            everything from inventory management and pricing optimization to customer service and ad campaign
            management.
          </p>
          <h2>Why Invest in AURORA9?</h2>
          <ul>
            <li>Pioneering Autonomous AI: Market poised for explosive growth.</li>
            <li>Massive Market Opportunity: Targeting a multi-trillion-dollar ecosystem.</li>
            <li>Unrivaled Efficiency & Profitability: Clear ROI through automation.</li>
            <li>Robust & Scalable Infrastructure: Built on AWS for enterprise-grade reliability.</li>
            <li>Real-Time Capabilities: MVP launching Q4 2025.</li>
            <li>Experienced Team: AI experts, engineers, and e-commerce veterans.</li>
          </ul>
          <h2>Our Vision</h2>
          <p>
            We envision a world where every Amazon seller, from SMBs to enterprises, can harness AI to achieve
            unparalleled success without the overhead.
          </p>
          <h2>Join Us on This Journey</h2>
          <p>
            Your investment will accelerate our development, expand our market reach, and solidify our position as the
            leader in autonomous AI solutions for Amazon sellers.
          </p>
          <p>
            Ready to learn more? Fill out the form below to receive our investor deck and schedule a personalized
            discussion.
          </p>
        </div>

        <InvestorForm />
      </div>
    </main>
  );
}
