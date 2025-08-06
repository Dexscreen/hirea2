import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Search, Shield, FileText, AlertTriangle, Clock } from 'lucide-react';

const PigButchering = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Cryptocurrency Tracing',
      description: 'Advanced blockchain analysis to trace your stolen cryptocurrency through multiple wallets and exchanges.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Scammer Identification',
      description: 'Digital forensics to identify the real people behind fake profiles and romance scam operations.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Asset Recovery',
      description: 'Working with exchanges, law enforcement, and legal teams to recover stolen funds where possible.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Evidence Collection',
      description: 'Comprehensive documentation of the scam for law enforcement reports and legal proceedings.'
    }
  ];

  const warningActions = [
    {
      title: 'Stop All Communication',
      description: 'Immediately cease all contact with the scammer. Block them on all platforms.',
      urgent: true
    },
    {
      title: 'Document Everything',
      description: 'Save all messages, photos, transaction records, and platform screenshots.',
      urgent: true
    },
    {
      title: 'Report to Authorities',
      description: 'File reports with local police, FBI IC3, and relevant financial authorities.',
      urgent: false
    },
    {
      title: 'Contact Your Bank',
      description: 'Notify your bank and credit card companies about the fraud.',
      urgent: false
    },
    {
      title: 'Secure Your Accounts',
      description: 'Change passwords on all financial accounts and enable two-factor authentication.',
      urgent: false
    },
    {
      title: 'Get Professional Help',
      description: 'Contact pig butchering recovery experts who can trace your funds.',
      urgent: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="flex justify-center mb-8"
              variants={itemVariants}
            >
              <div className="p-6 bg-gradient-to-br from-orange-400 to-red-400 rounded-full">
                <AlertTriangle className="w-16 h-16 text-black" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              variants={itemVariants}
            >
              Pig Butchering Scam Recovery
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Professional recovery services for pig butchering scam victims. Our experts help trace stolen cryptocurrency, 
              identify scammers, and recover your money from romance and investment fraud.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <Shield className="w-5 h-5" />
                Get Recovery Help
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Our Pig Butchering Recovery Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Comprehensive recovery services to help victims of <strong className="text-orange-400">pig butchering</strong> scams 
              get their money back.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="card border-orange-400 hover:border-orange-300 hover:shadow-orange-400/30"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-orange-400 to-orange-600 text-black rounded-none">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-orange-400">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Recovery Process for Pig Butchering Victims
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                step: '1',
                title: 'Case Assessment',
                description: 'We analyze your case, review all communications, and assess the scope of the scam.'
              },
              {
                step: '2',
                title: 'Digital Investigation',
                description: 'Our experts trace cryptocurrency transactions and investigate the scammer\'s footprint.'
              },
              {
                step: '3',
                title: 'Recovery Action',
                description: 'We work with exchanges, banks, and authorities to freeze accounts and recover funds.'
              },
              {
                step: '4',
                title: 'Legal Support',
                description: 'Comprehensive evidence package for law enforcement and legal proceedings.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-400">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Immediate Actions Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Immediate Actions for Pig Butchering Victims
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              If you've been victimized by a pig butchering scam, take these steps immediately
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {warningActions.map((action, index) => (
              <motion.div
                key={index}
                className={`card ${action.urgent ? 'border-red-400 hover:border-red-300' : 'border-yellow-400 hover:border-yellow-300'} relative`}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {action.urgent && (
                  <div className="absolute top-2 right-2">
                    <Clock className="w-5 h-5 text-red-400" />
                  </div>
                )}
                <h3 className={`text-lg font-bold mb-3 ${action.urgent ? 'text-red-400' : 'text-yellow-400'}`}>
                  {action.title}
                </h3>
                <p className="text-gray-300 text-sm">{action.description}</p>
                {action.urgent && (
                  <div className="mt-3 text-xs text-red-400 font-semibold uppercase tracking-wide">
                    URGENT
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Get Help with Pig Butchering Recovery
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Don't suffer in silence. Our experts are here to help you recover from pig butchering scams
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Scam Type</label>
                <select id="service" name="service" required>
                  <option value="">Select scam type</option>
                  <option value="pig-butchering">Pig Butchering Scam</option>
                  <option value="romance-scam">Romance Scam</option>
                  <option value="investment-fraud">Investment Fraud</option>
                  <option value="cryptocurrency-scam">Cryptocurrency Scam</option>
                  <option value="other">Other Scam Type</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Describe Your Situation</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Please describe the scam, how much you lost, and when it occurred. Include any relevant details about the scammer."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Shield className="w-5 h-5" />
                Get Recovery Help
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(10, 10, 10, 0.8) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 0, 0.1) 0%, transparent 50%);
          animation: pulse 4s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          0% { opacity: 0.8; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default PigButchering;