"use client";

import { motion } from "framer-motion";
import Script from "next/script";
import FeatureSection from "@/components/sections/FeatureSection";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

export default function Home() {

  return (
    <>
      <DarkModeToggle />
      <main className="pt-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        {/* Enhanced Hero Section */}
        <section className="relative text-center py-32 px-6 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white overflow-hidden min-h-screen flex items-center">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto relative z-10"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Future of E-commerce AI is Autonomous
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium mb-16 text-purple-100 max-w-4xl mx-auto leading-relaxed">
              AURORA9 deploys a fully autonomous Agentic AI workforce that transforms your e-commerce business into a 
              <span className="text-cyan-300 font-semibold"> self-optimizing growth engine</span>. 
              Experience effortless scaling with predictive intelligence that stays ahead of the market.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300">10,000+</div>
                <div className="text-purple-200 text-sm">Early Adopters</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300">300%</div>
                <div className="text-purple-200 text-sm">Avg ROI Increase</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300">99.9%</div>
                <div className="text-purple-200 text-sm">Uptime</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-cyan-300">24/7</div>
                <div className="text-purple-200 text-sm">Autonomous</div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Waitlist Section */}
        <motion.section
          id="waitlist-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24 px-6 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 dark:from-purple-950 dark:via-indigo-950 dark:to-blue-950 text-white relative overflow-hidden"
        >
          {/* Background animation */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-96 h-96 bg-cyan-500 rounded-full absolute top-20 -left-20 animate-pulse-slow"></div>
            <div className="w-64 h-64 bg-purple-500 rounded-full absolute bottom-20 -right-10 animate-float"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be First to Access the Future
              <span className="block text-cyan-300">of E-commerce Automation</span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Join 10,000+ forward-thinking entrepreneurs on the AURORA9 waitlist. 
              Get exclusive early access, special pricing, and be the first to transform your business.
            </p>

            {/* MailerLite Email Signup */}
            <div className="flex justify-center mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="w-full max-w-2xl"
              >
                <div className="glass-effect rounded-2xl p-8">
                  {/* Custom MailerLite Styles */}
                  <style jsx>{`
                    @import url("https://assets.mlcdn.com/fonts.css?version=1748530");
                    
                    .ml-form-embedContainer {
                      box-sizing: border-box;
                      display: table;
                      margin: 0 auto;
                      position: static;
                      width: 100% !important;
                    }
                    .ml-form-embedWrapper {
                      background-color: transparent !important;
                      border: none !important;
                      border-radius: 0 !important;
                      box-sizing: border-box;
                      display: inline-block !important;
                      margin: 0;
                      padding: 0;
                      position: relative;
                      width: 100% !important;
                    }
                    .ml-form-embedBody {
                      padding: 0 !important;
                    }
                    .ml-form-embedContent {
                      margin: 0 0 24px 0 !important;
                      text-align: center !important;
                    }
                    .ml-form-embedContent h4 {
                      display: none !important;
                    }
                    .ml-form-embedContent p {
                      display: none !important;
                    }
                    .ml-form-formContent {
                      margin: 0 !important;
                    }
                    .ml-form-horizontalRow {
                      display: flex !important;
                      flex-direction: column !important;
                      gap: 16px !important;
                    }
                    @media (min-width: 768px) {
                      .ml-form-horizontalRow {
                        flex-direction: row !important;
                      }
                    }
                    .ml-form-fieldRow input {
                      background-color: rgba(255, 255, 255, 0.1) !important;
                      color: #ffffff !important;
                      border: 1px solid rgba(255, 255, 255, 0.2) !important;
                      border-radius: 12px !important;
                      padding: 20px 32px !important;
                      font-size: 18px !important;
                      width: 100% !important;
                      margin: 0 !important;
                      flex: 1 !important;
                    }
                    .ml-form-fieldRow input::placeholder {
                      color: rgba(255, 255, 255, 0.6) !important;
                    }
                    .ml-form-fieldRow input:focus {
                      outline: none !important;
                      border-color: #06b6d4 !important;
                      box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.3) !important;
                    }
                    .ml-form-embedSubmit button {
                      background: linear-gradient(to right, #06b6d4, #8b5cf6) !important;
                      border: none !important;
                      border-radius: 12px !important;
                      color: #ffffff !important;
                      font-size: 18px !important;
                      font-weight: 700 !important;
                      padding: 20px 40px !important;
                      min-width: 200px !important;
                      transition: all 0.3s ease !important;
                      cursor: pointer !important;
                      box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39) !important;
                    }
                    .ml-form-embedSubmit button:hover {
                      background: linear-gradient(to right, #0891b2, #7c3aed) !important;
                      transform: scale(1.02) !important;
                    }
                    .ml-form-embedPermissions {
                      display: none !important;
                    }
                    .ml-form-successBody {
                      padding: 20px !important;
                      text-align: center !important;
                    }
                    .ml-form-successContent h4 {
                      color: #10b981 !important;
                      font-size: 24px !important;
                      margin: 0 0 8px 0 !important;
                      display: flex !important;
                      align-items: center !important;
                      justify-content: center !important;
                      gap: 8px !important;
                    }
                    .ml-form-successContent h4:before {
                      content: "✓" !important;
                      display: inline-block !important;
                    }
                    .ml-form-successContent p {
                      color: #6ee7b7 !important;
                      font-size: 16px !important;
                      margin: 0 !important;
                    }
                  `}</style>

                  <div id="mlb2-26652325" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-26652325">
                    <div className="ml-form-align-center">
                      <div className="ml-form-embedWrapper embedForm">
                        <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                          <div className="ml-form-embedContent">
                            <h4>Join Our Waiting List</h4>
                            <p>Be the first to know! Sign up for launch notifications from AURORA9.</p>
                          </div>

                          <form 
                            className="ml-block-form" 
                            action="https://assets.mailerlite.com/jsonp/1561600/forms/155870684527986630/subscribe" 
                            method="post" 
                            target="_blank"
                          >
                            <div className="ml-form-formContent horozintalForm">
                              <div className="ml-form-horizontalRow">
                                <div className="ml-form-fieldRow ml-last-item horizontal-fields">
                                  <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required ml-input-horizontal">
                                    <input 
                                      aria-label="email" 
                                      aria-required="true" 
                                      type="email" 
                                      className="form-control" 
                                      name="fields[email]" 
                                      placeholder="Enter your email address" 
                                      autoComplete="email"
                                    />
                                  </div>
                                </div>
                                <div className="ml-button-horizontal">
                                  <input type="hidden" name="ml-submit" value="1" />
                                  <div className="ml-form-embedSubmit">
                                    <button type="submit" className="primary">Join Waitlist</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <input type="hidden" name="anticsrf" value="true" />
                          </form>
                        </div>

                        <div className="ml-form-successBody row-success" style={{display: 'none'}}>
                          <div className="ml-form-successContent">
                            <h4>Subscribed!</h4>
                            <p>You have successfully joined our subscriber list.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MailerLite Scripts */}
                  <script 
                    dangerouslySetInnerHTML={{
                      __html: `
                        function ml_webform_success_26652325() {
                          var $ = ml_jQuery || jQuery;
                          if ($) {
                            $('.ml-subscribe-form-26652325 .row-success').show();
                            $('.ml-subscribe-form-26652325 .row-form').hide();
                          }
                        }
                      `
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-300">Free</div>
                <div className="text-purple-200 text-sm">Early Access</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">50%</div>
                <div className="text-purple-200 text-sm">Launch Discount</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-300">24h</div>
                <div className="text-purple-200 text-sm">Priority Support</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Core Features */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="py-20 px-6 bg-white dark:bg-gray-900"
        >
          <FeatureSection />
        </motion.section>
      </main>
      
      {/* MailerLite Scripts */}
      <Script 
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024" 
        strategy="lazyOnload"
      />
      <Script id="mailerlite-init" strategy="lazyOnload">
        {`
          fetch("https://assets.mailerlite.com/jsonp/1561600/forms/155870684527986630/takel")
        `}
      </Script>
    </>
  );
}
