"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FeatureSection from "@/components/sections/FeatureSection";
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  ChevronDown,
  Play,
  Users,
  Award,
  BarChart3,
  Sparkles
} from "lucide-react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1,
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { icon: Users, value: "10,000+", label: "Early Adopters" },
    { icon: TrendingUp, value: "300%", label: "Average ROI Increase" },
    { icon: Award, value: "99.9%", label: "Uptime Guarantee" },
    { icon: BarChart3, value: "24/7", label: "Autonomous Operation" }
  ];

  const features = [
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description: "Advanced AI forecasting that anticipates market trends 6 months ahead",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Risk Shield Technology",
      description: "Proactive threat detection and automated mitigation systems",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Optimization",
      description: "Real-time performance tuning that adapts faster than market changes",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: "Global Market Intelligence",
      description: "Worldwide marketplace monitoring with localized strategy adaptation",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Parallax background */}
          <motion.div 
            style={{ y: y1, opacity }}
            className="absolute inset-0 opacity-20"
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={heroVariants}
              className="space-y-8"
            >
              {/* Sparkle icon */}
              <motion.div variants={itemVariants} className="flex justify-center">
                <div className="p-4 bg-white/10 backdrop-blur-lg rounded-full animate-glow">
                  <Sparkles className="w-12 h-12 text-yellow-400" />
                </div>
              </motion.div>

              {/* Main headline */}
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight"
              >
                The Future of
                <span className="block gradient-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  E-commerce AI
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium text-purple-200">
                  is Autonomous
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-purple-100 max-w-4xl mx-auto leading-relaxed"
              >
                AURORA9 deploys a fully autonomous Agentic AI workforce that transforms your e-commerce business into a 
                <span className="text-cyan-300 font-semibold"> self-optimizing growth engine</span>. 
                Experience effortless scaling with predictive intelligence that stays ahead of the market.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>

                <motion.a
                  href="/how-it-works"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
                >
                  Explore Features
                  <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center space-y-2"
                  >
                    <stat.icon className="w-8 h-8 mx-auto text-cyan-400 mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-purple-200 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60 text-center"
            >
              <div className="text-sm mb-2">Scroll to explore</div>
              <ChevronDown className="w-5 h-5 mx-auto" />
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Features Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Revolutionary AI Capabilities
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experience the next generation of e-commerce automation with our cutting-edge AI workforce
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Enhanced Waitlist Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-24 px-6 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden"
        >
          {/* Background animation */}
          <div className="absolute inset-0">
            <motion.div 
              style={{ y: y2 }}
              className="absolute top-0 left-0 w-full h-full opacity-10"
            >
              <div className="w-96 h-96 bg-cyan-500 rounded-full absolute top-20 -left-20 animate-pulse-slow"></div>
              <div className="w-64 h-64 bg-purple-500 rounded-full absolute bottom-20 -right-10 animate-float"></div>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Be First to Access the Future
                <span className="block text-cyan-300">of E-commerce Automation</span>
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Join 10,000+ forward-thinking entrepreneurs on the AURORA9 waitlist. 
                Get exclusive early access, special pricing, and be the first to transform your business.
              </p>

              {/* Enhanced call-to-action */}
              <div className="flex justify-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full max-w-md"
                >
                  <div className="glass-effect rounded-2xl p-8">
                    <div className="flex flex-col space-y-4">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                      />
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all shadow-lg"
                      >
                        Join Waitlist
                      </motion.button>
                    </div>
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
            </motion.div>
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
      <Footer />
    </>
  );
}
