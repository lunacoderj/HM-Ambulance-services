import React, { useState } from 'react';
import { PhoneCall, MapPin, Send, MessageSquare, Clock, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteConfig } from '../data/siteConfig';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', phone: '', service: 'emergency' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Request Sent: We will contact you at ${formState.phone} immediately.`);
  };

  return (
    <section id="contact" className="relative w-full bg-[#040810] py-24 overflow-hidden isolate border-t border-white/5">
      {/* Background Tech Gradients */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] -z-10 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="page-container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-widest">
            <ShieldAlert className="w-3 h-3" />
            {t.contact.dispatchCenter}
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{t.contact.title}</h2>
          <p className="text-gray-400 text-xs md:text-sm">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
          
          {/* Left: Immediate Action / Info Side */}
          <div className="relative group flex flex-col justify-between">
            <div className="absolute -inset-1 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-[1.5rem] blur-xl opacity-50 transition-opacity duration-700" />
            <div className="relative h-full bg-[#0a1220]/80 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-[1.5rem] shadow-2xl flex flex-col justify-between">
              
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-6">{t.contact.directHotline}</h3>
                
                <a href={`tel:${siteConfig.contact.emergencyPhoneRaw}`} className="group/btn flex items-center gap-4 md:gap-5 p-3 md:p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 hover:border-red-500/50 transition-all duration-300 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 group-hover/btn:bg-red-500 group-hover/btn:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-300">
                    <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-red-500 group-hover/btn:text-white group-hover/btn:animate-bounce" />
                  </div>
                  <div>
                    <div className="text-red-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">{t.contact.emergencyDial}</div>
                    <div className="text-2xl md:text-3xl font-black text-white">{siteConfig.contact.emergencyPhone}</div>
                  </div>
                </a>

                <a href={`https://wa.me/${siteConfig.contact.whatsappRaw.replace('+', '')}`} target="_blank" rel="noreferrer" className="group/btn flex items-center gap-4 md:gap-5 p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300 mb-8">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover/btn:bg-emerald-500/20 transition-all duration-300">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">{t.contact.whatsappFast}</div>
                    <div className="text-lg md:text-xl font-black text-white group-hover/btn:text-emerald-400 transition-colors">{t.contact.chatDispatch}</div>
                  </div>
                </a>
              </div>

              {/* Grid Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white text-sm font-bold mb-1">{t.contact.standby}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{t.contact.readyDeploy}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white text-sm font-bold mb-1">{t.contact.baseStation}</div>
                    <div className="text-gray-400 text-xs leading-relaxed">{t.contact.location}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Pre-Booking Secure Form */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-[1.5rem] blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative h-full bg-[#0a1220]/80 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-[1.5rem] shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">{t.contact.requestTransport}</h3>
                <p className="text-gray-400 text-xs">{t.contact.fillSecurely}</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
                
                {/* Transport Type */}
                <div className="grid grid-cols-2 gap-3">
                  <label className={`cursor-pointer border ${formState.service === 'emergency' ? 'border-red-500 bg-red-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'} rounded-lg p-3 text-center transition-all`}>
                    <input type="radio" name="service" value="emergency" checked={formState.service === 'emergency'} onChange={(e) => setFormState({...formState, service: e.target.value})} className="sr-only" />
                    <span className={`text-xs font-bold uppercase tracking-wider ${formState.service === 'emergency' ? 'text-red-400' : 'text-gray-400'}`}>{t.contact.emergency}</span>
                  </label>
                  <label className={`cursor-pointer border ${formState.service === 'planned' ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'} rounded-lg p-3 text-center transition-all`}>
                    <input type="radio" name="service" value="planned" checked={formState.service === 'planned'} onChange={(e) => setFormState({...formState, service: e.target.value})} className="sr-only" />
                    <span className={`text-xs font-bold uppercase tracking-wider ${formState.service === 'planned' ? 'text-blue-400' : 'text-gray-400'}`}>{t.contact.preBooking}</span>
                  </label>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">{t.contact.name}</label>
                    <input 
                      type="text" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder={t.contact.name}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1.5 block">{t.contact.phone}</label>
                    <input 
                      type="tel" 
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className={`mt-2 flex items-center justify-center gap-2 w-full py-3 md:py-4 rounded-lg font-black text-xs uppercase tracking-widest transition-all duration-300 ${
                    formState.service === 'emergency' 
                    ? 'bg-red-600 hover:bg-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]' 
                    : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  {t.contact.send}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
