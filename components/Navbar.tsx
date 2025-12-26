import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Layers, 
  Briefcase, 
  Users, 
  Mail, 
  Menu, 
  X,
  ArrowUpRight,
  Zap
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const dockItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Services', path: '/services', icon: Layers },
    { label: 'Work', path: '/portfolio', icon: Briefcase },
    { label: 'Process', path: '/process', icon: Zap },
    { label: 'About', path: '/about', icon: Users },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <>
      {/* --- TOP BAR --- */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 px-6 py-6 flex justify-between items-start pointer-events-none text-white"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="pointer-events-auto">
             <NavLink to="/" className="text-xl font-bold tracking-tight flex items-center gap-3 group">
             
              <div className="flex flex-col justify-center">
                <span className="leading-none tracking-tighter text-lg font-bold animate-text-gradient ">Aetherion.</span>
              </div>
            </NavLink>
        </div>

        <div className="pointer-events-auto flex gap-4">
             <button 
                onClick={() => setMenuOpen(true)}
                className="md:hidden w-10 h-10 bg-white rounded-none flex items-center justify-center text-black"
             >
                 <Menu size={20} />
             </button>
             <NavLink 
                to="/contact" 
                className="hidden md:flex items-center gap-2 px-8 py-3 bg-white text-black rounded-none text-sm font-bold hover:bg-gray-200 transition-all border border-transparent"
             >
                Start Project <ArrowUpRight size={16} />
             </NavLink>
        </div>
      </motion.header>

      {/* --- BOTTOM FLOATING DOCK --- */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.nav 
            className="glass-dock px-2 py-2 rounded-full flex items-center gap-1 pointer-events-auto shadow-2xl border border-white/10"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.8 }}
        >
            {dockItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <NavLink 
                        key={item.label} 
                        to={item.path}
                        className="relative group"
                    >
                        {isActive && (
                            <motion.div 
                                layoutId="dock-bg"
                                className="absolute inset-0 bg-white rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <div className={`
                            relative px-5 py-3 rounded-full flex flex-col items-center gap-1 transition-all duration-300
                            ${isActive ? 'text-black' : 'text-gray-400 hover:text-white hover:bg-white/10'}
                        `}>
                            <item.icon size={20} strokeWidth={isActive ? 2.5 : 1.5} className="transition-transform group-hover:scale-110" />
                            <span className="text-[9px] font-bold tracking-widest uppercase hidden md:block">{item.label}</span>
                        </div>
                    </NavLink>
                );
            })}
        </motion.nav>
      </div>

      {/* --- FULL SCREEN MENU OVERLAY --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 z-[60] bg-black text-white flex flex-col p-6"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex justify-end mb-12">
                <button onClick={() => setMenuOpen(false)} className="p-2 border border-white/20 hover:bg-white hover:text-black transition-colors">
                    <X size={24} />
                </button>
            </div>
            
            <nav className="flex flex-col gap-4 items-center justify-center h-full">
                {dockItems.map((item, i) => (
                    <NavLink 
                        key={item.label}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="text-4xl md:text-6xl font-bold tracking-tighter hover:text-gray-500 transition-colors uppercase"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                        >
                            {item.label}
                        </motion.div>
                    </NavLink>
                ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;