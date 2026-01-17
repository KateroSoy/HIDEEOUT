import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { MenuSection } from './components/sections/Menu';
import { Features } from './components/sections/Features';
import { LocationSection } from './components/sections/Location';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MenuSection />
        <Features />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;