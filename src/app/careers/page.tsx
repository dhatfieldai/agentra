// ✅ src/app/careers/page.tsx
import Link from "next/link";
import { jobs, Job } from "./jobs.ts";

export default function CareersPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">Careers at AURORA9</h1>
      <p className="mb-10 text-lg">Explore open roles and join our fully autonomous AI revolution.</p>
      <ul className="space-y-6">
        {jobs.map((job: Job) => (
          <li key={job.slug} className="border rounded-lg p-6 bg-white dark:bg-zinc-900 shadow">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <Link href={`/careers/${job.slug}`}>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded">
                  Apply
                </button>
              </Link>
            </div>
            <p className="text-sm text-gray-600 dark:text-zinc-400 mt-2">{job.shortDescription}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
