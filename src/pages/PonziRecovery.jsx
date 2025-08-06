import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, FileText, Scale, Users, CheckCircle, Clock } from 'lucide-react';

const PonziRecovery = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Asset Tracing',
      description: 'Advanced digital forensics to trace where your money went and identify recoverable assets.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Financial Analysis',
      description: 'Comprehensive analysis of the ponzi scheme\'s financial structure and money flow.'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Legal Support',
      description: 'Evidence gathering and documentation for legal proceedings and recovery efforts.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Victim Coordination',
      description: 'Coordinating with other victims to strengthen collective recovery efforts.'
    }
  ];

  const immediateActions = [
    {
      title: 'Stop Additional Investments',
      description: 'Immediately cease any further investments or payments to the scheme.',
      urgent: true
    },
    {
      title: 'Preserve Documentation',
      description: 'Collect and preserve all investment documents, communications, and bank statements.',
      urgent: true
    },
    {
      title: 'Report to Authorities',
      description: 'File complaints with SEC, CFTC, FBI, and local law enforcement.',
      urgent: false
    },
    {
      title: 'Contact Other Victims',
      description: 'Connect with other investors to coordinate recovery efforts.',
      urgent: false
    },
    {
      title: 'Consult Legal Experts',
      description: 'Speak with attorneys experienced in ponzi scheme recovery.',
      urgent: false
    },
    {
      title: 'Monitor Your Credit',
      description: 'Watch for identity theft or additional fraud attempts.',
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
              <div className="p-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full">
                <TrendingUp className="w-16 h-16 text-black" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              variants={itemVariants}
            >
              Ponzi Scheme Recovery Services
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Professional recovery services to help you recover from ponzi schemes and investment fraud. 
              Our experts trace assets, gather evidence, and work with legal teams to maximize your recovery.
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
                <TrendingUp className="w-5 h-5" />
                Start Recovery Process
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
              Understanding Ponzi Schemes
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              A <strong className="text-blue-400">ponzi scheme</strong> is a form of investment fraud where returns for existing 
              investors are generated using new investors' money rather than from legitimate business operations.
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
                className="card border-blue-400 hover:border-blue-300 hover:shadow-blue-400/30"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-400 to-blue-600 text-black rounded-none">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-400">{service.title}</h3>
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
              Our Ponzi Recovery Process
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
                title: 'Case Evaluation',
                description: 'We analyze your investment, the scheme\'s structure, and assess recovery potential.'
              },
              {
                step: '2',
                title: 'Asset Investigation',
                description: 'Our experts trace the flow of funds and identify recoverable assets.'
              },
              {
                step: '3',
                title: 'Evidence Collection',
                description: 'Comprehensive documentation of the fraud for legal proceedings.'
              },
              {
                step: '4',
                title: 'Recovery Action',
                description: 'Working with legal teams, authorities, and receivers to maximize recovery.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">{process.title}</h3>
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
              Immediate Steps for Ponzi Victims
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              If you've discovered you're a victim of a ponzi scheme, take these immediate actions
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {immediateActions.map((action, index) => (
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
              Get Help with Ponzi Scheme Recovery
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Don't let ponzi scheme losses go unrecovered. Our experts are here to help
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
                <label htmlFor="service">Investment Type</label>
                <select id="service" name="service" required>
                  <option value="">Select investment type</option>
                  <option value="traditional-ponzi">Traditional Investment Ponzi</option>
                  <option value="crypto-ponzi">Cryptocurrency Ponzi</option>
                  <option value="mlm-ponzi">MLM/Pyramid Scheme</option>
                  <option value="real-estate-ponzi">Real Estate Ponzi</option>
                  <option value="other">Other Investment Fraud</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Describe Your Situation</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Please describe the ponzi scheme, your investment amount, when you invested, and any returns received."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <TrendingUp className="w-5 h-5" />
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
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%);
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

export default PonziRecovery;