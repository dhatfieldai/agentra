import Link from 'next/link'

export default function SitemapPage() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Site Map
          </h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Find all pages and resources on AURORA9. Navigate easily through our platform.
          </p>
          
          {/* Back to Homepage Button */}
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-8"
          >
            ← Back to Homepage
          </Link>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Main Pages
            </h2>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/about/mission" className="text-gray-300 hover:text-white transition-colors">Our Mission</Link></li>
              <li><Link href="/about/vision" className="text-gray-300 hover:text-white transition-colors">Our Vision</Link></li>
              <li><Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Resources
            </h2>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/press" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/investors" className="text-gray-300 hover:text-white transition-colors">Investors</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Legal
            </h2>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Careers */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 md:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Career Opportunities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Engineering</h3>
                <ul className="space-y-1">
                  <li><Link href="/careers/senior-full-stack-developer" className="text-gray-300 hover:text-white transition-colors text-sm">Senior Full Stack Developer</Link></li>
                  <li><Link href="/careers/devops-engineer" className="text-gray-300 hover:text-white transition-colors text-sm">DevOps Engineer</Link></li>
                  <li><Link href="/careers/ai-research-scientist" className="text-gray-300 hover:text-white transition-colors text-sm">AI Research Scientist</Link></li>
                  <li><Link href="/careers/data-scientist" className="text-gray-300 hover:text-white transition-colors text-sm">Data Scientist</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Design & Product</h3>
                <ul className="space-y-1">
                  <li><Link href="/careers/ui-ux-designer" className="text-gray-300 hover:text-white transition-colors text-sm">UI/UX Designer</Link></li>
                  <li><Link href="/careers/product-manager" className="text-gray-300 hover:text-white transition-colors text-sm">Product Manager</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Business</h3>
                <ul className="space-y-1">
                  <li><Link href="/careers/sales-representative" className="text-gray-300 hover:text-white transition-colors text-sm">Sales Representative</Link></li>
                  <li><Link href="/careers/marketing-specialist" className="text-gray-300 hover:text-white transition-colors text-sm">Marketing Specialist</Link></li>
                  <li><Link href="/careers/customer-success-manager" className="text-gray-300 hover:text-white transition-colors text-sm">Customer Success Manager</Link></li>
                  <li><Link href="/careers/business-development-manager" className="text-gray-300 hover:text-white transition-colors text-sm">Business Development Manager</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Sitemap */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h2 className="text-lg font-semibold text-white mb-4">For Developers & SEO</h2>
            <p className="text-gray-300 mb-4">Need the technical XML sitemap for search engines?</p>
            <Link 
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              View XML Sitemap ↗
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
