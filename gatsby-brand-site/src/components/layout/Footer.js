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
            <Link to="/" className={styles.brandLogo} aria-label="i.e., Design System">
              <span className={styles.brandTitle}>i.e.,</span>
              <span className={styles.brandSubtitle}>Design System</span>
            </Link>
            <p className={styles.brandDesc}>
              Brand guidelines, component documentation, and
              development resources for the i.e., Design System.
            </p>
          </div>

          <div className={styles.col}>
            <p className={styles.colTitle}>Design System</p>
            <ul className={styles.colLinks}>
              <li><Link to="/ie/getting-started/overview/" className={styles.colLink}>Getting Started</Link></li>
              <li><Link to="/ie/foundations/colour/" className={styles.colLink}>Foundations</Link></li>
              <li><Link to="/ie/components/button/" className={styles.colLink}>Components</Link></li>
              <li><Link to="/ie/accessibility/accessible-by-design/" className={styles.colLink}>Accessibility</Link></li>
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
              <li><Link to="/ie/governance/contribution/" className={styles.colLink}>Contribution</Link></li>
              <li><Link to="/ie/governance/design-review/" className={styles.colLink}>Design Review</Link></li>
              <li><Link to="/ie/governance/versioning/" className={styles.colLink}>Release Notes</Link></li>
              <li><Link to="/ie/governance/support/" className={styles.colLink}>Support</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} i.e., Design System. All rights reserved.
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
