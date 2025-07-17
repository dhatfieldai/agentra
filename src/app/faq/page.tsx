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
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '300', 
              marginBottom: '1.5rem',
              color: 'white',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 1
            }}>
              Frequently Asked Questions
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              opacity: 0.9, 
              maxWidth: '42rem', 
              margin: '0 auto',
              fontWeight: '300',
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              Everything you need to know about AURORA9&apos;s autonomous AI workforce
            </p>
          </div>
        </div>
        {/* Floating particles */}
        <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: '8rem', height: '8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '10%', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '4rem', height: '4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
      </div>

      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Search and Filter Section */}
        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Search Bar */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.25rem', color: '#9ca3af' }}>
              🔍
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '3rem',
                paddingRight: '1rem',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                border: '1px solid rgba(203, 213, 225, 0.3)',
                borderRadius: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: '#cbd5e1',
                fontSize: '1rem',
                fontWeight: '300',
                outline: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
              }}
              onFocus={(e) => {
                e.target.style.border = '1px solid #667eea';
                e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.border = '1px solid rgba(203, 213, 225, 0.3)';
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
              }}
            />
          </div>

          {/* Category Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: '300',
                  transition: 'all 0.3s ease',
                  border: selectedCategory === category ? 'none' : '1px solid rgba(203, 213, 225, 0.3)',
                  background: selectedCategory === category 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  color: selectedCategory === category ? 'white' : '#cbd5e1',
                  boxShadow: selectedCategory === category 
                    ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  transform: selectedCategory === category ? 'scale(1.05)' : 'scale(1)'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    const target = e.target as HTMLButtonElement;
                    target.style.background = 'rgba(255, 255, 255, 0.2)';
                    target.style.transform = 'scale(1.02)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    const target = e.target as HTMLButtonElement;
                    target.style.background = 'rgba(255, 255, 255, 0.1)';
                    target.style.transform = 'scale(1)';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredFaqs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ color: '#9ca3af', fontSize: '1.125rem', fontWeight: '300' }}>No questions found matching your search.</div>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '0.75rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(203, 213, 225, 0.3)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)';
                  target.style.borderImage = 'linear-gradient(135deg, #667eea, #764ba2, #f093fb) 1';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLDivElement;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
                  target.style.borderImage = 'none';
                }}
              >
                <button
                  onClick={() => toggle(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    color: '#cbd5e1'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget as HTMLButtonElement;
                    target.style.background = 'transparent';
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span style={{
                        padding: '0.25rem 0.5rem',
                        fontSize: '0.75rem',
                        fontWeight: '300',
                        borderRadius: '9999px',
                        background: 'rgba(102, 126, 234, 0.2)',
                        color: '#cbd5e1',
                        border: '1px solid rgba(102, 126, 234, 0.3)'
                      }}>
                        {faq.category}
                      </span>
                    </div>
                    <h3 style={{ 
                      fontWeight: '300', 
                      fontSize: '1.125rem',
                      color: '#cbd5e1',
                      transition: 'color 0.3s ease'
                    }}>
                      {faq.question}
                    </h3>
                  </div>
                  <div style={{
                    fontSize: '1.25rem',
                    color: '#9ca3af',
                    transition: 'transform 0.2s ease',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    ⌄
                  </div>
                </button>
                
                <div style={{
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  maxHeight: openIndex === index ? '24rem' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}>
                  <div style={{ padding: '0 1.5rem 1.5rem' }}>
                    <div style={{
                      borderLeft: '4px solid #667eea',
                      paddingLeft: '1rem',
                      background: 'linear-gradient(90deg, rgba(102, 126, 234, 0.1) 0%, transparent 100%)',
                      padding: '1rem',
                      borderRadius: '0 0.5rem 0.5rem 0'
                    }}>
                      <p style={{ 
                        color: '#cbd5e1', 
                        lineHeight: '1.6',
                        fontWeight: '300'
                      }}>
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
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '1rem',
            padding: '2rem',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '300', 
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              Still have questions?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              opacity: 0.9, 
              marginBottom: '1.5rem',
              fontWeight: '300',
              position: 'relative',
              zIndex: 1
            }}>
              Can&apos;t find what you&apos;re looking for? We&apos;re here to help.
            </p>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem', 
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              <a
                href="/contact-us"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1.5rem',
                  background: 'white',
                  color: '#667eea',
                  fontWeight: '300',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.background = '#f9fafb';
                  target.style.transform = 'translateY(-2px)';
                  target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.background = 'white';
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
                }}
              >
                Contact Support
              </a>
              <a
                href="/how-it-works"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1.5rem',
                  border: '2px solid white',
                  color: 'white',
                  fontWeight: '300',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.background = 'rgba(255, 255, 255, 0.1)';
                  target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLAnchorElement;
                  target.style.background = 'transparent';
                  target.style.transform = 'translateY(0)';
                }}
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
