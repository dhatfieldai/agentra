"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, Play, ChevronDown, Users, TrendingUp, Award, BarChart3 } from "lucide-react";

export default function HeroSection() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Early Adopters" },
    { icon: TrendingUp, value: "300%", label: "Average ROI Increase" },
    { icon: Award, value: "99.9%", label: "Uptime Guarantee" },
    { icon: BarChart3, value: "24/7", label: "Autonomous Operation" }
  ];

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
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

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/how-it-works"
                className="px-10 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-3"
              >
                Explore Features
                <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
              </Link>
            </motion.div>
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
  );
}
