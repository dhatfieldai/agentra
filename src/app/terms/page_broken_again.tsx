"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Terms and conditions for using AURORA9 services
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Service Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Service Description
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>• AURORA9 provides AI-powered e-commerce automation services</p>
              <p>• Our platform includes intelligent agents for business optimization</p>
              <p>• Services are provided on a subscription basis with various tiers</p>
              <p>• Features and capabilities may vary based on your selected plan</p>
              <p>• We reserve the right to update and improve our services</p>
            </div>
          </motion.div>

          {/* User Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              User Responsibilities
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>• Users must provide accurate account and business information</p>
              <p>• Responsible for maintaining account security and confidentiality</p>
              <p>• Must comply with all applicable laws and regulations</p>
              <p>• Prohibited from misusing or attempting to hack our systems</p>
              <p>• Must respect intellectual property rights</p>
            </div>
          </motion.div>

          {/* Payment Terms */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              Payment Terms
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>• Subscription fees are billed monthly or annually in advance</p>
              <p>• All payments are non-refundable unless otherwise specified</p>
              <p>• Price changes will be communicated 30 days in advance</p>
              <p>• Late payments may result in service suspension</p>
              <p>• Taxes and fees may apply based on your location</p>
            </div>
          </motion.div>

          {/* Limitations and Disclaimers */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Limitations and Disclaimers
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>• Services are provided &quot;as is&quot; without warranties</p>
              <p>• We are not liable for business losses or damages</p>
              <p>• AI recommendations should be reviewed before implementation</p>
              <p>• Service availability is subject to maintenance and updates</p>
              <p>• Performance results may vary based on individual circumstances</p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-10 border border-white/20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions About Terms?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
              If you have any questions about these terms of service, please contact our legal team.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all">
              Contact Legal Team
            </button>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
