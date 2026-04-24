import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.brandLogo} aria-label="IE Design System">
              <span className={styles.brandMark} aria-hidden="true">IE</span>
              <span className={styles.brandTitle}>IE Design</span>
            </Link>
            <p className={styles.brandDesc}>
              Multi-brand design guidelines, component documentation, and
              development resources for the IE Design System family.
            </p>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Brands</p>
            <ul className={styles.colLinks}>
              <li><Link to="/ie/getting-started/overview/" className={styles.colLink}>IE</Link></li>
              <li><Link to="/lexus/getting-started/overview/" className={styles.colLink}>Lexus</Link></li>
              <li><Link to="/toyota/getting-started/overview/" className={styles.colLink}>Toyota</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Resources</p>
            <ul className={styles.colLinks}>
              <li><a href="#" className={styles.colLink}>Figma UI Kit</a></li>
              <li><a href="#" className={styles.colLink}>Storybook</a></li>
              <li><a href="#" className={styles.colLink}>GitHub</a></li>
              <li><a href="#" className={styles.colLink}>Design Tokens</a></li>
              <li><Link to="/resources" className={styles.colLink}>All Resources</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Governance</p>
            <ul className={styles.colLinks}>
              <li><Link to="/governance" className={styles.colLink}>Contribution</Link></li>
              <li><Link to="/governance" className={styles.colLink}>Design Review</Link></li>
              <li><Link to="/governance" className={styles.colLink}>Release Notes</Link></li>
              <li><Link to="/governance" className={styles.colLink}>Support</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} IE Design System. All rights reserved.
          </p>
          <span className={styles.version}>
            <span className={styles.versionDot} aria-hidden="true" />
            v3.2.0 — Stable
          </span>
        </div>
      </div>
    </footer>
  );
}
