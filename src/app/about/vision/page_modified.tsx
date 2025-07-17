"use client";

import React from "react";
import { motion } from "framer-motion";

export default function VisionPage() {
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
            Our Vision
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Shaping the future of autonomous commerce through groundbreaking AI innovation
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Core Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
              The Future of Commerce is Autonomous
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center">
              We envision a world where artificial intelligence doesn&apos;t just assist e-commerce—it leads it. 
              AURORA9&apos;s vision is to create the first truly autonomous AI workforce that thinks, adapts, and 
              executes with human-level strategic thinking and superhuman execution speed.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              Our goal is to democratize enterprise-level AI automation, making it accessible to every business, 
              from ambitious startups to global enterprises, enabling unprecedented growth and operational excellence.
            </p>
          </motion.div>

          {/* Vision Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Innovation Leadership</h3>
              <p className="text-gray-300">
                Setting the global standard for autonomous AI systems that redefine what&apos;s possible in digital commerce.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Global Impact</h3>
              <p className="text-gray-300">
                Empowering millions of entrepreneurs worldwide to scale beyond traditional limitations through AI.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sustainable Growth</h3>
              <p className="text-gray-300">
                Creating AI systems that evolve and improve continuously, ensuring long-term competitive advantages.
              </p>
            </motion.div>
          </div>

          {/* Future Goals */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-10 border border-white/20 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Next Decade
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              By 2035, AURORA9 will be the backbone of autonomous commerce, with our AI agents managing over 
              $1 trillion in e-commerce transactions annually. We&apos;re not just building software—we&apos;re architecting 
              the future of how business gets done in an AI-first world.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
