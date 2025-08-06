import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/hire-hacker-iphone', label: 'iPhone' },
    { path: '/hire-hacker-whatsapp', label: 'WhatsApp' },
    { path: '/hire-hacker-facebook', label: 'Facebook' },
    { path: '/hire-hacker-instagram', label: 'Instagram' },
    { path: '/hire-hacker-snapchat', label: 'Snapchat' },
    { path: '/hire-hacker-facebook', label: 'Facebook' },
    { path: '/hire-hacker-instagram', label: 'Instagram' },
    { path: '/hire-hacker-snapchat', label: 'Snapchat' },
    { path: '/private-investigator', label: 'P.I.' },
    { path: '/pig-butchering-scam', label: 'Scam Recovery' },
    { path: '/ponzi-scheme-recovery', label: 'Ponzi Recovery' },
    { path: '/ethical-hacker-services', label: 'Ethical Hacker' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { 
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      textShadow: "0 0 20px #00ffff",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-brand"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Terminal size={24} />
          </motion.div>
          <span>HIRE A HACKER</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <div className="dropdown-container">
            <motion.button
              className="dropdown-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Services</span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`dropdown-link ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <div className="mobile-menu-content">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ 
                    x: 0, 
                    opacity: 1,
                    transition: { delay: index * 0.1 }
                  }}
                  exit={{ x: 50, opacity: 0 }}
                >
                  <Link
                    to={item.path}
                    className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--neon-cyan);
          transition: var(--transition-normal);
        }

        .navbar.scrolled {
          background: rgba(0, 0, 0, 0.95);
          box-shadow: 0 4px 30px rgba(0, 255, 255, 0.3);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.2rem;
          color: var(--neon-cyan);
          text-shadow: 0 0 20px var(--neon-cyan);
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .desktop-menu {
          position: relative;
        }

        .dropdown-container {
          position: relative;
        }

        .dropdown-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid var(--neon-cyan);
          color: var(--neon-cyan);
          padding: 0.75rem 1.5rem;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: var(--transition-normal);
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
          text-shadow: 0 0 10px var(--neon-cyan);
          box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
        }

        .dropdown-button:hover {
          background: rgba(0, 212, 255, 0.1);
          box-shadow: 
            inset 0 0 20px rgba(0, 212, 255, 0.2),
            0 0 20px rgba(0, 212, 255, 0.5);
          transform: translateY(-2px);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          min-width: 250px;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid var(--neon-cyan);
          border-radius: 0;
          padding: 1rem 0;
          z-index: 1000;
          box-shadow: 
            0 10px 40px rgba(0, 212, 255, 0.3),
            inset 0 0 20px rgba(0, 212, 255, 0.05);
          clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
        }

        .dropdown-link {
          display: block;
          color: var(--text-secondary);
          text-decoration: none;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: var(--transition-normal);
          border-left: 3px solid transparent;
        }

        .dropdown-link:hover,
        .dropdown-link.active {
          color: var(--neon-cyan);
          background: rgba(0, 212, 255, 0.1);
          border-left-color: var(--neon-cyan);
          text-shadow: 0 0 10px var(--neon-cyan);
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.5rem 0.8rem;
          border: 1px solid transparent;
          transition: var(--transition-normal);
          position: relative;
          overflow: hidden;
          font-family: var(--font-primary);
          font-size: 0.85rem;
          white-space: nowrap;
          clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent);
          transition: var(--transition-fast);
        }

        .nav-link:hover::before,
        .nav-link.active::before {
          left: 100%;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--neon-cyan);
          border-color: var(--neon-cyan);
          box-shadow: 
            inset 0 0 20px rgba(0, 212, 255, 0.1),
            0 0 10px rgba(0, 212, 255, 0.3);
          text-shadow: 0 0 10px var(--neon-cyan);
        }

        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: 1px solid var(--neon-cyan);
          color: var(--neon-cyan);
          padding: 0.5rem;
          cursor: pointer;
          transition: var(--transition-normal);
          clip-path: polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 5px 100%, 0 calc(100% - 5px));
        }

        .mobile-menu-toggle:hover {
          background: rgba(0, 212, 255, 0.1);
          box-shadow: 0 0 20px rgba(0, 212, 255, 0.4);
        }

        .mobile-menu {
          position: fixed;
          top: 70px;
          right: 0;
          width: 100%;
          height: calc(100vh - 70px);
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(20px);
          border-left: 1px solid var(--neon-cyan);
          z-index: 999;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 1rem;
        }

        .mobile-nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 1rem;
          border: 1px solid transparent;
          transition: var(--transition-normal);
          text-align: center;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: var(--neon-cyan);
          border-color: var(--neon-cyan);
          box-shadow: inset 0 0 20px rgba(0, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 1rem;
          }

          .desktop-menu {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }
        }

      `}</style>
    </motion.nav>
  );
};

export default Navbar;