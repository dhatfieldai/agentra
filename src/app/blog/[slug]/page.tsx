"use client";

import { useParams } from "next/navigation";
import { posts } from "../posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="min-h-screen pt-20" style={{ background: 'var(--background)' }}>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-light mb-8 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <p className="max-w-3xl mx-auto leading-relaxed" style={{ 
              color: '#cbd5e1',
              fontSize: '1.125rem',
              fontWeight: '300',
              lineHeight: '1.6'
            }}>
              {post.description}
            </p>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-xl p-10 mb-12 bg-gradient-to-br from-gray-900/40 via-blue-900/40 to-purple-900/40 border border-blue-500/20 backdrop-blur-lg"
          >
            <article className="prose prose-lg max-w-none">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="mb-6 leading-relaxed" style={{ 
                  color: '#cbd5e1',
                  fontSize: '1.125rem',
                  fontWeight: '300',
                  lineHeight: '1.7'
                }}>
                  {paragraph}
                </p>
              ))}
            </article>
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Link href="/blog">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                ← Back to Blog
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
