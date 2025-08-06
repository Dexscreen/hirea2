import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield,
  Smartphone, 
  MessageSquare, 
  Search, 
  DollarSign, 
  TrendingUp,
  Users,
  Camera,
  ChevronDown,
  Mail,
  Clock,
  Globe,
  Award,
  Zap,
  Eye
} from 'lucide-react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const texts = [
    'Professional Hacker Services - Hire a Hacker',
    'AI-Powered Hacker Website for All Platforms',
    'Hire a Hacker for iPhone, WhatsApp & Social Media',
    'Ethical Hacker & Private Investigator Services'
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentText.length) {
          setTypedText(currentText.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex, isDeleting, texts]);

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Hire a Hacker for iPhone',
      description: 'Professional iPhone recovery services for locked devices, forgotten passwords, and data retrieval.',
      features: ['iPhone unlock services', 'Data recovery from damaged devices', 'iCloud account recovery', 'Forensic iPhone analysis'],
      link: '/hire-hacker-iphone',
      color: 'cyan'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Hire a Hacker for Facebook',
      description: 'Professional Facebook hacking services to access accounts, recover data, and monitor activity.',
      features: ['Hack Facebook accounts remotely', 'Access private messages and posts', 'Recover deleted Facebook data', 'Monitor Facebook activity in real-time'],
      link: '/hire-hacker-facebook',
      color: 'primary'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Hire a Hacker for Instagram',
      description: 'Expert Instagram hacking services for account access, data recovery, and social media investigation.',
      features: ['Hack Instagram accounts and DMs', 'Access private photos and stories', 'Recover deleted Instagram content', 'Monitor Instagram activity remotely'],
      link: '/hire-hacker-instagram',
      color: 'purple'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Hire a Hacker for Snapchat',
      description: 'Professional Snapchat hacking services for message recovery and account monitoring.',
      features: ['Hack Snapchat accounts remotely', 'Access disappearing messages', 'Recover deleted Snapchat data', 'Monitor Snapchat activity secretly'],
      link: '/hire-hacker-snapchat',
      color: 'orange'
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Hire a Hacker for WhatsApp',
      description: 'Complete WhatsApp hacking and monitoring services with professional expertise.',
      features: ['Hack WhatsApp accounts remotely', 'Monitor WhatsApp messages in real-time', 'Access deleted conversations', 'Clone WhatsApp to another device'],
      link: '/hire-hacker-whatsapp',
      color: 'green'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Private Investigator Services',
      description: 'Digital surveillance and investigation combining hacker skills with traditional methods.',
      features: ['Digital surveillance and monitoring', 'Infidelity investigations', 'Employee monitoring', 'Corporate espionage intelligence'],
      link: '/private-investigator',
      color: 'green'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Pig Butchering Scam Recovery',
      description: 'Expert assistance to recover funds stolen through pig butchering and romance scams.',
      features: ['Hack scammer accounts and systems', 'Trace cryptocurrency transactions', 'Identify scammer real identities', 'Recover stolen funds and assets'],
      link: '/pig-butchering-scam',
      color: 'orange'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Ponzi Scheme Recovery',
      description: 'Professional recovery services for ponzi scheme and investment fraud victims.',
      features: ['Ponzi scheme investigation', 'Asset tracing and recovery', 'Legal evidence gathering', 'Victim support services'],
      link: '/ponzi-scheme-recovery',
      color: 'purple'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Ethical Hacker Services',
      description: 'Certified ethical hacker professionals providing legitimate security services.',
      features: ['Professional penetration testing', 'Security audits and assessments', 'Vulnerability identification', 'Cybersecurity consulting'],
      link: '/ethical-hacker-services',
      color: 'primary'
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Professional Hacker Team',
      description: 'AI-powered hacker team with certified professionals and proven track records.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: '100% Confidential',
      description: 'Your privacy is guaranteed. All investigations conducted with complete discretion.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'AI-powered 24/7 support for urgent hacking cases and emergency situations.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with expertise in international cybercrime investigations.'
    }
  ];

  const faqs = [
    {
      question: 'Can you hire a hacker for Facebook legally?',
      answer: 'Yes, when you hire a hacker for Facebook from our professional hacker website for legitimate purposes like account recovery, it\'s legal. Our ethical hacker services follow all guidelines.'
    },
    {
      question: 'How do you hire a hacker for Instagram?',
      answer: 'To hire a hacker for Instagram, contact our professional hacker website through our secure form. We provide expert Instagram hacking services for legitimate recovery needs.'
    },
    {
      question: 'Can you hire a hacker for Snapchat recovery?',
      answer: 'Yes, our professional hackers specialize in Snapchat account recovery and data retrieval. We can help you hire a hacker for Snapchat through our secure platform.'
    },
    {
      question: 'What social media platforms can you hack?',
      answer: 'Our hacker website provides services to hire a hacker for Facebook, hire a hacker for Instagram, hire a hacker for Snapchat, WhatsApp, and other major social media platforms.'
    },
    {
      question: 'What makes your private investigator services different?',
      answer: 'Our private investigator services combine traditional detective work with professional hacker skills, providing comprehensive digital surveillance and investigation.'
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      cyan: 'border-cyan-400 hover:border-cyan-300 hover:shadow-cyan-400/30',
      pink: 'border-pink-400 hover:border-pink-300 hover:shadow-pink-400/30',
      green: 'border-green-400 hover:border-green-300 hover:shadow-green-400/30',
      orange: 'border-orange-400 hover:border-orange-300 hover:shadow-orange-400/30',
      purple: 'border-purple-400 hover:border-purple-300 hover:shadow-purple-400/30'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8"
              variants={itemVariants}
            >
              <span className="typing-text hologram">
                {typedText}
                <span className="cursor">▌</span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              variants={itemVariants}
            >
              Professional <strong className="text-cyan">hacker website</strong> to{' '}
              <strong className="text-purple">hire a hacker</strong> for all platforms.{' '}
              <strong className="text-cyan">Hire a hacker for iPhone</strong>,{' '}
              <strong className="text-green">hire a hacker for WhatsApp</strong>,{' '}
              <strong className="text-blue">hire a hacker for Facebook</strong>,{' '}
              <strong className="text-purple">hire a hacker for Instagram</strong>,{' '}
              <strong className="text-orange">hire a hacker for Snapchat</strong>.{' '}
              Get <strong className="text-cyan">ethical hacker</strong> and{' '}
              <strong className="text-green">private investigator</strong> services plus{' '}
              <strong className="text-orange">pig butchering</strong> recovery from our expert{' '}
              <strong className="text-purple">hacker</strong> team.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={itemVariants}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              >
                <Shield className="w-5 h-5" />
                Our Services
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="w-5 h-5" />
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900/50">
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
              Professional Hacker Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              When you need to <strong className="text-cyan">hire a hacker</strong>, our professional{' '}
              <strong className="text-purple">hacker website</strong> connects you with certified{' '}
              <strong className="text-green">ethical hacker</strong> experts for all platforms
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`card border-${service.color} hover:border-${service.color} hover:shadow-${service.color} group`}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br from-blue-500 to-cyan-500 text-black rounded-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-cyan-400 mt-1">▶</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-cyan hover:text-purple font-semibold transition-colors"
                >
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Why Choose Our Hacker Website?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Our AI-powered <strong className="text-cyan">hacker website</strong> is the best place to{' '}
              <strong className="text-purple">hire a hacker</strong> for any platform. From{' '}
              <strong className="text-green">hire a hacker for iPhone</strong> to{' '}
              <strong className="text-blue">hire a hacker for WhatsApp</strong>, our{' '}
              <strong className="text-orange">ethical hacker</strong> team and{' '}
              <strong className="text-cyan">private investigator</strong> services handle everything including{' '}
              <strong className="text-purple">pig butchering</strong> recovery
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-black group-hover:shadow-lg group-hover:shadow-cyan/30 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-cyan">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Common questions about our <strong className="text-cyan">hacker website</strong> and how to{' '}
              <strong className="text-purple">hire a hacker</strong> for various platforms
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="card mb-4 cursor-pointer"
                variants={itemVariants}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-cyan-400">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-purple" />
                  </motion.div>
                </div>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 mt-4 leading-relaxed">{faq.answer}</p>
                </motion.div>
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
              Hire a Hacker Today
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              variants={itemVariants}
            >
              Ready to <strong className="text-cyan">hire a hacker</strong> from our professional{' '}
              <strong className="text-purple">hacker website</strong>? Whether you need to{' '}
              <strong className="text-green">hire a hacker for iPhone</strong>,{' '}
              <strong className="text-blue">hire a hacker for WhatsApp</strong>, need an{' '}
              <strong className="text-orange">ethical hacker</strong>, or{' '}
              <strong className="text-cyan">private investigator</strong> for{' '}
              <strong className="text-purple">pig butchering</strong> recovery - contact us securely
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div className="space-y-8" variants={itemVariants}>
              <div className="flex items-center gap-4 p-6 card">
                <Mail className="w-8 h-8 text-cyan" />
                <div>
                  <h4 className="text-lg font-semibold text-cyan mb-1">Secure Email</h4>
                  <p className="text-gray-300">24forhire@protonmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 card">
                <Clock className="w-8 h-8 text-purple" />
                <div>
                  <h4 className="text-lg font-semibold text-purple mb-1">Response Time</h4>
                  <p className="text-gray-300">Within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-6 card">
                <Shield className="w-8 h-8 text-green" />
                <div>
                  <h4 className="text-lg font-semibold text-green mb-1">Security</h4>
                  <p className="text-gray-300">End-to-end encrypted</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="card" variants={itemVariants}>
              <form className="space-y-6">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service" required>
                    <option value="">Select a service</option>
                    <option value="hire-hacker-iphone">Hire Hacker for iPhone</option>
                    <option value="hire-hacker-facebook">Hire Hacker for Facebook</option>
                    <option value="hire-hacker-instagram">Hire Hacker for Instagram</option>
                    <option value="hire-hacker-snapchat">Hire Hacker for Snapchat</option>
                    <option value="hire-hacker-whatsapp">Hire Hacker for WhatsApp</option>
                    <option value="private-investigator">Private Investigator</option>
                    <option value="pig-butchering-recovery">Pig Butchering Scam Recovery</option>
                    <option value="ponzi-scheme-recovery">Ponzi Scheme Recovery</option>
                    <option value="ethical-hacker">Ethical Hacker Services</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Describe Your Situation</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Please provide details about your needs - hire a hacker for iPhone, WhatsApp, Facebook, Instagram, Snapchat, ethical hacker services, private investigator, pig butchering recovery, etc. All information is kept strictly confidential."
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-5 h-5" />
                  Send Secure Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style>{`
        .hero-section {
          min-height: 90vh;
          display: flex;
          align-items: center;
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
            radial-gradient(circle at 80% 20%, rgba(255, 0, 128, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 255, 65, 0.05) 0%, transparent 50%);
          animation: pulse 4s ease-in-out infinite alternate;
        }

        .typing-text {
          background: linear-gradient(45deg, var(--neon-cyan), var(--neon-pink), var(--neon-green));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 3s ease-in-out infinite;
        }

        .cursor {
          color: var(--neon-pink);
          animation: blink 1s infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;