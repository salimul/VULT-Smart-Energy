
import React from 'react';
import { PRODUCTS } from '../constants';

const ProductGrid: React.FC = () => {
  return (
    <section id="products" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-sky font-black uppercase tracking-[0.4em] text-sm">Advanced Portfolio</h2>
          <h3 className="text-4xl md:text-6xl font-black text-navy leading-tight">Energy Storage Solutions</h3>
          <div className="w-24 h-1.5 bg-solar mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative flex flex-col bg-slate-50 border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-4 left-4">
                   <span className="px-3 py-1 bg-white text-navy text-[10px] font-black uppercase tracking-widest shadow-lg">
                     {product.category}
                   </span>
                </div>
              </div>
              
              <div className="p-8 space-y-6 flex-1 flex flex-col">
                <h4 className="text-2xl font-black text-navy leading-tight">{product.name}</h4>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-1 gap-2 pt-4 border-t border-slate-200">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs text-navy font-bold uppercase tracking-tight">
                      <div className="w-1.5 h-1.5 bg-sky" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="pt-6 mt-auto">
                  <a href="#solutions" className="block w-full text-center bg-navy text-white py-4 text-xs font-black uppercase tracking-[0.2em] hover:bg-sky transition-colors">
                    Technical Overview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
