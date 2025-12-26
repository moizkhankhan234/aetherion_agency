import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const LoadingGateway: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    const launchTimer = setTimeout(() => {
      setLaunch(true);
    }, 2000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(launchTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={launch ? { y: -1000, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="flex flex-col items-center relative"
      >
        {/* Thrust Particles */}
        {launch && (
           <motion.div 
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1.5, y: 100 }}
             className="absolute bottom-0 w-20 h-40 bg-gradient-to-t from-gray-800 to-transparent blur-xl"
           />
        )}

        <motion.div
            animate={launch ? {} : { y: [0, -5, 0], rotate: [0, 2, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <Rocket size={64} className="text-white fill-white" />
        </motion.div>

     
        
        <motion.div 
            className="mt-4 w-32 h-[2px] bg-gray-900 overflow-hidden"
            animate={launch ? { opacity: 0 } : {}}
        >
            <motion.div 
                className="h-full bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingGateway;