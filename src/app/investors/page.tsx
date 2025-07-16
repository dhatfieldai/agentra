// ✅ src/app/investors/page.tsx
import InvestorForm from '@/components/forms/InvestorForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invest in AURORA9 | Empower the Future of AI E-commerce',
  description: 'Join us in shaping the future of autonomous Amazon operations. Learn how to invest in AURORA9 today.',
  openGraph: {
    title: 'Invest in AURORA9',
    description: 'AURORA9 is building the future of e-commerce with autonomous AI agents. Become part of our journey.',
    url: 'https://aurora9agenticai.com/investors',
    type: 'website',
  },
  alternates: {
    canonical: '/investors',
  },
};

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Invest in the Future
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Join AURORA9&apos;s mission to revolutionize e-commerce with autonomous AI agents. 
              Be part of the next generation of Amazon seller automation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {/* Investment Opportunity Overview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionary AI Platform
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                AURORA9 is not just building software – we&apos;re creating the future of Amazon Seller Central operations 
                with a fully autonomous, agentic AI workforce. We&apos;re transforming complex, labor-intensive online 
                selling into streamlined, highly efficient, and massively profitable enterprises.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Cutting-edge AI-SaaS platform</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Autonomous AI workforce operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Enterprise-grade scalability</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Market Opportunity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Global E-commerce Market</span>
                  <span className="text-white font-semibold">$6.2T</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Amazon Marketplace</span>
                  <span className="text-white font-semibold">$600B+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI Market Growth</span>
                  <span className="text-white font-semibold">35% CAGR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Invest Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Pioneering Technology</h3>
            <p className="text-gray-300">
              First-to-market autonomous AI agents specifically designed for Amazon seller operations with unprecedented automation capabilities.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Massive ROI Potential</h3>
            <p className="text-gray-300">
              Clear path to profitability through automation efficiency, targeting multi-trillion dollar e-commerce ecosystem with proven demand.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
            <p className="text-gray-300">
              Led by AI experts, seasoned engineers, and e-commerce veterans with proven track records in building scalable solutions.
            </p>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 mb-12">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Product Roadmap & Milestones
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Q4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2025 - MVP Launch</h3>
              <p className="text-gray-300">
                Core AI agents for inventory management, pricing optimization, and basic automation features.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Q2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2026 - Scale</h3>
              <p className="text-gray-300">
                Advanced AI capabilities, enterprise features, and multi-marketplace support expansion.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Q4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2026 - Global</h3>
              <p className="text-gray-300">
                International market expansion and full autonomous AI workforce deployment.
              </p>
            </div>
          </div>
        </div>

        {/* Investment Form Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Join Our Journey?
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Your investment will accelerate our development, expand our market reach, and solidify our position 
              as the leader in autonomous AI solutions for Amazon sellers. Fill out the form below to receive our 
              investor deck and schedule a personalized discussion.
            </p>
          </div>
          <InvestorForm />
        </div>
      </div>
    </main>
  );
}
