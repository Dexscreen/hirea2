import React from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, UserCheck, Building, Eye, CheckCircle } from 'lucide-react';

const PrivateInvestigator = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Infidelity Investigations',
      description: 'Discreet investigation of suspected cheating spouses using digital surveillance and traditional methods.'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Background Checks',
      description: 'Comprehensive background investigations for personal, business, and legal purposes.'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Corporate Investigations',
      description: 'Employee misconduct, corporate fraud, and intellectual property theft investigations.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Digital Surveillance',
      description: 'Advanced digital monitoring and evidence collection using legal methods and tools.'
    }
  ];

  const signs = [
    {
      category: 'Digital Behavior Changes',
      items: [
        'Secretive phone or computer use',
        'New passwords on devices',
        'Deleting browser history',
        'Hiding social media activity',
        'New messaging apps'
      ]
    },
    {
      category: 'Behavioral Changes',
      items: [
        'Unexplained absences',
        'Changes in routine',
        'Defensive about whereabouts',
        'Less intimacy or affection',
        'Sudden interest in appearance'
      ]
    },
    {
      category: 'Communication Changes',
      items: [
        'Avoiding eye contact',
        'Vague about daily activities',
        'Picking fights to justify absence',
        'Less communication overall',
        'Emotional distance'
      ]
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
              <div className="p-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full">
                <Search className="w-16 h-16 text-black" />
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              variants={itemVariants}
            >
              Professional Private Investigator Services
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Digital private investigator combining traditional detective skills with advanced cyber investigation techniques. 
              Specializing in infidelity cases, background checks, and corporate investigations.
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
                <Search className="w-5 h-5" />
                Start Investigation
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
              Digital Private Investigator Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Our <strong className="text-purple-400">private investigator</strong> services combine traditional 
              investigation methods with cutting-edge digital forensics.
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
              Our Investigation Process
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
                title: 'Initial Consultation',
                description: 'Confidential discussion of your case, objectives, and available evidence.'
              },
              {
                step: '2',
                title: 'Investigation Planning',
                description: 'Our private investigator creates a detailed plan combining digital and physical surveillance.'
              },
              {
                step: '3',
                title: 'Evidence Collection',
                description: 'Systematic gathering of evidence using legal surveillance and investigation techniques.'
              },
              {
                step: '4',
                title: 'Detailed Report',
                description: 'Comprehensive report with findings, evidence, and recommendations for next steps.'
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

      {/* Warning Signs Section */}
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
              Signs Your Partner May Be Cheating
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Our private investigators often see these common warning signs in infidelity cases
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {signs.map((category, index) => (
              <motion.div
                key={index}
                className="card border-pink-400 hover:border-pink-300"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold text-pink-400 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
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
              Hire a Private Investigator Today
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Ready to uncover the truth? Contact our professional investigators
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
                <label htmlFor="service">Investigation Type</label>
                <select id="service" name="service" required>
                  <option value="">Select investigation type</option>
                  <option value="infidelity">Infidelity Investigation</option>
                  <option value="background-check">Background Check</option>
                  <option value="corporate">Corporate Investigation</option>
                  <option value="missing-person">Missing Person</option>
                  <option value="digital-forensics">Digital Forensics</option>
                  <option value="other">Other Investigation</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Case Details</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  placeholder="Please describe your case. All information is kept strictly confidential."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Search className="w-5 h-5" />
                Contact Private Investigator
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
            radial-gradient(circle at 20% 80%, rgba(138, 43, 226, 0.1) 0%, transparent 50%),
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

export default PrivateInvestigator;