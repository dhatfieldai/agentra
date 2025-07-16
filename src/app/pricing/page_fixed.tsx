"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Select the perfect AURORA9 plan to revolutionize your e-commerce automation
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Starter Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
            <div className="text-4xl font-bold text-cyan-400 mb-6">
              $99<span className="text-lg text-gray-300">/month</span>
            </div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Basic AI automation
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Up to 1,000 products
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Email support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Basic analytics
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all">
              Get Started
            </button>
          </motion.div>

          {/* Professional Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border-2 border-purple-400 relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
            <div className="text-4xl font-bold text-cyan-400 mb-6">
              $299<span className="text-lg text-gray-300">/month</span>
            </div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Advanced AI automation
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Up to 10,000 products
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Priority support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Advanced analytics
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                API access
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all">
              Get Started
            </button>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
            <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Full AI automation suite
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Unlimited products
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                24/7 dedicated support
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Custom integrations
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                White-label options
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all">
              Contact Sales
            </button>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Have questions about our pricing? Contact our sales team for a personalized consultation 
            and discover how AURORA9 can transform your e-commerce operations.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
