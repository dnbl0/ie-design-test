import React, { createContext, useContext, useState, useEffect } from 'react';
import { BRANDS } from '../data/brands';

const BrandContext = createContext(null);

const STORAGE_KEY = 'ie-design-active-brand';

export function BrandProvider({ children }) {
  const [activeBrand, setActiveBrand] = useState('ie');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && BRANDS[stored]) setActiveBrand(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-brand', activeBrand);
      localStorage.setItem(STORAGE_KEY, activeBrand);
    }
  }, [activeBrand]);

  const switchBrand = (brandId) => {
    if (BRANDS[brandId]) setActiveBrand(brandId);
  };

  return (
    <BrandContext.Provider value={{ activeBrand, switchBrand, brand: BRANDS[activeBrand] }}>
      {children}
    </BrandContext.Provider>
  );
}

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error('useBrand must be used within a BrandProvider');
  return ctx;
}

export default BrandContext;
