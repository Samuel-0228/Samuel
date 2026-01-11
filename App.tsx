
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education, Certifications } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-white font-sans selection:bg-neon-blue/30">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_70%)]"></div>
      </div>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <footer className="py-12 text-center text-gray-600 font-sans text-xs uppercase tracking-[0.2em]">
        Designed for Excellence &bull; Addis Ababa, Ethiopia
      </footer>
    </div>
  );
};

export default App;
