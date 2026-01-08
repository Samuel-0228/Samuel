
import React from 'react';
import { portfolioData } from '../data';

export const Hero: React.FC = () => {
  // Extract tagline from the first part of the about section
  const tagline = portfolioData.about.split('.')[0] + '.';

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-neon-blue/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      
      <div className="z-10 text-center max-w-4xl space-y-6">
        <div className="inline-block px-4 py-1 rounded-full glass border border-neon-blue/30 text-neon-blue text-sm font-heading tracking-widest uppercase mb-4 animate-bounce">
          Available for Innovation
        </div>
        
        <h1 className="text-5xl md:text-8xl font-heading font-black text-white leading-tight uppercase tracking-tighter">
          Samuel <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple">
            AI & Data Science
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
          {tagline} Specialized in <span className="text-white font-medium">Information Systems</span> at AAU.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-heading font-bold rounded-sm hover:bg-neon-blue hover:text-white transition-all duration-300 uppercase tracking-widest"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 glass text-white font-heading font-bold rounded-sm border border-white/20 hover:border-neon-purple transition-all duration-300 uppercase tracking-widest"
          >
            Contact
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
