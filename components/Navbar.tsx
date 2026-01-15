
import React, { useState, useEffect } from 'react';
import { Logo } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Products', href: '#products' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'ROI Tools', href: '#calculator' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // On light hero, nav is always dark text unless it's a specific dark section
  const navTextColor = 'text-[#0B1D35]';
  const navBgColor = isScrolled || isMobileMenuOpen ? 'bg-white shadow-xl py-4' : 'bg-transparent py-8';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgColor}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 transition-transform hover:scale-105" onClick={handleLinkClick}>
          <Logo className="w-10 h-10 md:w-12 h-12" />
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-extrabold leading-none tracking-tighter transition-colors ${navTextColor}`}>
              VULT
            </span>
            <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#0056B3]`}>
              Energy Storage
            </span>
          </div>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs font-black uppercase tracking-[0.2em] transition-colors hover:text-[#0056B3] ${navTextColor}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#solutions" 
            className={`px-6 py-3 text-xs font-black uppercase tracking-[0.2em] transition-all rounded-lg border-2 ${
              isScrolled || isMobileMenuOpen 
                ? 'bg-[#0B1D35] border-[#0B1D35] text-white hover:bg-[#0056B3] hover:border-[#0056B3]' 
                : 'bg-white/50 border-[#0B1D35] text-[#0B1D35] hover:bg-[#0B1D35] hover:text-white backdrop-blur-sm'
            }`}
          >
            Contact Sales
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 focus:outline-none transition-colors ${navTextColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 transition-all duration-300 shadow-2xl overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col p-10 gap-8 text-sm font-black text-[#0B1D35] uppercase tracking-[0.3em] text-center">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} onClick={handleLinkClick} className="hover:text-[#0056B3] active:text-[#0056B3]">
              {link.name}
            </a>
          ))}
          <a href="#solutions" onClick={handleLinkClick} className="bg-[#0B1D35] text-white py-5 rounded-lg hover:bg-[#0056B3] transition-colors">
            Contact Sales
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
