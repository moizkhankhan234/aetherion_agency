import React, { useState } from 'react';
import GenericPage from './GenericPage';
import { Mail, MapPin, Phone, ArrowRight, Clock, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail } from '../utils/email';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    type: 'Digital Transformation',
    brief: ''
  });

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');

    // Prepare Payload
    const payload = {
      subject: `[NEW INQUIRY] ${formData.type} - ${formData.firstName} ${formData.lastName}`,
      body: `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nType: ${formData.type}\n\nBrief:\n${formData.brief}`,
      replyTo: formData.email
    };

    // Send via SMTP Service
    await sendEmail(payload, 'CONTACT');
    
    setFormState('success');
  };

  const inputClasses = "w-full bg-transparent border-b border-gray-700 py-4 focus:outline-none text-lg md:text-xl font-medium transition-colors duration-300 text-white";
  const labelClasses = (field: string, value: string) => `absolute left-0 transition-all duration-300 pointer-events-none uppercase text-xs font-bold tracking-widest ${
    focusedField === field || value ? '-top-4 text-white text-[10px]' : 'top-4 text-gray-500'
  }`;

  return (
    <GenericPage 
      title="Initiate" 
      subtitle="Ready to transform? We are currently auditing partnerships for the upcoming quarter."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
        {/* Animated Form */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black p-8 md:p-12 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-1 h-full bg-white" />
            
            <AnimatePresence mode="wait">
                {formState === 'success' ? (
                    <motion.div 
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full flex flex-col items-center justify-center text-center py-20"
                    >
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mb-8">
                            <Check size={40} />
                        </div>
                        <h3 className="text-3xl font-bold uppercase mb-4 text-white">Transmission Received</h3>
                        <p className="text-gray-400 max-w-md">Our intake team is reviewing your protocol. Expect an encrypted communique within 24 hours.</p>
                        <button 
                            onClick={() => {
                                setFormState('idle');
                                setFormData({ firstName: '', lastName: '', email: '', type: 'Digital Transformation', brief: '' });
                            }}
                            className="mt-12 text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-gray-400 text-white"
                        >
                            Send Another
                        </button>
                    </motion.div>
                ) : (
                    <motion.form 
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit} 
                        className="space-y-8 md:space-y-10 relative z-10"
                    >
                        <h3 className="text-2xl font-bold mb-8 uppercase text-white">Inquiry Protocol</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative pt-4">
                                <label className={labelClasses('firstName', formData.firstName)}>First Name</label>
                                <input 
                                    type="text" 
                                    className={`${inputClasses} ${focusedField === 'firstName' ? 'border-white' : ''}`}
                                    value={formData.firstName}
                                    onChange={e => setFormData({...formData, firstName: e.target.value})}
                                    onFocus={() => handleFocus('firstName')}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                            <div className="relative pt-4">
                                <label className={labelClasses('lastName', formData.lastName)}>Last Name</label>
                                <input 
                                    type="text" 
                                    className={`${inputClasses} ${focusedField === 'lastName' ? 'border-white' : ''}`}
                                    value={formData.lastName}
                                    onChange={e => setFormData({...formData, lastName: e.target.value})}
                                    onFocus={() => handleFocus('lastName')}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>
                        </div>
                        
                        <div className="relative pt-4">
                            <label className={labelClasses('email', formData.email)}>Corporate Email</label>
                            <input 
                                type="email" 
                                className={`${inputClasses} ${focusedField === 'email' ? 'border-white' : ''}`}
                                value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                                onFocus={() => handleFocus('email')}
                                onBlur={handleBlur}
                                required
                            />
                        </div>

                        <div className="relative pt-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block">Classification</label>
                            <div className="relative">
                                <select 
                                    className="w-full bg-transparent border-b border-gray-700 py-4 text-lg md:text-xl font-medium focus:outline-none focus:border-white appearance-none text-white"
                                    value={formData.type}
                                    onChange={e => setFormData({...formData, type: e.target.value})}
                                >
                                    <option className="bg-black text-white">Digital Transformation</option>
                                    <option className="bg-black text-white">Brand Identity</option>
                                    <option className="bg-black text-white">Web Development</option>
                                    <option className="bg-black text-white">AI Infrastructure</option>
                                </select>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white">
                                    <ArrowRight size={16} className="rotate-90" />
                                </div>
                            </div>
                        </div>

                        <div className="relative pt-4">
                            <label className={labelClasses('brief', formData.brief)}>Mission Brief</label>
                            <textarea 
                                rows={3} 
                                className={`${inputClasses} resize-none ${focusedField === 'brief' ? 'border-white' : ''}`}
                                value={formData.brief}
                                onChange={e => setFormData({...formData, brief: e.target.value})}
                                onFocus={() => handleFocus('brief')}
                                onBlur={handleBlur}
                                required
                            />
                        </div>

                        <button 
                            disabled={formState === 'loading'}
                            className="w-full py-6 bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center justify-center gap-4 group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10 flex items-center gap-2">
                                {formState === 'loading' ? (
                                    <>Transmitting <Loader2 className="animate-spin" size={18}/></>
                                ) : (
                                    <>Initialize <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                )}
                            </span>
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </motion.div>

        {/* Info */}
        <div className="space-y-12 md:space-y-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 uppercase text-white">Headquarters</h3>
            <div className="space-y-8 border-l border-white pl-8">
                <div className="flex flex-col group">
                    <span className="font-bold uppercase mb-2 flex items-center gap-2 text-xs tracking-widest text-white"><MapPin size={16}/> Address</span>
                    <p className="text-gray-500 text-base md:text-lg group-hover:text-white transition-colors">Pakistan <br/>Karachi</p>
                </div>
                <div className="flex flex-col group">
                    <span className="font-bold uppercase mb-2 flex items-center gap-2 text-xs tracking-widest text-white"><Mail size={16}/> Contact</span>
                    <p className="text-gray-500 text-base md:text-lg group-hover:text-white transition-colors">aetherionagency@gmail.com</p>
                </div>
                 <div className="flex flex-col group">
                    <span className="font-bold uppercase mb-2 flex items-center gap-2 text-xs tracking-widest text-white"><Phone size={16}/> Phone</span>
                    <p className="text-gray-500 text-base md:text-lg group-hover:text-white transition-colors">+92 3148389155</p>
                </div>
            </div>
          </motion.div>

         
        </div>
      </div>

    
    </GenericPage>
  );
};

export default Contact;