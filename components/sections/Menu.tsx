import React, { useState } from 'react';
import { MENU_ITEMS, CATEGORIES } from '../../constants';
import { MenuItem, Category } from '../../types';
import { Plus } from 'lucide-react';

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-brand-cream border-t-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-lg mx-auto text-lg">
            From cold-pressed power boosters to comforting coffee and treats. 
            <br className="hidden md:block"/> Everything is made fresh daily.
          </p>
        </div>

        {/* Category Tabs - Scrollable on Mobile */}
        <div className="flex overflow-x-auto gap-3 pb-6 mb-8 no-scrollbar md:justify-center px-2 snap-x items-center">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                snap-start shrink-0 px-6 py-3 rounded-full font-display font-bold text-sm border-2 transition-all whitespace-nowrap
                ${activeCategory === cat 
                  ? 'bg-brand-blue text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-y-[-2px]' 
                  : 'bg-white text-brand-dark border-black hover:bg-gray-100'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        
        {/* Empty State */}
        {filteredItems.length === 0 && (
           <div className="text-center py-20 text-gray-500">
              <p>Items coming soon!</p>
           </div>
        )}

      </div>
    </section>
  );
};

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  // Badge Color Logic
  const getBadgeColor = (text: string) => {
      if (text.includes('Best')) return 'bg-brand-orange text-black';
      if (text.includes('Staff')) return 'bg-purple-400 text-white';
      if (text.includes('Signature')) return 'bg-brand-blue text-white';
      if (text.includes('Kids')) return 'bg-pink-400 text-white';
      return 'bg-brand-orange text-black';
  };

  return (
    <div className="group relative bg-white rounded-2xl border-2 border-black overflow-hidden flex flex-col h-full hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
      
      {/* Badge */}
      {item.badge && (
        <div className={`absolute top-3 left-3 z-10 text-xs font-bold px-3 py-1 rounded-full border border-black uppercase tracking-wide shadow-sm ${getBadgeColor(item.badge)}`}>
          {item.badge}
        </div>
      )}

      {/* Image */}
      <div className="relative h-64 sm:h-56 overflow-hidden bg-gray-100 border-b-2 border-black">
        <img 
          src={item.image} 
          alt={item.name} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay for "Add" on desktop could go here, but keeping it simple for mobile */}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-display font-bold text-xl text-brand-dark leading-tight">{item.name}</h3>
          <span className="font-display font-bold text-brand-blue text-lg whitespace-nowrap">{item.price}</span>
        </div>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-3 flex-grow">{item.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {item.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-md uppercase border border-gray-200">
              {tag}
            </span>
          ))}
        </div>

        <button 
            className="w-full py-3 rounded-xl border-2 border-brand-dark font-bold text-sm bg-white hover:bg-brand-dark hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none"
            onClick={() => window.open(`https://wa.me/6281234567890?text=I'd like to order ${item.name}`, '_blank')}
        >
          Order Now <Plus size={16} />
        </button>
      </div>
    </div>
  );
};