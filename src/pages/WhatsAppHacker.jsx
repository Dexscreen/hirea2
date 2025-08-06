import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Unlock, Eye, Copy, History, CheckCircle } from 'lucide-react';

const WhatsAppHacker = () => {
  const services = [
    {
      icon: <Unlock className="w-8 h-8" />,
      title: 'WhatsApp Account Hacking',
      description: 'Hack into any WhatsApp account remotely and gain complete access to all messages, media, and call logs.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Real-time WhatsApp Monitoring',
      description: 'Monitor WhatsApp conversations in real-time without the target knowing. See messages as they\'re sent and received.'
    },
    {
      icon: <Copy className="w-8 h-8" />,
      title: 'WhatsApp Cloning',
      description: 'Clone any WhatsApp account to your device and receive all their messages without them knowing.'
    },
    {
      icon: <History className="w-8 h-8" />,
      title: 'Deleted Message Recovery',
      description: 'Recover and access deleted WhatsApp messages, photos, and videos that the target thought were gone forever.'
    }
  ];

  const scenarios = [
    'Hack spouse\'s WhatsApp to check for infidelity',
    'Monitor employee WhatsApp communications',
    'Hack competitor\'s WhatsApp for business intelligence',
    'Access ex-partner\'s WhatsApp messages',
    'Hack child\'s WhatsApp for parental monitoring',
    'Investigate suspicious WhatsApp activity',
    'Hack WhatsApp for legal evidence gathering'
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
              <div className="p-6 bg-gradient-to-br from-green-400 to-pink-400 rounded-full">
                <MessageSquare className="w-16 h-16 text-black" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              variants={itemVariants}
            >
              Hire a Hacker for WhatsApp Recovery
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Professional WhatsApp hacking services for message recovery, account restoration, and forensic analysis. 
              Our certified ethical hackers specialize in WhatsApp security.
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
                <MessageSquare className="w-5 h-5" />
                Get WhatsApp Access
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
              Professional WhatsApp Hacker Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              When you need to <strong className="text-green-400">hire a hacker for WhatsApp</strong>, 
              you need experts who can bypass WhatsApp's security.
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
                className="card border-green-400 hover:border-green-300 hover:shadow-green-400/30"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-green-400 to-green-600 text-black rounded-none">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-400">{service.title}</h3>
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
              Our WhatsApp Hacking Process
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
                title: 'Target Assessment',
                description: 'We analyze the target WhatsApp account and determine the best hacking approach.'
              },
              {
                step: '2',
                title: 'Security Bypass',
                description: 'Our expert hackers use advanced techniques to bypass WhatsApp\'s security.'
              },
              {
                step: '3',
                title: 'Complete Access',
                description: 'Once hacked, we provide complete access to all WhatsApp messages and calls.'
              },
              {
                step: '4',
                title: 'Ongoing Monitoring',
                description: 'Set up continuous monitoring to track all future WhatsApp activity.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-pink-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-green-400">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scenarios Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
              variants={itemVariants}
            >
              Common WhatsApp Hacking Scenarios
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {scenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 card border-pink-400 hover:border-pink-300"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0" />
                  <span className="text-gray-300">{scenario}</span>
                </motion.div>
              ))}
            </motion.div>
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
              Hire a WhatsApp Hacker Today
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Ready to access WhatsApp data? Contact our certified experts
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
                <label htmlFor="service">WhatsApp Service Needed</label>
                <select id="service" name="service" required>
                  <option value="">Select WhatsApp service</option>
                  <option value="message-recovery">Message Recovery</option>
                  <option value="account-recovery">Account Recovery</option>
                  <option value="whatsapp-forensics">WhatsApp Forensics</option>
                  <option value="backup-analysis">Backup Analysis</option>
                  <option value="other">Other WhatsApp Service</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Describe Your WhatsApp Issue</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Please describe your WhatsApp recovery needs. Include device type, when data was lost, and any backup information."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare className="w-5 h-5" />
                Contact WhatsApp Hacker
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
            radial-gradient(circle at 20% 80%, rgba(0, 255, 65, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 0, 128, 0.1) 0%, transparent 50%);
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

export default WhatsAppHacker;