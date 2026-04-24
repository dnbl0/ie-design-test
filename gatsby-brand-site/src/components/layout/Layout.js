import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import * as styles from './Layout.module.css';

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BrandLayout({ brand, activePath, title, description, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.page}>
      <Helmet>
        <title>{title ? `${title} — IE Design System` : 'IE Design System'}</title>
        {description && <meta name="description" content={description} />}
        <html lang="en" />
      </Helmet>

      <Header activePath={activePath} />

      <div className={styles.brandLayout}>
        <Sidebar
          brand={brand}
          activePath={activePath}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main id="main-content" className={styles.main} tabIndex={-1}>
          <div className={styles.topBar}>
            <button
              className={styles.sidebarToggle}
              onClick={() => setSidebarOpen(true)}
              aria-label="Open navigation"
              aria-expanded={sidebarOpen}
              aria-controls="sidebar-nav"
              type="button"
            >
              <MenuIcon />
            </button>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
              Navigation
            </span>
          </div>
          <div className={styles.mainContent}>
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export function PageLayout({ title, description, activePath, children }) {
  return (
    <div className={styles.page}>
      <Helmet>
        <title>{title ? `${title} — IE Design System` : 'IE Design System'}</title>
        {description && <meta name="description" content={description} />}
        <html lang="en" />
      </Helmet>

      <Header activePath={activePath} />

      <main id="main-content" tabIndex={-1} style={{ flex: 1 }}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
