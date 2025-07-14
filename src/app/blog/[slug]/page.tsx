"use client";

import { useParams } from "next/navigation";
import { posts } from "../posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-12 px-4 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <p className="text-sm text-gray-600 dark:text-zinc-400 mb-8">{post.excerpt}</p>

      <article className="prose dark:prose-invert max-w-none">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </article>

      <div className="mt-10">
        <Link href="/">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded">
            ← Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
