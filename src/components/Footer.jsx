import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Github, Linkedin, 
  Facebook, Instagram, Code, TrendingUp, Heart,
  ChevronUp, Send, Sparkles, Award, ShieldCheck
} from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/rajin-ibna-rajuanur-rahman", label: "LinkedIn", color: "hover:bg-[#0077b5]" },
    { icon: Github, href: "https://github.com/Rajin50", label: "GitHub", color: "hover:bg-[#333]" },
    { icon: Facebook, href: "https://facebook.com/rajinibnarajuanurrahman", label: "Facebook", color: "hover:bg-[#1877f2]" },
    { icon: Instagram, href: "https://instagram.com/rajin_paradox", label: "Instagram", color: "hover:bg-[#e4405f]" },
    { icon: Code, href: "https://leetcode.com/Rajin50", label: "LeetCode", color: "hover:bg-[#ffa116]" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thanks for subscribing! We'll reach you at ${email}`);
      setEmail('');
    }
  }; 

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sqaAccent/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sqaAccent/5 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
      
      {/* Main Footer Content */}
      <div className="relative border-t border-sqaAccent/20 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <div className="relative">
                  <ShieldCheck className="text-sqaAccent h-8 w-8" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -inset-1 bg-sqaAccent/20 rounded-full blur-md"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  <span className="text-sqaAccent">RAJIN</span>
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Passionate about breaking things to build them better. 
                SQA Engineer dedicated to quality, reliability, and performance excellence.
              </p>
              
              {/* Quality Badges */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-2">
                <span className="px-2 py-1 bg-sqaAccent/10 border border-sqaAccent/30 rounded-md text-xs text-sqaAccent flex items-center gap-1">
                  <Award size={12} /> Quality Assured
                </span>
                <span className="px-2 py-1 bg-sqaAccent/10 border border-sqaAccent/30 rounded-md text-xs text-sqaAccent flex items-center gap-1">
                  <TrendingUp size={12} /> 100% Reliable
                </span>
              </div>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-white text-center lg:text-left relative inline-block lg:inline">
                Contact Info
                <motion.div 
                  className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-sqaAccent to-blue-500 rounded-full mx-auto lg:mx-0"
                  initial={{ width: 0 }}
                  animate={{ width: '3rem' }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </h4>
              <div className="space-y-3">
                <motion.a 
                  whileHover={{ x: 5, color: '#14b8a6' }}
                  href="mailto:rajin.ibna.rajuanurrahman@g.bracu.ac.bd" 
                  className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-sqaAccent transition-all duration-300 text-sm group"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  <span>rajin.ibna.rajuanurrahman@g.bracu.ac.bd</span>
                </motion.a>
                <motion.div 
                  whileHover={{ x: 5, color: '#14b8a6' }}
                  className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 transition-all duration-300 text-sm group"
                >
                  <Phone size={16} className="group-hover:scale-110 transition-transform" />
                  <span>+880 1815 364782</span>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5, color: '#14b8a6' }}
                  className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 transition-all duration-300 text-sm group"
                >
                  <MapPin size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Dhaka, Bangladesh</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Connect Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-white text-center lg:text-left relative inline-block lg:inline">
                Connect With Me
                <motion.div 
                  className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-sqaAccent to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '3rem' }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
              </h4>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl ${social.color} transition-all duration-300 group relative`}
                  >
                    <social.icon size={20} className="text-gray-300 group-hover:text-white transition-colors" />
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
              
              {/* Interactive Message */}
              <motion.div 
                variants={itemVariants}
                className="mt-6 p-3 bg-gradient-to-r from-sqaAccent/10 to-blue-500/10 rounded-xl border border-sqaAccent/20"
              >
                <p className="text-xs text-center text-gray-300 flex items-center justify-center gap-2">
                  <Sparkles size={12} className="text-sqaAccent" />
                  You may also connect with me through above communication channels!
                  <Sparkles size={12} className="text-sqaAccent" />
                </p>
              </motion.div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold text-white text-center lg:text-left relative inline-block lg:inline">
                Stay Updated
                <motion.div 
                  className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-sqaAccent to-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '3rem' }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </h4>
              <p className="text-gray-400 text-xs text-center lg:text-left">
                Get the latest updates on my projects and QA insights.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-sqaAccent/50 focus:ring-1 focus:ring-sqaAccent/50 transition-all duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="absolute right-1 top-1 px-3 py-1.5 bg-gradient-to-r from-sqaAccent to-teal-500 text-black font-semibold rounded-md text-xs flex items-center gap-1"
                  >
                    Subscribe <Send size={12} />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Divider with Animation */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-sqaAccent/50 to-transparent mb-6"
          />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              variants={itemVariants}
              className="text-gray-500 text-sm text-center"
            >
              © {new Date().getFullYear()} Rajin Ibna Rajuanur Rahman. 
              <span className="hidden md:inline"> All rights reserved.</span>
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6 text-xs text-gray-500"
            >
              <a href="#" className="hover:text-sqaAccent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-sqaAccent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-sqaAccent transition-colors">Sitemap</a>
            </motion.div>

            {/* Scroll to Top Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-4 py-2 bg-gradient-to-r from-sqaAccent/20 to-sqaAccent/10 border border-sqaAccent/30 rounded-lg text-sqaAccent text-sm font-medium flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Back to Top</span>
              <ChevronUp size={16} className={`relative z-10 transition-transform duration-300 ${isHovered ? '-translate-y-1' : ''}`} />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-sqaAccent to-teal-500"
                initial={{ x: '100%' }}
                animate={{ x: isHovered ? '0%' : '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;