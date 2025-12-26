import React from 'react';
import GenericPage from './GenericPage';
import { motion } from 'framer-motion';
import { Cpu, Figma, GitBranch, Layout, MessageSquare, Zap, Clock, Shield, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Process: React.FC = () => {
  return (
    <GenericPage 
      title="The Algorithm" 
      subtitle="Our proprietary methodology for delivering high-impact digital systems."
    >
      {/* 1. MAIN STEPS */}
      <div className="grid grid-cols-1 border-t border-white/20 mb-20 md:mb-32">
        {[
            { id: '01', title: 'Discovery & Audit', desc: 'We begin with a forensic audit of your current digital infrastructure, market positioning, and competitor landscape. We identify the gaps and the opportunities.' },
            { id: '02', title: 'Strategy & Architecture', desc: 'We blueprint the solution. This is not just a sitemap; it is a comprehensive technical and experience architecture designed for scale.' },
            { id: '03', title: 'Design & Prototyping', desc: 'We move into high-fidelity design. We build interactive prototypes that simulate the final product, ensuring alignment before code is written.' },
            { id: '04', title: 'Engineering', desc: 'Our elite engineering team builds the system using modern frameworks. Code is clean, modular, and built for performance.' },
            { id: '05', title: 'Deployment & Scale', desc: 'We launch with a comprehensive go-to-market strategy. But the work does not end there; we iterate based on real-world data.' }
        ].map((step, index) => (
            <motion.div 
                key={step.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-b border-white/20 py-12 md:py-16 px-4 md:px-8 hover:bg-white hover:text-black transition-colors group"
            >
                <div className="md:col-span-2">
                    <span className="text-3xl md:text-6xl font-bold text-gray-700 group-hover:text-black transition-colors">{step.id}</span>
                </div>
                <div className="md:col-span-4">
                    <h3 className="text-xl md:text-4xl font-bold uppercase leading-tight mb-4 md:mb-0 text-white group-hover:text-black">{step.title}</h3>
                </div>
                <div className="md:col-span-6">
                    <p className="text-base md:text-xl text-gray-400 group-hover:text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
            </motion.div>
        ))}
      </div>

      {/* 2. THE TOOLCHAIN (Updated to Dark Theme) */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 md:mb-32 bg-black border border-white/20 py-16 md:py-32 px-6 md:px-12 relative overflow-hidden"
      >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-7xl font-bold uppercase mb-16 md:mb-24 tracking-tighter text-center md:text-left text-white">The Toolchain</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-20">
                  {[
                      { icon: Layout, label: 'Figma', desc: 'Collaborative Design' },
                      { icon: GitBranch, label: 'Linear', desc: 'Project Management' },
                      { icon: MessageSquare, label: 'Slack', desc: 'Async Comms' },
                      { icon: Cpu, label: 'GitHub', desc: 'Version Control' },
                      { icon: Zap, label: 'Vercel', desc: 'Global Edge Network' },
                      { icon: Shield, label: 'Auth0', desc: 'Identity Security' },
                      { icon: Clock, label: 'Cron', desc: 'Scheduling' },
                      { icon: MessageSquare, label: 'Notion', desc: 'Documentation' },
                  ].map((tool, i) => (
                      <div key={i} className="flex flex-col items-center md:items-start group">
                          <tool.icon size={48} className="mb-6 text-white group-hover:text-gray-400 transition-colors" />
                          <h4 className="text-lg md:text-xl font-bold uppercase mb-2 text-white">{tool.label}</h4>
                          <p className="text-[10px] md:text-sm text-gray-500 uppercase tracking-widest">{tool.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </motion.section>

      {/* 3. OPERATIONAL TEMPO */}
      <motion.section 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="mb-20 md:mb-32 max-w-6xl mx-auto px-4 md:px-6"
      >
          <h2 className="text-3xl md:text-7xl font-bold uppercase mb-12 md:mb-20 tracking-tighter text-left md:text-right text-white">Operational Tempo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/20 border border-white/20">
              {[
                  { title: "Weekly Sprints", desc: "We operate in strict 1-week cycles. Every Friday, we ship updates. No black boxes, no silence." },
                  { title: "Async First", desc: "We prioritize deep work over endless meetings. Updates are written, documented, and clear." },
                  { title: "Real-time Dashboard", desc: "Clients get full access to our Linear & Figma boards. See the pixels moving in real-time." }
              ].map((item, i) => (
                  <div key={i} className="bg-black p-8 md:p-10 hover:bg-white hover:text-black transition-colors h-full group">
                      <div className="w-12 h-1 bg-white mb-6 md:mb-8 group-hover:bg-black transition-colors" />
                      <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 text-white group-hover:text-black">{item.title}</h3>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-600">{item.desc}</p>
                  </div>
              ))}
          </div>
      </motion.section>
      
      {/* 4. CTA (Updated to Dark Theme and Audit Link) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 md:mt-32 p-12 md:p-24 bg-[#050505] border border-white/20 text-center relative overflow-hidden"
      >
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50" />
           <div className="relative z-10">
              <h2 className="text-3xl md:text-7xl font-bold uppercase mb-8 text-white">Ready to begin?</h2>
              <NavLink 
                to="/audit"
                className="inline-flex items-center gap-2 px-10 md:px-12 py-4 md:py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors text-sm md:text-base group"
              >
                  Start Audit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </NavLink>
          </div>
      </motion.div>
    </GenericPage>
  );
};

export default Process;