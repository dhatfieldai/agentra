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
    deck: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, deck: e.target.files?.[0] || null }));
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
    if (formData.deck) payload.append("Deck Upload", formData.deck);

    try {
      const res = await fetch("https://formspree.io/f/xqabvgdv", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("✅ Inquiry sent! We’ll get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          interestArea: "",
          referralSource: "",
          questions: "",
          deck: null,
        });
      } else {
        toast.error("❌ Submission failed. Please try again.");
      }
    } catch {
      toast.error("⚠️ Something went wrong. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Toaster />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        required
        value={formData.firstName}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        required
        value={formData.lastName}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="text"
        name="company"
        placeholder="Company / Investment Firm (Optional)"
        value={formData.company}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="text"
        name="interestArea"
        placeholder="Investment Interest Area (e.g., AI, SaaS)"
        value={formData.interestArea}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="text"
        name="referralSource"
        placeholder="How did you hear about AURORA9?"
        value={formData.referralSource}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <textarea
        name="questions"
        placeholder="Any specific questions or areas you’d like to discuss?"
        rows={5}
        value={formData.questions}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="file"
        name="deck"
        accept=".pdf,.ppt,.pptx"
        onChange={handleFileChange}
      />
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
