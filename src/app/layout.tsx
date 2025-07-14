// src/app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AURORA9 | Fully Autonomous Agentic AI for Ecommerce",
  description: "Revolutionizing Amazon Seller Central with autonomous AI agents for inventory, ads, listings & more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen pb-32 bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        {/* Navbar */}
        <Navbar />

        {/* CTA Subscribe Section */}
        <section className="bg-blue-100 dark:bg-gray-800 py-8 px-6 text-center">
          <h2 className="text-2xl font-semibold mb-2">🚀 Join the Waitlist for AURORA9</h2>
          <p className="mb-4">Be the first to experience the future of fully autonomous AI for ecommerce sellers.</p>
          <form
            action="https://formspree.io/f/mvgrjgjp"
            method="POST"
            className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded w-full md:w-2/3 text-gray-800 dark:text-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Notify Me
            </button>
          </form>
        </section>

        {/* Main Page Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>

        {/* Sticky Footer */}
        <Footer />
      </body>
    </html>
  );
}
