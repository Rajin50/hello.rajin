import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Intern Software Quality Assurance (SQA) Engineer",
      company: "Truck Lagbe Limited",
      duration: "March 2026 - Present",
      points: [
        "Designed and executed functional, regression and API test cases for Android and Web applications.",
        "Performed API validation using Postman and SQL-based backend verification to ensure data integrity.",
        "Logged, tracked, reproduced, and verified defects using JIRA throughout the defect lifecycle.",
        "Collaborated in Agile sprint activities including requirement analysis and release validation.",
        "Supported performance testing activities using JMeter."
      ]
    },
    {
      role: "Former Director of Human Resources",
      company: "Robotics Club of BRAC University",
      duration: "February 2022 - February 2026",
      points: [
        "Coordinated operations for 400+ members, improving communication workflows and retention.",
        "Coordinated national-level competition operations with cross-departmental collaboration.",
        "Maintained official records and authored professional communications."
      ]
    },
    {
      role: "Former Ambassador of Marketing",
      company: "10 Minute School",
      duration: "December 2021 - May 2022",
      points: [
        "Promoted digital learning initiatives, improving student engagement.",
        "Gathered participant feedback to evaluate campaign effectiveness."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold inline-block border-b-4 border-sqaAccent pb-2">Experience Timeline</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darkBg bg-sqaAccent text-black shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Briefcase size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-xl">
              <div className="flex flex-col mb-2">
                <span className="text-sqaAccent text-sm font-semibold mb-1">{exp.duration}</span>
                <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                <h4 className="text-gray-400 font-medium">{exp.company}</h4>
              </div>
              <ul className="mt-3 space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-400 text-sm flex items-start gap-2 before:content-['▹'] before:text-sqaAccent before:mt-0.5">
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;