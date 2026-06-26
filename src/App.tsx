import { useState, useEffect, useRef } from 'react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Equipment } from './sections/Equipment';
import { Testimonials } from './sections/Testimonials';
import { CoverageMap } from './sections/CoverageMap';
import { HowItWorks } from './sections/HowItWorks';
import { Contact } from './sections/Contact';
import { EmergencyMode } from './components/modals/EmergencyMode';
import { Header } from './components/organisms/Header';
import { FloatingActions } from './components/molecules/FloatingActions';
import { ServiceDetails } from './components/organisms/ServiceDetails';
import { LanguageProvider } from './contexts/LanguageContext';
import { Logo } from './components/atoms/Logo';
import { Footer } from './components/organisms/Footer';
import { FloatingEmergencyBanner } from './components/molecules/FloatingEmergencyBanner';
import { ScrollToTop } from './components/atoms/ScrollToTop';
import type { Service } from './data/services';
import { EquipmentDetails } from './components/organisms/EquipmentDetails';
import type { Equipment as EquipmentType } from './data/equipment';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { 
  HeaderSkeleton, HeroSkeleton, AboutSkeleton, ServicesSkeleton, 
  EquipmentSkeleton, HowItWorksSkeleton, CoverageMapSkeleton, 
  TestimonialsSkeleton, ContactSkeleton, FooterSkeleton 
} from './components/skeletons/AppSkeletons';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeEquipment, setActiveEquipment] = useState<EquipmentType | null>(null);
  const [appState, setAppState] = useState<'splash' | 'animating' | 'skeletons' | 'ready'>('splash');
  const contentRef = useRef<HTMLDivElement>(null);
  const splashContainerRef = useRef<HTMLDivElement>(null);
  const splashLogoRef = useRef<HTMLDivElement>(null);

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
    // Splash Screen: Appear, Blink, and Disappear
    if (splashLogoRef.current) {
      const tl = gsap.timeline();

      // 1. Hold initially
      tl.to(splashLogoRef.current, { duration: 0.4 });
      
      // 2. Blink effect
      tl.to(splashLogoRef.current, { opacity: 0.3, duration: 0.1, ease: "power1.inOut" });
      tl.to(splashLogoRef.current, { opacity: 1, duration: 0.1, ease: "power1.inOut" });
      tl.to(splashLogoRef.current, { opacity: 0.3, duration: 0.1, ease: "power1.inOut" });
      tl.to(splashLogoRef.current, { opacity: 1, duration: 0.1, ease: "power1.inOut" });

      // 3. Disappear
      tl.to(splashLogoRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        delay: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          // Fade out the splash background
          gsap.to(splashContainerRef.current, {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
              setAppState('skeletons');
              // Show skeletons briefly
              setTimeout(() => {
                setAppState('ready');
              }, 800);
            }
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    if (appState === 'ready' && contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, [appState]);
  
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
        {appState !== 'ready' && (
          <div ref={splashContainerRef} className="fixed inset-0 z-[100] bg-white flex items-center justify-center pointer-events-none">
             <div ref={splashLogoRef}>
                <Logo variant="dark" className="scale-[1.5] md:scale-[2]" />
             </div>
          </div>
        )}

        {appState !== 'ready' ? (
          <>
            <HeaderSkeleton />
            <main className="flex-grow">
              <HeroSkeleton />
              <AboutSkeleton />
              <ServicesSkeleton />
              <EquipmentSkeleton />
              <HowItWorksSkeleton />
              <CoverageMapSkeleton />
              <TestimonialsSkeleton />
              <ContactSkeleton />
            </main>
            <FooterSkeleton />
          </>
        ) : (
          <>
            {!isDetailsView && <Header />}
            
            <div ref={contentRef} className="flex-grow flex flex-col relative z-10 bg-white shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-b-[2.5rem]">

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

            </div>
            
            <div className="relative z-0">
              <Footer />
            </div>

            {/* Global Modals & Overlays */}
            <EmergencyMode />
            <FloatingActions />
            <ScrollToTop />
          </>
        )}

      </div>
    </LanguageProvider>
  );
}

export default App;
