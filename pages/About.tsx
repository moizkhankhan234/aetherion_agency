import React, { useEffect, useRef } from 'react';
import GenericPage from './GenericPage';
import { TIMELINE } from '../constants';
import { NavLink } from 'react-router-dom';
import { Award, Globe, Heart, Users, ArrowUpRight, Crosshair, Zap } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// --- Components ---

const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toFixed(0) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const ThreeDFavicon = () => {
  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-[#050505] border border-white/20 relative overflow-hidden group">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/5 blur-[80px] rounded-full pointer-events-none" />

        <div style={{ perspective: '1000px' }} className="w-full h-full flex items-center justify-center">
            <motion.div
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="relative w-32 h-32 md:w-40 md:h-40"
            >
                {/* CUBE FACES */}
                {[
                    { transform: "translateZ(80px)", content: "AE" }, // Front (half of width/height 160px/2 = 80px for md)
                    { transform: "rotateY(180deg) translateZ(80px)", content: "AE" }, // Back
                    { transform: "rotateY(90deg) translateZ(80px)", content: "" }, // Right
                    { transform: "rotateY(-90deg) translateZ(80px)", content: "" }, // Left
                    { transform: "rotateX(90deg) translateZ(80px)", content: "" }, // Top
                    { transform: "rotateX(-90deg) translateZ(80px)", content: "" }, // Bottom
                ].map((face, i) => (
                    <div 
                        key={i}
                        className="absolute inset-0 border border-white/40 bg-black/60 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)_inset]"
                        style={{ 
                            transform: face.transform.replace('80px', '64px'), // Default for mobile
                        }} 
                    >
                    </div>
                ))}
                
                {/* Re-implementing faces with hardcoded values to ensure 3D correctness */}
                {/* Front */}
                <div className="absolute inset-0 bg-black/80 border border-white/50 backdrop-blur-sm flex items-center justify-center" style={{ transform: "translateZ(64px) md:translateZ(80px)" }}>
                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">AE</span>
                    <CornerAccents />
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-black/80 border border-white/50 backdrop-blur-sm flex items-center justify-center" style={{ transform: "rotateY(180deg) translateZ(64px)" }}>
                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">AE</span>
                    <CornerAccents />
                </div>
                {/* Right */}
                <div className="absolute inset-0 bg-white/5 border border-white/30 backdrop-blur-sm" style={{ transform: "rotateY(90deg) translateZ(64px)" }}>
                     <CornerAccents />
                </div>
                {/* Left */}
                <div className="absolute inset-0 bg-white/5 border border-white/30 backdrop-blur-sm" style={{ transform: "rotateY(-90deg) translateZ(64px)" }}>
                     <CornerAccents />
                </div>
                {/* Top */}
                <div className="absolute inset-0 bg-white/5 border border-white/30 backdrop-blur-sm" style={{ transform: "rotateX(90deg) translateZ(64px)" }}>
                     <CornerAccents />
                </div>
                {/* Bottom */}
                <div className="absolute inset-0 bg-white/5 border border-white/30 backdrop-blur-sm" style={{ transform: "rotateX(-90deg) translateZ(64px)" }}>
                     <CornerAccents />
                </div>
            </motion.div>
        </div>
        
        <div className="absolute bottom-6 left-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            Artifact: Identity_Matrix // V2
        </div>
    </div>
  );
};

const CornerAccents = () => (
    <>
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white" />
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white" />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white" />
    </>
);

