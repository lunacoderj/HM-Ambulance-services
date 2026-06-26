import React, { useEffect } from 'react';
import type { Service } from '../../data/services';
import { ArrowLeft, PhoneCall, MessageCircle, ShieldCheck, CheckCircle2, Clock, Activity, ShieldAlert } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { useLanguage } from '../../contexts/LanguageContext';
import { Footer } from './Footer';

interface ServiceDetailsProps {
  service: Service;
  onBack: () => void;
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service, onBack }) => {
  const { language, t } = useLanguage();

  const title = language === 'te' && service.titleTe ? service.titleTe : service.title;
  const shortDescription = language === 'te' && service.shortDescriptionTe ? service.shortDescriptionTe : service.shortDescription;
  const features = language === 'te' && service.featuresTe ? service.featuresTe : service.features;

  // Scroll to top when opening
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappMessage = encodeURIComponent(`Hi, I need immediate assistance regarding: ${title}. Please reply ASAP.`);

  return (
    <div className="min-h-screen bg-[#060e1a] text-white flex flex-col relative z-[100]">
      {/* ── Custom Navbar for Details View ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent py-4 px-6 md:px-10 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/80 hover:text-white font-medium transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
        >
          <ArrowLeft className="w-5 h-5" />
          {t.serviceDetails?.backToHome || 'Back to Home'}
        </button>
      </header>

      {/* ── Cinematic Hero Area ── */}
      <div className="relative h-[60vh] md:h-[70vh] w-full flex items-end pb-16 md:pb-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover object-center opacity-70"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#060e1a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-[#060e1a]/80 to-transparent h-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              {t.serviceDetails?.verifiedService || 'Verified Service'}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light">
            {shortDescription}
          </p>
        </div>
      </div>

      {/* ── Main Body ── */}
      <main className="flex-grow max-w-5xl mx-auto px-6 md:px-10 w-full pb-24 flex flex-col md:flex-row gap-12 relative z-10">
        
        {/* Left Column: Details */}
        <div className="flex-1 flex flex-col gap-10">
          
          {/* Extended Description */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-4 text-white">{t.serviceDetails?.aboutThisService || 'About This Service'}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t.serviceDetails?.about1 || 'When it comes to '}<span className="font-semibold text-emerald-400">{title}</span>{t.serviceDetails?.about2 || ', time and reliability are critical.'}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t.serviceDetails?.about3 || 'Every deployment is closely monitored and coordinated by our dispatch center.'}
            </p>
          </section>

          {/* Features Grid */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">{t.serviceDetails?.features || 'Service Features'}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 font-medium text-lg leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Why Choose Us */}
          <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">{t.serviceDetails?.whyChoose || 'Why Choose HM Ambulance?'}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3">
                <div className="bg-red-500/20 p-3 rounded-lg w-fit text-red-400">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-white">{t.serviceDetails?.rapidResponse || 'Rapid Response'}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t.serviceDetails?.rapidDesc || 'Our strategically placed vehicles ensure minimal wait times during critical golden hours.'}</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-blue-500/20 p-3 rounded-lg w-fit text-blue-400">
                  <Activity className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-white">{t.serviceDetails?.expertTeam || 'Expert Medical Team'}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t.serviceDetails?.expertDesc || 'Certified paramedics and experienced doctors handle the most delicate emergency situations.'}</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-emerald-500/20 p-3 rounded-lg w-fit text-emerald-400">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-white">{t.serviceDetails?.advEquipment || 'Advanced Equipment'}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{t.serviceDetails?.advDesc || 'From multi-para monitors to transport ventilators, our fleet acts as a mobile hospital.'}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: CTA Panel */}
        <div className="w-full md:w-[400px] flex-shrink-0">
          <div className="sticky top-28 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{t.serviceDetails?.needImmediately || 'Need this service immediately?'}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{t.serviceDetails?.standby || 'Our dispatch team is on standby 24/7. Click below for an instant response.'}</p>
            </div>
            
            <a
              href={`tel:${siteConfig.contact.emergencyPhoneRaw}`}
              className="flex items-center justify-center gap-3 w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-5 rounded-2xl shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all hover:scale-105"
            >
              <PhoneCall className="w-6 h-6 animate-pulse" />
              {t.serviceDetails?.callNow || 'CALL NOW'}
            </a>
            
            <div className="flex items-center gap-4 my-2">
              <div className="h-px bg-white/10 flex-1"></div>
              <span className="text-gray-500 text-sm font-medium">{t.serviceDetails?.or || 'OR'}</span>
              <div className="h-px bg-white/10 flex-1"></div>
            </div>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xl py-5 rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.2)] transition-all hover:scale-105"
            >
              <MessageCircle className="w-6 h-6" />
              {t.serviceDetails?.whatsappUs || 'WHATSAPP US'}
            </a>

            <div className="mt-4 bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3">
               <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
               <p className="text-xs text-gray-400 leading-relaxed">{t.serviceDetails?.priorityHandling || 'Your request will be handled with the highest priority by our trained emergency coordinators.'}</p>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
};
