// ✅ src/app/investors/page.tsx
"use client";

import InvestorForm from '@/components/forms/InvestorForm';

export default function InvestorsPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.1)' }}></div>
        <div style={{ position: 'relative', maxWidth: '112rem', margin: '0 auto', padding: '5rem 1.5rem 4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ 
              fontSize: '4rem', 
              fontWeight: '300', 
              marginBottom: '2rem',
              color: 'white',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              position: 'relative',
              zIndex: 1
            }}>
              Invest in the Future
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
              Join AURORA9&apos;s mission to revolutionize e-commerce with autonomous AI agents. 
              Be part of the next generation of Amazon seller automation.
            </p>
          </div>
        </div>
        {/* Floating particles */}
        <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: '8rem', height: '8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: '10%', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '4rem', height: '4rem', background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        {/* Investment Opportunity Overview */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '2.5rem',
          border: '1px solid rgba(203, 213, 225, 0.3)',
          marginBottom: '3rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ 
                fontSize: '1.875rem', 
                fontWeight: '300', 
                marginBottom: '1.5rem',
                color: '#cbd5e1'
              }}>
                Revolutionary AI Platform
              </h2>
              <p style={{ 
                color: '#cbd5e1', 
                fontSize: '1.125rem', 
                lineHeight: '1.6', 
                marginBottom: '1.5rem',
                fontWeight: '300'
              }}>
                AURORA9 is not just building software – we&apos;re creating the future of Amazon Seller Central operations 
                with a fully autonomous, agentic AI workforce. We&apos;re transforming complex, labor-intensive online 
                selling into streamlined, highly efficient, and massively profitable enterprises.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: '#667eea', borderRadius: '50%' }}></div>
                  <span style={{ color: '#cbd5e1', fontWeight: '300' }}>Cutting-edge AI-SaaS platform</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: '#764ba2', borderRadius: '50%' }}></div>
                  <span style={{ color: '#cbd5e1', fontWeight: '300' }}>Autonomous AI workforce operations</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: '#f093fb', borderRadius: '50%' }}></div>
                  <span style={{ color: '#cbd5e1', fontWeight: '300' }}>Enterprise-grade scalability</span>
                </div>
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
              borderRadius: '0.75rem',
              padding: '2rem',
              border: '1px solid rgba(102, 126, 234, 0.3)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '300', color: 'white', marginBottom: '1rem' }}>Market Opportunity</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#cbd5e1', fontWeight: '300' }}>Global E-commerce Market</span>
                  <span style={{ color: 'white', fontWeight: '300' }}>$6.2T</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#cbd5e1', fontWeight: '300' }}>Amazon Marketplace</span>
                  <span style={{ color: 'white', fontWeight: '300' }}>$600B+</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#cbd5e1', fontWeight: '300' }}>AI Market Growth</span>
                  <span style={{ color: 'white', fontWeight: '300' }}>35% CAGR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Invest Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '0.75rem',
            padding: '2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ 
              width: '3rem', 
              height: '3rem', 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
              borderRadius: '0.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '1.5rem' 
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '1rem' }}>Pioneering Technology</h3>
            <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
              First-to-market autonomous AI agents specifically designed for Amazon seller operations with unprecedented automation capabilities.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '0.75rem',
            padding: '2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ 
              width: '3rem', 
              height: '3rem', 
              background: 'linear-gradient(135deg, #764ba2 0%, #f093fb 100%)', 
              borderRadius: '0.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '1.5rem' 
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '1rem' }}>Massive ROI Potential</h3>
            <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
              Clear path to profitability through automation efficiency, targeting multi-trillion dollar e-commerce ecosystem with proven demand.
            </p>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: '0.75rem',
            padding: '2rem',
            border: '1px solid rgba(203, 213, 225, 0.3)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ 
              width: '3rem', 
              height: '3rem', 
              background: 'linear-gradient(135deg, #f093fb 0%, #667eea 100%)', 
              borderRadius: '0.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '1.5rem' 
            }}>
              <svg style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '1rem' }}>Expert Team</h3>
            <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
              Led by AI experts, seasoned engineers, and e-commerce veterans with proven track records in building scalable solutions.
            </p>
          </div>
        </div>

        {/* Roadmap Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '2.5rem',
          border: '1px solid rgba(203, 213, 225, 0.3)',
          marginBottom: '3rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Floating particles */}
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
          <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
          
          <h2 style={{ 
            fontSize: '1.875rem', 
            fontWeight: '300', 
            textAlign: 'center', 
            marginBottom: '2.5rem',
            color: '#cbd5e1',
            position: 'relative',
            zIndex: 1
          }}>
            Product Roadmap & Milestones
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ 
                width: '4rem', 
                height: '4rem', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
              }}>
                <span style={{ color: 'white', fontWeight: '300', fontSize: '1.125rem' }}>Q4</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.75rem' }}>2025 - MVP Launch</h3>
              <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                Core AI agents for inventory management, pricing optimization, and basic automation features.
              </p>
            </div>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ 
                width: '4rem', 
                height: '4rem', 
                background: 'linear-gradient(135deg, #764ba2 0%, #f093fb 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
              }}>
                <span style={{ color: 'white', fontWeight: '300', fontSize: '1.125rem' }}>Q2</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.75rem' }}>2026 - Scale</h3>
              <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                Advanced AI capabilities, enterprise features, and multi-marketplace support expansion.
              </p>
            </div>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ 
                width: '4rem', 
                height: '4rem', 
                background: 'linear-gradient(135deg, #f093fb 0%, #667eea 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
              }}>
                <span style={{ color: 'white', fontWeight: '300', fontSize: '1.125rem' }}>Q4</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '300', color: 'white', marginBottom: '0.75rem' }}>2026 - Global</h3>
              <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                International market expansion and full autonomous AI workforce deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Investment Form Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '1rem',
          padding: '2.5rem',
          border: '1px solid rgba(203, 213, 225, 0.3)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Floating particles */}
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '2rem', height: '2rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
          <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(0.5rem)' }}></div>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: '300', 
              marginBottom: '1rem',
              color: '#cbd5e1'
            }}>
              Ready to Join Our Journey?
            </h2>
            <p style={{ 
              color: '#cbd5e1', 
              fontSize: '1.125rem', 
              maxWidth: '48rem', 
              margin: '0 auto',
              fontWeight: '300',
              lineHeight: '1.6'
            }}>
              Your investment will accelerate our development, expand our market reach, and solidify our position 
              as the leader in autonomous AI solutions for Amazon sellers. Fill out the form below to receive our 
              investor deck and schedule a personalized discussion.
            </p>
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <InvestorForm />
          </div>
        </div>
      </div>
    </main>
  );
}
