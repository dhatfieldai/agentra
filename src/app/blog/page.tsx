"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { posts } from "./posts";

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20" style={{ background: 'var(--background)' }}>
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-light mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="max-w-4xl mx-auto leading-relaxed" style={{ 
            color: '#cbd5e1',
            fontSize: '1.125rem',
            fontWeight: '300',
            lineHeight: '1.6'
          }}>
            Insights, Trends & Updates from the Future of Autonomous E-commerce
          </p>
        </motion.div>

        {/* Blog Grid */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg p-6 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg hover:border-blue-500/40 transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="cursor-pointer">
                  <div>
                    <h2 className="text-2xl font-light mb-4 text-white">
                      {post.title}
                    </h2>
                    <p className="leading-relaxed mb-4" style={{ 
                      color: '#cbd5e1',
                      fontSize: '1rem',
                      fontWeight: '300',
                      lineHeight: '1.6'
                    }}>
                      {post.description}
                    </p>
                    <span className="inline-block text-sm bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </div>
    </main>
  );
}
