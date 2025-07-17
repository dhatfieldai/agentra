"use client";

import { motion } from "framer-motion";

export default function VisionPage() {
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
          <h1 className="text-6xl md:text-7xl font-light mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Vision
          </h1>
          <p className="max-w-4xl mx-auto leading-relaxed" style={{ 
            color: '#cbd5e1',
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            Building the future where AI empowers every e-commerce dream
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Core Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-xl p-10 mb-12 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg"
          >
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center">
              The Future of Autonomous Commerce
            </h2>
            <p className="leading-relaxed mb-6" style={{ 
              color: '#cbd5e1',
              fontSize: '1rem',
              fontWeight: '300',
              lineHeight: '1.7'
            }}>
              AURORA9 envisions a world where e-commerce runs autonomously — intelligently driven by AI agents 
              that think, optimize, and act with precision. Our goal is to build an ecosystem where every business, 
              regardless of size, can scale effortlessly without being weighed down by manual operations.
            </p>
            <p className="leading-relaxed" style={{ 
              color: '#cbd5e1',
              fontSize: '1rem',
              fontWeight: '300',
              lineHeight: '1.7'
            }}>
              We strive to be the global standard for Agentic AI in commerce — a digital workforce that partners 
              with entrepreneurs and organizations to drive exponential efficiency, personalization, and profitability.
            </p>
          </motion.div>

          {/* Vision Components */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-lg p-8 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg"
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
              }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Global Impact</h3>
              <p className="leading-relaxed" style={{ 
                color: '#cbd5e1',
                fontSize: '1rem',
                fontWeight: '300',
                lineHeight: '1.7'
              }}>
                Creating a worldwide ecosystem where AI democratizes e-commerce success, making advanced automation 
                accessible to businesses of all sizes and empowering entrepreneurs globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-lg p-8 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg"
            >
              <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
              }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-light text-white mb-4">Human-AI Partnership</h3>
              <p className="leading-relaxed" style={{ 
                color: '#cbd5e1',
                fontSize: '1rem',
                fontWeight: '300',
                lineHeight: '1.7'
              }}>
                Building AI that enhances human creativity and vision rather than replacing it, creating harmonious 
                partnerships where technology amplifies human potential in commerce.
              </p>
            </motion.div>
          </div>

          {/* Future Goals */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-lg p-6 text-center bg-gradient-to-br from-gray-900/30 via-blue-900/30 to-purple-900/30 border border-blue-500/15 backdrop-blur-lg"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
              }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="text-lg font-light text-white mb-3">Effortless Scaling</h4>
              <p className="text-sm" style={{ 
                color: '#cbd5e1',
                fontWeight: '300',
                lineHeight: '1.6'
              }}>
                Every business can grow without operational complexity
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="rounded-lg p-6 text-center bg-gradient-to-br from-gray-900/30 via-blue-900/30 to-purple-900/30 border border-blue-500/15 backdrop-blur-lg"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
              }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-lg font-light text-white mb-3">Perfect Personalization</h4>
              <p className="text-sm" style={{ 
                color: '#cbd5e1',
                fontWeight: '300',
                lineHeight: '1.6'
              }}>
                AI delivers unique experiences for every customer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="rounded-lg p-6 text-center bg-gradient-to-br from-gray-900/30 via-blue-900/30 to-purple-900/30 border border-blue-500/15 backdrop-blur-lg"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto" style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #3b82f6 100%)'
              }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-light text-white mb-3">Instant Intelligence</h4>
              <p className="text-sm" style={{ 
                color: '#cbd5e1',
                fontWeight: '300',
                lineHeight: '1.6'
              }}>
                Real-time decisions that optimize every aspect of commerce
              </p>
            </motion.div>
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="rounded-lg p-10 text-center bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg"
          >
            <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              A Bold, Intelligent, and Equitable Future
            </h2>
            <p className="leading-relaxed max-w-4xl mx-auto" style={{ 
              color: '#cbd5e1',
              fontSize: '1.125rem',
              fontWeight: '300',
              lineHeight: '1.7'
            }}>
              The future we&apos;re building is bold, intelligent, and equitable — where AI empowers people, 
              not replaces them. Together, we&apos;re creating a world where technology serves humanity&apos;s 
              greatest ambitions in commerce and beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
