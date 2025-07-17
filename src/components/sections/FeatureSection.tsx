'use client';

import { motion } from 'framer-motion';

const FeatureSection = () => {
  const features = [
    {
      title: 'Advanced Natural Language Processing',
      description: 'Our AI understands context, nuance, and meaning with human-like comprehension.',
      icon: '🧠',
    },
    {
      title: 'Predictive Analytics Engine',
      description: 'Forecast trends and outcomes with 95% accuracy using machine learning.',
      icon: '📊',
    },
    {
      title: 'Automated Decision Making',
      description: 'Smart algorithms that make optimal decisions in real-time.',
      icon: '⚡',
    },
    {
      title: 'Multi-Modal AI Integration',
      description: 'Process text, images, audio, and video with unified intelligence.',
      icon: '🔗',
    },
    {
      title: 'Continuous Learning System',
      description: 'AI that evolves and improves with every interaction.',
      icon: '🎯',
    },
    {
      title: 'Enterprise Security Framework',
      description: 'Bank-grade security with end-to-end encryption and compliance.',
      icon: '🔒',
    },
    {
      title: 'Real-Time Data Processing',
      description: 'Process millions of data points instantly with minimal latency.',
      icon: '⚡',
    },
    {
      title: 'Intelligent Automation',
      description: 'Automate complex workflows with adaptive AI reasoning.',
      icon: '🤖',
    },
    {
      title: 'Cross-Platform Compatibility',
      description: 'Seamless integration across all devices and operating systems.',
      icon: '🌐',
    },
    {
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive insights with interactive visualizations.',
      icon: '📈',
    },
    {
      title: 'Voice & Speech Recognition',
      description: 'Natural voice interactions with 99% accuracy rates.',
      icon: '🎤',
    },
    {
      title: 'AI-Powered Recommendations',
      description: 'Personalized suggestions that adapt to user behavior.',
      icon: '💡',
    },
    {
      title: 'Scalable Cloud Infrastructure',
      description: 'Enterprise-grade infrastructure that scales with your needs.',
      icon: '☁️',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20" style={{ background: 'var(--background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-heading-1 text-white mb-4">
            Core Features
          </h2>
          <p className="text-body-large max-w-3xl mx-auto" style={{ color: '#cbd5e1' }}>
            Discover the powerful AI capabilities that drive innovation and transform your business operations.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              <div className="relative p-8 glass-effect rounded-2xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
                     style={{ background: 'var(--gradient-aurora)', padding: '2px' }}>
                  <div className="h-full w-full rounded-2xl p-6" style={{ background: 'var(--background)' }}>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-heading-2 text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-body leading-relaxed" style={{ color: '#cbd5e1' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Default state content */}
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-heading-2 text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body leading-relaxed" style={{ color: '#cbd5e1' }}>
                    {feature.description}
                  </p>
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
                  <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
