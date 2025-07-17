"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUsPage() {
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
            About AURORA9
          </h1>
          <p className="max-w-4xl mx-auto leading-relaxed" style={{ 
            color: '#cbd5e1',
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            Pioneering the future of autonomous e-commerce operations with intelligent AI agents
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-xl p-10 mb-12 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg"
          >
            <h2 className="text-3xl font-light mb-6 text-white">
              Revolutionizing E-commerce with AI
            </h2>
            <p className="leading-relaxed mb-6" style={{ 
              color: '#cbd5e1',
              fontSize: '1rem',
              fontWeight: '300',
              lineHeight: '1.7'
            }}>
              AURORA9 is a fully autonomous Agentic AI workforce designed to revolutionize the way businesses 
              manage and scale their e-commerce operations. We&apos;re not just building tools — we&apos;re building 
              digital teammates that think, learn, and act autonomously.
            </p>
            <p className="leading-relaxed" style={{ 
              color: '#cbd5e1',
              fontSize: '1rem',
              fontWeight: '300',
              lineHeight: '1.7'
            }}>
              With cutting-edge AI agents, our platform eliminates repetitive, manual tasks and replaces them 
              with smart, self-operating solutions tailored for exponential growth. Every aspect of your 
              e-commerce business becomes intelligent, responsive, and always working.
            </p>
          </motion.div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-lg p-8"
              style={{
                background: 'rgba(15, 23, 42, 0.3)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
              }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-white mb-4" style={{ 
                fontSize: '1.125rem', 
                fontWeight: '400', 
                lineHeight: '1.4' 
              }}>
                Intelligent Automation
              </h3>
              <p style={{ 
                color: '#cbd5e1',
                fontSize: '0.925rem',
                fontWeight: '300',
                lineHeight: '1.6'
              }}>
                AI agents that understand context, make decisions, and execute complex e-commerce strategies without human intervention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-lg p-8"
              style={{
                background: 'rgba(15, 23, 42, 0.3)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
              }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-white mb-4" style={{ 
                fontSize: '1.125rem', 
                fontWeight: '400', 
                lineHeight: '1.4' 
              }}>
                Scalable Growth
              </h3>
              <p style={{ 
                color: '#cbd5e1',
                fontSize: '0.925rem',
                fontWeight: '300',
                lineHeight: '1.6'
              }}>
                Whether managing thousands of SKUs or just starting out, our platform scales seamlessly with your business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-lg p-8"
              style={{
                background: 'rgba(15, 23, 42, 0.3)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(5px)'
              }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6" style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #3b82f6 100%)'
              }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-white mb-4" style={{ 
                fontSize: '1.125rem', 
                fontWeight: '400', 
                lineHeight: '1.4' 
              }}>
                Adaptive Intelligence
              </h3>
              <p style={{ 
                color: '#cbd5e1',
                fontSize: '0.925rem',
                fontWeight: '300',
                lineHeight: '1.6'
              }}>
                Our AI continuously learns from market trends, customer behavior, and business performance to optimize strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
