// src/components/forms/JoinWaitlist.tsx

"use client";

import { useState } from "react";

export default function JoinWaitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xqabvgdv", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail("");
      }
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#f0f4f8] to-[#e0f2fe] px-4 py-12 sm:px-8 rounded-lg shadow-md mt-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Join the AURORA9 Waitlist
        </h2>
        <p className="text-gray-700 mb-6">
          Be the first to experience the future of e-commerce. We&apos;ll notify
          you when AURORA9 launches.
        </p>

        {submitted ? (
          <div className="text-green-600 font-semibold">
            Thank you! You&apos;re on the list.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
