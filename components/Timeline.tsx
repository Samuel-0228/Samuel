
import React from 'react';
import { portfolioData } from '../data';
import { SectionWrapper } from './SectionWrapper';

export const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
        {portfolioData.education.map((edu, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-dark-bg absolute left-0 md:left-1/2 -translate-x-1/2 z-10 group-hover:border-neon-blue transition-all">
              <div className="w-2 h-2 rounded-full bg-neon-blue"></div>
            </div>
            
            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl hover:border-white/20 transition-all">
              <div className="flex flex-col mb-1">
                <span className="text-neon-blue font-heading text-xs tracking-widest uppercase mb-2">{edu.period}</span>
                <h4 className="text-xl font-bold text-white">{edu.institution}</h4>
              </div>
              <p className="text-gray-400 font-sans">{edu.degree}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioData.certifications.map((cert, i) => {
          const [org, title] = cert.split(' — ');
          return (
            <div key={i} className="glass p-6 rounded-xl flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-default group">
              <div className="space-y-3">
                <div className="text-xs font-heading font-bold text-neon-purple uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
                  {org}
                </div>
                <h4 className="text-white font-sans font-semibold leading-snug">
                  {title}
                </h4>
              </div>
              <div className="mt-6 flex justify-end">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-neon-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};
