import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Unlock, Eye, MessageSquare, History, CheckCircle } from 'lucide-react';

const InstagramHacker = () => {
  const services = [
    {
      icon: <Unlock className="w-8 h-8" />,
      title: 'Instagram Account Hacking',
      description: 'Hack into any Instagram account remotely and gain complete access to all photos, stories, DMs, and private content.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Private Story & Photo Access',
      description: 'Access private Instagram stories, photos, and content that is normally hidden from public view.'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Instagram DM Hacking',
      description: 'Access all Instagram direct messages, including deleted conversations and hidden message requests.'
    },
    {
      icon: <History className="w-8 h-8" />,
      title: 'Deleted Content Recovery',
      description: 'Recover and access deleted Instagram posts, stories, photos, and messages that the target thought were gone forever.'
    }
  ];

  const scenarios = [
    'Hack spouse\'s Instagram to check for infidelity',
    'Monitor employee Instagram communications',
    'Access ex-partner\'s Instagram messages and photos',
    'Hack child\'s Instagram for parental monitoring',
    'Investigate suspicious Instagram activity',
    'Hack Instagram for legal evidence gathering',
    'Monitor competitor\'s Instagram business activity'
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
              <div className="p-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full">
                <Camera className="w-16 h-16 text-black" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              variants={itemVariants}
            >
              Hire a Hacker for Instagram
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Expert Instagram hacking services for account access, data recovery, and social media investigation. 
              Our certified hackers specialize in Instagram security bypass and content retrieval.
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
                <Camera className="w-5 h-5" />
                Hack Instagram Account
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
              Professional Instagram Hacker Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              When you need to <strong className="text-purple-400">hire a hacker for Instagram</strong>, 
              you need experts who can bypass Instagram's security systems.
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
                className="card border-purple-400 hover:border-purple-300 hover:shadow-purple-400/30"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-purple-400 to-purple-600 text-black rounded-none">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">{service.title}</h3>
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
              Our Instagram Hacking Process
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
                description: 'We analyze the target Instagram account and determine the best hacking approach.'
              },
              {
                step: '2',
                title: 'Security Bypass',
                description: 'Our expert hackers use advanced techniques to bypass Instagram\'s security.'
              },
              {
                step: '3',
                title: 'Complete Access',
                description: 'Once hacked, we provide complete access to all Instagram content and messages.'
              },
              {
                step: '4',
                title: 'Ongoing Monitoring',
                description: 'Set up continuous monitoring to track all future Instagram activity.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">{process.title}</h3>
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
              Common Instagram Hacking Scenarios
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
              Hire an Instagram Hacker Today
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Ready to access Instagram data? Contact our certified Instagram hackers
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
                <label htmlFor="service">Instagram Service Needed</label>
                <select id="service" name="service" required>
                  <option value="">Select Instagram service</option>
                  <option value="instagram-account-hack">Instagram Account Hacking</option>
                  <option value="instagram-dm-access">DM Access</option>
                  <option value="instagram-monitoring">Real-time Monitoring</option>
                  <option value="instagram-recovery">Content Recovery</option>
                  <option value="other">Other Instagram Service</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Describe Your Instagram Hacking Needs</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Please describe your Instagram hacking requirements. Include target information and specific content you need to access."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Camera className="w-5 h-5" />
                Hire Instagram Hacker
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
            radial-gradient(circle at 20% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
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

export default InstagramHacker;