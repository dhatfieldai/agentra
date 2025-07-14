// src/components/sections/HeroSection.tsx

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-gray-900 text-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
          Welcome to <span className="text-indigo-400">AURORA9</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Fully autonomous AI agent workforce designed to scale your e-commerce operations — smarter, faster, and hands-free.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/how-it-works"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded font-semibold transition"
          >
            How It Works
          </a>
          <a
            href="/#join-waitlist"
            className="bg-white text-indigo-600 hover:text-indigo-700 px-6 py-3 rounded font-semibold transition"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
