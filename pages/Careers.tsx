import React from 'react';
import GenericPage from './GenericPage';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Careers: React.FC = () => {
  return (
    <GenericPage 
      title="Join The Vanguard" 
      subtitle="We do not hire employees. We hire owners. Join the team defining the future."
    >
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
        >
             <div className="bg-white text-black p-8 md:p-16 mb-12 md:mb-16 text-center">
                 <h2 className="text-5xl md:text-7xl font-bold mb-4 uppercase text-black">The Standard</h2>
                 <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base">Excellence is not an act, but a habit. We are obsessive about quality.</p>
             </div>

            <div className="space-y-0 border-t border-white/20">
                {['Senior React Engineer', 'Product Designer', 'AI Specialist', 'Design Systems Lead'].map((role, i) => (
                    <motion.div 
                        key={role} 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="bg-black border-b border-white/20 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer hover:bg-white hover:text-black transition-all gap-4"
                    >
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-1 uppercase text-white group-hover:text-black">{role}</h3>
                            <p className="text-gray-500 group-hover:text-gray-600 text-xs md:text-sm uppercase tracking-widest">Remote / Full-time</p>
                        </div>
                        <div className="w-10 h-10 md:w-12 md:h-12 border border-white group-hover:border-black flex items-center justify-center self-end md:self-auto text-white group-hover:text-black">
                            <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>

        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
        >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase text-white">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/20 border border-white/20">
                {[
                    {title: "Remote First", desc: "Work from anywhere."},
                    {title: "Unlimited PTO", desc: "Manage your own time."},
                    {title: "Full Health", desc: "100% premium coverage."},
                    {title: "Hardware", desc: "Top tier equipment."},
                    {title: "Retreats", desc: "Global team gatherings."},
                    {title: "Equity", desc: "Ownership in the firm."}
                ].map((perk, i) => (
                    <div key={i} className="p-8 md:p-10 bg-black hover:bg-white hover:text-black transition-colors group">
                        <h4 className="font-bold mb-2 uppercase text-sm text-white group-hover:text-black">{perk.title}</h4>
                        <p className="text-gray-500 text-sm group-hover:text-gray-600">{perk.desc}</p>
                    </div>
                ))}
            </div>
        </motion.section>
    </GenericPage>
  );
};

export default Careers;