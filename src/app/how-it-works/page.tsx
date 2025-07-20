"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Interactive Framework Card Component
interface FrameworkSection {
  heading: string;
  content?: string;
  items?: string[];
}

interface FrameworkComponent {
  icon: string;
  title: string;
  sections: FrameworkSection[];
}

interface InteractiveFrameworkCardProps {
  component: FrameworkComponent;
}

function InteractiveFrameworkCard({ component }: InteractiveFrameworkCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="relative group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
        {/* Gradient border on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
             style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', padding: '2px' }}>
          <div className="h-full w-full rounded-2xl" style={{ background: 'var(--background)' }}></div>
        </div>

        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-b border-blue-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-4" style={{ color: '#60a5fa' }}>{component.icon}</span>
              <h3 className="text-lg text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300" style={{ fontWeight: '300' }}>
                {component.title}
              </h3>
            </div>
            <motion.span 
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-2xl"
              style={{ color: '#60a5fa' }}
            >
              +
            </motion.span>
          </div>
        </div>

        {/* Expandable Content */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isExpanded ? "auto" : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="p-6 space-y-4" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
            {component.sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-base mb-2" style={{ 
                  color: '#60a5fa', 
                  fontWeight: '300'
                }}>
                  {section.heading}
                </h4>
                {section.content && (
                  <p className="mb-3 leading-relaxed" style={{
                    color: '#cbd5e1',
                    fontSize: '0.95rem',
                    fontWeight: '300',
                    lineHeight: '1.6'
                  }}>
                    {section.content}
                  </p>
                )}
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <span className="text-blue-400 mr-3 mt-1" style={{ fontSize: '0.8rem' }}>→</span>
                        <span style={{
                          color: '#cbd5e1',
                          fontSize: '0.9rem',
                          fontWeight: '300',
                          lineHeight: '1.5'
                        }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorksPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // MailerLite API call
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMjFmNGQyOGQ3NGNkMmNmNWRmZTJhNzQ0NzRjNzEwYzU3NzkwMzE5ZjM4NzY1MzYyMGNkZWY3NzNmMzMzZjJhMDA1MTVkNWE2N2UzOTE5YWQiLCJpYXQiOjE3Mzc2Mjk5NzMuMTE5NjcsIm5iZiI6MTczNzYyOTk3My4xMTk2NywiZXhwIjoxNzY5MTY1OTczLjExNDg3LCJzdWIiOiIxNTYxNjAwIiwic2NvcGVzIjpbXX0.JUNCGdJFvYmOPz1-1fVWo-lVsO1tpUUdxkhwT9wXHWybyUOmGF9_PEBnJQlpLbx1JjwmJnPLv9Kz-wGJf1RGtyTYR_m2YFhHbVP4a-cF0gLzp4yzTPHiZHGjPVCXoJ8t5YR4_8zNGJpCNQjR2Y3zHWtZ-J8lO9rOV1r5EgqOm94'
        },
        body: JSON.stringify({
          email: email,
          groups: ['26652325'] // Your group ID
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        // Fallback to MailerLite embedded form submission
        const form = document.createElement('form');
        form.action = 'https://assets.mailerlite.com/jsonp/1561600/forms/26652325/subscribe';
        form.method = 'POST';
        form.target = '_blank';
        
        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = 'fields[email]';
        emailInput.value = email;
        
        form.appendChild(emailInput);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
        
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      // Fallback method
      window.open(`https://assets.mailerlite.com/jsonp/1561600/forms/26652325/subscribe?fields[email]=${encodeURIComponent(email)}`, '_blank');
      setIsSubmitted(true);
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen pt-20" style={{ background: 'var(--background)' }}>
      <div className="container mx-auto px-6 py-16">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontWeight: '300' }}>How AURORA9 Works</h1>
          <p className="max-w-4xl mx-auto leading-relaxed" style={{ 
            color: '#cbd5e1',
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            AURORA9 deploys a fleet of intelligent Agentic AI workers to automate and optimize your ecommerce operations from end to end — seamlessly and autonomously.
          </p>
        </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
      >
        {[
          {
            title: "1. Connect",
            desc: "Securely link your ecommerce platforms (Amazon, Shopify, Walmart, etc.) in just minutes.",
          },
          {
            title: "2. Deploy Agents",
            desc: "Choose from our intelligent AI agents: PPC Manager, Repricing Engine, SEO Optimizer, and more.",
          },
          {
            title: "3. Automate Tasks",
            desc: "Each agent performs tasks 24/7 — from ad optimization to inventory sync — without manual input.",
          },
          {
            title: "4. Monitor & Scale",
            desc: "View daily reports. Scale instantly by deploying more agents across channels.",
          },
          {
            title: "5. Customize Your Strategy",
            desc: "Adjust rules, goals, or let the agents self-optimize using AI-driven decision-making.",
          },
          {
            title: "6. Focus on Growth",
            desc: "While agents handle the work, you focus on innovation, expansion, and customer experience.",
          },
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="relative group"
          >
            <div className="relative p-8 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Gradient border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
                   style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', padding: '2px' }}>
                <div className="h-full w-full rounded-2xl p-6" style={{ background: 'var(--background)' }}>
                  <h3 className="text-2xl mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300" style={{ fontWeight: '300' }}>
                    {step.title}
                  </h3>
                  <p className="leading-relaxed" style={{ 
                    color: '#cbd5e1',
                    fontSize: '1rem',
                    fontWeight: '300',
                    lineHeight: '1.6'
                  }}>
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Default state content */}
              <div className="group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-2xl mb-3 text-white" style={{ fontWeight: '300' }}>
                  {step.title}
                </h3>
                <p className="leading-relaxed" style={{ 
                  color: '#cbd5e1',
                  fontSize: '1rem',
                  fontWeight: '300',
                  lineHeight: '1.6'
                }}>
                  {step.desc}
                </p>
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Interactive Framework Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-6 text-white" style={{ fontWeight: '300' }}>
            AURORA9&apos;s Autonomous AI Workforce
          </h2>
          <p className="max-w-4xl mx-auto leading-relaxed" style={{ 
            color: '#cbd5e1',
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            Discover the intelligent architecture that powers AURORA9&apos;s autonomous AI agents, orchestrating seamless e-commerce operations.
          </p>
        </div>

        {/* Central Flow Diagram */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative p-6 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg rounded-2xl hover:shadow-2xl transition-all duration-300 min-w-[200px]">
              <div className="absolute top-[-10px] right-[-10px] bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <div className="text-4xl mb-4 text-center">👤</div>
              <h3 className="text-xl mb-2 text-white text-center" style={{ fontWeight: '300' }}>E-commerce Seller</h3>
              <p className="text-center" style={{ 
                color: '#cbd5e1',
                fontSize: '0.9rem',
                fontWeight: '300',
                lineHeight: '1.4'
              }}>Sets goals & queries</p>
            </div>
          </motion.div>

          <div className="hidden lg:block w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-60"></div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative p-6 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg rounded-2xl hover:shadow-2xl transition-all duration-300 min-w-[240px]">
              <div className="absolute top-[-10px] right-[-10px] bg-gradient-to-r from-blue-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl mb-2 text-white text-center" style={{ fontWeight: '300' }}>AURORA9 AI Core</h3>
              <p className="text-center" style={{ 
                color: '#cbd5e1',
                fontSize: '0.9rem',
                fontWeight: '300',
                lineHeight: '1.4'
              }}>Processes, reasons, orchestrates</p>
            </div>
          </motion.div>

          <div className="hidden lg:block w-16 h-0.5 bg-gradient-to-r from-purple-500 to-yellow-500 opacity-60"></div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="relative p-6 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg rounded-2xl hover:shadow-2xl transition-all duration-300 min-w-[200px]">
              <div className="absolute top-[-10px] right-[-10px] bg-gradient-to-r from-yellow-500 to-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
              <div className="text-4xl mb-4 text-center">🛒</div>
              <h3 className="text-xl mb-2 text-white text-center" style={{ fontWeight: '300' }}>Amazon Seller Central</h3>
              <p className="text-center" style={{ 
                color: '#cbd5e1',
                fontSize: '0.9rem',
                fontWeight: '300',
                lineHeight: '1.4'
              }}>Data source & action target</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="relative p-6 bg-gradient-to-br from-gray-900/40 via-green-900/40 to-blue-900/40 border border-green-500/20 backdrop-blur-lg rounded-2xl hover:shadow-2xl transition-all duration-300 max-w-[300px]">
            <div className="absolute top-[-10px] right-[-10px] bg-gradient-to-r from-green-500 to-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">4</div>
            <div className="text-4xl mb-4 text-center">☁️</div>
            <h3 className="text-xl mb-2 text-white text-center" style={{ fontWeight: '300' }}>AWS Platform Foundation</h3>
            <p className="text-center" style={{ 
              color: '#cbd5e1',
              fontSize: '0.9rem',
              fontWeight: '300',
              lineHeight: '1.4'
            }}>Scalable, secure infrastructure</p>
          </div>
        </motion.div>

        {/* Component Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: "👁️",
              title: "Perception System (Sensors/Inputs)",
              sections: [
                {
                  heading: "Purpose",
                  content: "The AI agent&apos;s \"eyes and ears\" that gathers real-time and historical data from Amazon Seller Central."
                },
                {
                  heading: "Voice Input Integration",
                  content: "Amazon Transcribe converts user speech into text for voice commands and queries."
                },
                {
                  heading: "Data Flow Pathway",
                  items: [
                    "Amazon Kinesis Data Streams: Real-time event ingestion",
                    "Amazon S3: Primary data lake for raw and processed data", 
                    "AWS Glue Crawlers: Auto-discover and catalog schema",
                    "Amazon Athena: Query access to data lake",
                    "Amazon DynamoDB: High-performance real-time storage"
                  ]
                }
              ]
            },
            {
              icon: "🧠",
              title: "Memory System",
              sections: [
                {
                  heading: "Purpose", 
                  content: "Stores information for context and learning across interactions."
                },
                {
                  heading: "Short-Term Memory",
                  content: "LLM context windows (Amazon Bedrock) and Amazon ElastiCache for multi-turn interactions."
                },
                {
                  heading: "Long-Term Memory",
                  content: "Amazon OpenSearch Service with Vector Engine for RAG (Retrieval Augmented Generation).",
                  items: [
                    "Learned rules and domain knowledge",
                    "Historical strategies and patterns", 
                    "Contextual business intelligence"
                  ]
                }
              ]
            },
            {
              icon: "⚡",
              title: "Reasoning Engine (Cognitive Core)",
              sections: [
                {
                  heading: "Purpose",
                  content: "The \"brain\" that processes data, analyzes patterns, and determines optimal actions."
                },
                {
                  heading: "Key Components",
                  items: [
                    "Prompt Instruction LLM: Defines agent behavior and goals",
                    "Refined LLM: Amazon Nova Pro for specialized tasks",
                    "RAG System: Factual accuracy from Knowledge Base", 
                    "ML Models: Amazon SageMaker for predictive analytics"
                  ]
                }
              ]
            },
            {
              icon: "🎼", 
              title: "Multi-Agent Orchestration",
              sections: [
                {
                  heading: "MCP (Master Control Program)",
                  content: "Central orchestrator powered by AWS Step Functions and Amazon Bedrock.",
                  items: [
                    "Breaks high-level goals into manageable sub-tasks",
                    "Coordinates specialized AI agents",
                    "Monitors overall workflow execution"
                  ]
                },
                {
                  heading: "Specialized AI Agents",
                  items: [
                    "Marketing AI Agent: PPC campaigns and advertising",
                    "Inventory Management AI: Stock optimization and reordering",
                    "Customer Service AI: Query handling and support"
                  ]
                },
                {
                  heading: "Agent Communication", 
                  content: "Amazon EventBridge: Event-driven architecture for agent collaboration and shared DynamoDB states."
                }
              ]
            },
            {
              icon: "🦾",
              title: "Action Module (Outputs)",
              sections: [
                {
                  heading: "Purpose",
                  content: "Executes decisions made by the Reasoning Engine through concrete actions."
                },
                {
                  heading: "Voice Output",
                  content: "Amazon Polly converts text responses into natural-sounding speech for user communication."
                },
                {
                  heading: "Action Tools",
                  items: [
                    "AWS Lambda: Executes specific functions (bid updates, reorders)",
                    "Amazon Nova Act: Browser automation for complex workflows",
                    "Amazon API Gateway: Secure API endpoint management"
                  ]
                }
              ]
            },
            {
              icon: "📈",
              title: "Learning Mechanism", 
              sections: [
                {
                  heading: "Purpose",
                  content: "Enables continuous improvement and adaptation based on performance feedback."
                },
                {
                  heading: "Learning Process",
                  items: [
                    "Performance monitoring and analysis",
                    "Model retraining in Amazon SageMaker",
                    "Strategy refinement based on outcomes",
                    "Adaptive optimization for changing conditions"
                  ]
                }
              ]
            }
          ].map((component, index) => (
            <InteractiveFrameworkCard key={index} component={component} />
          ))}
        </div>
      </motion.section>

      {/* Why Choose AURORA9 Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl mb-8 text-white" style={{ fontWeight: '300' }}>Why Choose AURORA9?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "⚡",
              title: "Lightning Fast",
              description: "Deploy in minutes, see results in hours. No lengthy setup or training required."
            },
            {
              icon: "🎯",
              title: "Precision Automation",
              description: "AI agents make data-driven decisions with 95%+ accuracy rates."
            },
            {
              icon: "💰",
              title: "Cost Effective",
              description: "Replace expensive agencies and VAs with autonomous AI agents."
            },
            {
              icon: "🔄",
              title: "24/7 Operations",
              description: "Your business never sleeps, and neither do our AI agents."
            },
            {
              icon: "📈",
              title: "Scalable Growth",
              description: "Expand across platforms and channels without increasing overhead."
            },
            {
              icon: "🛡️",
              title: "Enterprise Security",
              description: "Bank-grade security with SOC 2 compliance and data encryption."
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
                     style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', padding: '2px' }}>
                  <div className="h-full w-full rounded-2xl p-6" style={{ background: 'var(--background)' }}>
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300" style={{ fontWeight: '300' }}>
                      {benefit.title}
                    </h3>
                    <p className="leading-relaxed" style={{ 
                      color: '#cbd5e1',
                      fontSize: '1rem',
                      fontWeight: '300',
                      lineHeight: '1.6'
                    }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Default state content */}
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl mb-3 text-white" style={{ fontWeight: '300' }}>
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed" style={{ 
                    color: '#cbd5e1',
                    fontSize: '1rem',
                    fontWeight: '300',
                    lineHeight: '1.6'
                  }}>
                    {benefit.description}
                  </p>
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg rounded-2xl p-8"
      >
        <h2 className="text-3xl md:text-4xl mb-4 text-white" style={{ fontWeight: '300' }}>
          Ready to Transform Your Business?
        </h2>
        <p className="mb-8 leading-relaxed" style={{ 
          color: '#cbd5e1',
          fontSize: '1.125rem',
          fontWeight: '300',
          lineHeight: '1.6'
        }}>
          Join 5,500+ forward-thinking entrepreneurs on the AURORA9 waitlist. Get exclusive early access, special pricing, and be the first to transform your business.
        </p>
        
        {/* Custom Email Signup Form */}
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 bg-white/10 border-2 border-white/30 rounded-xl text-white placeholder-white/70 focus:border-white/60 focus:bg-white/20 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting || !email}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining Waitlist...' : 'Subscribe'}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/20 border-2 border-green-400/50 rounded-xl p-6 text-center"
            >
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-xl font-semibold mb-2">Welcome to AURORA9!</h3>
              <p className="text-white/90">
                You&apos;re now on our exclusive waitlist. Get ready for early access and special pricing!
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>
      </div>
    </main>
  );
}
