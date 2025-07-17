"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
        <div style={{ position: 'relative', maxWidth: '64rem', margin: '0 auto', padding: '5rem 1.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: '300', 
              marginBottom: '2rem',
              color: 'white',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 1
            }}>
              About AURORA9
            </h1>
            <p style={{ 
              fontSize: '1.5rem', 
              fontWeight: '300',
              color: 'white',
              maxWidth: '64rem', 
              margin: '0 auto',
              lineHeight: '1.6',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              position: 'relative',
              zIndex: 1
            }}>
              Pioneering the future of autonomous e-commerce operations with intelligent AI agents
            </p>
          </motion.div>
        </div>
        {/* Floating particles */}
        <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: '8rem', height: '8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '10%', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '4rem', height: '4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
      </div>

      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2.5rem',
            marginBottom: '3rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Floating particles */}
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
          <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
          
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '300', 
            marginBottom: '1.5rem', 
            color: '#cbd5e1',
            position: 'relative',
            zIndex: 1
          }}>
            Revolutionizing E-commerce with AI
          </h2>
          <p style={{ 
            color: '#cbd5e1',
            fontSize: '1rem',
            fontWeight: '300',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
            position: 'relative',
            zIndex: 1
          }}>
            AURORA9 is a fully autonomous Agentic AI workforce designed to revolutionize the way businesses 
            manage and scale their e-commerce operations. We&apos;re not just building tools — we&apos;re building 
            digital teammates that think, learn, and act autonomously.
          </p>
          <p style={{ 
            color: '#cbd5e1',
            fontSize: '1rem',
            fontWeight: '300',
            lineHeight: '1.7',
            position: 'relative',
            zIndex: 1
          }}>
            With cutting-edge AI agents, our platform eliminates repetitive, manual tasks and replaces them 
            with smart, self-operating solutions tailored for exponential growth. Every aspect of your 
            e-commerce business becomes intelligent, responsive, and always working.
          </p>
        </motion.div>

        {/* Key Features Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(203, 213, 225, 0.3)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              position: 'relative',
              zIndex: 1
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '1rem',
              fontSize: '1.125rem', 
              fontWeight: '300', 
              lineHeight: '1.4',
              position: 'relative',
              zIndex: 1
            }}>
              Intelligent Automation
            </h3>
            <p style={{ 
              color: '#cbd5e1',
              fontSize: '0.875rem',
              fontWeight: '300',
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 1
            }}>
              Our AI agents work autonomously to handle inventory management, order processing, 
              customer service, and marketing optimization — freeing you to focus on strategic growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(203, 213, 225, 0.3)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
              position: 'relative',
              zIndex: 1
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '1rem',
              fontSize: '1.125rem', 
              fontWeight: '300', 
              lineHeight: '1.4',
              position: 'relative',
              zIndex: 1
            }}>
              Scalable Performance
            </h3>
            <p style={{ 
              color: '#cbd5e1',
              fontSize: '0.875rem',
              fontWeight: '300',
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 1
            }}>
              Built to grow with your business, our AI workforce scales instantly to match demand, 
              ensuring consistent performance whether you&apos;re handling 100 or 100,000 orders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(203, 213, 225, 0.3)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            
            <div style={{
              width: '3rem',
              height: '3rem',
              borderRadius: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
              background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
              position: 'relative',
              zIndex: 1
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 style={{ 
              color: 'white', 
              marginBottom: '1rem',
              fontSize: '1.125rem', 
              fontWeight: '300', 
              lineHeight: '1.4',
              position: 'relative',
              zIndex: 1
            }}>
              Real-Time Optimization
            </h3>
            <p style={{ 
              color: '#cbd5e1',
              fontSize: '0.875rem',
              fontWeight: '300',
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 1
            }}>
              Continuous learning and adaptation ensure your operations are always optimized, 
              with AI agents making data-driven decisions in real-time for maximum efficiency.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '3rem 2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '300', 
              marginBottom: '1.5rem', 
              color: '#cbd5e1',
              position: 'relative',
              zIndex: 1
            }}>
              Ready to Transform Your E-commerce Business?
            </h2>
            <p style={{ 
              color: '#cbd5e1',
              fontSize: '1.125rem',
              fontWeight: '300',
              lineHeight: '1.6',
              marginBottom: '2rem',
              maxWidth: '48rem',
              margin: '0 auto 2rem',
              position: 'relative',
              zIndex: 1
            }}>
              Join the future of autonomous e-commerce with AURORA9&apos;s AI-powered workforce. 
              Let our intelligent agents handle the operations while you focus on growing your business.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
              <a 
                href="/pricing"
                style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
                }}
              >
                Get Started
              </a>
              <a 
                href="/contact-us"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#cbd5e1',
                  fontWeight: '600',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  textDecoration: 'none',
                  display: 'inline-block',
                  border: '1px solid rgba(203, 213, 225, 0.3)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
