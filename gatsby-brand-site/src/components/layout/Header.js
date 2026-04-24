import React, { useState } from 'react';
import { Link } from 'gatsby';
import BrandSwitcher from '../brand/BrandSwitcher';
import { TOP_NAV } from '../../data/navigation';
import { useBrand } from '../../context/BrandContext';
import * as styles from './Header.module.css';

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      {open ? (
        <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <>
          <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function Header({ activePath = '' }) {
  const { brand } = useBrand();
  const [mobileOpen, setMobileOpen] = useState(false);

  const logoMark = brand.id === 'ie' ? 'IE' : brand.id === 'lexus' ? 'L' : 'T';

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header className={styles.header} role="banner">
        <div className={styles.inner}>
          <Link to="/" className={styles.logo} aria-label="IE Design System home">
            <span className={styles.logoMark} aria-hidden="true">{logoMark}</span>
            <span className={styles.logoText}>
              <span className={styles.logoTitle}>IE Design</span>
              <span className={styles.logoSub}>Design System</span>
            </span>
          </Link>

          <div className={styles.divider} aria-hidden="true" />

          <nav className={styles.nav} aria-label="Primary navigation">
            {TOP_NAV.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`${styles.navLink} ${activePath.startsWith(item.path) && item.path !== '/' ? styles.active : activePath === '/' && item.path === '/' ? styles.active : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <BrandSwitcher />
            <button
              className={styles.searchButton}
              aria-label="Search"
              type="button"
            >
              <SearchIcon />
            </button>
            <button
              className={styles.menuButton}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${mobileOpen ? styles.open : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        {TOP_NAV.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={`${styles.mobileNavLink} ${activePath === item.path ? styles.active : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
