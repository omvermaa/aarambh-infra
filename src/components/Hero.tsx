import React, { useEffect, useRef } from 'react';
import { MapPin, ArrowRight, Download } from 'lucide-react';
import logo from "@/assets/logo.png";
import gate from "@/assets/gate.png";
import brochure from "@/assets/brochure.pdf";


interface HeroProps {
  onOpenEnquiry: () => void;
}




const Hero: React.FC<HeroProps> = ({onOpenEnquiry}) => {
  const fixedLogoRef = useRef<HTMLImageElement>(null);
  const heroSlotRef = useRef<HTMLImageElement>(null);
  
  const handleDownload = async () => {
    try {
      // Fetch the file from a URL or API endpoint
      const response = await fetch(brochure);
      const blob = await response.blob(); // Get the response as a Blob

      // Create a URL for the blob
      const fileUrl = window.URL.createObjectURL(blob);

      // Create a temporary anchor tag to trigger the download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'Sukoon-Villas-Brochure.pdf'); // Specify the file name
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
    <section className="relative w-full h-[90vh] min-h-[650px] flex justify-between items-center overflow-hidden pb-12 sm:pt-0">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={gate} alt="Entrance Gate" className="w-full image-crisp h-full object-cover" fetchPriority="high" decoding="async" />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/20 to-slate-900/20 pointer-events-none"></div>

      {/* The Animating Logo */}
      <img 
        ref={fixedLogoRef}
        src={logo} 
        alt="Aarambh Logo" 
        className="fixed top-0 left-0 z-[102] object-contain origin-top-left pointer-events-none transition-opacity duration-300"
        style={{ visibility: 'hidden', willChange: 'transform, width, height' }}
      />

      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-30 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium uppercase tracking-wider pointer-events-auto">
        <MapPin size={16} className="text-amber-400 shrink-0" />
        <a href="https://www.google.com/maps/dir/?api=1&destination=28.5859575,77.4898251" target="_blank" rel="noopener noreferrer" className="truncate hover:text-amber-400 transition-colors">Sukoon Villas, Greater Noida West</a>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full gap-10 max-w-7xl mx-auto px-4 md:mt-10 sm:px-6 lg:px-8 lg:mt-10 flex flex-col items-center justify-center text-center h-full pointer-events-none">

        {/* Hero Slot Placeholder */}
        <div className="h-[120px] sm:h-[180px] mb-40 px-4 py-3 flex items-center justify-center">
          <img 
            ref={heroSlotRef}
            src={logo} 
            alt="Aarambh Logo Slot" 
            className="h-full w-auto opacity-0 pointer-events-none" 
          />
        </div>

        {/* Buttons */}
        <div className="flex px-5 absolute bottom-0 flex-col sm:mt-20 sm:flex-row gap-4 w-full sm:w-auto pointer-events-auto">
          <button onClick={onOpenEnquiry} className="cursor-pointer flex items-center justify-center gap-2 px-6 py-4 w- sm:px-8 text-base font-semibold text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-500 transition-colors duration-300 shadow-lg shadow-amber-400/20 w-full sm:w-auto">
            
            Schedule a Visit
            <ArrowRight size={20} />
          </button>
          
          <button onClick={handleDownload} className="cursor-pointer flex items-center justify-center gap-2 px-6 py-4 sm:px-8 text-base font-semibold text-white bg-white/10 border border-white/30 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto">
            <Download size={20} />
            Download Brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;