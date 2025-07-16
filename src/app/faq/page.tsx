"use client";

import { useState } from "react";

const faqs = [
  {
    category: "General",
    question: "What is AURORA9?",
    answer:
      "AURORA9 is a fully autonomous AI agent workforce designed to optimize eCommerce operations for Amazon sellers, Shopify businesses, and multichannel sellers.",
  },
  {
    category: "Amazon Integration",
    question: "How does AURORA9 help Amazon sellers?",
    answer:
      "Our agents automate pricing strategy, keyword optimization, PPC campaigns, inventory control, and customer messaging, allowing sellers to scale without manual effort.",
  },
  {
    category: "Amazon Integration",
    question: "Can I use AURORA9 with Seller Central?",
    answer:
      "Yes. AURORA9 agents are fully compatible with Amazon Seller Central and operate autonomously based on your inputted business rules.",
  },
  {
    category: "Operation",
    question: "Is human intervention required to run AURORA9?",
    answer:
      "Only for onboarding and initial setup. After that, AURORA9 agents operate independently and report outcomes via dashboards and logs.",
  },
  {
    category: "Shopify Integration",
    question: "Does AURORA9 integrate with Shopify?",
    answer:
      "Absolutely. Our agents handle marketing, fulfillment coordination, customer retention workflows, and product optimization for Shopify stores.",
  },
  {
    category: "Security",
    question: "How secure is my data?",
    answer:
      "All data is encrypted end-to-end, and our systems are hosted securely using enterprise-grade AWS infrastructure.",
  },
  {
    category: "Marketing & Ads",
    question: "Can agents manage PPC and ad campaigns?",
    answer:
      "Yes. Our AI agents handle bidding, audience segmentation, A/B testing, and ad spend optimization across Amazon Ads and Google Shopping.",
  },
  {
    category: "General",
    question: "Do I need technical skills to use AURORA9?",
    answer:
      "No. The onboarding process is user-friendly, and our agents operate based on prompts and workflow logic that require no coding.",
  },
  {
    category: "Reporting",
    question: "What kind of reporting is available?",
    answer:
      "You get detailed task logs, performance summaries, decision justifications, and exportable reports to Google Sheets or your CRM.",
  },
  {
    category: "Scalability",
    question: "Can AURORA9 scale with my business?",
    answer:
      "Yes. AURORA9 is designed to support businesses of all sizes, scaling agent deployment as your operations grow.",
  },
  {
    category: "Platforms",
    question: "What marketplaces are supported?",
    answer:
      "Currently: Amazon, Walmart, eBay, Wayfair, and Shopify. More integrations are planned including Target+, Alibaba, and TikTok Shop.",
  },
  {
    category: "Customization",
    question: "Can I customize what tasks each agent performs?",
    answer:
      "Yes. Each agent can be tailored to your exact process — whether it's marketing, customer service, logistics, or growth.",
  },
  {
    category: "Compliance",
    question: "Is there an audit trail for agent decisions?",
    answer:
      "Yes. Every agent action is logged with timestamps, rationales, and outcomes for transparency and compliance.",
  },
  {
    category: "Support",
    question: "What support is available during onboarding?",
    answer:
      "We offer live onboarding, documentation, video tutorials, and Slack support during the setup and training phase.",
  },
  {
    category: "Getting Started",
    question: "How do I join the waitlist or request a demo?",
    answer:
      "Click 'Join Waitlist' on the navigation bar or footer. Once we're live, you'll be notified and invited to demo the platform.",
  },
];

const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];

const categoryColors: { [key: string]: string } = {
  "General": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Amazon Integration": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "Shopify Integration": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Operation": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Security": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  "Marketing & Ads": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  "Reporting": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  "Scalability": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  "Platforms": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Customization": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
  "Compliance": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  "Support": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  "Getting Started": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Everything you need to know about AURORA9&apos;s autonomous AI workforce
            </p>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
              🔍
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">No questions found matching your search.</div>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${categoryColors[faq.category] || 'bg-gray-100 text-gray-800'}`}>
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    ⌄
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="border-l-4 border-indigo-500 pl-4 bg-gradient-to-r from-indigo-50 to-transparent dark:from-indigo-900/30 dark:to-transparent p-4 rounded-r-lg">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-lg opacity-90 mb-6">
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
