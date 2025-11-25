import React from 'react';
import { Gem } from 'lucide-react';
import { HERO_TEXT } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-gold/10 blur-3xl"></div>
        {/* User Image: Hand reaching nature (Image 6) */}
        <img 
          src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=2000" 
          alt="Hand reaching nature" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Logo Replacement */}
        <div className="mb-12 animate-fade-in-down">
           <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-5xl md:text-7xl font-light text-brand-gold tracking-widest">YO</span>
              <Gem className="w-12 h-12 md:w-16 md:h-16 text-brand-gold" strokeWidth={1} />
              <span className="text-5xl md:text-7xl font-light text-brand-gold tracking-widest">ENERGY</span>
           </div>
        </div>

        {/* Replaced 'main' text with nothing as requested, only showing the correct title below */}
        <h1 className="text-3xl md:text-5xl font-bold mb-8 gold-gradient-text max-w-4xl mx-auto leading-tight">
          {HERO_TEXT.sub}
        </h1>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {HERO_TEXT.bullets.map((bullet, idx) => (
            <p key={idx} className="text-lg md:text-xl text-brand-cream/90 font-light border-l-2 border-brand-gold pl-4 text-left">
              {bullet}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
