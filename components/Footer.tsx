import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Loader2, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail } from '../utils/email';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) return;

      setStatus('loading');
      await sendEmail({
          subject: `[NEWSLETTER] New Subscriber`,
          body: `New subscriber email: ${email}`,
          replyTo: email
      }, 'NEWSLETTER');
      setStatus('success');
      setEmail('');
  };

  return (
    <footer className="bg-[#050505] text-white pt-20 md:pt-32 pb-12 relative overflow-hidden z-10 rounded-t-[2rem] md:rounded-t-[3rem] mt-20">
      
      {/* Decorative Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/20" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. MASSIVE CTA SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-32 border-b border-gray-800 pb-12 md:pb-20 gap-10">
            <div className="max-w-4xl">
                <motion.h2 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[15vw] md:text-[8rem] font-bold tracking-tighter leading-[0.8] mb-8 md:mb-12 uppercase text-white mix-blend-screen"
                >
                    Let's <br/> <span className="text-gray-600 transition-colors duration-500 hover:text-white cursor-default">Talk.</span>
                </motion.h2>
                <div className="flex flex-col gap-4 md:gap-6">
                    <a href="mailto:hello@aetherion.com" className="text-xl md:text-4xl font-light text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-2 w-fit break-all">
                       aetherionagency@gmail.com
                    </a>
                    <a href="tel:+923148389155" className="text-lg md:text-2xl font-light text-gray-500 hover:text-white transition-colors">
                    +92 3148389155
                    </a>
                </div>
            </div>

            <div className="mt-8 md:mt-0 flex flex-col items-end gap-8 self-end md:self-auto">
                <NavLink 
                    to="/audit"
                    className="group relative px-6 py-6 md:px-10 md:py-10 bg-white rounded-full text-black font-bold text-lg md:text-xl overflow-hidden hover:scale-110 transition-transform duration-500 flex items-center justify-center w-32 h-32 md:w-40 md:h-40 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                    <div className="absolute inset-0 bg-black scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 ease-out origin-center" />
                    <span className="relative z-10 flex flex-col items-center group-hover:text-white transition-colors duration-300">
                        Start
                        <ArrowUpRight size={24} className="mt-1 group-hover:rotate-45 transition-transform duration-500" />
                    </span>
                </NavLink>
            </div>
        </div>

        {/* 2. GRID LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20 md:mb-32">
            <FooterColumn title="Sitemap">
                <FooterLink to="/">Index</FooterLink>
                <FooterLink to="/services">Capabilities</FooterLink>
                <FooterLink to="/portfolio">Archive</FooterLink>
                <FooterLink to="/about">The Firm</FooterLink>
            </FooterColumn>

            <FooterColumn title="Socials">
                <SocialLink href="https://www.linkedin.com/in/abdul-moiz-khan-5488243a1/" label="LinkedIn" />
                <SocialLink href="https://x.com/aetherionagency" label="Twitter / X" />
                <SocialLink href="https://www.instagram.com/aetherion_agency/" label="Instagram" />
                <SocialLink href="https://github.com/aetherionagency-hub" label="GitHub" />
            </FooterColumn>

            <FooterColumn title="Legal">
                <FooterLink to="/legal">Privacy Policy</FooterLink>
                <FooterLink to="/legal">Terms of Use</FooterLink>
                <FooterLink to="/legal">Cookies</FooterLink>
            </FooterColumn>

            <div className="col-span-2 md:col-span-1 mt-8 md:mt-0">
                 <h4 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-gray-600 mb-8 md:mb-10">Newsletter</h4>
                 <form onSubmit={handleNewsletterSubmit} className="flex border-b border-gray-700 pb-4 group focus-within:border-white transition-colors relative">
                     <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={status === 'success' ? "SUBSCRIBED" : "EMAIL ADDRESS"}
                        disabled={status === 'loading' || status === 'success'}
                        className="bg-transparent w-full outline-none text-white placeholder-gray-600 uppercase text-xs md:text-sm font-bold tracking-widest disabled:opacity-50"
                     />
                     <button 
                        disabled={status === 'loading' || status === 'success'}
                        className="text-gray-400 hover:text-white transition-colors text-xs font-bold group-focus-within:text-white disabled:text-white"
                     >
                         {status === 'loading' ? <Loader2 size={16} className="animate-spin"/> : status === 'success' ? <Check size={16} /> : "JOIN"}
                     </button>
                 </form>
            </div>
        </div>

        {/* 3. BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-600 gap-4">
            <div className="flex flex-col gap-2">
                <span>
                    <span className="animate-text-gradient font-bold">Aetherion</span> &copy; {new Date().getFullYear()}
                </span>
                <span>Designed for the Future.</span>
            </div>
            <div className="text-left md:text-right">
                <p>San Francisco &bull; London &bull; Tokyo</p>
            </div>
        </div>

        {/* Big Background Text - Scrolling Marquee Effect */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-5 overflow-hidden">
             <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                className="whitespace-nowrap flex"
             >
                <h1 className="text-[20vw] font-bold leading-none text-center translate-y-[30%]">AETHERION &mdash; AETHERION &mdash; </h1>
             </motion.div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="flex flex-col gap-3 md:gap-4">
        <h4 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-gray-600 mb-8 md:mb-10">{title}</h4>
        {children}
    </div>
);

// Animated Link Component
const FooterLink: React.FC<{ to: string; children: string }> = ({ to, children }) => (
    <NavLink to={to} className="relative block overflow-hidden group w-fit">
        <div className="relative overflow-hidden">
             <span className="block transition-transform duration-500 ease-[0.19,1,0.22,1] group-hover:-translate-y-full text-gray-400 group-hover:text-white text-sm md:text-lg">
                {children}
            </span>
            <span className="absolute top-0 left-0 block transition-transform duration-500 ease-[0.19,1,0.22,1] translate-y-full group-hover:translate-y-0 text-white text-sm md:text-lg">
                {children}
            </span>
        </div>
    </NavLink>
);

const SocialLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
     <a href={href} className="relative block overflow-hidden group w-fit">
        <div className="relative overflow-hidden flex items-center gap-2">
             <div className="block transition-transform duration-500 ease-[0.19,1,0.22,1] group-hover:-translate-y-full text-gray-400 group-hover:text-white text-sm md:text-lg flex items-center gap-2">
                {label} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute top-0 left-0 block transition-transform duration-500 ease-[0.19,1,0.22,1] translate-y-full group-hover:translate-y-0 text-white text-sm md:text-lg flex items-center gap-2">
                {label} <ArrowUpRight size={14} />
            </div>
        </div>
    </a>
);

export default Footer;