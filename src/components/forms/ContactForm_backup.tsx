// src/components/forms/ContactForm.tsx

"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    recaptcha: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRecaptchaChange = (value: string | null) => {
    setForm((prev) => ({ ...prev, recaptcha: value || "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://formspree.io/f/mvgrjgjp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    setLoading(false);

    if (response.ok) {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "", recaptcha: "" });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-800 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-800 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded dark:bg-gray-800 dark:text-white"
        ></textarea>

        <ReCAPTCHA
          sitekey="YOUR_RECAPTCHA_SITE_KEY"
          onChange={handleRecaptchaChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
