"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FeatureSection from "@/components/sections/FeatureSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        {/* Enhanced Hero Section */}
        <section className="relative text-center py-32 px-6 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white overflow-hidden min-h-screen flex items-center">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto relative z-10"
          >
            {/* Sparkle icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-lg rounded-full mb-6 animate-glow">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                E-commerce AI
              </span>
              <span className="block text-4xl md:text-5xl font-medium text-purple-200">
                is Autonomous
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium mb-10 text-purple-100 max-w-4xl mx-auto leading-relaxed">
              AURORA9 deploys a fully autonomous Agentic AI workforce that transforms your e-commerce business into a 
              <span className="text-cyan-300 font-semibold"> self-optimizing growth engine</span>. 
              Experience effortless scaling with predictive intelligence that stays ahead of the market.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              >
                🎬 Watch Demo
              </motion.button>
              
              <a
                href="/how-it-works"
                className="px-10 py-4 text-lg font-semibold rounded-2xl border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm inline-block"
              >
                Explore Features →
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300">10,000+</div>
                <div className="text-purple-200 text-sm">Early Adopters</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300">300%</div>
                <div className="text-purple-200 text-sm">Avg ROI Increase</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300">99.9%</div>
                <div className="text-purple-200 text-sm">Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300">24/7</div>
                <div className="text-purple-200 text-sm">Autonomous</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Waitlist Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24 px-6 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden"
        >
          {/* Background animation */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-96 h-96 bg-cyan-500 rounded-full absolute top-20 -left-20 animate-pulse-slow"></div>
            <div className="w-64 h-64 bg-purple-500 rounded-full absolute bottom-20 -right-10 animate-float"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be First to Access the Future
              <span className="block text-cyan-300">of E-commerce Automation</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join 10,000+ forward-thinking entrepreneurs on the AURORA9 waitlist. 
              Get exclusive early access, special pricing, and be the first to transform your business.
            </p>

            {/* Enhanced call-to-action */}
            <div className="flex justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-md"
              >
                <div className="glass-effect rounded-2xl p-8">
                  <div className="flex flex-col space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all shadow-lg"
                    >
                      Join Waitlist
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-300">Free</div>
                <div className="text-purple-200 text-sm">Early Access</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">50%</div>
                <div className="text-purple-200 text-sm">Launch Discount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">24h</div>
                <div className="text-purple-200 text-sm">Priority Support</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Core Features */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="py-20 px-6 bg-white dark:bg-gray-900"
        >
          <FeatureSection />
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
