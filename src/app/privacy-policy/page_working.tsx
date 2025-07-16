"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            How we collect, use, and protect your personal information
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Information Collection */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>• Account information (name, email, business details)</p>
              <p>• Usage data and analytics to improve our services</p>
              <p>• Payment information processed securely through third parties</p>
              <p>• Communications and support interactions</p>
              <p>• Technical data (IP address, browser type, device information)</p>
            </div>
          </motion.div>

          {/* How We Use Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>• Provide and improve our AI automation services</p>
              <p>• Process payments and manage your account</p>
              <p>• Send important updates and security notifications</p>
              <p>• Provide customer support and technical assistance</p>
              <p>• Analyze usage patterns to enhance platform performance</p>
            </div>
          </motion.div>

          {/* Data Protection */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Data Protection & Security
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>• Industry-standard encryption for data transmission and storage</p>
              <p>• Regular security audits and vulnerability assessments</p>
              <p>• Limited access to personal data on a need-to-know basis</p>
              <p>• Secure backup systems and disaster recovery procedures</p>
              <p>• Compliance with GDPR, CCPA, and other privacy regulations</p>
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Your Privacy Rights
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>• Access and review your personal information</p>
              <p>• Request corrections to inaccurate data</p>
              <p>• Delete your account and associated data</p>
              <p>• Opt-out of marketing communications</p>
              <p>• Data portability and export options</p>
            </div>
          </motion.div>

          {/* Contact Information - WORKING VERSION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-10 border border-white/20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Questions?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
              If you have any questions about this privacy policy or how we handle your data, 
              please contact our privacy team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 text-center no-underline"
              >
                Contact Privacy Team
              </a>
              <a 
                href="/contact-us"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center no-underline"
              >
                Data Protection Rights
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
