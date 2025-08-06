import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Search, ClipboardCheck, Users, CheckCircle, Award } from 'lucide-react';

const EthicalHacker = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities in your systems, networks, and applications.'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Vulnerability Assessment',
      description: 'Systematic evaluation of security weaknesses in your IT infrastructure and applications.'
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Security Audits',
      description: 'Comprehensive review of your security policies, procedures, and technical controls.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Engineering Testing',
      description: 'Testing human vulnerabilities through simulated phishing, vishing, and physical security tests.'
    }
  ];

  const benefits = [
    'Proactive identification of security vulnerabilities',
    'Cost-effective compared to data breach consequences',
    'Compliance with security standards and regulations',
    'Improved security posture and risk management',
    'Enhanced customer and stakeholder confidence',
    'Security awareness training for your team',
    'Detailed reporting with actionable recommendations'
  ];

  const testingTypes = [
    {
      title: 'Network Penetration Testing',
      description: 'Testing network infrastructure, firewalls, and network devices for security vulnerabilities.'
    },
    {
      title: 'Web Application Testing',
      description: 'Comprehensive testing of web applications for OWASP Top 10 and other security issues.'
    },
    {
      title: 'Mobile Application Testing',
      description: 'Security assessment of iOS and Android applications for mobile-specific vulnerabilities.'
    },
    {
      title: 'Wireless Security Testing',
      description: 'Assessment of WiFi networks, Bluetooth, and other wireless communication protocols.'
    },
    {
      title: 'Social Engineering Testing',
      description: 'Testing human factors through phishing simulations and physical security assessments.'
    },
    {
      title: 'Cloud Security Testing',
      description: 'Assessment of cloud infrastructure and services for misconfigurations and vulnerabilities.'
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
              <div className="p-6 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full">
                <Shield className="w-16 h-16 text-black" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              variants={itemVariants}
            >
              Professional Ethical Hacker Services
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Certified ethical hacker services for penetration testing, security audits, and cybersecurity consulting. 
              Protect your business with professional ethical hacking expertise.
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
                Get Security Testing
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
              What is an Ethical Hacker?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              variants={itemVariants}
            >
              An <strong className="text-cyan-400">ethical hacker</strong> is a cybersecurity professional who uses the same 
              techniques as malicious hackers but with permission and for legitimate purposes.
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

      {/* Testing Types Section */}
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
              Penetration Testing Types
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {testingTypes.map((type, index) => (
              <motion.div
                key={index}
                className="card border-green-400 hover:border-green-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-green-400 mb-3">{type.title}</h3>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Hiring an Ethical Hacker
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 card border-cyan-400 hover:border-cyan-300"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Methodology Section */}
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
              Our Ethical Hacking Methodology
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              {
                step: '1',
                title: 'Reconnaissance',
                description: 'Information gathering about target systems and infrastructure'
              },
              {
                step: '2',
                title: 'Scanning',
                description: 'Technical analysis to identify live systems, services, and potential entry points'
              },
              {
                step: '3',
                title: 'Enumeration',
                description: 'Detailed probing to gather specific information about discovered services'
              },
              {
                step: '4',
                title: 'Vulnerability Analysis',
                description: 'Identification and assessment of security weaknesses'
              },
              {
                step: '5',
                title: 'Exploitation',
                description: 'Controlled testing of vulnerabilities to prove impact'
              },
              {
                step: '6',
                title: 'Reporting',
                description: 'Comprehensive documentation with remediation recommendations'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
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
              Hire an Ethical Hacker Today
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Ready to strengthen your security? Contact our certified ethical hackers
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
                <label htmlFor="service">Service Type</label>
                <select id="service" name="service" required>
                  <option value="">Select service type</option>
                  <option value="penetration-testing">Penetration Testing</option>
                  <option value="vulnerability-assessment">Vulnerability Assessment</option>
                  <option value="security-audit">Security Audit</option>
                  <option value="social-engineering">Social Engineering Test</option>
                  <option value="compliance-testing">Compliance Testing</option>
                  <option value="other">Other Security Service</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Please describe your security testing needs, systems to be tested, and any specific requirements."
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
                Contact Ethical Hacker
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
            radial-gradient(circle at 80% 20%, rgba(0, 255, 65, 0.1) 0%, transparent 50%);
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

export default EthicalHacker;