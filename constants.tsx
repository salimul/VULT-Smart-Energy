
import React from 'react';
import { Product } from './types';

export const COLORS = {
  NAVY: '#0B1D35',
  SKY: '#0056B3',
  SOLAR: '#FFB800',
};

export const PRODUCTS: Product[] = [
  {
    id: 'vult-res-1',
    name: 'VULT Home ESS (All-in-one)',
    category: 'Residential Storage',
    description: 'Integrated 5kW inverter and 10kWh lithium battery stack with seamless switching and sleek residential design.',
    image: 'https://images.unsplash.com/photo-1592833159057-65c2664726c7?auto=format&fit=crop&q=80&w=800',
    specs: ['5kW / 10kWh', 'LFP Safety Tech', '10-Year Warranty'],
  },
  {
    id: 'vult-ci-1',
    name: 'VULT Tower-C Industrial',
    category: 'C&I Storage',
    description: 'Scalable energy storage system for commercial buildings, optimized for peak shaving and load shifting.',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800',
    specs: ['50kW - 250kW', 'Modular Cooling', 'EMS Integrated'],
  },
  {
    id: 'vult-utility-1',
    name: 'VULT Grid-Sync Utility',
    category: 'Utility Scale ESS',
    description: 'Megawatt-scale containerized storage solutions for grid stabilization and renewable integration.',
    image: 'https://images.unsplash.com/photo-1466611653911-954ffea5acc0?auto=format&fit=crop&q=80&w=800',
    specs: ['1MW+ Capacity', 'Liquid Cooling', 'SCADA Support'],
  },
  {
    id: 'vult-inv-pro',
    name: 'VULT-Sync Hybrid Inverter',
    category: 'Smart Inverters',
    description: 'Next-generation power conversion with 98.9% efficiency and integrated cloud-based AI optimization.',
    image: 'https://images.unsplash.com/photo-1558444479-c84851830060?auto=format&fit=crop&q=80&w=800',
    specs: ['98.9% Efficiency', 'Triple MPPT', 'IP65 Rated'],
  }
];

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M50 8 L50 14" stroke={COLORS.SOLAR} strokeWidth="3" strokeLinecap="round" />
      <path d="M68 15 L64 20" stroke={COLORS.SOLAR} strokeWidth="3" strokeLinecap="round" />
      <path d="M82 30 L77 34" stroke={COLORS.SOLAR} strokeWidth="3" strokeLinecap="round" />
      <path d="M32 15 L36 20" stroke={COLORS.SOLAR} strokeWidth="3" strokeLinecap="round" />
      <path d="M18 30 L23 34" stroke={COLORS.SOLAR} strokeWidth="3" strokeLinecap="round" />
    </g>
    <path d="M22 45 A28 28 0 0 1 78 45" fill={COLORS.SKY} />
    <path d="M38 45 L50 30 L62 45 Z" fill="white" />
    <path d="M45 45 L55 35 L65 45 Z" fill="white" opacity="0.6" />
    <g transform="translate(0, 4)">
      <rect x="22" y="50" width="22" height="28" rx="2" fill={COLORS.NAVY} />
      <rect x="44" y="50" width="34" height="28" rx="2" fill={COLORS.SOLAR} />
      <rect x="78" y="58" width="4" height="12" rx="2" fill={COLORS.SOLAR} />
      <path d="M52 45 L44 64 H56 L48 83" stroke={COLORS.SKY} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M52 45 L44 64 H56 L48 83" stroke="white" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </g>
  </svg>
);
