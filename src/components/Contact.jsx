import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate EmailJS or any backend API later
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-sqaAccent pb-2">Let's Talk</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto px-4">
          Have a project in mind or want to discuss software quality? Drop me a message below and I'll get back to you as soon as possible.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-4 sm:px-6"
      >
        <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-sqaAccent/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <User size={16} className="text-sqaAccent" /> Your Name
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe" 
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sqaAccent focus:ring-1 focus:ring-sqaAccent transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                  <Mail size={16} className="text-sqaAccent" /> Email Address
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com" 
                  className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sqaAccent focus:ring-1 focus:ring-sqaAccent transition-all"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <MessageSquare size={16} className="text-sqaAccent" /> Your Message
              </label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5" 
                placeholder="How can I help you..." 
                className="w-full bg-black/40 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-sqaAccent focus:ring-1 focus:ring-sqaAccent transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSent}
              className={`w-full font-bold py-4 rounded-lg flex justify-center items-center gap-2 transition-all duration-300 ${
                isSent 
                ? 'bg-green-500/20 text-green-400 border border-green-500/50 cursor-default' 
                : 'bg-sqaAccent text-black hover:bg-teal-400 shadow-[0_0_15px_rgba(0,255,204,0.3)] hover:shadow-[0_0_25px_rgba(0,255,204,0.5)]'
              }`}
            >
              {isSent ? (
                <>Message Sent Successfully <CheckCircle size={20} /></>
              ) : (
                <>Send Message <Send size={20} /></>
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;