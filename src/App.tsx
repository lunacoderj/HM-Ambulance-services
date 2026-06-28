import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import ReactGA from "react-ga4";
import { EmergencyMode } from './components/modals/EmergencyMode';
import { Header } from './components/organisms/Header';
import { FloatingActions } from './components/molecules/FloatingActions';
import { LanguageProvider } from './contexts/LanguageContext';
import { Logo } from './components/atoms/Logo';
import { Footer } from './components/organisms/Footer';
import { FloatingEmergencyBanner } from './components/molecules/FloatingEmergencyBanner';
import { ScrollToTop } from './components/atoms/ScrollToTop';
import type { Service } from './data/services';
import type { Equipment as EquipmentType } from './data/equipment';

// Lazy load heavy page sections (Phase 4 Optimization)
const Hero = lazy(() => import('./sections/Hero').then(m => ({ default: m.Hero })));
const About = lazy(() => import('./sections/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./sections/Services').then(m => ({ default: m.Services })));
const Equipment = lazy(() => import('./sections/Equipment').then(m => ({ default: m.Equipment })));
const Testimonials = lazy(() => import('./sections/Testimonials').then(m => ({ default: m.Testimonials })));
const CoverageMap = lazy(() => import('./sections/CoverageMap').then(m => ({ default: m.CoverageMap })));
const HowItWorks = lazy(() => import('./sections/HowItWorks').then(m => ({ default: m.HowItWorks })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));
const ServiceDetails = lazy(() => import('./components/organisms/ServiceDetails').then(m => ({ default: m.ServiceDetails })));
const EquipmentDetails = lazy(() => import('./components/organisms/EquipmentDetails').then(m => ({ default: m.EquipmentDetails })));
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeEquipment, setActiveEquipment] = useState<EquipmentType | null>(null);

  useEffect(() => {
    // Smooth Scrolling Initialization
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Expose lenis globally so we can use it to reset scroll
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  useEffect(() => {
    let pagePath = '/';
    if (activeService) {
      pagePath = `/service/${activeService.id}`;
    } else if (activeEquipment) {
      pagePath = `/equipment/${activeEquipment.id}`;
    }

    ReactGA.send({
      hitType: "pageview",
      page: pagePath,
    });
  }, [activeService, activeEquipment]);

  useEffect(() => {
    // Instantly scroll to the top of the page when opening/closing details
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Refresh ScrollTrigger when navigating to/from details pages
    // because the page height changes drastically and GSAP needs to recalculate
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, [activeService, activeEquipment]);

  const isDetailsView = activeService || activeEquipment;

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col font-sans antialiased relative">
        
        {!isDetailsView && <Header />}
        
        <div className="flex-grow flex flex-col relative z-10 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-b-[2.5rem]">

            <Suspense fallback={null}>
              {activeService ? (
                <ServiceDetails 
                  service={activeService} 
                  onBack={() => setActiveService(null)} 
                />
              ) : activeEquipment ? (
                <EquipmentDetails 
                  equipment={activeEquipment} 
                  onBack={() => setActiveEquipment(null)} 
                />
              ) : (
                <>
                  <main className="flex-grow">
                    <Hero />
                    
                    <div id="about">
                      <About />
                    </div>

                    <div id="services">
                      <Services onServiceClick={(s) => setActiveService(s)} />
                    </div>

                    <div id="equipment">
                      <Equipment onEquipmentClick={(e) => setActiveEquipment(e)} />
                    </div>

                    <div id="fleet">
                      <HowItWorks />
                    </div>

                    <div id="coverage">
                      <CoverageMap />
                    </div>

                    <Testimonials />

                    <div id="contact" className="pb-12 md:pb-16">
                      <Contact />
                    </div>

                    {/* Floating Emergency Banner - overlapping the footer */}
                    <FloatingEmergencyBanner />
                  </main>
                </>
              )}
            </Suspense>

            </div>
            
            <div className="relative z-0">
              <Footer />
            </div>

            {/* Global Modals & Overlays */}
            <EmergencyMode />
            <FloatingActions />
            <ScrollToTop />
            
      </div>
    </LanguageProvider>
  );
}

export default App;
