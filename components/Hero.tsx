
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center overflow-hidden bg-navy">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1466611653911-954ffea5acc0?auto=format&fit=crop&q=80&w=1920" 
          alt="Clean Energy Infrastructure" 
          className="w-full h-full object-cover opacity-30"
          onError={(e) => {
             (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?auto=format&fit=crop&q=80&w=1920';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 text-white relative">
        <div className="max-w-3xl space-y-8">
          <div className="flex items-center gap-4 animate-fade-in">
            <div className="h-[2px] w-12 bg-solar" />
            <span className="text-solar font-black tracking-[0.3em] uppercase text-sm">Empowering a Carbon-Free Future</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
            LEADING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">ENERGY STORAGE</span> <br />
            SYSTEMS
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium">
            VULT-Energy provides high-performance ESS solutions for residential, commercial, and utility-scale projects globally.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-4">
            <a href="#products" className="bg-sky text-white px-8 md:px-10 py-4 md:py-5 rounded-sm text-base md:text-lg font-black hover:bg-white hover:text-navy transition-all transform hover:scale-105 shadow-xl inline-block uppercase tracking-widest text-center">
              Explore Products
            </a>
            <a href="#solutions" className="bg-transparent border-2 border-white text-white px-8 md:px-10 py-4 md:py-5 rounded-sm text-base md:text-lg font-black hover:bg-white hover:text-navy transition-all inline-block uppercase tracking-widest text-center">
              Global Partnership
            </a>
          </div>
        </div>
      </div>

      {/* Floating Industrial Badge */}
      <div className="absolute bottom-12 md:bottom-20 right-12 md:right-20 hidden lg:block animate-pulse duration-[3000ms]">
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl max-w-xs">
          <div className="text-solar text-4xl font-black mb-1">98.9%</div>
          <div className="text-white text-xs font-bold uppercase tracking-widest mb-3">Peak Efficiency</div>
          <p className="text-slate-300 text-sm leading-snug">Industrial-grade silicon carbide technology for superior thermal management.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
