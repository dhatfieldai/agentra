"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Toaster, toast } from "react-hot-toast";
import Head from "next/head";

const ContactForm = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the reCAPTCHA.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/mvgrjgjp", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.currentTarget as HTMLFormElement),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
        setCaptchaToken(null);
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact AURORA9",
              url: "https://oasis11217ai.github.io/aurora9agenticAI/contact-us",
              mainEntity: {
                "@type": "Organization",
                name: "AURORA9",
                contactPoint: {
                  "@type": "ContactPoint",
                  contactType: "Customer Support",
                  email: "aurora9@aurora9.ai",
                },
              },
            }),
          }}
        />
      </Head>

      <div className="max-w-2xl mx-auto mt-8 px-4">
        <Toaster />
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey="6LcEHoIrAAAAAD4P8GnUIlUztV45sBZFux3nMt57"
              onChange={(token) => setCaptchaToken(token)}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
