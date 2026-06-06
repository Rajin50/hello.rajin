import React from 'react';
import { motion } from 'framer-motion';
import { Bug, CheckCircle, Terminal, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 py-10" id="hero">
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sqaAccent/30 bg-sqaAccent/10 text-sqaAccent text-sm font-medium">
          <Terminal size={16} />
          <span>Software Quality Assurance Engineer</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Ensuring <span className="text-transparent bg-clip-text bg-gradient-to-r from-sqaAccent to-blue-500">Flawless</span> Experiences
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          Hi, I'm <strong className="text-white">Rajin Ibna Rajuanur Rahman</strong>. I specialize in Manual & Automation Testing, identifying complex defects, and validating data integrity to build reliable software solutions.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#contact" className="bg-sqaAccent text-black font-semibold px-6 py-3 rounded-lg hover:bg-teal-400 transition-all flex items-center gap-2">
            Let's Talk <CheckCircle size={20} />
          </a>
          <a 
            href="/Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass px-6 py-3 rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
            Download Resume <Download size={20} />
          </a>
        </div>

        {/* SQA Metrics */}
        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-800 mt-8">
          <div>
            <h3 className="text-3xl font-bold text-white">150+</h3>
            <p className="text-sm text-gray-500">LeetCode Solved</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">4+</h3>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">0</h3>
            <p className="text-sm text-gray-500">Critical Bugs Leaked</p>
          </div>
        </div>
      </motion.div>

      {/* Image / Glassmorphism Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center relative mt-10 md:mt-0"
      >
        <div className="relative w-80 h-80 md:w-96 md:h-96 mb-12 md:mb-16">
          {/* Interactive Background Elements for the PNG */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sqaAccent/40 to-blue-600/40 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-4 glass rounded-3xl rotate-6 hover:rotate-0 transition-transform duration-500"></div>
          <div className="absolute inset-4 glass rounded-3xl -rotate-6 hover:rotate-0 transition-transform duration-500"></div>
          
          {/* User Image - Added 'object-bottom' to align the cut part to the bottom edge */}
          <img 
            src="/profile.png" 
            alt="Rajin Ibna Rajuanur Rahman" 
            className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,255,204,0.3)] z-10 pointer-events-none"
          />

          {/* Floating SQA Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute -top-4 -right-4 glass p-3 rounded-xl z-20 flex items-center gap-2 border-sqaAccent/30"
          >
            <Bug className="text-red-400" />
            <span className="text-xs font-bold text-red-400">Bug Fixed</span>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            className="absolute top-1/2 -left-8 glass p-3 rounded-xl z-20 flex items-center gap-2 border-green-400/30"
          >
            <CheckCircle className="text-green-400" />
            <span className="text-xs font-bold text-green-400">Tests Passed</span>
          </motion.div>

          {/* NEW: Dynamic Information Card at the Bottom (Hides the image cut) */}
          <motion.div 
            initial={{ y: 20, x: "-50%", opacity: 0 }} 
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-10 md:-bottom-12 left-1/2 w-[115%] sm:w-[125%] z-30 glass-card bg-[#0a0a0a]/80 p-4 md:p-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-gray-700/50 text-center group cursor-default backdrop-blur-xl hover:border-sqaAccent/50 transition-colors duration-500"
          >
            {/* 1st Line: Name with Hover Gradient */}
            <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sqaAccent group-hover:to-blue-400 transition-all duration-300">
              Rajin Ibna Rajuanur Rahman
            </h2>
            {/* 2nd Line: Title */}
            <p className="text-xs md:text-sm text-gray-300 mt-2 font-medium leading-relaxed">
              Intern Software Quality Assurance Engineer <br className="hidden sm:block"/> at <span className="text-sqaAccent font-bold">Truck Lagbe Limited</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;