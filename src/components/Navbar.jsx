import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation Links Array
const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-gray-800/50 shadow-[0_4px_30px_rgba(0,255,204,0.05)] py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Interactive Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ShieldCheck className="text-sqaAccent h-8 w-8 drop-shadow-[0_0_8px_rgba(0,255,204,0.5)]" />
            <span className="font-bold text-2xl tracking-wider text-white">
              <span className="text-sqaAccent">RAJIN</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="relative group px-3 py-2 text-xl font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                  {/* Glowing Underline Hover Effect */}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sqaAccent transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 shadow-[0_0_8px_rgba(0,255,204,0.8)]"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-300 hover:text-white p-2 rounded-md focus:outline-none transition-transform duration-300"
            >
              {isOpen ? <X className="h-7 w-7 text-sqaAccent" /> : <Menu className="h-7 w-7 text-sqaAccent" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <motion.a 
                  key={link.name}
                  whileHover={{ x: 10, color: '#00ffcc' }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:bg-white/5 rounded-lg transition-all"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;