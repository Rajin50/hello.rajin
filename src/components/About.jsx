import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-sqaAccent pb-2">About Me</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 text-white">Summary</h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Enthusiastic CSE graduate from BRAC University with hands-on experience in Software Quality Assurance, including Manual Testing, API Testing, and SQL-based data validation across Android, Web, and API-driven systems. Strong understanding of SDLC/STLC, test case design, and defect lifecycle management, with practical exposure to Agile environments.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2"><Award className="text-sqaAccent" size={18}/> Duke of Edinburgh Bronze Award 2023</div>
          </div>
        </div>

        <div className="glass-card p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
            <GraduationCap className="text-sqaAccent" /> Education
          </h3>
          <div className="space-y-6">
            <div className="border-l-2 border-sqaAccent pl-4 relative">
              <div className="absolute w-3 h-3 bg-sqaAccent rounded-full -left-[7px] top-1.5"></div>
              <h4 className="text-lg font-semibold text-white">Bachelor of Science in CSE</h4>
              <p className="text-gray-400">BRAC University, Dhaka</p>
              <p className="text-sm text-sqaAccent mt-1">CGPA: 3.64 / 4.00</p>
            </div>
            <div className="border-l-2 border-sqaAccent pl-4 relative">
              <div className="absolute w-3 h-3 bg-sqaAccent rounded-full -left-[7px] top-1.5"></div>
              <h4 className="text-lg font-semibold text-white">HSC in Science</h4>
              <p className="text-gray-400">Govt. Science College, Dhaka</p>
              <p className="text-sm text-sqaAccent mt-1">GPA: 5.00 / 5.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;