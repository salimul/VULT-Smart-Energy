
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import EnergyCalculator from './components/EnergyCalculator';
import Footer from './components/Footer';

const PartnerLogo = ({ type }: { type: number }) => {
  const logos = [
    <svg viewBox="0 0 120 40" className="w-32 h-10 fill-white opacity-40 hover:opacity-100 transition-opacity">
      <path d="M10 10 H30 V30 H10 Z M40 10 H110 V15 H40 Z M40 25 H90 V30 H40 Z" />
    </svg>,
    <svg viewBox="0 0 120 40" className="w-32 h-10 fill-white opacity-40 hover:opacity-100 transition-opacity">
      <circle cx="20" cy="20" r="10" />
      <path d="M40 10 H110 V15 H40 Z M40 25 H100 V30 H40 Z" />
    </svg>,
    <svg viewBox="0 0 120 40" className="w-32 h-10 fill-white opacity-40 hover:opacity-100 transition-opacity">
      <path d="M10 10 L30 20 L10 30 Z M40 15 H110 V25 H40 Z" />
    </svg>,
    <svg viewBox="0 0 120 40" className="w-32 h-10 fill-white opacity-40 hover:opacity-100 transition-opacity">
      <rect x="10" y="10" width="20" height="20" rx="10" />
      <path d="M40 10 H110 V15 H40 Z M40 25 H110 V30 H40 Z" />
    </svg>
  ];
  return logos[type % logos.length];
};

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Global Applications Section */}
        <section className="py-32 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-sky font-black uppercase tracking-[0.3em] text-sm">Industrial Expertise</h2>
                <h3 className="text-5xl font-black text-navy leading-none">Global Reach, <br /> Local Reliability.</h3>
                <p className="text-xl text-slate-700 font-medium leading-relaxed">
                  From peak shaving in metropolitan high-rises to grid balancing in industrial parks, VULT ESS technology is deployed across 45+ countries.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="space-y-2">
                    <div className="text-4xl font-black text-navy">12GW+</div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Global Shipment</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-black text-navy">500+</div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Utility Projects</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-10 bg-sky/5 rounded-full blur-[100px]" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group bg-white border-4 border-white">
                  {/* Updated with a high-quality lifestyle image representing the VULT Smart Node in a modern interior */}
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                    alt="VULT Smart Energy Deployment" 
                    className="w-full h-auto transition-all duration-700 scale-105 group-hover:scale-100 object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent group-hover:from-transparent transition-all duration-500" />
                  
                  {/* Floating Overlay Badge for Context */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-white/20">
                    <div className="text-[10px] font-black uppercase tracking-widest text-sky mb-1">Featured Install</div>
                    <div className="text-navy font-bold text-sm">Corporate Smart Grid Node</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductGrid />
        
        {/* Partnership / OEM Section */}
        <section className="py-32 bg-navy text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="gridLarge" width="100" height="100" patternUnits="userSpaceOnUse">
                   <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#gridLarge)" />
             </svg>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 text-center space-y-12 relative z-10">
            <h3 className="text-4xl md:text-6xl font-black tracking-tight">OEM & ODM Partnership</h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium">
              We provide full-service energy hardware manufacturing for global brands. Our Tier-1 production lines ensure the highest safety standards and compliance.
            </p>
            <div className="flex justify-center flex-wrap gap-12 lg:gap-20 py-10">
               {[0, 1, 2, 3].map(i => (
                 <PartnerLogo key={i} type={i} />
               ))}
            </div>
          </div>
        </section>

        <EnergyCalculator />
        
        {/* Solution Section (Contact focus) */}
        <section id="solutions" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-50 border border-slate-200 p-12 md:p-24 grid lg:grid-cols-2 gap-20 items-center rounded-[3rem]">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-black text-navy leading-tight">Start Your Project <br /> With VULT</h2>
                <p className="text-lg text-slate-600 font-medium">
                  Whether you are an installer, distributor, or project developer, our technical team is ready to assist with your energy storage system configuration.
                </p>
                <ul className="space-y-5">
                   {['Project Consultation', 'Technical Support', 'Bulk Supply Quotes', 'Partner Training'].map(item => (
                     <li key={item} className="flex items-center gap-4 text-navy font-black text-xs uppercase tracking-widest">
                       <div className="bg-sky/10 p-2 rounded-full">
                        <svg className="w-4 h-4 text-sky" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                       </div>
                       {item}
                     </li>
                   ))}
                </ul>
              </div>
              <div className="bg-white p-12 shadow-2xl border border-slate-100 rounded-[2rem]">
                <h4 className="text-2xl font-black text-navy mb-8">Quick Inquiry</h4>
                <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-5">
                    <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-sky font-bold rounded-xl transition-colors" />
                    <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-sky font-bold rounded-xl transition-colors" />
                  </div>
                  <select className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-sky font-bold rounded-xl transition-colors">
                    <option>Product Interest...</option>
                    <option>Residential ESS</option>
                    <option>C&I Storage</option>
                    <option>Utility Scale</option>
                    <option>Smart Inverters</option>
                  </select>
                  <textarea placeholder="Tell us about your project" rows={4} className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-sky font-bold rounded-xl transition-colors"></textarea>
                  <button className="w-full bg-navy text-white py-6 rounded-xl font-black uppercase tracking-widest hover:bg-sky hover:-translate-y-1 active:scale-95 transition-all shadow-xl shadow-navy/20">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
