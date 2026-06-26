import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { siteConfig } from '../data/siteConfig';
import gsap from 'gsap';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Zap,
  Navigation,
  HeartPulse,
  Award,
  IndianRupee,
  ShieldCheck,
  Star,
  MapPinned,
} from 'lucide-react';

/* ── Heartbeat SVG Line ── */
const HeartbeatLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 200 40" fill="none" className={className} preserveAspectRatio="none">
    <path
      d="M0 20 H60 L70 8 L80 32 L90 4 L100 36 L110 8 L120 32 L130 20 H200"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-[heartbeat-draw_2s_ease-in-out_infinite]"
    />
  </svg>
);

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);

  /* ── GSAP Entrance ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-badge', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
      tl.fromTo('.hero-heading', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3');
      tl.fromTo('.hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');
      tl.fromTo('.hero-left-stats', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, '-=0.5');
      tl.fromTo('.hero-ambulance', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'back.out(1.2)' }, '-=0.5');
      tl.fromTo('.hero-cta-panel', { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, '-=0.6');
      tl.fromTo('.hero-feature-item', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 }, '-=0.4');
      tl.fromTo('.hero-trust-bar', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2');
    }, heroRef);
    return () => ctx.revert();
  }, []);

  /* ── Data ── */
  const ambulances = [
    { id: 'basic', src: '/images/ambulances/basic_icu.png', label: t.hero.basicSupport },
    { id: 'icu', src: '/images/ambulances/advanced.png', label: t.hero.icuVentilator },
    { id: 'freezer', src: '/images/ambulances/freezer_ventilator.png', label: t.hero.freezerBox },
  ];

  const features = [
    { icon: <Clock className="w-5 h-5" />, title: '24X7', sub: 'Service' },
    { icon: <Zap className="w-5 h-5" />, title: 'Fast', sub: 'Response' },
    { icon: <Navigation className="w-5 h-5" />, title: 'GPS', sub: 'Enabled' },
    { icon: <HeartPulse className="w-5 h-5" />, title: 'ICU', sub: 'Equipped' },
    { icon: <Award className="w-5 h-5" />, title: 'Trained', sub: 'Experts' },
    { icon: <IndianRupee className="w-5 h-5" />, title: 'Affordable', sub: 'Pricing' },
    { icon: <ShieldCheck className="w-5 h-5" />, title: '100%', sub: 'Safety' },
  ];

  const leftStats = [
    { icon: <Clock className="w-4 h-4" />, value: '24x7', label: 'Service' },
    { icon: <Star className="w-4 h-4" />, value: '57+', label: 'Happy Reviews' },
    { icon: <MapPinned className="w-4 h-4" />, value: 'Guntur', label: 'Andhra Pradesh' },
    { icon: <ShieldCheck className="w-4 h-4" />, value: '100%', label: 'Safety & Care' },
  ];

  /* ── Handlers ── */
  const handleCall = () => { window.location.href = `tel:${siteConfig.contact.emergencyPhoneRaw}`; };
  const handleWhatsApp = () => {
    const n = siteConfig.contact.whatsappRaw.replace(/\+/g, '');
    window.location.href = `https://wa.me/${n}?text=Emergency! I need an ambulance at my location.`;
  };
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const n = siteConfig.contact.whatsappRaw.replace(/\+/g, '');
          const msg = encodeURIComponent(`Emergency! My location: https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`);
          window.location.href = `https://wa.me/${n}?text=${msg}`;
        },
        () => alert('Please enable location services.')
      );
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative w-full overflow-hidden bg-[#060e1a] flex flex-col">

      {/* ══════════════════ BACKGROUND ══════════════════ */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        {/* Cinematic Background Image */}
        <img
          src="/images/hero-bg.png"
          alt="Night City Road"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
          loading="eager"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-transparent to-[#0a1018]/90" />
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-[#060e1a] via-[#060e1a]/80 to-transparent" />
        
        {/* Rain streaks */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'repeating-linear-gradient(95deg, transparent, transparent 3px, rgba(200,220,255,0.4) 3px, transparent 4px)',
          backgroundSize: '8px 100%',
        }} />
        {/* Top ambient red/green glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-32 bg-[radial-gradient(ellipse_at_top,_rgba(239,68,68,0.08)_0%,_transparent_70%)]" />
      </div>

      {/* ══════════════════ MAIN HERO AREA ══════════════════ */}
      <div className="relative z-10 flex flex-col items-center pt-28 md:pt-32 pb-6 px-4 md:px-8">

        {/* ── Top Badge ── */}
        <div className="hero-badge mb-5">
          <span className="inline-flex items-center gap-2 bg-red-600 text-white text-[11px] md:text-xs font-black uppercase tracking-[0.25em] px-5 py-2 rounded-full shadow-lg shadow-red-600/30">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            24X7 Emergency Ambulance Service
          </span>
        </div>

        {/* ── Heading with Heartbeat Line ── */}
        <h1 className="hero-heading text-center text-white font-black leading-[1.05] mb-3 max-w-5xl">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            {t.hero.ready || 'WE ARE ALWAYS READY'}
          </span>
          <span className="flex items-center justify-center gap-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1">
            {t.hero.saveLives || 'TO SAVE LIVES'}
            <HeartbeatLine className="w-20 md:w-28 h-8 text-red-500/70" />
          </span>
        </h1>

        {/* ── Subtitle ── */}
        <p className="hero-subtitle text-gray-400 text-sm md:text-base tracking-wider mb-8 text-center">
          {t.hero.fastResponse || 'Fast Response'} &bull; {t.hero.advancedCare || 'Advanced Care'} &bull; {t.hero.safeJourney || 'Safe Journey'}
        </p>

        {/* ══════════════════ 3-COLUMN: LEFT STATS | AMBULANCES | RIGHT CTA ══════════════════ */}
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-stretch justify-between gap-5 lg:gap-4 mb-6">

          {/* ── LEFT: Stats Panel ── */}
          <div className="hero-left-stats hidden lg:flex flex-col gap-4 w-[170px] flex-shrink-0 justify-center">
            {leftStats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <span className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-teal-400 group-hover:bg-teal-400/10 transition-colors flex-shrink-0">
                  {stat.icon}
                </span>
                <div className="leading-tight">
                  <div className="text-white text-sm font-bold">{stat.value}</div>
                  <div className="text-gray-500 text-[10px] font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── CENTER: Ambulance Fleet ── */}
          <div className="flex-1 flex items-end justify-center gap-1 sm:gap-3 md:gap-5 w-full mt-6 lg:mt-0 px-1 sm:px-0">
            {ambulances.map((amb, idx) => (
              <div key={amb.id} className={`hero-ambulance group relative flex flex-col items-center flex-1 max-w-[320px] ${idx === 1 ? 'z-10 scale-110 mb-2' : 'z-0'}`}>
                {/* Label badge */}
                <span className="inline-block bg-blue-700 text-white text-[7px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.15em] px-2 sm:px-3 py-1 rounded-full mb-1 sm:mb-2 shadow-md whitespace-nowrap">
                  {amb.label}
                </span>
                {/* Image */}
                <div className="relative w-full">
                  <img
                    src={amb.src}
                    alt={amb.label}
                    className="w-full h-auto object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)] group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Ground reflection */}
                  <div className="absolute bottom-0 left-[10%] right-[10%] h-3 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-sm" />
                </div>
              </div>
            ))}
          </div>

          {/* ── RIGHT: CTA Panel ── */}
          <div className="hero-cta-panel w-full lg:w-auto lg:flex-shrink-0 flex items-center justify-center lg:justify-end">
            <div className="bg-white/[0.06] backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl w-full sm:w-auto sm:min-w-[220px]">
              <p className="text-white text-center text-sm font-bold mb-4 tracking-wide">
                {t.hero.needAmbulance || 'Need an Ambulance?'}
              </p>
              <div className="flex flex-col gap-3">
                <button onClick={handleCall} className="flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-5 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/30 hover:-translate-y-0.5 cursor-pointer">
                  <Phone className="w-4 h-4" /> {t.actions.callNow || 'CALL NOW'}
                </button>
                <button onClick={handleWhatsApp} className="flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold text-sm py-3 px-5 rounded-xl transition-all duration-200 shadow-lg shadow-green-600/30 hover:-translate-y-0.5 cursor-pointer">
                  <MessageCircle className="w-4 h-4" /> {t.actions.whatsapp || 'WHATSAPP'}
                </button>
                <button onClick={handleLocation} className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 px-5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 cursor-pointer">
                  <MapPin className="w-4 h-4" /> {t.actions.shareLocation || 'SHARE LOCATION'}
                </button>
              </div>
              <p className="text-center text-[11px] text-gray-400 mt-3.5 tracking-wide">
                {t.hero.oneClick || 'One Click. We\'re'} <span className="text-teal-400 font-semibold">{t.hero.onTheWay || 'On The Way!'}</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════ FEATURE STRIP ══════════════════ */}
      <div className="relative z-10 w-full border-t border-white/10 bg-[#0a0f18]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-10">
          {features.map((f, i) => (
            <div key={i} className="hero-feature-item flex items-center gap-2.5 text-gray-300 group cursor-default">
              <span className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-400/10 transition-colors flex-shrink-0">
                {f.icon}
              </span>
              <div className="leading-tight">
                <div className="text-white text-xs font-bold">{f.title}</div>
                <div className="text-gray-500 text-[10px] font-medium">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════ TRUST BAR ══════════════════ */}
      <div className="hero-trust-bar relative z-10 w-full border-t border-teal-500/20 bg-teal-500/5">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span>Your life is important to us. We respond with care, compassion & commitment.</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Trusted by</span>
            <span className="font-black text-white">57+</span>
            <span>Families</span>
            <span className="flex items-center gap-0.5 text-amber-400">
              {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
            </span>
            <span className="font-bold text-white">4.9</span>
          </div>
        </div>
      </div>

      {/* Heartbeat animation keyframe */}
      <style>{`
        @keyframes heartbeat-draw {
          0% { stroke-dashoffset: 600; opacity: 0.3; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.3; }
        }
        .animate-\\[heartbeat-draw_2s_ease-in-out_infinite\\] {
          stroke-dasharray: 600;
          animation: heartbeat-draw 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
