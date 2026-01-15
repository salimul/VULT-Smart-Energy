
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 pt-24 md:pt-32 lg:pt-0">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white hidden lg:block z-0" />
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0B1D35" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Content Column */}
        <div className="lg:col-span-7 space-y-8 lg:py-24">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-[#E37B2F]" />
            <span className="text-[#E37B2F] font-black tracking-[0.3em] uppercase text-xs">Innovation in Storage</span>
          </div>
          
          <h1 className="text-5xl md:text-[5.5rem] font-extrabold leading-[1.1] tracking-tight text-[#0B1D35]">
            INTELLIGENT <br />
            <span className="text-[#0056B3]">ENERGY STORAGE</span> <br />
            SIMPLIFIED.
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-600 max-w-xl leading-relaxed font-medium">
            Meet the <span className="text-[#0B1D35] font-bold">VULT Smart Node</span>. A high-performance ESS solution designed for modern interiors and global infrastructure.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-4">
            <a href="#products" className="bg-[#0B1D35] text-white px-10 py-5 rounded-lg text-lg font-black hover:bg-[#0056B3] hover:-translate-y-1 active:scale-95 transition-all shadow-xl inline-block uppercase tracking-widest text-center">
              Explore Products
            </a>
            <a href="#solutions" className="bg-white border-2 border-slate-200 text-[#0B1D35] px-10 py-5 rounded-lg text-lg font-black hover:border-[#0B1D35] hover:-translate-y-1 active:scale-95 transition-all inline-block uppercase tracking-widest text-center">
              Global Supply
            </a>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-slate-200">
             <div className="flex flex-col">
                <span className="text-2xl font-black text-[#0B1D35]">98.9%</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Peak Efficiency</span>
             </div>
             <div className="h-10 w-[1px] bg-slate-200" />
             <div className="flex flex-col">
                <span className="text-2xl font-black text-[#0B1D35]">10 Yrs</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Warranty</span>
             </div>
             <div className="h-10 w-[1px] bg-slate-200" />
             <div className="flex flex-col">
                <span className="text-2xl font-black text-[#0B1D35]">Tier-1</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Manufactured</span>
             </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="lg:col-span-5 relative group py-12 lg:py-0">
          <div className="absolute -inset-4 bg-[#0056B3]/5 rounded-[3rem] blur-3xl group-hover:bg-[#0056B3]/10 transition-all duration-700" />
          
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-4 border-white transition-transform duration-700 group-hover:scale-[1.02] bg-slate-200 aspect-[4/5] sm:aspect-auto">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" 
              alt="VULT Smart Energy Node" 
              className="w-full h-full object-cover block"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 animate-bounce duration-[4000ms] hidden sm:block">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest text-[#0B1D35]">System Active</span>
            </div>
            <div className="text-2xl font-black text-[#0B1D35] mt-1">4.2 kW</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Current Solar Generation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
