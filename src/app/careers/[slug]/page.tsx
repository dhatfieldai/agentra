"use client";

import { useState } from "react";
import { jobs, Job } from "../jobs";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Head from "next/head";
import { Toaster, toast } from "react-hot-toast";

export default function JobDetailsPage() {
  const { slug } = useParams();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    message: "",
    resume: null as File | null,
    coverLetter: null as File | null,
  });

  // Add error handling for jobs import
  if (!jobs || !Array.isArray(jobs)) {
    console.error("Jobs array is not available or malformed");
    return <div>Error loading jobs data</div>;
  }
  
  const job = jobs.find((job: Job) => job.slug === slug);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append("firstName", formData.firstName);
    formPayload.append("lastName", formData.lastName);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("address", formData.address);
    formPayload.append("city", formData.city);
    formPayload.append("state", formData.state);
    formPayload.append("zipCode", formData.zipCode);
    formPayload.append("country", formData.country);
    formPayload.append("message", formData.message);
    formPayload.append("position", job?.title || "Unknown Position");
    if (formData.resume) formPayload.append("resume", formData.resume);
    if (formData.coverLetter) formPayload.append("coverLetter", formData.coverLetter);

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
        setFormData({ 
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          country: "United States",
          message: "",
          resume: null,
          coverLetter: null,
        });
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (with area code)"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
          />

          <input
            type="text"
            name="address"
            placeholder="Street Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
            />

            <input
              type="text"
              name="state"
              placeholder="State/Province"
              required
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
            />

            <input
              type="text"
              name="zipCode"
              placeholder="ZIP/Postal Code"
              required
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
            />
          </div>

          <select
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
          </select>

          <textarea
            name="message"
            placeholder="Cover Letter / Additional Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
          ></textarea>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Resume (Required)</label>
            <input 
              type="file" 
              name="resume" 
              accept=".pdf,.doc,.docx" 
              required
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Cover Letter (Optional)</label>
            <input 
              type="file" 
              name="coverLetter" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange}
              className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:border-zinc-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded transition-colors"
          >
            Submit Application
          </button>
        </form>
      </main>
    </>
  );
}
