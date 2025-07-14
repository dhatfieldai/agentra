"use client";

import { useState } from "react";
import { jobs } from "../jobs";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Head from "next/head";
import { Toaster, toast } from "react-hot-toast";

export default function JobDetailsPage() {
  const { slug } = useParams();
  const job = jobs.find((job) => job.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, resume: e.target.files?.[0] || null });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);
    if (formData.resume) formPayload.append("resume", formData.resume);

    try {
      const res = await fetch("https://formspree.io/f/xqabvgdv", {
        method: "POST",
        body: formPayload,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        toast.success("Application submitted successfully! ✅");
        setFormData({ name: "", email: "", message: "", resume: null });
      } else {
        toast.error("Submission failed. Please try again later.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  if (!job) return notFound();

  return (
    <>
      <Head>
        <title>{job.title} | AURORA9 Careers</title>
        <meta name="description" content={`Apply for the ${job.title} role at AURORA9`} />
      </Head>
      <main className="max-w-3xl mx-auto py-12 px-4 text-gray-800 dark:text-white">
        <Toaster />
        <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
        <p className="text-sm text-gray-500 mb-8">
          Location: Remote | Department: {job.department}
        </p>
        <article className="prose dark:prose-invert max-w-none mb-10">
          {job.description.map((para: string, idx: number) => (
            <p key={idx}>{para}</p>
          ))}
        </article>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-zinc-900 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Apply Now</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />

          <textarea
            name="message"
            placeholder="Cover Letter / Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          ></textarea>

          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded"
          >
            Submit Application
          </button>
        </form>
      </main>
    </>
  );
}
