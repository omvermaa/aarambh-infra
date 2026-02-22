import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Branding, Links, and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              
              <div>
                <img 
                    id="footer-logo" 
                    src={logo} 
                    alt="Logo" 
                    className="h-full w-auto transition-opacity duration-100"
                  />
                <span className="text-xs text-amber-400 font-medium tracking-widest uppercase">
                  The Luxurious Villas
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Experience elevated living where modern architecture meets timeless elegance. Premium 3 & 4 BHK modern villas crafted for every generation.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-sm hover:text-amber-400 transition-colors">About Project</a></li>
              <li><a href="#amenities" className="text-sm hover:text-amber-400 transition-colors">Amenities & Specs</a></li>
              <li><a href="#floor-plans" className="text-sm hover:text-amber-400 transition-colors">Floor Plans</a></li>
              <li><a href="#location" className="text-sm hover:text-amber-400 transition-colors">Location Map</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-amber-400 shrink-0 mt-1" size={20} />
                <span className="text-sm text-gray-400">
                  <strong className="text-white block mb-1">Site Office:</strong> 
                  Office number 805, Ufairia Mall, Ek Murti, Noida Extension 
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-400 shrink-0" size={20} />
                <span className="text-sm hover:text-white cursor-pointer transition-colors">+91 00000 00000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-400 shrink-0" size={20} />
                <span className="text-sm hover:text-white cursor-pointer transition-colors">info@aarambhinfra.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Credits and Disclaimer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          
          <div className="space-y-1 text-center md:text-left">
            <p>
              Developed by: <span className="text-gray-300 font-semibold">Aarambh Infrastructure, Bhoodhan Developers</span> 
            </p>
          </div>

          <div className="text-center md:text-right max-w-md">
            <p>
              Disclaimer: All images and visuals in brochure are for representational purposes only. Actual specifications, design, and features may vary. 
            </p>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} Aarambh Infrastructure. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;