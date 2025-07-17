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
      <main className="max-w-3xl mx-auto py-12 px-4" style={{ color: 'var(--foreground)' }}>
        <Toaster />
        <h1 className="text-display mb-6 text-white text-center">{job.title}</h1>
        <p className="text-body mb-8 text-center" style={{ color: '#cbd5e1' }}>
          Location: Remote | Department: {job.department}
        </p>
        <article className="mb-10 space-y-4">
          {job.description.map((para: string, idx: number) => (
            <p key={idx} className="text-body" style={{ color: '#cbd5e1' }}>{para}</p>
          ))}
        </article>

        <form 
          onSubmit={handleSubmit} 
          className="space-y-4 p-8 rounded-lg shadow-lg backdrop-blur-sm"
          style={{ 
            background: 'rgba(15, 23, 42, 0.6)', 
            borderColor: 'rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(59, 130, 246, 0.2)'
          }}
        >
          <h2 className="text-heading-2 mb-6 text-white">Apply Now</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ 
                background: 'rgba(30, 41, 59, 0.5)', 
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ 
                background: 'rgba(30, 41, 59, 0.5)', 
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ 
              background: 'rgba(30, 41, 59, 0.5)', 
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (with area code)"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ 
              background: 'rgba(30, 41, 59, 0.5)', 
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}
          />

          <input
            type="text"
            name="address"
            placeholder="Street Address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ 
              background: 'rgba(30, 41, 59, 0.5)', 
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ 
                background: 'rgba(30, 41, 59, 0.5)', 
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            />

            <input
              type="text"
              name="state"
              placeholder="State/Province"
              required
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ 
                background: 'rgba(30, 41, 59, 0.5)', 
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            />

            <input
              type="text"
              name="zipCode"
              placeholder="ZIP/Postal Code"
              required
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ 
                background: 'rgba(30, 41, 59, 0.5)', 
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            />
          </div>

          <select
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ 
              background: 'rgba(30, 41, 59, 0.5)', 
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}
          >
            <option value="United States" className="bg-slate-800">United States</option>
            <option value="Canada" className="bg-slate-800">Canada</option>
          </select>

          <textarea
            name="message"
            placeholder="Cover Letter / Additional Message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ 
              background: 'rgba(30, 41, 59, 0.5)', 
              border: '1px solid rgba(59, 130, 246, 0.3)'
            }}
          ></textarea>

          <div className="space-y-2">
            <label className="block text-body font-medium text-white">Resume (Required)</label>
            <input 
              type="file" 
              name="resume" 
              accept=".pdf,.doc,.docx" 
              required
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ 
                background: 'rgba(30, 41, 59, 0.5)', 
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-body font-medium text-white">Cover Letter (Optional)</label>
            <input 
              type="file" 
              name="coverLetter" 
              accept=".pdf,.doc,.docx" 
              onChange={handleFileChange}
              className="w-full px-4 py-3 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ 
                background: 'rgba(30, 41, 59, 0.5)', 
                border: '1px solid rgba(59, 130, 246, 0.3)'
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 text-white text-body font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}
          >
            Submit Application
          </button>
        </form>
      </main>
    </>
  );
}
