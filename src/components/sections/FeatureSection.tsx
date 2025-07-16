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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" 
                     style={{ padding: '2px' }}>
                  <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Default state content */}
                <div className="group-hover:opacity-0 transition-opacity duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
