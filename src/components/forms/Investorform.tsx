"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function InvestorForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    interestArea: "",
    referralSource: "",
    questions: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("First Name", formData.firstName);
    payload.append("Last Name", formData.lastName);
    payload.append("Email", formData.email);
    payload.append("Phone", formData.phone);
    payload.append("Company", formData.company);
    payload.append("Investment Interest Area", formData.interestArea);
    payload.append("Referral Source", formData.referralSource);
    payload.append("Specific Questions", formData.questions);

    try {
      const res = await fetch("https://formspree.io/f/xldnkbqj", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("✅ Inquiry sent! We'll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          interestArea: "",
          referralSource: "",
          questions: "",
        });
      } else {
        toast.error("❌ Submission failed. Please try again.");
      }
    } catch {
      toast.error("⚠️ Something went wrong. Try again later.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <Toaster />
        
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="company"
          placeholder="Company / Investment Firm (Optional)"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="interestArea"
          placeholder="Investment Interest Area (e.g., AI, SaaS)"
          value={formData.interestArea}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          name="referralSource"
          placeholder="How did you hear about AURORA9?"
          value={formData.referralSource}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="questions"
          placeholder="Any specific questions or areas you'd like to discuss?"
          rows={5}
          value={formData.questions}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Submit Investment Inquiry
        </button>
      </form>
    </div>
  );
}