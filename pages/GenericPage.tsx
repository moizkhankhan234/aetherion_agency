import React from 'react';
import { motion, Variants } from 'framer-motion';

interface GenericPageProps {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, subtitle, children }) => {
  
  // Staggered Character Animation Variant
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.1 },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 container mx-auto px-4 md:px-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mb-12 md:mb-24 border-b border-white/20 pb-8 md:pb-12"
      >
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap overflow-hidden"
        >
             {title.split("").map((char, index) => (
                <motion.span 
                    variants={child} 
                    key={index}
                    className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-8 text-white tracking-tighter uppercase leading-[0.9] md:leading-[0.8]"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
             ))}
        </motion.div>
        
        <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center"
        >
            <div className="h-px w-12 md:w-20 bg-white/50 hidden md:block" />
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-400 font-light leading-tight max-w-3xl">
            {subtitle}
            </p>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default GenericPage;