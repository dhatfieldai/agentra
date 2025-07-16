import Image from "next/image";

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
        We&apos;re preparing exciting news, media releases, and partnerships for AURORA9. Stay tuned for interviews, announcements, and future-facing insights into the autonomous AI revolution.
      </p>

      {/* Join Waitlist Section */}
      <div className="bg-gradient-to-br from-[#f0f4f8] to-[#e0f2fe] dark:from-gray-800 dark:to-gray-900 px-8 py-8 rounded-lg shadow-md mt-8 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          Join the Waitlist
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          Be the first to know about AURORA9 press releases and announcements.
        </p>

        <form action="https://formspree.io/f/xqabvgdv" method="POST" className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Join the Waitlist
          </button>
        </form>
      </div>
    </main>
  );
}
