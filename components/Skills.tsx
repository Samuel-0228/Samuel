
import React from 'react';
import { portfolioData } from '../data';
import { SectionWrapper } from './SectionWrapper';

export const Skills: React.FC = () => {
  // Categorize skills based on content keywords
  const categories = [
    {
      title: "AI & Data Science",
      skills: portfolioData.skills.filter(s => 
        ['Python', 'Data Analysis', 'Machine Learning', 'AI Chatbots'].includes(s)
      ),
      icon: (
        <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Design & Web",
      skills: portfolioData.skills.filter(s => 
        ['HTML/CSS', 'JavaScript', 'UI/UX Design', 'Graphics & Aesthetics'].includes(s)
      ),
      icon: (
        <svg className="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <SectionWrapper id="skills" title="Tech Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="glass p-8 rounded-2xl hover:border-white/20 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl">
                {cat.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wider">{cat.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, j) => (
                <div 
                  key={j} 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:text-white hover:border-neon-blue/50 hover:bg-neon-blue/5 transition-all duration-300 cursor-default font-sans text-sm md:text-base"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
