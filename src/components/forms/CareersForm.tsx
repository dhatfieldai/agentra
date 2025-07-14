"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function CareersForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files?.[0] || null }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("message", formData.message);
    if (formData.resume) payload.append("resume", formData.resume);

    try {
      const res = await fetch("https://formspree.io/f/xqabvgdv", {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("✅ Application submitted successfully!");
        setFormData({ name: "", email: "", message: "", resume: null });
      } else {
        toast.error("❌ Submission failed. Try again.");
      }
    } catch {
      toast.error("⚠️ Something went wrong. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Toaster />
      <input
        type="text"
        name="name"
        required
        placeholder="Your Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
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
      />
      <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded">
        Submit Application
      </button>
    </form>
  );
}
