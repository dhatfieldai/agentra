'use client';

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function SitemapPage() {
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
              Site Map
            </h1>
            <p style={{ 
              fontSize: '1.5rem', 
              fontWeight: '300',
              color: 'white',
              maxWidth: '32rem', 
              margin: '0 auto',
              lineHeight: '1.6',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              position: 'relative',
              zIndex: 1,
              marginBottom: '3rem'
            }}>
              Find all pages and resources on AURORA9. Navigate easily through our platform.
            </p>
            
            {/* Back to Homepage Button */}
            <Link 
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
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
              ← Back to Homepage
            </Link>
          </motion.div>
        </div>
        {/* Floating particles */}
        <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: '8rem', height: '8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '10%', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '4rem', height: '4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
      </div>

      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '3rem 1.5rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {/* Main Pages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
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
            
            <h2 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '300', 
              marginBottom: '1rem',
              color: '#cbd5e1',
              position: 'relative',
              zIndex: 1
            }}>
              Main Pages
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, position: 'relative', zIndex: 1 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Home</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/about" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>About</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/about/mission" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Our Mission</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/about/vision" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Our Vision</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/how-it-works" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>How It Works</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/pricing" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Pricing</Link>
              </li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            
            <h2 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '300', 
              marginBottom: '1rem',
              color: '#cbd5e1',
              position: 'relative',
              zIndex: 1
            }}>
              Resources
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, position: 'relative', zIndex: 1 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/blog" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Blog</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/faq" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>FAQ</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/press" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Press</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/contact-us" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Contact Us</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/investors" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Investors</Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
            
            <h2 style={{ 
              fontSize: '1.25rem', 
              fontWeight: '300', 
              marginBottom: '1rem',
              color: '#cbd5e1',
              position: 'relative',
              zIndex: 1
            }}>
              Legal
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, position: 'relative', zIndex: 1 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/privacy-policy" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Privacy Policy</Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link href="/terms" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Terms of Service</Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Careers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            overflow: 'hidden',
            marginTop: '2rem'
          }}
        >
          {/* Floating particles */}
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
          <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
          
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: '300', 
            marginBottom: '1rem',
            color: '#cbd5e1',
            position: 'relative',
            zIndex: 1
          }}>
            Career Opportunities
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', position: 'relative', zIndex: 1 }}>
            <div>
              <h3 style={{ color: 'white', fontWeight: '300', marginBottom: '0.5rem' }}>Engineering</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.25rem' }}>
                  <Link href="/careers/senior-full-stack-developer" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Senior Full Stack Developer</Link>
                </li>
                <li style={{ marginBottom: '0.25rem' }}>
                  <Link href="/careers/devops-engineer" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>DevOps Engineer</Link>
                </li>
                <li style={{ marginBottom: '0.25rem' }}>
                  <Link href="/careers/ai-research-scientist" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>AI Research Scientist</Link>
                </li>
                <li style={{ marginBottom: '0.25rem' }}>
                  <Link href="/careers/data-scientist" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Data Scientist</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'white', fontWeight: '300', marginBottom: '0.5rem' }}>Design & Product</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.25rem' }}>
                  <Link href="/careers/ui-ux-designer" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>UI/UX Designer</Link>
                </li>
                <li style={{ marginBottom: '0.25rem' }}>
                  <Link href="/careers/product-manager" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Product Manager</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'white', fontWeight: '300', marginBottom: '0.5rem' }}>Business</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.25rem' }}>
                  <Link href="/careers/sales-representative" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Sales Representative</Link>
                </li>
                <li style={{ marginBottom: '0.25rem' }}>
                  <Link href="/careers/marketing-specialist" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Marketing Specialist</Link>
                </li>
                <li style={{ marginBottom: '0.25rem' }}>
                  <Link href="/careers/customer-success-manager" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Customer Success Manager</Link>
                </li>
                <li style={{ marginBottom: '0.25rem' }}>
                  <Link href="/careers/business-development-manager" style={{ color: '#cbd5e1', fontWeight: '300', textDecoration: 'none', fontSize: '0.875rem', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.color = 'white'} onMouseOut={(e) => e.currentTarget.style.color = '#cbd5e1'}>Business Development Manager</Link>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Technical Sitemap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
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
              fontSize: '1.125rem', 
              fontWeight: '300', 
              color: 'white', 
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              For Developers & SEO
            </h2>
            <p style={{ 
              color: '#cbd5e1', 
              fontWeight: '300',
              marginBottom: '1rem',
              position: 'relative',
              zIndex: 1
            }}>
              Need the technical XML sitemap for search engines?
            </p>
            <Link 
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.5rem 1rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
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
              View XML Sitemap ↗
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
