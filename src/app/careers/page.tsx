// ✅ src/app/careers/page.tsx
import Link from "next/link";
import { jobs, Job } from "./jobs";
import ErrorBoundary from "@/components/ErrorBoundary";

function CareersContent() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4" style={{ color: 'var(--foreground)' }}>
      <div className="text-center mb-10">
        <h1 className="text-display mb-6 text-white">Careers at AURORA9</h1>
        <p className="text-body-large" style={{ color: '#cbd5e1' }}>Explore open roles and join our fully autonomous AI revolution.</p>
      </div>
      <ul className="space-y-6">
        {jobs.map((job: Job) => (
          <li 
            key={job.slug} 
            className="border rounded-lg p-6 shadow-lg backdrop-blur-sm"
            style={{ 
              background: 'rgba(15, 23, 42, 0.6)', 
              borderColor: 'rgba(59, 130, 246, 0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-heading-2 text-white">{job.title}</h2>
              <Link href={`/careers/${job.slug}`}>
                <button 
                  className="px-6 py-3 text-white text-small font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                  }}
                >
                  Apply
                </button>
              </Link>
            </div>
            <p className="text-body mt-3" style={{ color: '#cbd5e1' }}>{job.shortDescription}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default function CareersPage() {
  return (
    <ErrorBoundary>
      <CareersContent />
    </ErrorBoundary>
  );
}
