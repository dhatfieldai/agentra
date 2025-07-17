'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              At AURORA9, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <div style={{ 
              marginTop: '2rem', 
              color: 'rgba(255,255,255,0.8)',
              position: 'relative',
              zIndex: 1
            }}>
              <p style={{ fontWeight: '300' }}>Last updated: July 16, 2025</p>
            </div>
          </motion.div>
        </div>
        {/* Floating particles */}
        <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: '8rem', height: '8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '10%', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '4rem', height: '4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
      </div>

      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Quick Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
              marginBottom: '1.5rem', 
              textAlign: 'center',
              position: 'relative',
              zIndex: 1
            }}>
              Privacy at a Glance
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', position: 'relative', zIndex: 1 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.5rem' }}>Secure Storage</h3>
                <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>All information is stored in secure, compliant data centers with strict access controls.</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  background: 'linear-gradient(135deg, #764ba2 0%, #f093fb 100%)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
                }}>
                  <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.5rem' }}>Transparency</h3>
                <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>We believe in clear communication about how your data is collected and used.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Sections */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '300', 
              color: '#cbd5e1', 
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              Information We Collect
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, position: 'relative', zIndex: 1 }}>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Personal information you provide when creating an account (name, email, company details)
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Usage data and analytics about how you interact with our platform
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Technical information such as IP address, browser type, and device information
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Communication data when you contact our support team
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Payment information processed securely through our payment providers
              </li>
            </ul>
          </motion.div>

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
              border: '1px solid rgba(203, 213, 225, 0.3)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '300', 
              color: '#cbd5e1', 
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              How We Use Your Information
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, position: 'relative', zIndex: 1 }}>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Provide and improve our AI automation services
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Personalize your experience and optimize platform performance
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Communicate with you about service updates and support
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Process payments and manage your account
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Comply with legal obligations and protect against fraud
              </li>
            </ul>
          </motion.div>

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
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Floating particles */}
            <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
            
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '300', 
              color: '#cbd5e1', 
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              Your Rights & Controls
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, position: 'relative', zIndex: 1 }}>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Access and review your personal data
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Request corrections to inaccurate information
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Delete your account and associated data
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Export your data in a portable format
              </li>
              <li style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                Opt-out of marketing communications
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Contact Information */}
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
              marginBottom: '1.5rem',
              position: 'relative',
              zIndex: 1
            }}>
              Questions or Concerns?
            </h2>
            <div style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>
              <p style={{ marginBottom: '1rem' }}>
                If you have any questions about this Privacy Policy or how we handle your data, please don&apos;t hesitate to contact us.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
                <a 
                  href="/contact-us"
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
                  Contact Privacy Team
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
