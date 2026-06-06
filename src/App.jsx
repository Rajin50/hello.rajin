import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-grid">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sqaAccent/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
      
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;