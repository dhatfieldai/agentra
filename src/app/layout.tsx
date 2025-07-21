import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://aurora9.ai'),
  title: {
    default: "AURORA9 - Autonomous AI Workforce for E-commerce",
    template: "%s | AURORA9"
  },
  description: "Transform your e-commerce business with AURORA9's fully autonomous Agentic AI workforce. Experience effortless, intelligent growth through predictive analytics, automated optimization, and real-time marketplace intelligence.",
  keywords: [
    "AI workforce",
    "e-commerce automation",
    "agentic AI",
    "predictive analytics",
    "autonomous business operations",
    "marketplace intelligence",
    "AI-driven growth",
    "automated optimization"
  ],
  authors: [{ name: "AURORA9 Team" }],
  creator: "AURORA9",
  publisher: "AURORA9",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aurora9.ai",
    title: "AURORA9 - Autonomous AI Workforce for E-commerce",
    description: "Transform your e-commerce business with AURORA9's fully autonomous Agentic AI workforce. Experience effortless, intelligent growth.",
    siteName: "AURORA9",
    images: [
      {
        url: "/AURORA9.png",
        width: 1200,
        height: 630,
        alt: "AURORA9 - Autonomous AI Workforce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AURORA9 - Autonomous AI Workforce for E-commerce",
    description: "Transform your e-commerce business with AURORA9's fully autonomous Agentic AI workforce.",
    images: ["/AURORA9.png"],
    creator: "@aurora9ai",
  },
  alternates: {
    canonical: "https://aurora9.ai",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/AURORA9.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDTZFQ3C"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HEPNETZJQP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HEPNETZJQP');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MDTZFQ3C');
          `}
        </Script>
        
        <div id="root">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
