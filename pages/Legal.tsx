import React from 'react';
import GenericPage from './GenericPage';
import { motion } from 'framer-motion';

const Legal: React.FC = () => {
  return (
    <GenericPage title="Legal" subtitle="Terms of Service & Privacy Policy.">
      <div className="max-w-4xl space-y-px bg-white/20 border border-white/20">
          <motion.section 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-black p-6 md:p-12 hover:bg-gray-900 transition-colors"
          >
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 text-white">1. Terms of Use</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  By accessing the Aetherion website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
              </p>
          </motion.section>
          <motion.section 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.5 }}
             className="bg-black p-6 md:p-12 hover:bg-gray-900 transition-colors"
          >
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 text-white">2. Privacy Policy</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Your privacy is important to us. It is Aetherion's policy to respect your privacy regarding any information we may collect from you across our website. We only ask for personal information when we truly need it to provide a service to you.
              </p>
          </motion.section>
           <motion.section 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3, duration: 0.5 }}
             className="bg-black p-6 md:p-12 hover:bg-gray-900 transition-colors"
          >
              <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 text-white">3. Intellectual Property</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  The materials contained in this website are protected by applicable copyright and trademark law. All code, design, and assets are the property of Aetherion Agency.
              </p>
          </motion.section>
      </div>
    </GenericPage>
  );
};

export default Legal;