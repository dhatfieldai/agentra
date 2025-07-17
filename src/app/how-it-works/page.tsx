"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
