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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <div className="text-4xl font-extrabold text-white mb-2">
                To Be Announced
              </div>
              <p className="text-gray-400">Perfect for small businesses starting their automation journey</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                1 AI Agent
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Basic E-commerce Integration
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Up to 1,000 Products
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Email Support
              </li>
            </ul>

            <button className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500">
              Join Waitlist
            </button>
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
                To Be Announced
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
                Up to 10,000 Products
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                Priority Support
              </li>
            </ul>

            <button className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
              Join Waitlist
            </button>
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
                To Be Announced
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
                Unlimited Products
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                24/7 Dedicated Support
              </li>
            </ul>

            <button className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500">
              Contact Sales
            </button>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Pricing Coming Soon
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We&apos;re finalizing our pricing structure to ensure maximum value for our customers. 
            Join our waitlist to be notified when pricing is announced and get early access to AURORA9.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
