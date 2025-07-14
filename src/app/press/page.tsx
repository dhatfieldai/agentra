// src/app/press/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function PressPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-50 dark:bg-black text-gray-900 dark:text-white">
      <Image
        src="/AURORA9 Press.png"
        alt="AURORA9 Coming Soon"
        width={600}
        height={400}
        className="rounded-2xl shadow-lg mb-8"
      />

      <h1 className="text-5xl font-bold mb-4 text-center">Press Center Coming Soon</h1>
      <p className="text-lg text-center mb-6 max-w-xl">
        We’re preparing exciting news, media releases, and partnerships for AURORA9. Stay tuned for interviews, announcements, and future-facing insights into the autonomous AI revolution.
      </p>

      <Link
        href="/join-waitlist"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded transition"
      >
        Join the Waitlist
      </Link>
    </main>
  );
}
