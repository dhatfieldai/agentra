import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-4">
          <h1 className="text-display font-bold text-white">404</h1>
          <h2 className="text-heading-1 text-white">Page Not Found</h2>
          <p className="text-body" style={{ color: '#cbd5e1' }}>
            Sorry, we could not find the page you are looking for.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 text-white text-body font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}
          >
            Go Home
          </Link>
          
          <div className="flex justify-center space-x-4 text-body">
            <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
              About
            </Link>
            <Link href="/contact-us" className="text-blue-400 hover:text-blue-300 transition-colors">
              Contact
            </Link>
            <Link href="/careers" className="text-blue-400 hover:text-blue-300 transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
