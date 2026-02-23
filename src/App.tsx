import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Property from '@/components/Property';
import Footer from '@/components/Footer';
import EnquiryModal from '@/components/EnquiryModal';
import { Phone } from 'lucide-react';
import "./index.css";

function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past roughly the Hero section (80% of viewport height)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowFloatingBtn(true);
      } else {
        setShowFloatingBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Hero onOpenEnquiry={() => setIsEnquiryOpen(true)} />

      <Property onOpenEnquiry={() => setIsEnquiryOpen(true)} />
      <Footer/>
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
      />

      {/* Floating Enquiry Button */}
      <button
        onClick={() => setIsEnquiryOpen(true)}
        className={`animate-glow-white shadow-lg fixed bottom-6 right-6 z-40 flex items-center justify-center bg-amber-400 text-slate-900 shadow-2xl hover:bg-amber-500 hover:scale-105 active:bg-amber-500 active:scale-105 transition-all duration-300 ${
          showFloatingBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        } rounded-full w-14 h-14 sm:w-auto sm:h-auto sm:px-6 sm:py-3`}
        aria-label="Enquire Now"
      >
        <Phone size={24} />
        <span className="hidden sm:inline-block ml-2 font-bold text-sm uppercase tracking-wide">Enquire Now</span>
      </button>
    </>
  );
}

export default App;