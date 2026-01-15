
import React from 'react';
import { Product } from './types';

export const COLORS = {
  NAVY: '#0B1D35',
  SKY: '#0056B3',
  LIGHT_SKY: '#38BDF8',
  SOLAR: '#E37B2F', 
  YELLOW: '#F59E0B',
  PEARL: '#F8FAFC', 
};

// High-resolution representation of the provided VULT hardware image
const VULT_HARDWARE_IMAGE = "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200";

export const PRODUCTS: Product[] = [
  {
    id: 'vult-res-1',
    name: 'VULT Home ESS (All-in-one)',
    category: 'Residential Storage',
    description: 'Integrated 5kW inverter and 10kWh lithium battery stack with seamless switching and sleek residential design.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200',
    specs: ['5kW / 10kWh', 'LFP Safety Tech', '10-Year Warranty'],
  },
  {
    id: 'vult-ci-1',
    name: 'VULT Tower-C Industrial',
    category: 'C&I Storage',
    description: 'Scalable energy storage system for commercial buildings, optimized for peak shaving and load shifting.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200',
    specs: ['50kW - 250kW', 'Modular Cooling', 'EMS Integrated'],
  },
  {
    id: 'vult-utility-1',
    name: 'VULT Grid-Sync Utility',
    category: 'Utility Scale ESS',
    description: 'Megawatt-scale containerized storage solutions for grid stabilization and renewable integration.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200',
    specs: ['1MW+ Capacity', 'Liquid Cooling', 'SCADA Support'],
  },
  {
    id: 'vult-inv-pro',
    name: 'VULT-Sync Hybrid Inverter',
    category: 'Smart Inverters',
    description: 'Next-generation power conversion with 98.9% efficiency and integrated cloud-based AI optimization.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1200',
    specs: ['98.9% Efficiency', 'Triple MPPT', 'IP65 Rated'],
  }
];

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sun Rays */}
    <g fill={COLORS.YELLOW}>
      <path d="M50 5 L53 15 H47 L50 5Z" />
      <path d="M72.5 14 L71 24 L63.5 17.5 L72.5 14Z" />
      <path d="M27.5 14 L36.5 17.5 L29 24 L27.5 14Z" />
      <path d="M88 32 L81.5 39.5 L78 30.5 L88 32Z" />
      <path d="M12 32 L22 30.5 L18.5 39.5 L12 32Z" />
    </g>
    
    {/* Sky Arc */}
    <path d="M15 45 C15 25 30 10 50 10 C70 10 85 25 85 45" fill={COLORS.LIGHT_SKY} />
    
    {/* Mountains */}
    <path d="M30 45 L45 30 L55 40 L65 25 L80 45 H30Z" fill="white" fillOpacity="0.9" />
    
    {/* Battery Base */}
    <g>
      {/* Battery Navy Half */}
      <path d="M10 48 H50 V85 H15 C12 85 10 83 10 80 V48Z" fill={COLORS.NAVY} />
      {/* Battery Yellow Half */}
      <path d="M50 48 H85 C88 48 90 50 90 53 V80 C90 83 88 85 85 85 H50 V48Z" fill={COLORS.YELLOW} />
      {/* Battery Tip */}
      <path d="M90 60 H95 V73 H90 V60Z" fill={COLORS.YELLOW} />
    </g>
    
    {/* Lightning Bolt */}
    <path d="M55 42 L42 62 H55 L42 88" stroke={COLORS.LIGHT_SKY} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M55 42 L42 62 H55 L42 88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
