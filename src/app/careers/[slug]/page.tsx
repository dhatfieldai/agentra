"use client";

import { useState, useEffect } from "react";
import { jobs, Job } from "../jobs";
import { notFound, useParams } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { useForm, ValidationError } from "@formspree/react"; // ✅ Official Engine
import ReCAPTCHA from "react-google-recaptcha"; // ✅ Security Widget

export default function JobDetailsPage() {
  const { slug } = useParams();
  
  // 1. Setup Formspree Hook
  const [state, handleSubmit] = useForm("xqabvgdv"); 
  
  // 2. Setup Captcha State
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const job = jobs?.find((job: Job) => job.slug === slug);

  // Handle Success
  useEffect(() => {
    if (state.succeeded) {
      toast.success("Application submitted successfully! ✅");
      // Optional: Clear captcha if needed
      setCaptchaToken(null);
    }
  }, [state.succeeded]);

  // Handle Error
  useEffect(() => {
    if (state.errors) {
      // Log the error to console so you can see it
      console.error("Formspree Error:", state.errors);
      toast.error("Submission failed. Check console for details.");
    }
  }, [state.errors]);

  if (!jobs || !Array.isArray(jobs)) return <div>Error loading jobs</div>;
  if (!job) return notFound();

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

        {state.succeeded ? (
             <div className="p-8 rounded-lg text-center bg-green-900/30 border border-green-500/30">
                <h2 className="text-2xl text-white mb-2">Thank you for applying!</h2>
                <p className="text-gray-300">We have received your application and will review it shortly.</p>
             </div>
        ) : (
            <form 
              onSubmit={handleSubmit} // ✅ Library handles the heavy lifting
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

              {/* ⚠️ THE MAGIC BRIDGE: This hidden input sends the token to Formspree */}
              <input type="hidden" name="g-recaptcha-response" value={captchaToken || ""} />

              {/* Hidden field to track position */}
              <input type="hidden" name="position" value={job.title} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="firstName" placeholder="First Name" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
                <input type="text" name="lastName" placeholder="Last Name" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
              </div>

              <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

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
                <ValidationError prefix="Resume" field="resume" errors={state.errors} />
              </div>

              <div className="space-y-2">
                <label className="block text-body font-medium text-white">Cover Letter (Optional)</label>
                <input type="file" name="coverLetter" accept=".pdf,.doc,.docx" className="w-full px-4 py-3 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" style={{ background: 'rgba(30, 41, 59, 0.5)', border: '1px solid rgba(59, 130, 246, 0.3)' }} />
              </div>

              {/* ✅ The Captcha Widget (User Clicks This) */}
              <div className="flex justify-center py-4">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""} 
                  onChange={(token) => setCaptchaToken(token)}
                  theme="dark"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting || !captchaToken} // Disable if sending OR no captcha
                className="w-full px-6 py-4 text-white text-body font-medium rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ 
                  background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                }}
              >
                {state.submitting ? "Sending..." : "Submit Application"}
              </button>
            </form>
        )}
      </main>
    </>
  );
}