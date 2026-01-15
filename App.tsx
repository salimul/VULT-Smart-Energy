
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import EnergyCalculator from './components/EnergyCalculator';
import Footer from './components/Footer';

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
                <img 
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?auto=format&fit=crop&q=80&w=1200" 
                  alt="Global Deployment" 
                  className="relative rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        <ProductGrid />
        
        {/* Partnership / OEM Section */}
        <section className="py-24 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
            <h3 className="text-4xl md:text-6xl font-black tracking-tight">OEM & ODM Partnership</h3>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto font-medium">
              We provide full-service energy hardware manufacturing for global brands. Our Tier-1 production lines ensure the highest safety standards.
            </p>
            <div className="flex justify-center flex-wrap gap-8 py-10 opacity-50 grayscale invert">
               {/* Placeholders for partner logos */}
               {['LOGO 1', 'LOGO 2', 'LOGO 3', 'LOGO 4', 'LOGO 5'].map(l => (
                 <div key={l} className="text-2xl font-black border-2 border-white px-6 py-2">{l}</div>
               ))}
            </div>
          </div>
        </section>

        <EnergyCalculator />
        
        {/* Solution Section (Contact focus) */}
        <section id="solutions" className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-50 border border-slate-200 p-16 md:p-24 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-black text-navy">Start Your Project With VULT</h2>
                <p className="text-lg text-slate-600 font-medium">
                  Whether you are an installer, distributor, or project developer, our technical team is ready to assist with your energy storage configuration.
                </p>
                <ul className="space-y-4">
                   {['Project Consultation', 'Technical Support', 'Bulk Supply Quotes', 'Partner Training'].map(item => (
                     <li key={item} className="flex items-center gap-4 text-navy font-black text-sm uppercase tracking-widest">
                       <svg className="w-5 h-5 text-sky" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                       {item}
                     </li>
                   ))}
                </ul>
              </div>
              <div className="bg-white p-10 shadow-2xl border border-slate-100">
                <h4 className="text-2xl font-black text-navy mb-8">Quick Inquiry</h4>
                <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                  <input type="text" placeholder="Full Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:border-sky font-bold" />
                  <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:border-sky font-bold" />
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:border-sky font-bold">
                    <option>Interested in...</option>
                    <option>Residential ESS</option>
                    <option>C&I Storage</option>
                    <option>Utility Scale</option>
                    <option>Smart Inverters</option>
                  </select>
                  <textarea placeholder="Tell us about your project" rows={4} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 focus:outline-none focus:border-sky font-bold"></textarea>
                  <button className="w-full bg-navy text-white py-5 font-black uppercase tracking-widest hover:bg-sky transition-colors">Submit Inquiry</button>
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
