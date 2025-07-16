"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { posts } from "./posts";

export default function BlogPage() {
  return (
    <>
      <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white pt-24 pb-20 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl">
            AURORA9 Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Insights, Trends & Updates from the Future of Autonomous E-commerce
          </p>
        </motion.div>

        {/* Blog Grid */}
        <section className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-all border border-gray-200 dark:border-gray-700"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="cursor-pointer">
                  <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 flex items-center justify-center">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain opacity-80"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-indigo-800 dark:text-indigo-400">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {post.description}
                    </p>
                    <span className="mt-4 inline-block text-sm text-indigo-500 hover:text-indigo-600">
                      Read More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
      </main>
    </>
  );
}
