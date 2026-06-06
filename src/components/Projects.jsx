import React from 'react';
import { Code2, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NeuroClustIDS",
      desc: "Deep Unsupervised Clustering Using Non-Deterministic Neural Networks with Variational Deep Embedding.",
      tech: ["Neural Networks", "Unsupervised Learning"],
      year: "2025"
    },
    {
      title: "Neural Nest",
      desc: "An Online Learning System featuring complete SDLC lifecycle execution and database management.",
      tech: ["Python", "Flask", "MySQL", "HTML/CSS", "JS"],
      year: "2025"
    },
    {
      title: "Wine Quality Predictions",
      desc: "Machine Learning project utilizing various algorithms to predict quality metrics.",
      tech: ["Python", "ML Algorithms", "Kaggle"],
      year: "2025"
    },
    {
      title: "Vaccination Management System",
      desc: "Web-based application for managing vaccination records and scheduling.",
      tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-sqaAccent pb-2">Academic Projects</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="glass-card p-6 rounded-xl flex flex-col h-full group">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-sqaAccent/10 p-3 rounded-lg">
                <Code2 className="text-sqaAccent" size={24} />
              </div>
              <span className="text-xs font-bold text-gray-500 bg-gray-800 px-2 py-1 rounded">{proj.year}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sqaAccent transition-colors">{proj.title}</h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tech.map((t, i) => (
                <span key={i} className="text-xs text-sqaAccent bg-sqaAccent/5 border border-sqaAccent/20 px-2 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;