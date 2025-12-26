import React from 'react';
import GenericPage from './GenericPage';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  return (
    <GenericPage title="Partnerships" subtitle="Our ecosystem of technology partners and strategic alliances.">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/20 border border-white/20 py-12 md:py-20">
          {['Vercel', 'AWS', 'Contentful', 'Shopify Plus', 'Stripe', 'Auth0'].map((p, i) => (
              <motion.div 
                key={p} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="flex flex-col items-center justify-center p-8 md:p-12 bg-black hover:bg-white hover:text-black transition-colors group"
              >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-800 group-hover:bg-gray-200 mb-6 transition-colors rounded-full" /> 
                  <h4 className="font-bold uppercase text-base md:text-lg text-center text-white group-hover:text-black">{p}</h4>
                  <span className="text-[10px] md:text-xs uppercase text-gray-500 mt-2 text-center">Technology Partner</span>
              </motion.div>
          ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white text-black p-12 md:p-24 text-center mt-20"
      >
          <h2 className="text-5xl md:text-7xl font-bold uppercase mb-4 text-black">Become a Partner</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto text-sm md:text-base">Join our network of elite technology providers. We build the future together.</p>
          <button className="px-8 md:px-10 py-4 bg-black text-white font-bold uppercase tracking-widest hover:bg-gray-800 text-sm">Apply Now</button>
      </motion.div>
    </GenericPage>
  );
};

export default Partners;