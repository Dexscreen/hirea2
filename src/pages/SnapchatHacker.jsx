import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Unlock, Eye, Camera, History, CheckCircle } from 'lucide-react';

const SnapchatHacker = () => {
  const services = [
    {
      icon: <Unlock className="w-8 h-8" />,
      title: 'Snapchat Account Hacking',
      description: 'Hack into any Snapchat account remotely and gain complete access to all snaps, messages, and private content.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Disappearing Message Access',
      description: 'Access Snapchat messages before they disappear, including private snaps and chat conversations.'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Snap Story Monitoring',
      description: 'Monitor all Snapchat stories, including private stories that are normally hidden from view.'
    },
    {
      icon: <History className="w-8 h-8" />,
      title: 'Deleted Snap Recovery',
      description: 'Recover and access deleted Snapchat messages, photos, and videos that the target thought were gone forever.'
    }
  ];

  const scenarios = [
    'Hack spouse\'s Snapchat to check for infidelity',
    'Monitor employee Snapchat communications',
    'Access ex-partner\'s Snapchat messages and snaps',
    'Hack child\'s Snapchat for parental monitoring',
    'Investigate suspicious Snapchat activity',
    'Hack Snapchat for legal evidence gathering',
    'Monitor competitor\'s Snapchat business activity'
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
              <div className="p-6 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full">
                <MessageSquare className="w-16 h-16 text-black" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              variants={itemVariants}
            >
              Hire a Hacker for Snapchat
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Professional Snapchat hacking services for message recovery and account monitoring. 
              Our certified hackers specialize in Snapchat security bypass and disappearing content recovery.
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
                Hack Snapchat Account
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
              Professional Snapchat Hacker Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              When you need to <strong className="text-orange-400">hire a hacker for Snapchat</strong>, 
              you need experts who can bypass Snapchat's disappearing message security.
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
              Our Snapchat Hacking Process
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
                title: 'Target Analysis',
                description: 'We analyze the target Snapchat account and determine the best hacking approach.'
              },
              {
                step: '2',
                title: 'Security Bypass',
                description: 'Our expert hackers use advanced techniques to bypass Snapchat\'s security.'
              },
              {
                step: '3',
                title: 'Complete Access',
                description: 'Once hacked, we provide complete access to all Snapchat content and messages.'
              },
              {
                step: '4',
                title: 'Ongoing Monitoring',
                description: 'Set up continuous monitoring to track all future Snapchat activity.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-orange-400">{process.title}</h3>
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
              Common Snapchat Hacking Scenarios
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {scenarios.map((scenario, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 card border-yellow-400 hover:border-yellow-300"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
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
              Hire a Snapchat Hacker Today
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Ready to access Snapchat data? Contact our certified Snapchat hackers
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
                <label htmlFor="service">Snapchat Service Needed</label>
                <select id="service" name="service" required>
                  <option value="">Select Snapchat service</option>
                  <option value="snapchat-account-hack">Snapchat Account Hacking</option>
                  <option value="snapchat-message-access">Message Access</option>
                  <option value="snapchat-monitoring">Real-time Monitoring</option>
                  <option value="snapchat-recovery">Content Recovery</option>
                  <option value="other">Other Snapchat Service</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Describe Your Snapchat Hacking Needs</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Please describe your Snapchat hacking requirements. Include target information and specific content you need to access."
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
                Hire Snapchat Hacker
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
            radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(249, 115, 22, 0.1) 0%, transparent 50%);
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

export default SnapchatHacker;