
import React from 'react';
import { portfolioData } from '../data';
import { SectionWrapper } from './SectionWrapper';

export const About: React.FC = () => {
  const stats = [
    { label: "Projects", value: portfolioData.projects.length },
    { label: "Skills", value: portfolioData.skills.length },
    { label: "Certificates", value: portfolioData.certifications.length },
    { label: "Exp", value: "AAU '28" }
  ];

  return (
    <SectionWrapper id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          {portfolioData.about.split('\n').map((para, i) => (
            <p key={i} className="text-gray-300 text-lg leading-relaxed font-sans">
              {para.trim()}
            </p>
          ))}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat, i) => (
              <div key={i} className="glass p-6 rounded-lg text-center group hover:border-neon-blue/50 transition-all duration-500">
                <div className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-neon-blue">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm aspect-square">
            {/* Visual placeholder for an abstract AI/Tech element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 rounded-2xl animate-pulse"></div>
            <div className="absolute inset-4 glass rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center opacity-40">
                <div className="w-32 h-32 rounded-full border-2 border-neon-blue animate-ping"></div>
                <div className="absolute w-24 h-24 rounded-full border-2 border-neon-purple animate-ping delay-700"></div>
                <span className="font-heading text-6xl font-black text-white/10 select-none">AI</span>
              </div>
            </div>
            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-neon-blue"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-neon-purple"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
