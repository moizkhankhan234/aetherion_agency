import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue, Variants } from 'framer-motion';
import { ArrowRight, Terminal, Globe, Activity, ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SERVICES, PORTFOLIO } from '../constants';

// --- COMPONENTS ---

// 3. Section Heading Standard
const SectionHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className={`text-5xl md:text-7xl font-bold tracking-tighter uppercase text-gray-400 ${className}`}
  >
    {children}
  </motion.h2>
);

// Animated Title Component
const AnimatedTitle: React.FC<{ text: string; className?: string; stroke?: boolean }> = ({ text, className, stroke }) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -45,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span 
            variants={child} 
            key={index}
            style={stroke ? { WebkitTextStroke: '2px white', color: 'transparent' } : {}}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Home: React.FC = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="text-white overflow-hidden perspective-1000">
      
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-transparent">
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-24 md:pt-20">
            {/* Top Meta */}
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.5 }}
                className="flex justify-between items-center mb-8 md:mb-12 border-b border-white/20 pb-6"
            >
                <div className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-gray-400">System V2.0 Online</p>
                </div>
                <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
                    <span>SFO &bull; 10:42 AM</span>
                    <span>LDN &bull; 06:42 PM</span>
                </div>
            </motion.div>
            
            {/* Main Title */}
            <div className="relative">
                <div className="text-[14vw] md:text-[13vw] leading-[0.9] md:leading-[0.8] font-bold tracking-tighter uppercase text-white mix-blend-screen">
                    <AnimatedTitle text="Digital" />
                    <AnimatedTitle text="Alchemy" stroke />
                </div>
            </div>

            {/* Bottom Bar */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mt-12 md:mt-20"
            >
                <div className="max-w-md">
                    <p className="text-base md:text-xl font-medium leading-relaxed text-gray-400">
                        We engineer flagship digital platforms for the world's most ambitious brands. Minimalist design. Maximalist performance.
                    </p>
                </div>
                <NavLink 
                    to="/contact" 
                    className="group relative px-8 py-5 md:px-12 md:py-6 bg-white text-black text-base md:text-lg font-bold uppercase tracking-widest overflow-hidden w-full md:w-auto text-center"
                >
                    <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                    <span className="relative z-10 flex items-center justify-center gap-4">
                        Initiate Project <ArrowRight size={20} />
                    </span>
                </NavLink>
            </motion.div>
        </div>
      </section>

      {/* ---------------- CAPABILITIES GRID ---------------- */}
      <section className="bg-transparent pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/20 bg-black/20 backdrop-blur-sm">
             {/* Header Block */}
             <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col justify-between bg-black/40">
                 <div className="mb-12">
                     <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tighter text-white">Capabilities</h2>
                     <p className="text-sm text-gray-400">Our core operational vectors.</p>
                 </div>
                 <NavLink to="/services" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all text-white">
                    Full Index <ArrowRight size={14}/>
                 </NavLink>
             </div>

             {/* Service Blocks */}
             {SERVICES.slice(0, 3).map((service, i) => (
                <motion.div 
                    key={service.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 hover:bg-white hover:text-black transition-all duration-500 flex flex-col justify-between min-h-[300px] md:min-h-[400px] relative overflow-hidden bg-black/10 hover:bg-white"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ArrowUpRight size={24} />
                    </div>
                    
                    <div className="relative z-10">
                        <service.icon size={48} className="mb-6 md:mb-8 text-white group-hover:text-black transition-colors" />
                        <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">{service.title}</h3>
                        <p className="text-sm text-gray-400 group-hover:text-gray-600 leading-relaxed max-w-[200px]">
                            {service.description}
                        </p>
                    </div>

                    <div className="h-px w-full bg-gray-800 mt-8 group-hover:bg-gray-200 transition-colors" />
                </motion.div>
            ))}
        </div>
      </section>

      {/* ---------------- SELECTED WORKS ---------------- */}
      <section className="bg-transparent text-white py-20 md:py-32 px-4 md:px-6">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 border-b border-white/20 pb-8 gap-4">
                 <SectionHeading className="!text-white">Output</SectionHeading>
                 <div className="text-left md:text-right">
                    <p className="text-xs font-mono text-gray-500">SELECTED CASE STUDIES</p>
                    <p className="text-xs font-mono text-gray-500">2024 - 2025</p>
                 </div>
            </div>

            <div className="space-y-20 md:space-y-40">
                {PORTFOLIO.slice(0, 2).map((item, i) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="group relative"
                    >
                         <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                            {/* Image Container with Reveal Effect */}
                            <div className="relative aspect-[16/9] overflow-hidden bg-black/50 border border-white/20 mb-8 backdrop-blur-sm">
                                <motion.img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                                {/* Overlay Grid */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                            </div>

                            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                                <div>
                                    <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase mb-2 text-white group-hover:text-gray-300 transition-colors">{item.title}</h3>
                                    <p className="text-gray-500 text-sm md:text-lg">{item.description}</p>
                                </div>
                                <div className="mt-4 md:mt-2">
                                    <span className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all backdrop-blur-md bg-black/30">
                                        View Case <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </a>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 md:mt-32 text-center">
                 <NavLink to="/portfolio" className="text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-white border-b border-gray-800 pb-1 hover:border-white transition-all">
                     View All Work
                 </NavLink>
            </div>
        </div>
      </section>

      {/* ---------------- MANIFESTO ---------------- */}
      <section className="py-20 md:py-40 container mx-auto px-4 md:px-6 relative">
          <div className="max-w-5xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="p-8 md:p-12 rounded-3xl bg-black/20 backdrop-blur-sm border border-white/5"
              >
                  <Globe size={60} className="mx-auto mb-8 md:mb-12 text-white animate-spin-slow opacity-80" style={{ animationDuration: '20s' }} />
                  <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.1] md:leading-[0.9] mb-8 md:mb-12 text-white tracking-tight">
                      We do not build websites.<br/> We build <span className="text-gray-500">digital empires.</span>
                  </h2>
                  <div className="h-16 md:h-24 w-px bg-white mx-auto mb-8 md:mb-12" />
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
                      In an ocean of templates and mediocrity, Aetherion stands as a fortress of bespoke engineering and avant-garde design. We exist to elevate the internet, one pixel at a time.
                  </p>
              </motion.div>
          </div>
      </section>

      {/* ---------------- TECH RADAR ---------------- */}
      <section className="border-t border-white/20 bg-black/40 backdrop-blur-md">
          <div className="grid grid-cols-2 md:grid-cols-4">
              {['React 19', 'Next.js 15', 'WebGL', 'Three.js', 'PostgreSQL', 'AWS', 'Python', 'Solidity'].map((tech, i) => (
                  <motion.div 
                    key={tech}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="aspect-square border-r border-b border-white/20 flex flex-col items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 group cursor-default bg-transparent"
                  >
                      <Terminal size={32} className="mb-4 text-gray-500 group-hover:text-black" />
                      <span className="font-bold uppercase tracking-widest text-xs md:text-sm">{tech}</span>
                  </motion.div>
              ))}
          </div>
      </section>

    

    </div>
  );
};

export default Home;