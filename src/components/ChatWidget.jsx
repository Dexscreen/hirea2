import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Need help with hacking services? I'm here 24/7!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Load Tawk.to script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/687008994b257b1909ec6eb3/1ivqq36l7';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! Our hacker experts will respond shortly. For immediate assistance, use the contact form.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const chatVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      y: 100
    },
    visible: { 
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const messageVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 0 20px rgba(0, 255, 255, 0.5)",
            "0 0 30px rgba(255, 0, 128, 0.5)",
            "0 0 20px rgba(0, 255, 255, 0.5)"
          ]
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={chatVariants}
          >
            <div className="chat-header">
              <div className="chat-status">
                <div className="status-indicator online"></div>
                <div>
                  <h4>Hacker Support</h4>
                  <span>Online - Usually replies instantly</span>
                </div>
              </div>
            </div>

            <div className="chat-messages">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    className={`message ${message.sender}`}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    layout
                  >
                    <div className="message-content">
                      {message.text}
                    </div>
                    <div className="message-time">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {isTyping && (
                <motion.div
                  className="message bot typing"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <motion.button
                onClick={handleSendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!inputMessage.trim()}
              >
                <Send size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .chat-toggle {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(45deg, var(--neon-cyan), var(--neon-pink));
          border: none;
          color: var(--bg-primary);
          cursor: pointer;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .chat-window {
          position: fixed;
          bottom: 6rem;
          right: 2rem;
          width: 350px;
          height: 500px;
          background: var(--bg-card);
          border: 1px solid var(--neon-cyan);
          z-index: 999;
          display: flex;
          flex-direction: column;
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
          box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
        }

        .chat-header {
          padding: 1rem;
          border-bottom: 1px solid var(--neon-cyan);
          background: var(--bg-secondary);
        }

        .chat-status {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .status-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--neon-green);
          box-shadow: 0 0 10px var(--neon-green);
          animation: pulse 2s infinite;
        }

        .chat-status h4 {
          margin: 0;
          color: var(--neon-cyan);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .chat-status span {
          color: var(--text-secondary);
          font-size: 0.8rem;
        }

        .chat-messages {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          display: flex;
          flex-direction: column;
          max-width: 80%;
        }

        .message.user {
          align-self: flex-end;
          align-items: flex-end;
        }

        .message.bot {
          align-self: flex-start;
          align-items: flex-start;
        }

        .message-content {
          padding: 0.75rem 1rem;
          border-radius: 0;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .message.user .message-content {
          background: var(--neon-cyan);
          color: var(--bg-primary);
          clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
        }

        .message.bot .message-content {
          background: var(--bg-surface);
          color: var(--text-primary);
          border: 1px solid var(--neon-pink);
          clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);
        }

        .message-time {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
          font-family: var(--font-mono);
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          padding: 1rem;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--neon-cyan);
          animation: typing 1.4s infinite ease-in-out;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        .chat-input {
          display: flex;
          padding: 1rem;
          border-top: 1px solid var(--neon-cyan);
          background: var(--bg-secondary);
          gap: 0.5rem;
        }

        .chat-input input {
          flex: 1;
          padding: 0.75rem;
          background: var(--bg-tertiary);
          border: 1px solid var(--neon-cyan);
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.9rem;
        }

        .chat-input input:focus {
          outline: none;
          border-color: var(--neon-pink);
          box-shadow: 0 0 10px rgba(255, 0, 128, 0.3);
        }

        .chat-input button {
          padding: 0.75rem;
          background: var(--neon-cyan);
          border: none;
          color: var(--bg-primary);
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .chat-input button:hover:not(:disabled) {
          background: var(--neon-pink);
          box-shadow: 0 0 20px rgba(255, 0, 128, 0.5);
        }

        .chat-input button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .chat-window {
            width: calc(100vw - 2rem);
            right: 1rem;
            bottom: 5rem;
          }

          .chat-toggle {
            bottom: 1rem;
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default ChatWidget;