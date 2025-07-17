"use client";

import { motion } from "framer-motion";

export default function MissionStatementPage() {
  return (
    <main className="min-h-screen pt-20" style={{ background: 'var(--background)' }}>
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-light mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
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
            className="rounded-xl p-10 mb-12"
            style={{
              background: 'rgba(15, 23, 42, 0.4)',
              border: '1px solid rgba(59, 130, 246, 0.15)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
              Transforming E-commerce Through AI
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center font-light">
              At AURORA9, our mission is to empower e-commerce businesses with an intelligent, fully autonomous AI workforce. 
              We are dedicated to transforming operations into streamlined, high-performing systems powered by Agentic AI — 
              enabling entrepreneurs and enterprises to scale without limits.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-center font-light">
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
              className="rounded-lg p-8 text-center"
              style={{
                background: 'rgba(15, 23, 42, 0.3)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Innovation</h3>
              <p className="text-gray-300 font-light">
                Pioneering cutting-edge AI technologies that redefine what&apos;s possible in autonomous e-commerce operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-lg p-8 text-center"
              style={{
                background: 'rgba(15, 23, 42, 0.3)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Precision</h3>
              <p className="text-gray-300 font-light">
                Delivering data-driven insights and automated decisions with unmatched accuracy and reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-lg p-8 text-center"
              style={{
                background: 'rgba(15, 23, 42, 0.3)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-light text-white mb-4">Autonomy</h3>
              <p className="text-gray-300 font-light">
                Creating truly independent AI agents that operate seamlessly without constant human oversight.
              </p>
            </motion.div>
          </div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="rounded-lg p-10 text-center"
            style={{
              background: 'rgba(59, 130, 246, 0.08)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light">
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
