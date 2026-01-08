
import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  title: string;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, title, className = "" }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-widest text-white mb-2 flex items-center gap-4">
          <span className="text-neon-blue">#</span> {title}
          <div className="h-[1px] bg-gradient-to-r from-neon-blue/50 to-transparent flex-grow"></div>
        </h2>
      </div>
      {children}
    </section>
  );
};
