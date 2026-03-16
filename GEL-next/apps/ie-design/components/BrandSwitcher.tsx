import React, { useState } from 'react';

const brands = [
  { name: 'IE', logo: '/assets/ie-logo.svg', theme: 'ie' },
  { name: 'Lexus', logo: '/assets/lexus-logo.svg', theme: 'lexus' },
  { name: 'Toyota', logo: '/assets/toyota-logo.svg', theme: 'toyota' },
];

export function BrandSwitcher({ onSwitch, activeBrand }: { onSwitch: (brand: string) => void; activeBrand: string }) {
  return (
    <nav aria-label="Brand switcher" className="brand-switcher">
      {brands.map((brand) => (
        <button
          key={brand.name}
          aria-current={activeBrand === brand.name ? 'page' : undefined}
          className={`brand-btn${activeBrand === brand.name ? ' active' : ''}`}
          onClick={() => onSwitch(brand.name)}
        >
          <img src={brand.logo} alt={brand.name + ' logo'} height={24} style={{ marginRight: 8 }} />
          {brand.name}
        </button>
      ))}
      <style jsx>{`
        .brand-switcher {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .brand-btn {
          background: none;
          border: none;
          font: inherit;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          transition: background 0.2s;
        }
        .brand-btn.active, .brand-btn:focus {
          background: #e5e5e5;
          outline: 2px solid #002244;
        }
      `}</style>
    </nav>
  );
}
