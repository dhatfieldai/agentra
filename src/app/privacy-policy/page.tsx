// ✅ src/app/privacy-policy/page.tsx

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-6 text-gray-800 dark:text-white">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: July 12, 2025</p>

      <section className="space-y-6">
        <p>
          AURORA9 is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and
          safeguard your information when you use our AI-driven SaaS platform and related services.
        </p>

        <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul className="list-disc ml-6">
          <li><strong>Personal Information:</strong> Name, email address, and contact details when submitting forms.</li>
          <li><strong>Usage Data:</strong> Information about how you interact with our platform, including IP address, browser type, and device information.</li>
          <li><strong>Cookies:</strong> To enhance your browsing experience and provide personalized services.</li>
        </ul>

        <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
        <p>We use your data to:</p>
        <ul className="list-disc ml-6">
          <li>Deliver and improve our autonomous AI services.</li>
          <li>Communicate product updates, support, or promotional content.</li>
          <li>Analyze usage to enhance platform performance and security.</li>
        </ul>

        <h2 className="text-2xl font-semibold">3. Sharing Your Information</h2>
        <p>
          We do not sell or rent your personal data. We may share information with trusted partners who assist in
          operating our platform or conducting business, provided they agree to keep the information confidential.
        </p>

        <h2 className="text-2xl font-semibold">4. Data Security</h2>
        <p>
          We implement advanced security measures, including encryption, firewalls, and secure infrastructure (AWS), to
          protect your data against unauthorized access or misuse.
        </p>

        <h2 className="text-2xl font-semibold">5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc ml-6">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your information.</li>
          <li>Withdraw consent at any time by contacting us at <a href="mailto:privacy@aurora9.ai" className="text-indigo-600 hover:underline">privacy@aurora9.ai</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold">6. Third-Party Services</h2>
        <p>
          Our site may include links to external services or platforms. We are not responsible for their content or privacy practices.
        </p>

        <h2 className="text-2xl font-semibold">7. Updates to This Policy</h2>
        <p>
          We may update this Privacy Policy as necessary. Any significant changes will be communicated via our platform or email.
        </p>

        <h2 className="text-2xl font-semibold">8. Contact Us</h2>
        <p>
          If you have questions about this policy, reach out to us at{" "}
          <a href="mailto:privacy@aurora9.ai" className="text-indigo-600 hover:underline">privacy@aurora9.ai</a>.
        </p>
      </section>
    </main>
  );
}
