import React from 'react';
import { Zap, Heart, MapPin, Users, Calendar, Wifi } from 'lucide-react';
import { Button } from '../ui/Button';

export const Features = () => {
  return (
    <section id="about" className="py-20 border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: Our Story */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">

          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-dark rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img
                src="/DMCzVCWzTmC/2025-07-13_09-58-25_UTC_5.jpg"
                className="relative w-full rounded-3xl border-2 border-black z-10"
                alt="Hideout Interior"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange border-2 border-black p-4 rounded-xl z-20 hidden md:block">
                <p className="font-display font-bold text-lg">"Best WFC Spot"</p>
                <div className="flex text-yellow-100 gap-1">★★★★★</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h4 className="font-bold text-brand-orange uppercase tracking-wider mb-2">Our Story</h4>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6 leading-tight">
              Your Hide Out. <br />Not just a cafe.
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We started with a simple idea: Balikpapan needs a place that feels like a getaway but fuels you like a powerhouse.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you're here to crush a deadline, recover from a 5K run, or just gossip with besties over a Berry Oww, we've got the space (and the drinks) for you. No stiff vibes, just good energy and real ingredients.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureItem
                icon={<Zap className="text-brand-orange" size={20} />}
                title="Cold Press Magic"
                desc="Raw & unpasteurized."
              />
              <FeatureItem
                icon={<Wifi className="text-brand-blue" size={20} />}
                title="Work Friendly"
                desc="Fast wifi & plenty plugs."
              />
              <FeatureItem
                icon={<Heart className="text-red-500" size={20} />}
                title="Community First"
                desc="Run clubs & events."
              />
              <FeatureItem
                icon={<MapPin className="text-green-600" size={20} />}
                title="Local Vibe"
                desc="Balikpapan pride."
              />
            </div>
          </div>
        </div>

        {/* Bottom: Community / Events Banner */}
        <div id="community" className="bg-brand-blue rounded-3xl border-2 border-black p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase mb-4">
                <Calendar size={14} />
                <span>Upcoming Event</span>
              </div>
              <h3 className="font-display font-extrabold text-3xl mb-4">Sunday Morning Run Club</h3>
              <p className="text-blue-100 text-lg max-w-xl">
                Join the Hideout community for a 5K easy pace run every Sunday.
                Start/Finish at Hideout BPN. Free electrolyte drink for all runners!
              </p>
            </div>
            <div className="text-left md:text-right">
              <Button variant="secondary" size="lg" className="w-full md:w-auto">
                Join the Club
              </Button>
              <p className="text-xs text-blue-200 mt-4 font-medium opacity-80">
                *Meet at 6:00 AM sharp. No registration fee.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-3 items-start bg-gray-50 p-3 rounded-xl border border-gray-200 hover:border-brand-blue transition-colors">
    <div className="w-8 h-8 shrink-0 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
      {icon}
    </div>
    <div>
      <h3 className="font-display font-bold text-sm text-brand-dark">{title}</h3>
      <p className="text-xs text-gray-500 leading-snug">{desc}</p>
    </div>
  </div>
);