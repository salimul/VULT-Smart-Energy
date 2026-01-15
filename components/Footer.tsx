
import React from 'react';
import { Logo, COLORS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-black tracking-tighter text-navy">
                VULT<span className="text-sky font-bold">-Smart Energy</span>
              </span>
            </div>
            <p className="text-slate-600 font-bold leading-relaxed">
              Leading the global transition to decentralized, clean energy with industrial-grade manufacturing and supply.
            </p>
            <div className="flex gap-4">
              {['FB', 'TW', 'IG', 'LI'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-navy font-black text-xs hover:bg-navy hover:text-white transition-all cursor-pointer shadow-sm">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-black text-navy mb-6 uppercase tracking-widest text-sm">Hardware</h5>
            <ul className="space-y-4 text-slate-800 font-bold">
              <li><a href="#products" className="hover:text-sky transition-colors">Smart Inverters</a></li>
              <li><a href="#products" className="hover:text-sky transition-colors">Solar Inverters</a></li>
              <li><a href="#products" className="hover:text-sky transition-colors">Hybrid Solutions</a></li>
              <li><a href="#products" className="hover:text-sky transition-colors">Lithium Storage</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-navy mb-6 uppercase tracking-widest text-sm">Company</h5>
            <ul className="space-y-4 text-slate-800 font-bold">
              <li><a href="#hero" className="hover:text-sky transition-colors">About VULT</a></li>
              <li><a href="#calculator" className="hover:text-sky transition-colors">ROI Calculator</a></li>
              <li><a href="#solutions" className="hover:text-sky transition-colors">Global Supply</a></li>
              <li><a href="#solutions" className="hover:text-sky transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-navy mb-6 uppercase tracking-widest text-sm">Bulk Supply</h5>
            <p className="text-sm text-slate-700 mb-4 font-bold">Request a technical consultation for regional supply contracts.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Supply email address" 
                className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:outline-none focus:border-sky font-bold"
              />
              <button className="w-full bg-navy text-white py-3 rounded-xl font-black hover:bg-sky transition-all shadow-lg">
                Request Consultation
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <div>© 2024 VULT Smart Energy. Manufacturing Excellence.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-navy transition-colors">Privacy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms</a>
            <a href="#" className="hover:text-navy transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;