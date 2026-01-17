import React from 'react';
import { Instagram, MapPin, Clock } from 'lucide-react';
import { BRAND, STORE_INFO } from '../../constants';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-12 pb-28 md:pb-12 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="font-display font-bold text-3xl mb-4">{BRAND.name}</h2>
          <p className="text-gray-400 mb-6 max-w-xs">{BRAND.tagline}</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-blue transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-display font-bold text-xl mb-4 text-brand-orange">Visit Us</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-3">
              <MapPin className="shrink-0 text-brand-blue" size={20} />
              <span>{STORE_INFO.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock className="shrink-0 text-brand-blue" size={20} />
              <div>
                <p>{STORE_INFO.hours.weekdays}</p>
                <p>{STORE_INFO.hours.weekends}</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
           <h3 className="font-display font-bold text-xl mb-4 text-brand-orange">Quick Links</h3>
           <ul className="space-y-2 text-sm text-gray-300 font-medium">
             <li><a href="#menu" className="hover:text-white">Menu</a></li>
             <li><a href="#about" className="hover:text-white">Our Story</a></li>
             <li><a href="#community" className="hover:text-white">Events & Run Club</a></li>
             <li><a href={STORE_INFO.whatsappUrl} className="hover:text-white">Contact Support</a></li>
           </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {BRAND.name}. Made to please.
      </div>
    </footer>
  );
};