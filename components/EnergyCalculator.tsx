
import React, { useState, useMemo } from 'react';

const EnergyCalculator: React.FC = () => {
  const [bill, setBill] = useState(250);
  const [sunlight, setSunlight] = useState(5);
  const [batterySize, setBatterySize] = useState(10);

  const stats = useMemo(() => {
    // Realistic supply-side calculation model
    const annualSpend = bill * 12;
    const efficiencyFactor = 0.985;
    const solarCoverage = Math.min(0.9, (sunlight * 0.15));
    const annualSavings = annualSpend * solarCoverage * efficiencyFactor;
    const co2Saved = (annualSavings * 0.45).toFixed(1);
    
    return {
      annual: annualSavings.toLocaleString(undefined, { maximumFractionDigits: 0 }),
      lifetime: (annualSavings * 25).toLocaleString(undefined, { maximumFractionDigits: 0 }),
      co2: co2Saved
    };
  }, [bill, sunlight]);

  return (
    <section id="calculator" className="py-32 bg-navy relative overflow-hidden">
      {/* Visual background patterns */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-6xl font-black text-white leading-tight tracking-tighter">
              The Power of <br />
              <span className="text-solar underline decoration-sky-500 decoration-8 underline-offset-8">VULT Efficiency</span>
            </h2>
            <p className="text-white text-xl font-bold max-w-lg leading-relaxed opacity-90">
              Our precision-engineered hardware reduces grid dependence by up to 90%. Use our industrial model to estimate your savings.
            </p>
          </div>
          
          <div className="space-y-10 bg-white/5 p-12 rounded-[3rem] border-2 border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="space-y-4">
              <div className="flex justify-between text-white font-black text-lg">
                <label>Monthly Energy Expenditure</label>
                <span className="text-solar text-2xl">${bill}</span>
              </div>
              <input 
                type="range" 
                min="50" max="2000" step="50"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer accent-solar"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-white font-black text-lg">
                <label>Daily Sunlight Exposure</label>
                <span className="text-sky-400 text-2xl">{sunlight} hrs</span>
              </div>
              <input 
                type="range" 
                min="2" max="10" step="0.5"
                value={sunlight}
                onChange={(e) => setSunlight(Number(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer accent-sky-400"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-white font-black text-lg">
                <label>VULT Li-Core Storage</label>
                <span className="text-white text-2xl">{batterySize} kWh</span>
              </div>
              <input 
                type="range" 
                min="5" max="100" step="5"
                value={batterySize}
                onChange={(e) => setBatterySize(Number(e.target.value))}
                className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[4rem] p-16 shadow-[0_50px_100px_-12px_rgba(0,0,0,0.5)] relative">
          <div className="absolute -top-10 -right-10 bg-solar text-navy p-6 rounded-3xl font-black text-2xl rotate-6 shadow-2xl border-4 border-white">
            VULT-TECH™
          </div>
          
          <div className="space-y-12">
            <h4 className="text-navy font-black text-2xl uppercase tracking-widest text-center border-b-4 border-slate-100 pb-6">
              Projection Report
            </h4>
            
            <div className="grid gap-8">
              <div className="p-8 bg-slate-50 rounded-3xl border-2 border-slate-100">
                <div className="text-slate-900 text-sm font-black uppercase tracking-widest mb-2 opacity-60">Estimated Annual Saving</div>
                <div className="text-6xl font-black text-navy tracking-tighter">${stats.annual}</div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-slate-50 rounded-3xl border-2 border-slate-100">
                  <div className="text-slate-900 text-xs font-black uppercase tracking-widest mb-2 opacity-60">25-Year Impact</div>
                  <div className="text-3xl font-black text-sky-600 tracking-tighter">${stats.lifetime}</div>
                </div>
                <div className="p-8 bg-slate-50 rounded-3xl border-2 border-slate-100">
                  <div className="text-slate-900 text-xs font-black uppercase tracking-widest mb-2 opacity-60">CO2 Reduction</div>
                  <div className="text-3xl font-black text-solar tracking-tighter">{stats.co2} Tons</div>
                </div>
              </div>
            </div>

            <a 
              href="#solutions" 
              className="block w-full text-center bg-navy text-white py-6 rounded-3xl text-2xl font-black hover:bg-sky-600 transition-all transform hover:scale-[1.02] shadow-2xl shadow-navy/20"
            >
              Get Supply Quote
            </a>
            <p className="text-sm text-slate-900 text-center font-bold italic opacity-60">
              *Manufactured specs. Final output varies by regional installation parameters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnergyCalculator;
