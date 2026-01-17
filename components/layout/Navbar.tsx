import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag, MapPin, Coffee, Home } from 'lucide-react';
import { Button } from '../ui/Button';
import { STORE_INFO, BRAND } from '../../constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Active Section Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-70px 0px 0px 0px' } // Adjust rootMargin for sticky header
    );

    const sections = ['home', 'menu', 'about', 'location', 'community'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (id === 'home') { // Fallback for home if ID missing
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Menu', id: 'menu' },
    { name: 'About', id: 'about' },
    { name: 'Location', id: 'location' },
    { name: 'Community', id: 'community' },
  ];

  return (
    <>
      {/* Desktop & Mobile Header */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-brand-cream/90 backdrop-blur-md border-b-2 border-black py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">

          {/* Logo Area */}
          <div className="flex items-center gap-2 relative z-50">
            <a href="#home" className="flex items-center gap-2 group" onClick={(e) => handleLinkClick(e, 'home')}>
              <div className="w-10 h-10 bg-brand-blue rounded-full border-2 border-black flex items-center justify-center text-white relative overflow-hidden group-hover:rotate-12 transition-transform">
                {/* Mascot Abstract Face */}
                <div className="w-2 h-2 bg-white rounded-full absolute top-3 left-2.5"></div>
                <div className="w-2 h-2 bg-white rounded-full absolute top-3 right-2.5"></div>
                <div className="w-4 h-2 bg-transparent border-b-2 border-white absolute bottom-3 rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none uppercase tracking-tight">{BRAND.name}</span>
                <span className="text-xs font-bold text-brand-blue leading-none tracking-widest">BALIKPAPAN</span>
              </div>
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`transition-colors relative ${activeSection === link.id ? 'text-brand-blue font-bold after:content-[""] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-brand-blue' : 'hover:text-brand-blue'}`}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(STORE_INFO.whatsappUrl, '_blank')}
            >
              Order Pickup
            </Button>
          </div>

          {/* Mobile Menu Toggle (Top Right) */}
          <div className="md:hidden relative z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-brand-orange border-2 border-black flex items-center justify-center text-brand-dark hover:bg-white transition-colors active:scale-95"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-brand-cream flex flex-col items-center justify-center transition-all duration-300 transform ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col items-center gap-8 text-2xl font-display font-bold text-brand-dark">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className={`hover:text-brand-blue hover:scale-110 transition-transform ${activeSection === 'home' ? 'text-brand-blue' : ''}`}>Home</a>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`hover:text-brand-blue hover:scale-110 transition-transform ${activeSection === link.id ? 'text-brand-blue' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                window.open(STORE_INFO.whatsappUrl, '_blank');
                setIsMobileMenuOpen(false);
              }}
            >
              Order Pickup
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Sticky Bar - Hides when mobile menu is open to prevent visual clutter */}
      <div className={`md:hidden fixed bottom-6 left-4 right-4 z-50 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-[200%]' : 'translate-y-0'}`}>
        <div className="bg-brand-dark text-white rounded-2xl shadow-xl border-2 border-white/20 p-2 flex justify-between items-center backdrop-blur-lg bg-opacity-95">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`flex-1 flex flex-col items-center justify-center py-2 active:scale-90 transition-transform ${activeSection === 'home' ? 'text-brand-orange' : ''}`}
          >
            <Home size={20} className={activeSection === 'home' ? 'text-brand-orange' : 'text-gray-400'} />
            <span className={`text-[10px] font-bold mt-1 uppercase ${activeSection === 'home' ? 'text-white' : 'text-gray-400'}`}>Home</span>
          </a>

          <a
            href="#menu"
            onClick={(e) => handleLinkClick(e, 'menu')}
            className={`flex-1 flex flex-col items-center justify-center py-2 active:scale-90 transition-transform ${activeSection === 'menu' ? 'text-brand-orange' : ''}`}
          >
            <Coffee size={20} className={activeSection === 'menu' ? 'text-brand-orange' : 'text-gray-400'} />
            <span className={`text-[10px] font-bold mt-1 uppercase ${activeSection === 'menu' ? 'text-white' : 'text-gray-400'}`}>Menu</span>
          </a>

          <a
            href={STORE_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-[2] -mt-8 mx-2"
          >
            <div className="bg-brand-blue h-16 rounded-2xl flex flex-col items-center justify-center border-4 border-brand-cream shadow-lg active:scale-95 transition-transform animate-[bounce_3s_infinite]">
              <ShoppingBag size={24} className="text-white" />
              <span className="text-xs font-bold text-white mt-1 uppercase">Order Now</span>
            </div>
          </a>

          <a
            href="#location"
            onClick={(e) => handleLinkClick(e, 'location')}
            className={`flex-1 flex flex-col items-center justify-center py-2 active:scale-90 transition-transform ${activeSection === 'location' ? 'text-brand-orange' : ''}`}
          >
            <MapPin size={20} className={activeSection === 'location' ? 'text-brand-orange' : 'text-gray-400'} />
            <span className={`text-[10px] font-bold mt-1 uppercase ${activeSection === 'location' ? 'text-white' : 'text-gray-400'}`}>Go There</span>
          </a>
        </div>
      </div>
    </>
  );
};