"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Scale, AlertTriangle } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "Service Description",
      icon: <FileText className="w-6 h-6" />,
      content: [
        "AURORA9 provides AI-powered e-commerce automation services",
        "Our platform includes intelligent agents for business optimization",
        "Services are provided on a subscription basis with various tiers",
        "Features and capabilities may vary based on your selected plan",
        "We reserve the right to update and improve our services"
      ]
    },
    {
      title: "User Responsibilities",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Provide accurate and up-to-date account information",
        "Maintain the security of your account credentials",
        "Use our services in compliance with applicable laws",
        "Respect intellectual property rights",
        "Report any security vulnerabilities or misuse"
      ]
    },
    {
      title: "Acceptable Use",
      icon: <Scale className="w-6 h-6" />,
      content: [
        "Use services for legitimate business purposes only",
        "Do not attempt to reverse engineer or hack our platform",
        "Respect rate limits and usage guidelines",
        "Do not share account access with unauthorized parties",
        "Comply with all applicable e-commerce regulations"
      ]
    },
    {
      title: "Limitations & Disclaimers",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "Services are provided &quot;as is&quot; without warranties",
        "We are not liable for business decisions made using our platform",
        "Performance results may vary based on individual circumstances",
        "Third-party integrations are subject to their own terms",
        "Service availability is not guaranteed 100% of the time"
      ]
    }
  ];

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
              Terms of Service
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
              These terms govern your use of AURORA9&apos;s AI automation services. 
              By using our platform, you agree to comply with these terms and conditions.
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

        {/* Agreement Notice */}
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
            
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Scale style={{ width: '4rem', height: '4rem', color: '#4facfe', margin: '0 auto 1.5rem' }} />
              <h2 style={{ 
                fontSize: '3rem', 
                fontWeight: '300', 
                color: '#cbd5e1', 
                marginBottom: '1.5rem'
              }}>
                Agreement to Terms
              </h2>
              <p style={{ 
                fontSize: '1.25rem', 
                fontWeight: '300',
                color: '#cbd5e1',
                maxWidth: '48rem', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                By accessing or using AURORA9&apos;s services, you acknowledge that you have read, 
                understood, and agree to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Terms Sections */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
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
              
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                <div style={{ color: '#4facfe', marginRight: '1rem' }}>
                  {section.icon}
                </div>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '300', 
                  color: '#cbd5e1'
                }}>
                  {section.title}
                </h2>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, position: 'relative', zIndex: 1 }}>
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#4facfe', marginRight: '0.75rem', marginTop: '0.125rem' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Detailed Sections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          {/* Payment Terms */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '3rem'
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
              Payment Terms and Billing
            </h2>
            <div style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Subscription fees are billed in advance on a monthly or annual basis. All payments are processed securely through our trusted payment providers.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.75rem' }}>Billing Cycle</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Monthly subscriptions renew automatically
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Annual subscriptions offer discounted rates
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Pro-rated charges for plan upgrades
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Refunds processed for unused portions
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.75rem' }}>Payment Methods</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Major credit and debit cards accepted
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Bank transfers for enterprise accounts
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Secure payment processing with encryption
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Invoice billing available for qualified accounts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '3rem'
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
              Intellectual Property Rights
            </h2>
            <div style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                AURORA9 retains all rights to our proprietary technology, algorithms, and platform features. Users retain ownership of their data and content.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.75rem' }}>Our Rights</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Proprietary AI algorithms and models
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Platform software and architecture
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Trademarks and brand elements
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Documentation and training materials
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.75rem' }}>Your Rights</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Ownership of your business data
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Control over data sharing preferences
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Right to export your information
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      License to use our services as agreed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '1rem',
            padding: '2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '3rem'
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
              Account Termination
            </h2>
            <div style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                Either party may terminate the service agreement with appropriate notice. Upon termination, you will retain access until the end of your billing period.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.75rem' }}>User Termination</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Cancel anytime from account settings
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      30-day data retention period
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Export data before cancellation
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.75rem' }}>Service Termination</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      For violations of terms
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Non-payment of fees
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Suspicious or fraudulent activity
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.75rem' }}>Data Handling</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Secure deletion after retention period
                    </li>
                    <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                      <span style={{ color: '#4facfe', marginRight: '0.5rem' }}>•</span>
                      Backup data removed permanently
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
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
              Questions About These Terms?
            </h2>
            <div style={{ textAlign: 'center', color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', position: 'relative', zIndex: 1 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                If you have any questions about these Terms of Service or need clarification on any provisions, our legal team is here to help.
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
                  Contact Legal Team
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
