import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Unlock, Database, Cloud, Search, CheckCircle } from 'lucide-react';

const IPhoneHacker = () => {
  const services = [
    {
      icon: <Unlock className="w-8 h-8" />,
      title: 'iPhone Unlock Services',
      description: 'Hack into any iPhone by bypassing passcodes, Face ID, Touch ID, and all security measures.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Complete Data Access',
      description: 'Access all iPhone data including messages, photos, contacts, call logs, and app data.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'iCloud Hacking',
      description: 'Hack into iCloud accounts to access backups, photos, and synchronized data across devices.'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Remote iPhone Monitoring',
      description: 'Install monitoring software to track iPhone activity, location, and communications in real-time.'
    }
  ];

  const advantages = [
    'Forgotten iPhone passcode or Face ID issues',
    'Disabled iPhone after multiple failed attempts',
    'Water-damaged iPhone data recovery',
    'Deleted photos and messages recovery',
    'iCloud account lockout recovery',
    'Corporate iPhone security testing',
    'Legal evidence recovery from iPhones'
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
              <div className="p-6 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full">
                <Smartphone className="w-16 h-16 text-black" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              variants={itemVariants}
            >
              Hire a Hacker for iPhone Recovery
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Professional iPhone hacking services for device recovery, data retrieval, and security testing. 
              Our certified ethical hackers specialize in iOS systems.
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
                <Smartphone className="w-5 h-5" />
                Get iPhone Recovery
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
              Professional iPhone Hacker Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              When you need to <strong className="text-cyan-400">hire a hacker for iPhone</strong>, 
              you need professionals who understand iOS security inside and out.
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
                className="card border-cyan-400 hover:border-cyan-300 hover:shadow-cyan-400/30"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-400 to-cyan-600 text-black rounded-none">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400">{service.title}</h3>
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
              Our iPhone Hacking Process
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
                title: 'Initial Assessment',
                description: 'We evaluate your iPhone model, iOS version, and specific recovery needs.'
              },
              {
                step: '2',
                title: 'Security Analysis',
                description: 'Our ethical hackers analyze the device\'s security measures.'
              },
              {
                step: '3',
                title: 'Recovery Execution',
                description: 'Using advanced tools, we safely recover your data or restore access.'
              },
              {
                step: '4',
                title: 'Secure Delivery',
                description: 'Your recovered data is securely transferred with complete confidentiality.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
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
              Common iPhone Recovery Scenarios
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 card border-green-400 hover:border-green-300"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{advantage}</span>
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
              Hire an iPhone Hacker Today
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Ready to recover your iPhone? Contact our certified ethical hackers
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
                <label htmlFor="service">iPhone Service Needed</label>
                <select id="service" name="service" required>
                  <option value="">Select iPhone service</option>
                  <option value="iphone-unlock">iPhone Unlock</option>
                  <option value="iphone-data-recovery">Data Recovery</option>
                  <option value="icloud-recovery">iCloud Recovery</option>
                  <option value="iphone-forensics">iPhone Forensics</option>
                  <option value="other">Other iPhone Service</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Describe Your iPhone Issue</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Please describe your iPhone recovery needs. Include model, iOS version, and specific issue."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Smartphone className="w-5 h-5" />
                Contact iPhone Hacker
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
            radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
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

export default IPhoneHacker;