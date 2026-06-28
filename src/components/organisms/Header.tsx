import React, { useState, useEffect } from 'react';
import { Logo } from '../atoms/Logo';
import { LanguageSwitcher } from '../atoms/LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext';
import { siteConfig } from '../../data/siteConfig';
import { Menu, X, PhoneCall, ShieldCheck, MapPin, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('home');

  // Shrink header on scroll & spy active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Robust scroll spy using absolute offsetTop
      const sections = ['home', 'about', 'services', 'fleet', 'coverage', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          // If the section's top is above our scroll line, it's the active one.
          // (We iterate in reverse, so the lowest matching section wins)
          if (el.offsetTop <= scrollPosition) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call once to set initial state on load
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home',       label: t.footer.quickLinks?.home || 'Home' },
    { href: '#about',      label: t.footer.quickLinks?.about || 'About Us' },
    { href: '#services',   label: t.footer.quickLinks?.services || 'Services' },
    { href: '#fleet',      label: t.footer.quickLinks?.fleet || 'Our Fleet' },
    { href: '#coverage',   label: t.footer.quickLinks?.coverage || 'Coverage' },
    { href: '#contact',    label: t.footer.quickLinks?.contact || 'Contact Us' },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled
            ? 'bg-[#060e1a]/90 backdrop-blur-xl shadow-2xl border-b border-white/10'
            : 'bg-gradient-to-b from-[#060e1a]/90 to-transparent'}
        `}
      >
        {/* Top Info Bar */}
        <div className={`hidden lg:flex justify-between items-center px-6 lg:px-10 py-1.5 transition-all duration-300 ${scrolled ? 'h-0 overflow-hidden opacity-0 py-0 border-none' : 'border-b border-white/10 opacity-100'}`}>
          <div className="flex items-center gap-6 text-[11px] font-bold tracking-widest text-white/90 uppercase">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              {siteConfig.contact.ownerName}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              Kothapet, GUNTUR - 1
            </span>
          </div>
          <div className="flex items-center gap-6 text-[12px] font-bold tracking-wider text-white">
            <a href={`tel:${siteConfig.contact.emergencyPhoneRaw}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              {siteConfig.contact.emergencyPhone}
            </a>
          </div>
        </div>

        <div className={`max-w-8xl mx-auto px-6 lg:px-10 flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-0.5' : 'py-2'}`}>

          {/* Logo */}
          <Logo variant="light" className="w-28 lg:w-40 flex-shrink-0" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 shadow-inner" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`
                    relative px-4 py-1.5 text-[13px] font-bold tracking-wide rounded-full transition-all duration-300
                    ${isActive ? 'bg-white/10' : 'hover:bg-white/10'}
                  `}
                  style={{ color: '#ffffff' }}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Language Switcher + Emergency + Mobile Toggle */}
          <div className="flex items-center gap-3 lg:gap-5">
            <LanguageSwitcher theme="dark" />

            <a
              href={`tel:${siteConfig.contact.emergencyPhoneRaw}`}
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-xs font-black px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4 animate-pulse" />
              {t.actions?.callNow || 'EMERGENCY CALL'}
            </a>

            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Full-Screen Drawer ── */}
      <div
        className={`
          fixed inset-0 z-40 bg-gray-950/98 backdrop-blur-xl
          flex flex-col items-center justify-center gap-10
          transition-all duration-300
          lg:hidden
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
              style={{ color: '#ffffff' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language switcher in mobile drawer too */}
        <div className="mt-4">
          <LanguageSwitcher theme="dark" />
        </div>
      </div>
    </>
  );
};
