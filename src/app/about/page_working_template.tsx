"use client";

import { motion } from "framer-motion";

export default function MissionStatementPage() {
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
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Empowering the future of autonomous e-commerce through intelligent AI innovation
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Core Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
              Transforming E-commerce Through AI
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center">
              At AURORA9, our mission is to empower e-commerce businesses with an intelligent, fully autonomous AI workforce. 
              We are dedicated to transforming operations into streamlined, high-performing systems powered by Agentic AI — 
              enabling entrepreneurs and enterprises to scale without limits.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Through innovation, data precision, and AI autonomy, we&apos;re creating the future of commerce where decision-making, 
              optimization, and scalability happen hands-free — while keeping human vision at the heart of progress.
            </p>
          </motion.div>

          {/* Mission Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">
                Pioneering cutting-edge AI technologies that redefine what&apos;s possible in autonomous e-commerce operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Precision</h3>
              <p className="text-gray-300">
                Delivering data-driven insights and automated decisions with unmatched accuracy and reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Autonomy</h3>
              <p className="text-gray-300">
                Creating truly independent AI agents that operate seamlessly without constant human oversight.
              </p>
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-10 border border-white/20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              AURORA9 exists to eliminate digital friction and deliver AI-native growth strategies that drive performance, 
              profitability, and peace of mind. We believe that every business, regardless of size, deserves access to 
              enterprise-level AI automation that scales with their ambitions.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
