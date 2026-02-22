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
        element.scrollIntoView({ behavior: 'smooth' });
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
          ? `bg-slate-900 ${isScrolled ? 'py-3' : 'py-3'}`
          : isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-3'
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
                    className="text-sm font-medium text-gray-200 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <a 
              href="tel:+919910815516" 
              className="hidden lg:flex items-center gap-2 bg-amber-400 text-slate-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

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
                className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-amber-400 hover:bg-slate-800 rounded-md transition-colors"
                onClick={(e) => handleScroll(e, link.href)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="tel:+919910815516"
              className="flex items-center gap-2 px-3 py-3  text-base font-medium text-slate-900 bg-amber-400 hover:bg-amber-500 rounded-lg transition-colors mt-2"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={18} />
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;