import React from 'react';
import { CheckSquare, Database, Terminal, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Software Testing & QA",
      icon: <CheckSquare className="w-6 h-6 text-sqaAccent" />,
      skills: ["Manual Testing", "Test Case Design", "API Testing (Postman)", "Defect Lifecycle (JIRA)", "Agile/Scrum", "Performance Testing (JMeter)", "Selenium (Basic)"]
    },
    {
      title: "Programming",
      icon: <Terminal className="w-6 h-6 text-sqaAccent" />,
      skills: ["Python", "Flask", "OOP", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Databases & Tools",
      icon: <Database className="w-6 h-6 text-sqaAccent" />,
      skills: ["MySQL", "PostgreSQL", "Git & GitHub", "Trello", "Browser Dev Tools"]
    },
    {
      title: "Soft Skills",
      icon: <Settings className="w-6 h-6 text-sqaAccent" />,
      skills: ["Root Cause Analysis", "Problem Solving", "Documentation", "Cross-functional Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-sqaAccent pb-2">Technical Arsenal</h2>
        <p className="text-gray-400 mt-4">Tools & technologies I use to ensure zero defect delivery</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-card p-6 rounded-xl group hover:-translate-y-2 transition-all duration-300">
            <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {category.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-center gap-2 before:content-['▹'] before:text-sqaAccent">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;