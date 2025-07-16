"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Toaster, toast } from "react-hot-toast";

export default function ContactUsPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      "g-recaptcha-response": captchaToken
    };

    try {
      const res = await fetch("https://formspree.io/f/mvgrjgjp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        toast.success("✅ Your message has been sent successfully!");
        formRef.current?.reset();
        setCaptchaToken(null);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Submission failed. Please check your connection.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact AURORA9
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Thank you for contacting AURORA9! If you have any questions, please complete the form in its entirety. 
              Our client success team will reply within 24 hours to ensure you get the support you need.
            </p>
            <p className="text-lg text-gray-400">
              We&apos;re here to help you transform your e-commerce business with our autonomous AI workforce.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-gray-300 text-lg">
                Ready to revolutionize your business? Let&apos;s start the conversation.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto">
              <Toaster />
              
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-3 text-white">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3 text-white">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-3 text-white">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your business needs, questions, or how we can help you..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6LcEHoIrAAAAAD4P8GnUIlUztV45sBZFux3nMt57"
                  onChange={(token) => setCaptchaToken(token)}
                  theme="dark"
                />
              </div>

              <button
                type="submit"
                disabled={!captchaToken}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
              <p className="text-gray-300 text-sm">
                aurora9ai@gmail.com
              </p>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
              <p className="text-gray-300 text-sm">
                Within 24 hours
              </p>
            </div>

            <div className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.196l.707.707M12 21.804l-.707-.707m9.607-9.101l-.707.707M2.196 12l.707-.707" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-300 text-sm">
                Autonomous support
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
