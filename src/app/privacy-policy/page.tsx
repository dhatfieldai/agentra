"use client";

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
            At AURORA9, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="mt-8 text-gray-400">
            <p>Last updated: July 16, 2025</p>
          </div>
        </motion.div>

        {/* Quick Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Privacy at a Glance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure Storage</h3>
                <p className="text-gray-300">All information is stored in secure, compliant data centers with strict access controls.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Transparency</h3>
                <p className="text-gray-300">We believe in clear communication about how your data is collected and used.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Personal information you provide when creating an account (name, email, company details)
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Usage data and analytics about how you interact with our platform
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Technical information such as IP address, browser type, and device information
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Communication data when you contact our support team
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Payment information processed securely through our payment providers
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Provide and improve our AI automation services
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Personalize your experience and optimize platform performance
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Communicate with you about service updates and support
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Process payments and manage your account
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Comply with legal obligations and protect against fraud
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Your Rights &amp; Controls</h2>
            <ul className="space-y-3">
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Access and review your personal data
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Request corrections to inaccurate information
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Delete your account and associated data
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Export your data in a portable format
              </li>
              <li className="text-gray-300 flex items-start">
                <span className="text-blue-400 mr-3 mt-1">•</span>
                Opt-out of marketing communications
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Questions or Concerns?</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                If you have any questions about this Privacy Policy or how we handle your data, please don&apos;t hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a 
                  href="/contact-us"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Contact Privacy Team
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
