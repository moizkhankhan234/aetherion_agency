import React, { useState } from 'react';
import GenericPage from './GenericPage';
import { SERVICES } from '../constants';
import { ArrowRight, Code, Database, Globe, Lock, Server, Smartphone, Cpu, ShieldCheck, Plus, Minus, Activity, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
      { q: "Do you work with startups?", a: "Yes, provided they are funded and have a clear product-market fit. We invest our time where we see potential for massive scale." },
      { q: "What is your typical timeline?", a: "A standard enterprise web platform takes 8-12 weeks from discovery to launch. Complex SaaS applications range from 3-6 months." },
      { q: "Do you offer post-launch support?", a: "Absolutely. We offer retainer packages for ongoing optimization, security patches, and feature expansion. We do not abandon ship." },
      { q: "How do you handle pricing?", a: "We operate on a fixed-fee project basis for transparency. Retainers are billed monthly. We do not do hourly billing." }
  ];

  return (
    <GenericPage 
      title="Capabilities" 
      subtitle="Full-spectrum digital innovation. We do not outsource. We do not compromise."
    >
      
      {/* 1. Philosophy Quote */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 md:mb-32"
      >
        <div className="border-l-4 border-white pl-6 md:pl-8 py-4">
            <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight uppercase">
                "Modern digital products require more than just code. They require a synthesis of strategy, design, and engineering."
            </h3>
        </div>
      </motion.section>

      {/* 2. Detailed Services Grid */}
      <section className="mb-20 md:mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20 shadow-2xl">
            {SERVICES.map((service, index) => (
            <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-black p-6 md:p-10 hover:bg-white hover:text-black transition-colors duration-300 group h-full flex flex-col justify-between"
            >
                <div>
                    <div className="mb-6 md:mb-8">
                        <service.icon size={48} className="text-white group-hover:text-black" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase">{service.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
                    {service.description}
                    </p>
                </div>
                <div>
                    <div className="mb-8 flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-1 border border-gray-700 group-hover:border-gray-300 uppercase tracking-widest text-gray-400 group-hover:text-gray-600">
                            {tag}
                        </span>
                    ))}
                    </div>
                    <NavLink to={`/contact`} className="inline-flex items-center text-xs font-bold uppercase tracking-widest border-b border-white group-hover:border-black pb-1">
                    Initiate <ArrowRight size={14} className="ml-2" />
                    </NavLink>
                </div>
            </motion.div>
            ))}
        </div>
      </section>

      {/* 3. The Process (Redesigned to match Dark Theme) */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 md:mb-32"
      >
           <div className="flex flex-col md:flex-row items-end justify-between mb-12 border-b border-white/20 pb-8 mx-4 md:mx-0">
             <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white">Workflow</h2>
             <span className="text-xs font-mono text-gray-500 mb-2 md:mb-4">OPERATIONAL SEQUENCE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-white/20">
              {[
                  { step: '01', title: 'Audit', desc: 'Forensic infrastructure analysis & market positioning.' },
                  { step: '02', title: 'Blueprint', desc: 'Strategic architecture & technical mapping.' },
                  { step: '03', title: 'Execute', desc: 'High-fidelity design & agile engineering.' },
                  { step: '04', title: 'Scale', desc: 'Deployment, optimization & growth loops.' }
              ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                    className="p-8 md:p-12 border-r border-b border-white/20 hover:bg-white hover:text-black transition-colors duration-300 group min-h-[300px] flex flex-col justify-between"
                  >
                      <div>
                        <span className="text-xs font-bold font-mono opacity-50 mb-6 block tracking-widest">{item.step}</span>
                        <h4 className="text-2xl font-bold mb-4 uppercase">{item.title}</h4>
                      </div>
                      <div>
                        <div className="w-8 h-px bg-white/30 group-hover:bg-black/30 mb-6 transition-colors" />
                        <p className="text-gray-400 group-hover:text-gray-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                      </div>
                  </motion.div>
              ))}
          </div>
      </motion.section>

      {/* 4. Tech Stack */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 md:mb-32"
      >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 md:mb-12 uppercase tracking-tighter text-white">Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/20">
              {[
                  { icon: Globe, label: 'Next.js' },
                  { icon: Server, label: 'Node' },
                  { icon: Database, label: 'Postgres' },
                  { icon: Smartphone, label: 'React Native' },
                  { icon: Cpu, label: 'OpenAI' },
                  { icon: Code, label: 'TypeScript' },
                  { icon: Lock, label: 'Auth0' },
                  { icon: ShieldCheck, label: 'AWS' }
              ].map((tech, i) => (
                  <div key={i} className="flex flex-col items-center justify-center p-4 md:p-8 border-r border-b border-white/20 hover:bg-white hover:text-black transition-colors cursor-default aspect-square text-gray-400">
                      <tech.icon className="mb-4" size={28} />
                      <span className="font-bold uppercase tracking-widest text-[10px] md:text-sm text-center">{tech.label}</span>
                  </div>
              ))}
          </div>
      </motion.section>

      {/* 5. ENTERPRISE STANDARDS (NEW SECTION) */}
      <motion.section 
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="mb-20 md:mb-32 bg-[#111] text-white p-8 md:p-20 border border-white/10"
      >
          <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-white/20 pb-8">
                  <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter">Enterprise Standards</h2>
                  <p className="text-gray-400 max-w-md mt-6 md:mt-0 text-sm md:text-base">Built for scale. We adhere to the strictest compliance and security protocols for global organizations.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                   {[
                       { icon: Shield, title: "SOC 2 Compliant", desc: "Security is not an afterthought. We build with security-first architecture from day one." },
                       { icon: Activity, title: "99.9% SLA", desc: "High-availability infrastructure designed to withstand massive traffic spikes without downtime." },
                       { icon: Globe, title: "Global CDN", desc: "Edge-deployed content delivery ensuring sub-100ms latency anywhere on Earth." }
                   ].map((item, i) => (
                       <div key={i} className="group">
                           <item.icon size={42} className="text-gray-500 mb-6 group-hover:text-white transition-colors" />
                           <h3 className="text-xl md:text-2xl font-bold uppercase mb-4">{item.title}</h3>
                           <p className="text-gray-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
                       </div>
                   ))}
              </div>
          </div>
      </motion.section>

      {/* 6. FAQ (NEW SECTION) */}
      <motion.section 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="mb-20 md:mb-32 max-w-4xl mx-auto px-4"
      >
          <h2 className="text-3xl md:text-5xl font-bold uppercase mb-12 tracking-tighter text-center text-white">Inquiries</h2>
          <div className="space-y-4">
              {faqs.map((item, index) => (
                  <div key={index} className="border-b border-white/20">
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full py-6 md:py-8 flex justify-between items-start md:items-center text-left hover:bg-white/5 transition-colors px-2 md:px-4 text-white"
                      >
                          <span className="text-base md:text-2xl font-bold uppercase pr-4">{item.q}</span>
                          <span className="p-2 border border-white rounded-full shrink-0">
                              {openFaq === index ? <Minus size={14} /> : <Plus size={14} />}
                          </span>
                      </button>
                      <AnimatePresence>
                          {openFaq === index && (
                              <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                  <div className="pb-8 px-4 text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl">
                                      {item.a}
                                  </div>
                              </motion.div>
                          )}
                      </AnimatePresence>
                  </div>
              ))}
          </div>
      </motion.section>

      {/* 7. CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-20 bg-white text-center px-4"
      >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 uppercase text-black">Start Transformation</h2>
          <NavLink to="/contact" className="inline-block px-10 md:px-12 py-4 md:py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors text-sm md:text-base">
              Book Strategy
          </NavLink>
      </motion.section>
    </GenericPage>
  );
};

export default Services;