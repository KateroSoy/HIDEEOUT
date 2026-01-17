import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '../ui/Button';
import { STORE_INFO } from '../../constants';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-20 overflow-hidden bg-brand-cream">

      {/* Marquee Banner */}
      <div className="bg-brand-blue text-white py-2 border-y-2 border-black rotate-1 scale-105 absolute top-24 left-0 right-0 z-10 shadow-lg pointer-events-none">
        <div className="animate-marquee whitespace-nowrap font-display font-bold text-sm tracking-widest uppercase flex gap-8">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span>Fresh. Honest. Functional.</span>
              <span className="text-brand-orange">✦</span>
              <span>Made to Please</span>
              <span className="text-brand-orange">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="relative z-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/20 text-brand-orange border border-brand-orange rounded-full text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
            <Star size={12} fill="currentColor" />
            <span>Ready to serve</span>
          </div>

          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.1] mb-6 text-brand-dark">
            Drink Happy. <br />
            <span className="text-brand-blue relative inline-block">
              Stay Healthy.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-orange z-[-1]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
            Your daily hideout for cold press juice, coffee, and good vibes in Balikpapan. Real ingredients, real character.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              onClick={() => window.open(STORE_INFO.whatsappUrl, '_blank')}
            >
              Order Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Menu
            </Button>
          </div>
        </div>

        {/* Image Collage Visual */}
        <div className="relative z-10 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Abstract Background Shapes */}
            <div className="absolute top-10 right-10 w-2/3 h-2/3 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-2/3 h-2/3 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>

            {/* Collage Grid */}
            <div className="grid grid-cols-2 gap-4 h-full w-full rotate-3 hover:rotate-0 transition-all duration-700 ease-out">
              <div className="space-y-4 pt-8">
                <div className="relative overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white aspect-[3/4]">
                  <img src="/DMR_MnBTCA6/2025-07-19_07-30-44_UTC_10.jpg" className="w-full h-full object-cover" alt="Juice" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white aspect-square">
                  <img src="/DMCzVCWzTmC/2025-07-13_09-58-25_UTC_4.jpg" className="w-full h-full object-cover" alt="Coffee" />
                </div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white aspect-[4/3]">
                  <img src="/DM7V4lozp8W/2025-08-04_08-57-51_UTC_4.jpg" className="w-full h-full object-cover" alt="Vibe" />
                </div>
              </div>
            </div>

            {/* Floating Sticker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black p-3 rounded-full shadow-lg rotate-12 z-20">
              <div className="bg-brand-blue text-white w-20 h-20 rounded-full flex items-center justify-center font-display font-bold text-center leading-tight text-sm border-2 border-dashed border-white">
                Open<br />Daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};