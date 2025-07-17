'use client';

import { motion } from 'framer-motion';

export default function PricingPage() {
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
              Choose Your Plan
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
              Select the perfect AURORA9 plan to revolutionize your e-commerce automation. 
              Our AI agents work 24/7 to optimize your business operations and maximize growth.
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

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {/* Starter Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(203, 213, 225, 0.3)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>

            <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '300', 
                color: '#cbd5e1', 
                marginBottom: '1rem'
              }}>
                Starter
              </h3>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '300', 
                color: '#cbd5e1', 
                marginBottom: '1rem'
              }}>
                To be Announced
              </div>
              <p style={{ 
                fontSize: '1rem', 
                color: '#cbd5e1',
                fontWeight: '300',
                lineHeight: '1.6'
              }}>
                Perfect for small businesses starting their automation journey
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                1 AI Agent
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Basic E-commerce Integration
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                24/7 Customer Support
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Performance Analytics
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Monthly Reports
              </li>
            </ul>

            <a 
              href="/contact-us" 
              style={{
                display: 'block',
                width: '100%',
                padding: '1rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 1
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
              Join Waitlist
            </a>
          </motion.div>

          {/* Professional Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(79, 172, 254, 0.5)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Most Popular Badge */}
            <div style={{
              position: 'absolute',
              top: '-1rem',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              fontSize: '0.875rem',
              fontWeight: '600',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
            }}>
              Most Popular
            </div>

            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>

            <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '300', 
                color: '#cbd5e1', 
                marginBottom: '1rem'
              }}>
                Professional
              </h3>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '300', 
                color: '#cbd5e1', 
                marginBottom: '1rem'
              }}>
                To be Announced
              </div>
              <p style={{ 
                fontSize: '1rem', 
                color: '#cbd5e1',
                fontWeight: '300',
                lineHeight: '1.6'
              }}>
                Ideal for growing businesses ready to scale
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                5 AI Agents
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Advanced E-commerce Integration
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Priority Support
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Real-time Analytics
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Custom Workflows
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                API Access
              </li>
            </ul>

            <a 
              href="/contact-us" 
              style={{
                display: 'block',
                width: '100%',
                padding: '1rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 1
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
              Join Waitlist
            </a>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '2rem',
              border: '1px solid rgba(203, 213, 225, 0.3)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>

            <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '300', 
                color: '#cbd5e1', 
                marginBottom: '1rem'
              }}>
                Enterprise
              </h3>
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '300', 
                color: '#cbd5e1', 
                marginBottom: '1rem'
              }}>
                To be Announced
              </div>
              <p style={{ 
                fontSize: '1rem', 
                color: '#cbd5e1',
                fontWeight: '300',
                lineHeight: '1.6'
              }}>
                For large organizations requiring maximum automation
              </p>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Unlimited AI Agents
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Full Platform Integration
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Dedicated Account Manager
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Advanced Analytics Suite
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                Custom Development
              </li>
              <li style={{ 
                color: '#cbd5e1', 
                fontWeight: '300', 
                lineHeight: '1.6', 
                marginBottom: '1rem', 
                display: 'flex', 
                alignItems: 'flex-start' 
              }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>✓</span>
                White-label Solutions
              </li>
            </ul>

            <a 
              href="/contact-us" 
              style={{
                display: 'block',
                width: '100%',
                padding: '1rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 1
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
              Contact Sales
            </a>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ marginBottom: '4rem' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '300', 
              color: '#cbd5e1', 
              marginBottom: '2rem', 
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', position: 'relative', zIndex: 1 }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(203, 213, 225, 0.3)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', width: '1.5rem', height: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.3rem)' }}></div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '300', 
                  color: '#cbd5e1', 
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  When will pricing be available?
                </h3>
                <p style={{ 
                  color: '#cbd5e1',
                  fontWeight: '300',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1
                }}>
                  We&apos;re finalizing our pricing structure to ensure maximum value for our customers. 
                  Join our waitlist to be the first to know when pricing is announced.
                </p>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(203, 213, 225, 0.3)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', width: '1.5rem', height: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.3rem)' }}></div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '300', 
                  color: '#cbd5e1', 
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Is there a free trial?
                </h3>
                <p style={{ 
                  color: '#cbd5e1',
                  fontWeight: '300',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Yes! We&apos;ll offer a comprehensive free trial so you can experience the power 
                  of AURORA9&apos;s AI automation before making a commitment.
                </p>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(203, 213, 225, 0.3)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', width: '1.5rem', height: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.3rem)' }}></div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '300', 
                  color: '#cbd5e1', 
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Can I upgrade or downgrade plans?
                </h3>
                <p style={{ 
                  color: '#cbd5e1',
                  fontWeight: '300',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Absolutely! You can change your plan at any time to match your business needs. 
                  Our flexible pricing ensures you only pay for what you use.
                </p>
              </div>
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: '1px solid rgba(203, 213, 225, 0.3)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: '0.5rem', left: '0.5rem', width: '1.5rem', height: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.3rem)' }}></div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '300', 
                  color: '#cbd5e1', 
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  What support is included?
                </h3>
                <p style={{ 
                  color: '#cbd5e1',
                  fontWeight: '300',
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1
                }}>
                  All plans include 24/7 customer support. Professional and Enterprise plans 
                  get priority support and dedicated account management.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '3rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: '300', 
              color: '#cbd5e1', 
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#cbd5e1',
              fontWeight: '300',
              lineHeight: '1.6',
              marginBottom: '2rem',
              maxWidth: '48rem',
              margin: '0 auto 2rem',
              position: 'relative',
              zIndex: 1
            }}>
              Join thousands of entrepreneurs who are revolutionizing their e-commerce operations with AURORA9&apos;s intelligent AI agents.
            </p>
            <a 
              href="/contact-us" 
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textAlign: 'center',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white',
                border: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                zIndex: 1
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
              Join Waitlist Today
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