const About: React.FC = () => {
  return (
    <GenericPage 
      title="The Firm" 
      subtitle="Architects of the digital future. We bridge aesthetic excellence with functional superiority."
    >

        {/* 1. Hero Split Layout */}
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-32"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                
                {/* LEFT COLUMN: Text & Narrative */}
                <div className="flex flex-col justify-between gap-12">
                    <div>
                        <div className="text-lg md:text-xl leading-relaxed font-medium text-gray-300 mb-8">
                            <p className="mb-8">
                                Founded with a vision to redefine agency standards, Aetherion has grown into a global powerhouse for digital transformation. We believe that good design is invisible, but great design is unforgettable.
                            </p>
                            <p>
                                We are a collective of elite engineers, visionary designers, and strategic thinkers who refuse to settle for the ordinary.
                            </p>
                        </div>

                        <div className="text-base md:text-lg leading-relaxed text-gray-400 border-l-2 border-white/10 pl-6 md:pl-8">
                             <p className="mb-0">
                                At Aetherion, we do not merely participate in the digital economy; we architect its infrastructure. Born from a necessity to transcend the mundane limitations of traditional web interaction, our methodology is rooted in a relentless pursuit of perfection. We operate at the intersection of cognitive psychology and computational efficiency, ensuring that every pixel serves a purpose and every interaction feels inevitable.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 md:gap-12 border-t border-white/20 pt-12">
                        <div>
                            <p className="text-4xl md:text-6xl font-bold mb-2 text-white tracking-tighter">
                                <AnimatedNumber value={50} suffix="+" />
                            </p>
                            <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Experts</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-6xl font-bold mb-2 text-white tracking-tighter">
                                <AnimatedNumber value={4} />
                            </p>
                            <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500">Global Offices</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: 3D Visual */}
                <div className="h-full min-h-[500px]">
                    <ThreeDFavicon />
                </div>

            </div>
        </motion.section>

        {/* 2. Principles */}
        <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-32"
        >
            <h2 className="text-3xl md:text-7xl font-bold mb-12 md:mb-20 uppercase tracking-tighter text-center text-white">Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/20 border border-white/20">
                {[
                    { title: 'Innovation', desc: 'We do not follow trends; we set them.', icon: Globe },
                    { title: 'Transparency', desc: 'We build with you, not just for you.', icon: Heart },
                    { title: 'Craftsmanship', desc: 'Pixel perfection is the baseline.', icon: Award }
                ].map((val, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        className="bg-black p-12 hover:bg-white hover:text-black transition-colors group flex flex-col items-center text-center"
                    >
                        <val.icon size={40} className="mb-8 text-white group-hover:text-black transition-colors" />
                        <h4 className="text-2xl font-bold mb-4 uppercase text-white group-hover:text-black transition-colors">{val.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-600 transition-colors max-w-sm">{val.desc}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>

        {/* 3. Timeline */}
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-32 max-w-4xl mx-auto px-4"
        >
            <h2 className="text-3xl md:text-7xl font-bold mb-12 md:mb-16 text-center uppercase text-white">History</h2>
            <div className="space-y-0 border-l border-white/20 ml-4">
                    {TIMELINE.map((item, i) => (
                        <div key={i} className="relative pl-8 md:pl-12 pb-12 group">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-black border border-white group-hover:bg-white transition-colors" />
                            <span className="font-mono text-xs font-bold mb-2 block text-gray-500">{item.year}</span>
                            <h4 className="text-xl md:text-2xl font-bold uppercase mb-2 text-white">{item.title}</h4>
                            <p className="text-gray-400 text-sm md:text-base max-w-md">{item.description}</p>
                        </div>
                    ))}
            </div>
        </motion.section>

        {/* 4. Global Network */}
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-32 border-t border-white/20 pt-20"
        >
             <div className="flex flex-col md:flex-row justify-between items-start mb-16">
                <div>
                    <h2 className="text-4xl md:text-7xl font-bold uppercase text-white mb-6">Global Network</h2>
                    <p className="text-gray-400 max-w-md">We operate as a decentralized neural network. Physical headquarters in key capitals, digital presence everywhere.</p>
                </div>
                <div className="hidden md:block">
                     <Globe size={64} className="text-white opacity-20" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {[
                    { city: "San Francisco", code: "SFO", time: "-8 GMT", status: "Operational" },
                    { city: "New York", code: "JFK", time: "-5 GMT", status: "Operational" },
                    { city: "London", code: "LHR", time: "+0 GMT", status: "Operational" },
                    { city: "Tokyo", code: "HND", time: "+9 GMT", status: "Asleep" },
                    { city: "Berlin", code: "BER", time: "+1 GMT", status: "Operational" },
                    { city: "Singapore", code: "SIN", time: "+8 GMT", status: "Asleep" },
                    { city: "Dubai", code: "DXB", time: "+4 GMT", status: "Operational" },
                    { city: "Sao Paulo", code: "GRU", time: "-3 GMT", status: "Operational" },
                ].map((hub, i) => (
                    <motion.div 
                        key={hub.city}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 border border-white/10 p-6 hover:bg-white hover:text-black transition-all group cursor-default"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <span className="font-mono text-xs opacity-50">{hub.code}</span>
                            <div className={`w-2 h-2 rounded-full ${hub.status === 'Operational' ? 'bg-green-500' : 'bg-orange-500'} group-hover:bg-black`} />
                        </div>
                        <h4 className="text-lg font-bold uppercase mb-1">{hub.city}</h4>
                        <div className="flex justify-between text-[10px] uppercase tracking-widest opacity-60">
                            <span>{hub.time}</span>
                            <span>{hub.status}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>

        {/* 5. Sector Dominance */}
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 md:mb-32"
        >
             <h2 className="text-4xl md:text-7xl font-bold uppercase text-white mb-12 md:mb-16 text-center">Sector Dominance</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/20 border-t border-b border-white/20">
                {[
                    { name: "Fintech", desc: "High-frequency trading platforms & DeFi protocols." },
                    { name: "Automotive", desc: "Next-gen HMI & configurator experiences." },
                    { name: "Healthcare", desc: "HIPAA-compliant patient telemetry systems." },
                    { name: "Real Estate", desc: "Virtual tours & property management suites." },
                    { name: "Web3", desc: "Smart contract auditing & dApp frontends." },
                    { name: "Media", desc: "Content delivery networks & streaming architecture." },
                ].map((sector, i) => (
                    <div key={i} className="bg-black p-10 group hover:bg-white hover:text-black transition-colors relative overflow-hidden">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Crosshair size={20} />
                        </div>
                        <div className="mb-8 opacity-30 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs font-mono">SEC-0{i+1}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">{sector.name}</h3>
                        <p className="text-sm text-gray-500 group-hover:text-gray-800 leading-relaxed">{sector.desc}</p>
                    </div>
                ))}
             </div>
        </motion.section>

        {/* 7. CTA */}
        <motion.section 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-16 md:py-20 bg-white border border-white/5 px-4"
        >
            <h2 className="text-3xl md:text-7xl font-bold mb-8 uppercase tracking-tighter text-black">Join The Ranks</h2>
            <NavLink 
                to="/careers"
                className="inline-block px-10 md:px-12 py-4 md:py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors text-sm md:text-base"
            >
                View Positions
            </NavLink>
        </motion.section>
    </GenericPage>
  );
};

export default About;