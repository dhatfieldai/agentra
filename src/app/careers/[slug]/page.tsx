"use client";

import { useState } from "react";
import { jobs, Job } from "../jobs";
import { notFound, useParams } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

export default function JobDetailsPage() {
  const { slug } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const job = jobs?.find((job: Job) => job.slug === slug);

  if (!jobs || !Array.isArray(jobs)) return <div>Error loading jobs</div>;
  if (!job) return notFound();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Direct submission to Formspree (No custom captcha token needed)
      const response = await fetch("https://formspree.io/f/xqabvgdv", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (response.ok) {
        setSucceeded(true);
        toast.success("Application submitted successfully! ✅");
        form.reset();
      } else {
        console.error("Formspree Error:", result);
        const errorMessage = result.error || "Submission failed. Please check your file size (Max 10MB).";
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className="max-w-3xl mx-auto py-12 px-4" style={{ color: 'var(--foreground)' }}>
        <Toaster position="top-center" />
        
        <h1 className="text-display mb-6 text-white text-center">{job.title}</h1>
        <p className="text-body mb-8 text-center" style={{ color: '#cbd5e1' }}>
          Location: Remote | Department: {job.department}
        </p>
        <article className="mb-10 space-y-4">
          {job.description.map((para: string, idx: number) => (
            <p key={idx} className="text-body" style={{ color: '#cbd5e1' }}>{para}</p>
          ))}
        </article>

        {succeeded ? (
             <div className="p-8 rounded-lg text-center bg-green-900/30 border border-green-500/30">
                <h2 className="text-2xl text-white mb-2">Thank you for applying!</h2>
                <p className="text-gray-300">We have received your application and will review it shortly.</p>
             </div>
        ) : (
            <form 
              onSubmit={handleSubmit}
              encType="multipart/form-data" 
              className="space-y-4 p-8 rounded-lg shadow-lg backdrop-blur-sm"
              style={{ 
                background: 'rgba(15, 23, 42, 0.6)', 
                borderColor: 'rgba(59, 130, 246, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              <h2 className="text-heading-2 mb-6 text-white">Apply Now</h2>

              {/* Hidden field to track position */}
              <input type="hidden" name="position" value={job.title} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="firstName" placeholder="First Name" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
                <input type="text" name="lastName" placeholder="Last Name" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
              </div>

              <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />

              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />

              <input type="text" name="address" placeholder="Address" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" name="city" placeholder="City" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
                <input type="text" name="state" placeholder="State" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
                <input type="text" name="zipCode" placeholder="ZIP" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
              </div>

              <select name="country" required className="w-full px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                <option value="United States" className="bg-slate-800">United States</option>
                <option value="Canada" className="bg-slate-800">Canada</option>
              </select>

              <textarea name="message" placeholder="Message" rows={5} required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }}></textarea>

              <div className="space-y-2">
                <label className="block text-body font-medium text-white">Resume (Required)</label>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" required className="w-full px-4 py-3 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
              </div>

              <div className="space-y-2">
                <label className="block text-body font-medium text-white">Cover Letter (Optional)</label>
                <input type="file" name="coverLetter" accept=".pdf,.doc,.docx" className="w-full px-4 py-3 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
              </div>

              {/* RECAPTCHA IS REMOVED HERE */}

              <button
                type="submit"
                disabled={isSubmitting} 
                className="w-full px-6 py-4 text-white text-body font-medium rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                }}
              >
                {isSubmitting ? "Sending..." : "Submit Application"}
              </button>
            </form>
        )}
      </main>
    </>
  );
}