
import React from 'react';
import { Product } from './types';

export const COLORS = {
  NAVY: '#0B1D35',
  SKY: '#0056B3',
  SOLAR: '#E37B2F', // Warmer orange-yellow from the device image
  PEARL: '#F8FAFC', // Clean light background
};

export const PRODUCTS: Product[] = [
  {
    id: 'vult-res-1',
    name: 'VULT Home ESS (All-in-one)',
    category: 'Residential Storage',
    description: 'Integrated 5kW inverter and 10kWh lithium battery stack with seamless switching and sleek residential design.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    specs: ['5kW / 10kWh', 'LFP Safety Tech', '10-Year Warranty'],
  },
  {
    id: 'vult-ci-1',
    name: 'VULT Tower-C Industrial',
    category: 'C&I Storage',
    description: 'Scalable energy storage system for commercial buildings, optimized for peak shaving and load shifting.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    specs: ['50kW - 250kW', 'Modular Cooling', 'EMS Integrated'],
  },
  {
    id: 'vult-utility-1',
    name: 'VULT Grid-Sync Utility',
    category: 'Utility Scale ESS',
    description: 'Megawatt-scale containerized storage solutions for grid stabilization and renewable integration.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    specs: ['1MW+ Capacity', 'Liquid Cooling', 'SCADA Support'],
  },
  {
    id: 'vult-inv-pro',
    name: 'VULT-Sync Hybrid Inverter',
    category: 'Smart Inverters',
    description: 'Next-generation power conversion with 98.9% efficiency and integrated cloud-based AI optimization.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    specs: ['98.9% Efficiency', 'Triple MPPT', 'IP65 Rated'],
  }
];

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke={COLORS.NAVY} strokeWidth="2" opacity="0.1" />
    <g>
      <path d="M50 8 L50 14" stroke={COLORS.SOLAR} strokeWidth="4" strokeLinecap="round" />
      <path d="M72 18 L68 24" stroke={COLORS.SOLAR} strokeWidth="4" strokeLinecap="round" />
      <path d="M28 18 L32 24" stroke={COLORS.SOLAR} strokeWidth="4" strokeLinecap="round" />
    </g>
    <path d="M25 45 A25 25 0 0 1 75 45" fill={COLORS.SKY} />
    <path d="M40 45 L50 30 L60 45 Z" fill="white" />
    <g transform="translate(0, 4)">
      <rect x="25" y="50" width="20" height="28" rx="2" fill={COLORS.NAVY} />
      <rect x="45" y="50" width="30" height="28" rx="2" fill={COLORS.SOLAR} />
      <path d="M55 45 L48 62 H58 L51 79" stroke="white" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
    </g>
  </svg>
);
