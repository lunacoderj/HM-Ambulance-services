import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Logo } from '../atoms/Logo';
import { siteConfig } from '../../data/siteConfig';
import { PhoneCall, ShieldCheck, MapPin, Activity } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const contactInfo = siteConfig.contact;
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' }));
  const footerRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (footerRef.current && containerRef.current) {
      // Unique 3D Drawbridge Peel Reveal Effect
      gsap.set(footerRef.current, { transformOrigin: "top center" });
      gsap.fromTo(footerRef.current,
        { 
          rotationX: -75, 
          opacity: 0,
          z: -200,
          filter: "blur(10px)"
        },
        {
          rotationX: 0,
          opacity: 1,
          z: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1, // Smooth scrubbing
          }
        }
      );
    }
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute:'2-digit', second:'2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const quickLinks = [
    { label: t.footer.quickLinks.home, href: '#home' },
    { label: t.footer.quickLinks.about, href: '#about' },
    { label: t.footer.quickLinks.services, href: '#services' },
    { label: t.footer.quickLinks.fleet, href: '#fleet' },
    { label: t.footer.quickLinks.coverage, href: '#coverage' },
    { label: t.footer.quickLinks.contact, href: '#contact' },
  ];

  return (
    <div ref={containerRef} className="relative bg-[#02050A]" style={{ perspective: "1200px" }}>
      <footer ref={footerRef} className="relative bg-[#02050A] border-t border-white/10 pt-24 md:pt-20 pb-10 font-sans">
      
      {/* ── Background Effects & Vehicle ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Giant Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.015] whitespace-nowrap tracking-tighter mix-blend-overlay">
          HM AMBULANCE
        </div>
        
        {/* Cinematic Lighting for Vehicle */}
        <div className="absolute bottom-0 right-0 md:right-10 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-red-600/20 rounded-[100%] blur-[80px] md:blur-[120px] mix-blend-screen opacity-60" />
        <div className="absolute bottom-0 right-0 md:right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/30 rounded-[100%] blur-[70px] md:blur-[100px] mix-blend-screen opacity-80" />

        {/* The Ambulance Image */}
        <img 
          src="/images/footer_vehical.png" 
          alt="HM Ambulance Fleet" 
          className="absolute bottom-0 md:-bottom-10 -right-20 md:-right-10 lg:right-[5%] w-[400px] md:w-[800px] opacity-15 md:opacity-30 object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-transform duration-1000 hover:scale-105 hover:opacity-40"
          style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 90%)', WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)' }}
        />
        
        {/* Vignette Overlay to blend the edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#02050A_100%)] opacity-80" />
      </div>

      {/* ── Overlapping CTA (Moved to App.tsx for correct layering) ── */}

      <div className="page-container relative z-10 mt-24 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 border-b border-white/10 pb-12 md:pb-16">
          
          {/* Brand Column (Spans 4) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left pr-0 lg:pr-8">
            <Logo variant="light" className="w-36 md:w-40 mb-6" />
            <p className="text-[11px] md:text-sm text-gray-400 md:text-gray-500 leading-relaxed mb-8 max-w-xs md:max-w-none">
              {t.footer.desc}
            </p>
            
            {/* Live Status Widget */}
            <div className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 flex flex-col gap-3 backdrop-blur-sm text-left">
              <div className="flex items-center justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-white/5 pb-2">
                <span>{t.footer.systemStatus}</span>
                <span className="text-teal-400 flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" /> {t.footer.online}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-gray-500">{t.footer.localTime}</span>
                  <span className="text-[11px] md:text-xs text-white font-mono">{time}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-gray-500">{t.footer.baseLocation}</span>
                  <span className="text-[11px] md:text-xs text-white font-mono flex items-center gap-1"><MapPin className="w-3 h-3 text-blue-400"/> GUNTUR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Column (Spans 3) */}
          <div className="lg:col-span-3 lg:pl-10">
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-500" /> {t.footer.navigation}
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group flex items-center gap-3 text-xs md:text-sm text-gray-200 hover:text-white font-medium transition-colors w-fit drop-shadow-md">
                    <span className="w-5 h-px bg-white/30 group-hover:bg-blue-400 transition-colors" />
                    <span className="group-hover:translate-x-1 group-hover:text-blue-300 transition-all">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (Spans 5) */}
          <div className="lg:col-span-5 flex flex-col gap-6 relative z-10">
            <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-red-500" /> {t.footer.communicationHub}
            </h4>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Primary Line - Glassmorphism */}
              <div className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-xl p-5 hover:bg-white/15 transition-all group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-50" />
                <div className="relative z-10">
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-1 drop-shadow-md">{t.footer.emergencyHotline}</div>
                  <a href={`tel:${contactInfo.emergencyPhoneRaw}`} className="text-xl font-semibold !text-white drop-shadow-lg">{contactInfo.emergencyPhone}</a>
                </div>
              </div>
            </div>

            {/* Certifications - Glassmorphism */}
            <div className="relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] rounded-xl p-5 flex items-start gap-4 group hover:bg-white/15 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-transparent opacity-50" />
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1 relative z-10 border border-white/30 drop-shadow-md">
                <ShieldCheck className="w-4 h-4 text-teal-300" />
              </div>
              <div className="relative z-10">
                <div className="text-[10px] font-bold text-teal-300 uppercase tracking-widest mb-1 drop-shadow-md">{t.footer.certifications}</div>
                <p className="text-xs text-white leading-relaxed font-medium drop-shadow-md">
                  {t.footer.certDesc}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 text-[10px] text-gray-500 font-medium uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.sitemap}</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};
