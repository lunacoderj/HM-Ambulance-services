import React from 'react';
import { Users, Clock, ShieldCheck, Activity, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: <Users className="w-5 h-5" />,
      value: '1,847+',
      label: t.about.stats.patients,
      color: 'text-blue-400',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      value: '7 Min',
      label: t.about.stats.response,
      color: 'text-red-400',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      value: '24/7/365',
      label: t.about.stats.available,
      color: 'text-teal-400',
    },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-[#060e1a] text-white border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] bg-teal-900/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-bold text-xs uppercase tracking-widest mb-6">
              <Award className="w-4 h-4" />
              {t.about.certified}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
              {t.about.title}
            </h2>
          </div>
          <div className="text-gray-400 max-w-sm text-lg md:text-right border-l md:border-l-0 md:border-r-2 border-teal-500/30 pl-4 md:pl-0 md:pr-5 py-1 italic font-medium">
            {t.about.quote || '"Every second counts. We are committed to delivering life-saving emergency care with speed and compassion."'}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center">
          
          {/* Left: Interactive Visiting Card & Badges */}
          <div className="lg:col-span-7 relative group mt-8 lg:mt-0">
            
            {/* Main Visiting Card */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 transition-all duration-700 transform group-hover:-translate-y-2 group-hover:rotate-[1deg] bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay" />
              <img loading="lazy" decoding="async" 
                src="/images/visiting_card.webp" 
                alt="HM Ambulance Visiting Card" 
                className="w-full h-auto object-cover relative z-0"
              />
            </div>

            {/* Floating Action Badge */}
            <div className="absolute -bottom-6 -left-2 md:-left-8 z-20 bg-[#0d1624]/95 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl flex items-center gap-4 transform transition-transform duration-500 group-hover:scale-105">
               <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center animate-pulse">
                  <Activity className="w-6 h-6 text-teal-400" />
               </div>
               <div>
                  <div className="text-2xl font-black text-white">24/7</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">{t.about.stats?.activeFleet || 'Active Fleet'}</div>
               </div>
            </div>

            {/* Decorative Rings */}
            <div className="absolute -top-12 -right-12 z-0 w-40 h-40 border border-white/5 rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center pointer-events-none">
               <div className="w-28 h-28 border border-teal-500/20 rounded-full border-dashed" />
            </div>

          </div>

          {/* Right: Description & Stats Grid */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:pl-10">
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                {t.about.desc1}
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                {t.about.desc2}
              </p>
            </div>

            {/* Stats Masonry-style Grid */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group/stat ${
                    i === 2 ? 'col-span-2 flex items-center justify-between' : 'flex flex-col'
                  }`}
                >
                  <div className={`flex items-center gap-3 ${i === 2 ? '' : 'mb-4'}`}>
                    <div className={`p-2.5 rounded-xl bg-white/5 ${stat.color} transition-transform duration-500 group-hover/stat:scale-110`}>
                      {stat.icon}
                    </div>
                    {i === 2 && <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</span>}
                  </div>
                  
                  <div>
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    {i !== 2 && <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
