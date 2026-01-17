'use client';

import { motion } from 'framer-motion';

export default function PricingPage() {
  const pricingPlans = [
    {
      title: "FREEMIUM",
      price: "$0",
      period: "",
      description: "Essential audit capabilities for new sellers.",
      variableFee: "Variable Fee: $0",
      highlighted: false,
      features: [
        { text: "Free Daily Policy Audit", check: true },
        { text: "Max 10 ASINs", check: true },
        { text: "Progressive (Read-Only)", check: true },
        { text: "Semi-Autonomous Actions", check: false },
        { text: "Full Agent Workforce", check: false }
      ],
      buttonText: "Start Free Audit"
    },
    {
      title: "STANDARD",
      price: "$499",
      period: "/mo",
      description: "Core automation for growing brands.",
      variableFee: "Variable Fee: $0",
      highlighted: true,
      features: [
        { text: "2 Core Agents", check: true },
        { text: "Semi-Autonomous Default", check: true },
        { text: "Supported SKUs: Up to 500", check: true },
        { text: "Policy Compliance Checks", check: true },
        { text: "Full Autonomous Control", check: false }
      ],
      buttonText: "Upgrade & Launch"
    },
    {
      title: "ENTERPRISE",
      price: "$1,999",
      period: "/mo",
      description: "Full workforce automation for scale.",
      variableFee: "Service Fee: 3% of Verified ROI",
      highlighted: false,
      features: [
        { text: "Full Agent Workforce", check: true },
        { text: "Autonomous (Full Control)", check: true },
        { text: "Omni-Synergy™ Integration", check: true },
        { text: "Real-time Verified ROI", check: true },
        { text: "Unlimited SKUs", check: true }
      ],
      buttonText: "Upgrade & Launch"
    },
    {
      title: "CUSTOM",
      price: "Bespoke",
      period: "",
      description: "Tailored infrastructure for aggregators.",
      variableFee: "Negotiated Fee",
      highlighted: false,
      features: [
        { text: "Full Agent Policy ASINs™", check: true },
        { text: "Dedicated Compute", check: true },
        { text: "Custom Agents", check: true },
        { text: "Negotiated Per-Metric Billing", check: true },
        { text: "White-Glove Onboarding", check: true }
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <>
      <style jsx>{`
        .faq-grid, .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
          gap: 2rem;
          position: relative;
          z-index: 1;
        }
        
        .pricing-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
           gap: 2rem;
           margin-bottom: 4rem;
        }

        @media (max-width: 768px) {
          .faq-grid, .pillars-grid, .pricing-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .faq-item, .pricing-card {
            padding: 1.5rem !important;
          }
          
          .faq-title {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
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
              AURORA9 Hybrid Pricing
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
               Lean on us while the Rule-Inducing Prioritized status handles the tedious workloads.
            </p>
          </motion.div>
        </div>
        {/* Floating particles */}
        <div style={{ position: 'absolute', top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', width: '8rem', height: '8rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', filter: 'blur(1rem)' }}></div>
      </div>

      <div style={{ maxWidth: '96rem', margin: '0 auto', padding: '3rem 1.5rem' }}>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="pricing-card"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '2rem',
                border: plan.highlighted ? '1px solid rgba(79, 172, 254, 0.5)' : '1px solid rgba(203, 213, 225, 0.3)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              {plan.highlighted && (
                <div style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', zIndex: 2 }}>
                  Most Popular
                </div>
              )}

              <div style={{ textAlign: 'center', marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '0.5rem' }}>{plan.title}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: '300', color: '#fff', marginBottom: '0.5rem' }}>
                  {plan.price}<span style={{fontSize: '1rem', color: '#94a3b8'}}>{plan.period}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                  {plan.description}
                </p>
                {/* Variable Fee Badge */}
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', fontSize: '0.875rem', color: '#4facfe' }}>
                  {plan.variableFee}
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem', position: 'relative', zIndex: 1 }}>
                {plan.features.map((item, i) => (
                  <li key={i} style={{ color: item.check ? '#cbd5e1' : '#64748b', fontWeight: '300', marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: item.check ? '#4facfe' : '#ef4444', marginRight: '0.75rem' }}>{item.check ? '✓' : '✕'}</span>
                    {item.text}
                  </li>
                ))}
              </ul>

              <a href="/contact-us" style={{ 
                display: 'block', 
                width: '100%', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                fontWeight: '600', 
                textAlign: 'center', 
                background: plan.highlighted ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' : 'rgba(255,255,255,0.1)', 
                color: 'white', 
                textDecoration: 'none', 
                border: plan.highlighted ? 'none' : '1px solid rgba(255,255,255,0.2)' 
              }}>
                {plan.buttonText}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Explanation Section */}
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '2rem', textAlign: 'center' }}>
              Explanation Section
            </h2>
            <div className="pillars-grid">
               <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                     <span style={{ width: '4px', height: '1.5rem', background: '#4facfe', marginRight: '1rem', borderRadius: '4px' }}></span>
                     Pillar 1: Fixed Subscription
                  </h3>
                  <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                    For Daily Functionality and Max Uptime. This base rate covers core infrastructure, ensuring your autonomous workforce is continuously monitoring your account.
                  </p>
               </div>
               <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                     <span style={{ width: '4px', height: '1.5rem', background: '#00f2fe', marginRight: '1rem', borderRadius: '4px' }}></span>
                     Pillar 2: Variable Service Fee
                  </h3>
                  <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                    Why This Model Aligns with Your Success: Autonomous actions that generate verified ROI incur a small performance fee, ensuring you only pay for value delivered.
                  </p>
               </div>
            </div>
          </div>
        </motion.div>

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
            <div className="faq-grid">
              {[
                { q: "When will pricing be available?", a: "We're finalizing our pricing structure to ensure maximum value for our customers. Join our waitlist to be the first to know when pricing is announced." },
                { q: "Is there a free trial?", a: "Yes! We'll offer a comprehensive free trial so you can experience the power of AURORA9's AI automation before making a commitment." },
                { q: "Can I upgrade or downgrade plans?", a: "Absolutely! You can change your plan at any time to match your business needs. Our flexible pricing ensures you only pay for what you use." },
                { q: "What support is included?", a: "All plans include 24/7 customer support. Professional and Enterprise plans get priority support and dedicated account management." }
              ].map((faq, i) => (
                <div className="faq-item" key={i} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  border: '1px solid rgba(203, 213, 225, 0.3)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
                }}>
                  <h3 className="faq-title" style={{ fontSize: '1.5rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '1rem' }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
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
            <h2 style={{ fontSize: '3rem', fontWeight: '300', color: '#cbd5e1', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', fontWeight: '300', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem', position: 'relative', zIndex: 1 }}>
              Join thousands of entrepreneurs who are revolutionizing their e-commerce operations with AURORA9&apos;s intelligent AI agents.
            </p>
            <a href="/contact-us" style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              textAlign: 'center',
              textDecoration: 'none',
              background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
              color: 'white',
              border: 'none',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              zIndex: 1
            }}>
              Join Waitlist Today
            </a>
          </div>
        </motion.div>
      </div>
    </main>
    </>
  );
}