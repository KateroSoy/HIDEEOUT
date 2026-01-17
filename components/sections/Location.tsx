import React from 'react';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { STORE_INFO } from '../../constants';
import { Button } from '../ui/Button';

export const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-brand-blue text-white border-t-2 border-black relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-8">Find Us</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <MapPin size={32} className="text-brand-orange mt-1" />
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2">The Hideout</h3>
                  <p className="text-xl text-blue-100 font-medium max-w-xs">{STORE_INFO.address}</p>
                  <p className="text-sm text-blue-200 mt-2">Near Gn. Bahagia, look for the big blue sign!</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <Clock size={32} className="text-brand-orange mt-1" />
                <div>
                  <h3 className="font-display font-bold text-2xl mb-2">Open Hours</h3>
                  <ul className="text-xl text-blue-100 font-medium space-y-1">
                    <li className="flex justify-between w-64 border-b border-blue-500/30 pb-1">
                      <span>Mon-Thu</span>
                      <span>10:00 - 22:30</span>
                    </li>
                    <li className="flex justify-between w-64 border-b border-blue-500/30 pb-1">
                      <span>Fri-Sun</span>
                      <span>10:00 - 23:00</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                 <Button 
                   variant="secondary" 
                   size="lg"
                   onClick={() => window.open(STORE_INFO.googleMapsUrl, '_blank')}
                 >
                   Get Directions <ArrowUpRight className="ml-2" />
                 </Button>
              </div>
            </div>
          </div>

          {/* Map Visual / Placeholder */}
          <div className="w-full h-80 md:h-[500px] bg-brand-cream rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] overflow-hidden relative group">
             {/* Simulating a map view */}
             <div className="absolute inset-0 bg-gray-200">
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-brand-blue/20 rounded-full animate-ping absolute"></div>
                  <MapPin size={48} className="text-brand-blue relative z-10 drop-shadow-xl" fill="currentColor" />
               </div>
               <img 
                src="https://picsum.photos/800/600?grayscale" 
                className="w-full h-full object-cover opacity-50 mix-blend-multiply"
                alt="Map Background"
               />
             </div>
             <div className="absolute bottom-0 left-0 right-0 bg-white p-6 border-t-2 border-black transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand-dark font-bold text-center">Tap to open in Google Maps</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};