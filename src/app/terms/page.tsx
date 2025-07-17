"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Scale, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "Service Description",
      icon: <FileText className="w-6 h-6" />,
      content: [
        "AURORA9 provides AI-powered e-commerce automation services",
        "Our platform includes intelligent agents for business optimization",
        "Services are provided on a subscription basis with various tiers",
        "Features and capabilities may vary based on your selected plan",
        "We reserve the right to update and improve our services"
      ]
    },
    {
      title: "User Responsibilities",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Provide accurate and up-to-date account information",
        "Maintain the security of your account credentials",
        "Use our services in compliance with applicable laws",
        "Respect intellectual property rights",
        "Report any security vulnerabilities or misuse"
      ]
    },
    {
      title: "Acceptable Use",
      icon: <Scale className="w-6 h-6" />,
      content: [
        "Use services for legitimate business purposes only",
        "Do not attempt to reverse engineer or hack our platform",
        "Respect rate limits and usage guidelines",
        "Do not share account access with unauthorized parties",
        "Comply with all applicable e-commerce regulations"
      ]
    },
    {
      title: "Limitations & Disclaimers",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "Services are provided &quot;as is&quot; without warranties",
        "We are not liable for business decisions made using our platform",
        "Performance results may vary based on individual circumstances",
        "Third-party integrations are subject to their own terms",
        "Service availability is not guaranteed 100% of the time"
      ]
    }
  ];

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
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            These terms govern your use of AURORA9&apos;s AI automation services. 
            By using our platform, you agree to comply with these terms and conditions.
          </p>
          <div className="mt-8 text-gray-400">
            <p>Last updated: July 16, 2025</p>
          </div>
        </motion.div>

        {/* Agreement Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="backdrop-blur-md bg-gradient-to-br from-blue-900/60 to-purple-900/60 rounded-2xl p-8 border border-blue-400/50">
            <div className="text-center">
              <Scale className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">Agreement to Terms</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                By accessing or using AURORA9&apos;s services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Terms Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="backdrop-blur-md bg-gray-900/40 rounded-xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="text-blue-400 mr-4">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Detailed Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-12"
        >
          {/* Payment Terms */}
          <div className="backdrop-blur-md bg-gray-900/40 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6">Payment Terms and Billing</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Subscription fees are billed in advance on a monthly or annual basis. All payments are processed securely through our trusted payment providers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Billing Cycle</h3>
                  <ul className="space-y-2">
                    <li>• Monthly subscriptions renew automatically</li>
                    <li>• Annual subscriptions offer discounted rates</li>
                    <li>• Pro-rated charges for plan upgrades</li>
                    <li>• Refunds processed for unused portions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Payment Methods</h3>
                  <ul className="space-y-2">
                    <li>• Major credit and debit cards accepted</li>
                    <li>• Bank transfers for enterprise accounts</li>
                    <li>• Secure payment processing with encryption</li>
                    <li>• Invoice billing available for qualified accounts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="backdrop-blur-md bg-gray-900/40 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6">Intellectual Property Rights</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                AURORA9 retains all rights to our proprietary technology, algorithms, and platform features. Users retain ownership of their data and content.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Our Rights</h3>
                  <ul className="space-y-2">
                    <li>• Proprietary AI algorithms and models</li>
                    <li>• Platform software and architecture</li>
                    <li>• Trademarks and brand elements</li>
                    <li>• Documentation and training materials</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Your Rights</h3>
                  <ul className="space-y-2">
                    <li>• Ownership of your business data</li>
                    <li>• Control over data sharing preferences</li>
                    <li>• Right to export your information</li>
                    <li>• License to use our services as agreed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="backdrop-blur-md bg-gray-900/40 rounded-xl p-8 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6">Account Termination</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Either party may terminate the service agreement with appropriate notice. Upon termination, you will retain access until the end of your billing period.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">User Termination</h3>
                  <ul className="space-y-2">
                    <li>• Cancel anytime from account settings</li>
                    <li>• 30-day data retention period</li>
                    <li>• Export data before cancellation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Service Termination</h3>
                  <ul className="space-y-2">
                    <li>• For violations of terms</li>
                    <li>• Non-payment of fees</li>
                    <li>• Suspicious or fraudulent activity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Data Handling</h3>
                  <ul className="space-y-2">
                    <li>• Secure deletion after retention period</li>
                    <li>• Backup data removed permanently</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="backdrop-blur-md bg-gradient-to-br from-blue-900/60 to-purple-900/60 rounded-2xl p-8 border border-blue-400/50">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Questions About These Terms?</h2>
            <div className="text-center text-gray-300 space-y-4">
              <p>
                If you have any questions about these Terms of Service or need clarification on any provisions, our legal team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a 
                  href="/contact-us"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Contact Legal Team
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
