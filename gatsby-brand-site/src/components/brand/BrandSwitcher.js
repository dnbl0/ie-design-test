import React, { useState, useRef, useEffect } from 'react';
import { useBrand } from '../../context/BrandContext';
import { BRAND_LIST } from '../../data/brands';
import * as styles from './BrandSwitcher.module.css';

const BRAND_COLORS = {
  ie: '#003087',
  lexus: '#BF8B45',
  toyota: '#EB0A1E',
};

export default function BrandSwitcher() {
  const { activeBrand, switchBrand, brand } = useBrand();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false);
    }
    function handleEscape(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className={styles.switcher} ref={ref}>
      <span className={styles.label}>Brand</span>
      <button
        className={styles.button}
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Current brand: ${brand.name}. Switch brand`}
      >
        <span
          className={styles.dot}
          style={{ backgroundColor: BRAND_COLORS[activeBrand] }}
          aria-hidden="true"
        />
        <span>{brand.name}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown} role="listbox" aria-label="Select brand">
          <div className={styles.dropdownHeader}>Select Brand</div>
          {BRAND_LIST.map((b) => (
            <button
              key={b.id}
              role="option"
              aria-selected={b.id === activeBrand}
              className={`${styles.dropdownItem} ${b.id === activeBrand ? styles.active : ''}`}
              onClick={() => { switchBrand(b.id); setIsOpen(false); }}
            >
              <span
                className={styles.dot}
                style={{ backgroundColor: BRAND_COLORS[b.id] }}
                aria-hidden="true"
              />
              <span className={styles.brandInfo}>
                <span className={styles.brandName}>{b.name}</span>
                <span className={styles.brandTagline}>{b.tagline}</span>
              </span>
              {b.id === activeBrand && (
                <svg className={styles.checkmark} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
