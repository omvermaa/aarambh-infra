import React, { useEffect, useRef } from 'react';
import { MapPin, ArrowRight, Download } from 'lucide-react';
import logo from "@/assets/logo.png";
import gate from "@/assets/gate.png";
// import brochure from "@/assets/brochure.pdf";
import villa from "@/assets/villa.pdf";
import FadeIn from "./FadeIn";


interface HeroProps {
  onOpenEnquiry: () => void;
}




const Hero: React.FC<HeroProps> = ({onOpenEnquiry}) => {
  const fixedLogoRef = useRef<HTMLImageElement>(null);
  const heroSlotRef = useRef<HTMLImageElement>(null);
  
  const handleDownload = async () => {
    try {
      // Fetch the file from a URL or API endpoint
      const response = await fetch(villa);
      const blob = await response.blob(); // Get the response as a Blob

      // Create a URL for the blob
      const fileUrl = window.URL.createObjectURL(blob);

      // Create a temporary anchor tag to trigger the download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'villa.pdf'); // Specify the file name
      document.body.appendChild(link);
      link.click(); // Simulate a click to start the download

      // Clean up the temporary link and revoke the object URL to free memory
      document.body.removeChild(link);
      window.URL.revokeObjectURL(fileUrl);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  useEffect(() => {
    const fixedLogo = fixedLogoRef.current;
    const heroSlot = heroSlotRef.current;
    
    const handleScroll = () => {
      const navSlot = document.getElementById('nav-logo');
      if (!fixedLogo || !heroSlot || !navSlot) return;

      const scrollY = window.scrollY;
      const maxScroll = 250; 
      const progress = Math.min(scrollY / maxScroll, 1);

      const heroRect = heroSlot.getBoundingClientRect();
      const navRect = navSlot.getBoundingClientRect();

      const currentTop = heroRect.top + (navRect.top - heroRect.top) * progress;
      const currentLeft = heroRect.left + (navRect.left - heroRect.left) * progress;
      const currentWidth = heroRect.width + (navRect.width - heroRect.width) * progress;
      const currentHeight = heroRect.height + (navRect.height - heroRect.height) * progress;

      fixedLogo.style.transform = `translate3d(${currentLeft}px, ${currentTop}px, 0)`;
      fixedLogo.style.width = `${currentWidth}px`;
      fixedLogo.style.height = `${currentHeight}px`;
      
      if (progress >= 1) {
        navSlot.style.opacity = '1';
        fixedLogo.style.opacity = '0';
      } else {
        navSlot.style.opacity = '0';
        fixedLogo.style.opacity = '1';
        fixedLogo.style.visibility = 'visible';
      }
    };

    handleScroll();

    // Use ResizeObserver to detect when images load or layout changes
    const resizeObserver = new ResizeObserver(() => handleScroll());
    if (heroSlot) resizeObserver.observe(heroSlot);
    
    const navSlot = document.getElementById('nav-logo');
    if (navSlot) resizeObserver.observe(navSlot);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    window.addEventListener('load', handleScroll);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-[95vh] sm:h-[80vh] min-h-[650px] flex justify-between items-center overflow-hidden pb-12 sm:pt-0">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={gate} alt="Entrance Gate" className="w-full image-crisp h-full object-cover" fetchPriority="high" decoding="async" />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/10 to-slate-900/10 pointer-events-none"></div>

      {/* The Animating Logo */}
      <img 
        ref={fixedLogoRef}
        src={logo} 
        alt="Aarambh Logo" 
        className="fixed top-0 left-0 z-[102] object-contain origin-top-left pointer-events-none transition-opacity duration-300 p-2 s"
        style={{ visibility: 'hidden', willChange: 'transform, width, height' }}
        fetchPriority="high"
      />

      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30">
        <FadeIn direction="down" forceRender={true} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium uppercase tracking-wider pointer-events-auto">
          <MapPin size={16} className="text-amber-400 shrink-0" />
          <a href="https://www.google.com/maps/dir/?api=1&destination=28.5859575,77.4898251" target="_blank" rel="noopener noreferrer" className="truncate hover:text-amber-400 transition-colors">Sukoon Villas, Greater Noida West</a>
        </FadeIn>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full gap-10 max-w-7xl mx-auto px-4 md:mt-10 sm:px-6 lg:px-8 lg:mt-10 flex flex-col items-center justify-center text-center h-full pointer-events-none">

        {/* Hero Slot Placeholder */}
        <div className="h-[160px] sm:h-[180px] mb-40 px-4 py-3 flex items-center justify-center">
          <img 
            ref={heroSlotRef}
            src={logo} 
            alt="Aarambh Logo Slot" 
            className="h-full w-auto opacity-0 pointer-events-none" 
          />
        </div>

        {/* Buttons */}
        <div className="absolute bottom-10 sm:bottom-4 w-full flex justify-center px-4 z-30 pointer-events-none">
          <FadeIn direction="up" delay={500} forceRender={true} className="project-btn flex flex-col sm:flex-row gap-3 w-full sm:w-auto max-w-2xl mx-auto pointer-events-auto">
            
            <button onClick={handleDownload} className="btn  download-brochure cursor-pointer flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 sm:px-8 text-sm sm:text-base font-semibold text-white bg-slate-900/90 border border-white/50 backdrop-blur-md rounded-lg hover:bg-black active:bg-black transition-all duration-300 w-full sm:w-auto animate-glow-white shadow-lg">
              <Download size={18} />
              Download Brochure
            </button>
            
            <button onClick={onOpenEnquiry} className="btn contact-sales-manager cursor-pointer flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3 sm:px-8 text-sm sm:text-base border border-white/50 backdrop-blur-mdfont-semibold text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-500 active:bg-amber-500 transition-colors duration-300 shadow-lg shadow-amber-400/20 w-full sm:w-auto animate-glow-amber">
              Book your Visit
              <ArrowRight size={18} />
            </button>
            
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;