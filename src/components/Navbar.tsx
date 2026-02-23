import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Amenities', href: '#amenities' },
    { name: '3D Tour', href: '#3d-tour' },
    { name: 'Specifications', href: '#specifications' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full ${isOpen ? 'z-[105] h-full' : 'z-[100]'} transition-all duration-300 ease-in-out ${
        isOpen 
          ? `bg-slate-900 ${isScrolled ? 'py-2' : 'py-2'}`
          : isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div onClick={(e) => handleScroll(e, '#')}  className="flex items-center gap-2 cursor-pointer">
            <div>
              <h1 id='#' className="text-xl font-bold text-white tracking-wide leading-none">
                <div className="h-14 sm:h-20 flex items-center">
                  <img
                    id="nav-logo" 
                    src={logo} 
                    alt="Logo" 
                    className={`h-full w-auto transition-opacity duration-100 ${isOpen ? '!opacity-100' : ''}`}
                  />
                </div>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-lg font-medium text-gray-200 hover:text-amber-400 active:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+919910815516" 
              className="hidden text-slate-900 btn download-brochure cursor-pointer sm:flex items-center justify-start gap-2 px-4 py-2 sm:px-6 sm:py-2.5 text-sm font-semibold bg-amber-400 border border-white/50 backdrop-blur-md rounded-lg hover:shadow-amber-400/20 hover:bg-amber-500 hover:shadow-lg active:bg-amber-500 active:shadow-lg transition-all duration-300 animate-glow-white shadow-lg "
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call Now</span>
            </a>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-200 hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`md:hidden absolute w-full bg-slate-900 border-t border-slate-800 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-amber-400 hover:bg-slate-800 active:text-amber-400 active:bg-slate-800 rounded-md transition-colors"
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="tel:+919910815516" 
              className="text-slate-900 btn download-brochure cursor-pointer flex items-center justify-start gap-2 px-4 py-2 sm:px-6 sm:py-2.5 text-sm font-semibold bg-amber-400 border border-white/50 backdrop-blur-md rounded-lg hover:shadow-amber-400/20 hover:bg-amber-500 hover:shadow-lg active:bg-amber-500 active:shadow-lg transition-all duration-300 animate-glow-white shadow-lg"
            >
              <Phone size={16} />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call Now</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;