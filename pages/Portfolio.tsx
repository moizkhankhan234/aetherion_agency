import React, { useState, useEffect } from 'react';
import GenericPage from './GenericPage';
import { PORTFOLIO } from '../constants';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ['All', 'E-Commerce', 'SaaS', 'Fintech', 'Startup', 'Education', 'Healthcare'];

  const filteredPortfolio = activeCategory === 'All'
    ? PORTFOLIO
    : PORTFOLIO.filter(item => item.category === activeCategory);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <GenericPage 
      title="The Archive" 
      subtitle="Selected works defining the visual language of the future web. Click to view live deployments."
    >
      
      {/* 1. FILTER BAR */}
   

      {/* 2. INTERACTIVE LIST */}
      <div className="relative min-h-[60vh]">
        
        {/* Hover Image Reveal - Floating Background (Desktop Only) */}
        <div className={`fixed top-20 right-0 w-[50vw] h-screen pointer-events-none z-0 hidden lg:flex items-center justify-center ${hoveredProject ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
             <AnimatePresence mode='wait'>
                 {hoveredProject && (
                     <motion.div
                        key={hoveredProject}
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.4 }}
                        className="relative"
                        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
                     >
                        <img
                            src={PORTFOLIO.find(p => p.id === hoveredProject)?.image}
                            className="w-[600px] h-[400px] object-cover grayscale brightness-90 shadow-[0_0_50px_rgba(255,255,255,0.1)] rotate-3 border border-white/20"
                            alt="Preview"
                        />
                        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
                     </motion.div>
                 )}
             </AnimatePresence>
        </div>

        {/* The List */}
        <div className="relative z-10 w-full lg:w-1/2">
            {filteredPortfolio.map((item) => (
                <motion.a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    key={item.id}
                    className="group border-b border-white/20 py-8 md:py-12 cursor-pointer block relative overflow-hidden"
                    onMouseEnter={() => setHoveredProject(item.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                >
                    {/* Mobile Image Preview (Hidden on Desktop) */}
                    <div className="block lg:hidden mb-6 w-full aspect-video bg-gray-900 overflow-hidden relative border border-white/10">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                        />
                        <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                        <h3 className="text-2xl md:text-5xl font-bold uppercase text-white lg:text-gray-500 lg:group-hover:text-white transition-colors duration-300 flex items-center gap-4">
                            {item.title}
                            <ExternalLink size={20} className="lg:hidden opacity-50" />
                        </h3>
                        <span className="mt-2 md:mt-0 text-[10px] font-bold uppercase tracking-widest border border-white/20 px-2 py-1 text-gray-500 lg:text-gray-500 lg:group-hover:text-white transition-colors w-fit">
                            {item.category}
                        </span>
                    </div>
                    <p className="text-gray-500 text-sm md:text-base max-w-sm lg:h-0 lg:overflow-hidden lg:group-hover:h-auto lg:group-hover:mb-4 transition-all duration-500 lg:opacity-0 lg:group-hover:opacity-100 mb-4 lg:mb-0">
                        {item.description}
                    </p>
                    <div className="hidden lg:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                        View Live Project <ArrowUpRight size={14} />
                    </div>
                </motion.a>
            ))}
        </div>
      </div>

      {/* 3. PARTNERS LOGO STRIP */}
      <section className="mt-40 border-t border-white/20 pt-20">
          <p className="text-xs font-bold uppercase tracking-widest mb-12 text-gray-500">Infrastructure Partners</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-50">
               {['Netlify', 'Vercel', 'AWS', 'Next.js', 'Tailwind', 'Three.js', 'Framer', 'Stripe'].map(brand => (
                   <div key={brand} className="text-3xl lg:text-3xl font-bold uppercase text-gray-500 hover:text-white transition-colors cursor-default">
                       {brand}
                   </div>
               ))}
          </div>
      </section>

    </GenericPage>
  );
};

export default Portfolio;