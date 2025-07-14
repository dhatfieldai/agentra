// src/app/contact-us/page.tsx

import React from 'react';
import ContactForm from '@/components/forms/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | AURORA9',
  description: 'Reach out to AURORA9 for customer support, product inquiries, and more. Our team is here to assist you.',
  openGraph: {
    title: 'Contact AURORA9',
    description: 'We’re here to help. Submit your support or product inquiries and we’ll get back to you shortly.',
    url: 'https://aurora9agenticai.com/contact-us',
    type: 'website',
  },
  alternates: {
    canonical: '/contact-us',
  },
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen pb-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto pt-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-lg mb-8 text-center">
          Whether you're seeking support, have general questions, or want to learn more about AURORA9, we’re here to help.
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
