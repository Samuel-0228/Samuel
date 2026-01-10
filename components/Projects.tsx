import React from 'react';
import { portfolioData } from '../data';
import { SectionWrapper } from './SectionWrapper';

export const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, i) => (
          <div key={i} className="group relative glass rounded-2xl overflow-hidden hover:border-neon-blue/40 transition-all duration-500">
            {/* Project Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
              />
            </div>

            {/* Project Content */}
            <div className="p-8 space-y-4">
              <h3 className="text-2xl font-heading font-bold text-white group-hover:text-neon-blue transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 font-sans">
                {project.description}
              </p>

              <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-heading text-xs tracking-widest uppercase group/link"
                >
                  <span className="border-b border-white/30 group-hover/link:border-neon-blue transition-all">View Code</span>
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
