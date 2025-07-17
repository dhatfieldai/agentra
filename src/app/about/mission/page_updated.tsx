"use client";

import { motion } from "framer-motion";

export default function MissionStatementPage() {
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
              Our Mission
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
              Empowering the future of autonomous e-commerce through intelligent AI innovation
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
        {/* Core Mission */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
            fontSize: '2.5rem', 
            fontWeight: '300', 
            marginBottom: '1.5rem', 
            color: '#cbd5e1',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>
            Transforming E-commerce Through AI
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#cbd5e1', 
            lineHeight: '1.6', 
            marginBottom: '1.5rem', 
            textAlign: 'center', 
            fontWeight: '300',
            position: 'relative',
            zIndex: 1
          }}>
            At AURORA9, our mission is to empower e-commerce businesses with an intelligent, fully autonomous AI workforce. 
            We are dedicated to transforming operations into streamlined, high-performing systems powered by Agentic AI — 
            enabling entrepreneurs and enterprises to scale without limits.
          </p>
          <p style={{ 
            fontSize: '1.125rem', 
            color: '#cbd5e1', 
            lineHeight: '1.6', 
            textAlign: 'center', 
            fontWeight: '300',
            position: 'relative',
            zIndex: 1
          }}>
            Through innovation, data precision, and AI autonomy, we&apos;re creating the future of commerce where decision-making, 
            optimization, and scalability happen hands-free — while keeping human vision at the heart of progress.
          </p>
        </motion.div>

        {/* Mission Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
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
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              position: 'relative',
              zIndex: 1
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '300', 
              color: 'white', 
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              Autonomous Excellence
            </h3>
            <p style={{ 
              color: '#cbd5e1', 
              fontWeight: '300', 
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 1
            }}>
              We believe in creating AI systems that operate independently, making intelligent decisions 
              without constant human oversight while maintaining the highest standards of performance.
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
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
              position: 'relative',
              zIndex: 1
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '300', 
              color: 'white', 
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              Scalable Growth
            </h3>
            <p style={{ 
              color: '#cbd5e1', 
              fontWeight: '300', 
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 1
            }}>
              Our mission is to remove growth barriers by providing infinitely scalable AI solutions 
              that adapt to your business needs, whether you&apos;re a startup or enterprise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '300', 
              color: 'white', 
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              Human-Centered Innovation
            </h3>
            <p style={{ 
              color: '#cbd5e1', 
              fontWeight: '300', 
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 1
            }}>
              While we automate operations, we keep human creativity and strategic thinking at the center. 
              Our AI enhances human potential rather than replacing it.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
              Join Our Mission
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
              Be part of the e-commerce revolution. Experience the power of autonomous AI agents 
              working seamlessly to transform your business operations.
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
                Start Your Journey
              </a>
              <a 
                href="/about/vision"
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
                Our Vision
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
