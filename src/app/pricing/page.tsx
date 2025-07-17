"use client";

import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-20" style={{ background: 'var(--gradient-cosmic)' }}>
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-display mb-8 gradient-text">
            Choose Your Plan
          </h1>
          <p className="text-body-large max-w-4xl mx-auto leading-relaxed" style={{ color: '#cbd5e1' }}>
            Select the perfect AURORA9 plan to revolutionize your e-commerce automation. 
            Our AI agents work 24/7 to optimize your business operations and maximize growth.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {/* Starter Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300"
          >
            <div className="text-center mb-8">
              <h3 className="text-heading-2 text-white mb-2">Starter</h3>
              <div className="text-heading-1 text-white mb-2">
                To be Announced
              </div>
              <p className="text-small" style={{ color: '#64748b' }}>Perfect for small businesses starting their automation journey</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="text-body flex items-start" style={{ color: '#cbd5e1' }}>
                <span className="mr-3 mt-1" style={{ color: 'var(--accent)' }}>✓</span>
                1 AI Agent
              </li>
              <li className="text-body flex items-start" style={{ color: '#cbd5e1' }}>
                <span className="mr-3 mt-1" style={{ color: 'var(--accent)' }}>✓</span>
                Basic E-commerce Integration
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                24/7 Customer Support
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Performance Analytics
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Monthly Reports
              </li>
            </ul>

            <a href="/contact-us" className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 block text-center no-underline">
              Join Waitlist
            </a>
          </motion.div>

          {/* Professional Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/50 shadow-xl shadow-blue-500/20 transition-all duration-300 hover:scale-105"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <div className="text-4xl font-extrabold text-white mb-2">
                To be Announced
              </div>
              <p className="text-gray-400">Ideal for growing businesses ready to scale</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                5 AI Agents
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Advanced E-commerce Integration
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Priority Support
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Real-time Analytics
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Custom Workflows
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                API Access
              </li>
            </ul>

            <a href="/contact-us" className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl block text-center no-underline">
              Join Waitlist
            </a>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <div className="text-4xl font-extrabold text-white mb-2">
                To be Announced
              </div>
              <p className="text-gray-400">For large organizations requiring maximum automation</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Unlimited AI Agents
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Full Platform Integration
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Dedicated Account Manager
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Advanced Analytics Suite
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Custom Development
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                White-label Solutions
              </li>
            </ul>

            <a href="/contact-us" className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 block text-center no-underline">
              Contact Sales
            </a>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">
                When will pricing be available?
              </h3>
              <p className="text-gray-300">
                We&apos;re finalizing our pricing structure to ensure maximum value for our customers. 
                Join our waitlist to be the first to know when pricing is announced.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">
                Is there a free trial?
              </h3>
              <p className="text-gray-300">
                Yes! We&apos;ll offer a comprehensive free trial so you can experience the power 
                of AURORA9&apos;s AI automation before making a commitment.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">
                Can I upgrade or downgrade plans?
              </h3>
              <p className="text-gray-300">
                Absolutely! You can change your plan at any time to match your business needs. 
                Our flexible pricing ensures you only pay for what you use.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">
                What support is included?
              </h3>
              <p className="text-gray-300">
                All plans include 24/7 customer support. Professional and Enterprise plans 
                get priority support and dedicated account management.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of entrepreneurs who are revolutionizing their e-commerce operations with AURORA9&apos;s intelligent AI agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact-us" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl no-underline text-center">
                Join Waitlist Today
              </a>
              <a href="/contact-us" className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-4 px-8 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300 no-underline text-center">
                Schedule Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
