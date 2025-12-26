import React, { useState } from 'react';
import GenericPage from './GenericPage';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Loader2, Globe, Shield, Zap, Search, Layout } from 'lucide-react';
import { sendEmail } from '../utils/email';

const Audit: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    url: '',
    vectors: [] as string[],
    budget: ''
  });

  const toggleVector = (vector: string) => {
    setFormData(prev => ({
      ...prev,
      vectors: prev.vectors.includes(vector) 
        ? prev.vectors.filter(v => v !== vector)
        : [...prev.vectors, vector]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Prepare Payload
    const payload = {
        subject: `[AUDIT REQUEST] ${formData.company} - ${formData.name}`,
        body: `
            AUDIT REQUEST
            ------------------------------------------------
            Client: ${formData.name}
            Company: ${formData.company}
            Email: ${formData.email}
            
            Target URL: ${formData.url || 'N/A'}
            Budget Range: ${formData.budget || 'Not Specified'}
            
            Selected Vectors:
            ${formData.vectors.map(v => `- ${v}`).join('\n')}
        `,
        metadata: { ...formData }
    };

    // Send via SMTP Service
    await sendEmail(payload, 'AUDIT');

    setFormState('success');
  };

  const vectorOptions = [
    { id: 'ui', label: 'UI/UX Design', icon: Layout },
    { id: 'perf', label: 'Performance', icon: Zap },
    { id: 'sec', label: 'Security', icon: Shield },
    { id: 'seo', label: 'SEO / Visibility', icon: Search },
    { id: 'tech', label: 'Tech Stack', icon: Globe },
  ];

  return (
    <GenericPage 
      title="System Audit" 
      subtitle="Initialize a comprehensive analysis of your digital infrastructure. We identify bottlenecks and architect solutions."
    >
      <div className="max-w-4xl mx-auto mb-32">
        <div className="bg-[#050505] border border-white/20 relative overflow-hidden">
          
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {formState === 'success' ? (
               <motion.div 
                 key="success"
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="p-12 md:p-24 flex flex-col items-center text-center relative z-10"
               >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                      <Check size={48} className="text-black" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold uppercase text-white mb-6">Audit Initialized</h3>
                  <p className="text-gray-400 max-w-lg text-lg mb-12">
                      Your parameters have been received. Our intake algorithms are processing your request. An agent will establish a secure connection within 24 hours.
                  </p>
                  <button 
                      onClick={() => window.location.reload()}
                      className="text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-gray-400 transition-colors text-white"
                  >
                      Return to Index
                  </button>
               </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-16">
                 
                 {/* Progress Indicator */}
                 <div className="flex items-center gap-4 mb-12 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <span className={activeStep >= 1 ? 'text-white' : ''}>01. Identity</span>
                    <div className="w-8 h-px bg-gray-800" />
                    <span className={activeStep >= 2 ? 'text-white' : ''}>02. Target</span>
                    <div className="w-8 h-px bg-gray-800" />
                    <span className={activeStep >= 3 ? 'text-white' : ''}>03. Scope</span>
                 </div>

                 <div className="space-y-12">
                    {/* Section 1: Identity */}
                    <div className={`transition-opacity duration-500 ${activeStep === 1 ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                        <h3 className="text-2xl font-bold uppercase text-white mb-8">Identity Protocol</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">Full Name</label>
                                <input 
                                    required
                                    type="text" 
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-xl text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="ENTER NAME"
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                    onFocus={() => setActiveStep(1)}
                                />
                            </div>
                             <div className="group">
                                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">Organization</label>
                                <input 
                                    required
                                    type="text" 
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-xl text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="ENTER COMPANY"
                                    value={formData.company}
                                    onChange={e => setFormData({...formData, company: e.target.value})}
                                    onFocus={() => setActiveStep(1)}
                                />
                            </div>
                            <div className="group md:col-span-2">
                                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">Direct Contact</label>
                                <input 
                                    required
                                    type="email" 
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-xl text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="EMAIL ADDRESS"
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                    onFocus={() => setActiveStep(1)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Target */}
                    <div className={`transition-opacity duration-500 ${activeStep === 2 || (formData.name && formData.email) ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                        <h3 className="text-2xl font-bold uppercase text-white mb-8">Target Asset</h3>
                        <div className="group">
                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">Current URL (If Applicable)</label>
                            <div className="flex items-center gap-4">
                                <Globe className="text-gray-500" />
                                <input 
                                    type="url" 
                                    className="w-full bg-transparent border-b border-gray-700 py-3 text-xl text-white focus:outline-none focus:border-white transition-colors"
                                    placeholder="HTTPS://"
                                    value={formData.url}
                                    onChange={e => setFormData({...formData, url: e.target.value})}
                                    onFocus={() => setActiveStep(2)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Scope */}
                    <div className={`transition-opacity duration-500 ${activeStep === 3 || formData.url ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
                        <h3 className="text-2xl font-bold uppercase text-white mb-8">Audit Vectors</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            {vectorOptions.map((vec) => (
                                <button
                                    key={vec.id}
                                    type="button"
                                    onClick={() => {
                                        setActiveStep(3);
                                        toggleVector(vec.id);
                                    }}
                                    className={`p-4 border text-left transition-all duration-300 group flex flex-col justify-between h-24 md:h-32 ${
                                        formData.vectors.includes(vec.id)
                                        ? 'bg-white text-black border-white'
                                        : 'bg-transparent text-gray-500 border-gray-800 hover:border-gray-500'
                                    }`}
                                >
                                    <vec.icon size={24} className={formData.vectors.includes(vec.id) ? 'text-black' : 'text-gray-500 group-hover:text-white'} />
                                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{vec.label}</span>
                                </button>
                            ))}
                        </div>
                        
                         <div className="group">
                            <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-white transition-colors">Estimated Budget Allocation</label>
                            <select 
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-xl text-white focus:outline-none focus:border-white transition-colors appearance-none rounded-none"
                                value={formData.budget}
                                onChange={e => setFormData({...formData, budget: e.target.value})}
                                onFocus={() => setActiveStep(3)}
                            >
                                <option value="" className="bg-black text-gray-500">Select Range</option>
                                <option value="25-50" className="bg-black text-white">$25k - $50k</option>
                                <option value="50-100" className="bg-black text-white">$50k - $100k</option>
                                <option value="100+" className="bg-black text-white">$100k+</option>
                            </select>
                        </div>
                    </div>
                 </div>

                 <div className="mt-16 pt-8 border-t border-gray-800 flex justify-end">
                     <button 
                        type="submit"
                        disabled={formState === 'loading'}
                        className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-4 group disabled:opacity-50"
                     >
                        {formState === 'loading' ? (
                            <>Processing <Loader2 className="animate-spin" size={18} /></>
                        ) : (
                            <>Initialize Audit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                        )}
                     </button>
                 </div>

              </form>
            )}
          </AnimatePresence>
        </div>
        
        <div className="mt-8 text-center md:text-left">
            <p className="text-xs text-gray-600 uppercase tracking-widest">
                <Shield size={12} className="inline mr-2" />
                Secure Transmission // 256-bit Encryption
            </p>
        </div>
      </div>
    </GenericPage>
  );
};

export default Audit;