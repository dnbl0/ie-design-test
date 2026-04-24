import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useBrand } from '../../context/BrandContext';
import { SIDEBAR_NAV } from '../../data/navigation';
import * as styles from './Sidebar.module.css';

const BRAND_COLORS = {
  ie: '#003087',
  lexus: '#BF8B45',
  toyota: '#EB0A1E',
};

const ICONS = {
  rocket: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1c3.5 0 6 2.5 5 6l-2 5H5L3 7C2 3.5 4.5 1 8 1z" />
      <path d="M6 12l-2 3M10 12l2 3M5.5 7.5a.5.5 0 100-1 .5.5 0 000 1z" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 5l7-3 7 3-7 3-7-3zM1 11l7 3 7-3M1 8l7 3 7-3" />
    </svg>
  ),
  components: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="1" width="6" height="6" rx="1" />
      <rect x="9" y="1" width="6" height="6" rx="1" />
      <rect x="1" y="9" width="6" height="6" rx="1" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  ),
  pattern: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="4" cy="4" r="2" /><circle cx="12" cy="4" r="2" />
      <circle cx="4" cy="12" r="2" /><circle cx="12" cy="12" r="2" />
      <path d="M6 4h4M4 6v4M12 6v4M6 12h4" />
    </svg>
  ),
  layout: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="1" width="14" height="14" rx="2" />
      <path d="M1 5h14M5 5v10" />
    </svg>
  ),
  text: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h12M2 7h8M2 11h10M2 15h6" />
    </svg>
  ),
  accessibility: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="3" r="1.5" />
      <path d="M8 5v5M5 7l3 1 3-1M6 12l2-2 2 2M6 14v-2M10 14v-2" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 2a3 3 0 010 6H9L5 12a2 2 0 01-3-3l4-4V3a3 3 0 015-1z" />
    </svg>
  ),
  governance: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1l1.5 3H14l-3.5 2.5 1.5 3.5L8 8 4 10l1.5-3.5L2 4h4.5L8 1z" />
      <path d="M5 11v4M11 11v4M3 15h10" />
    </svg>
  ),
};

function SidebarSection({ section, brand, activePath, defaultOpen }) {
  const sectionPath = `/${brand}/${section.children[0]?.path || ''}`;
  const isSectionActive = section.children.some((child) =>
    activePath.includes(`/${brand}/${child.path}`)
  );
  const [expanded, setExpanded] = useState(defaultOpen || isSectionActive);

  useEffect(() => {
    if (isSectionActive) setExpanded(true);
  }, [activePath, isSectionActive]);

  const id = `sidebar-section-${section.id}`;
  const panelId = `sidebar-panel-${section.id}`;

  return (
    <div className={styles.section}>
      <button
        id={id}
        className={styles.sectionToggle}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={panelId}
        type="button"
      >
        <span className={styles.sectionIcon}>{ICONS[section.icon]}</span>
        <span className={styles.sectionLabel}>{section.label}</span>
        <svg
          className={`${styles.sectionChevron} ${expanded ? styles.expanded : ''}`}
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={id}
        className={`${styles.sectionItems} ${expanded ? styles.expanded : ''}`}
      >
        {section.children.map((child) => {
          const path = `/${brand}/${child.path}/`;
          const isActive = activePath === path || activePath.startsWith(path.slice(0, -1));
          return (
            <Link
              key={child.id}
              to={path}
              className={`${styles.sectionItem} ${isActive ? styles.active : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {child.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Sidebar({ brand, activePath = '', isOpen = false, onClose }) {
  const { brand: brandData } = useBrand();
  const brandColor = BRAND_COLORS[brand] || BRAND_COLORS.ie;

  return (
    <>
      {isOpen && (
        <div
          className={`${styles.overlay} ${isOpen ? styles.visible : ''}`}
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <nav
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        aria-label={`${brandData.name} design system navigation`}
        id="sidebar-nav"
      >
        <div className={styles.brandBadge}>
          <div
            className={styles.brandDot}
            style={{ backgroundColor: brandColor }}
            aria-hidden="true"
          />
          <div>
            <div className={styles.brandLabel}>Design System</div>
            <div className={styles.brandName}>{brandData.name}</div>
          </div>
        </div>

        <div className={styles.nav}>
          {SIDEBAR_NAV.map((section, i) => (
            <SidebarSection
              key={section.id}
              section={section}
              brand={brand}
              activePath={activePath}
              defaultOpen={i === 0}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
