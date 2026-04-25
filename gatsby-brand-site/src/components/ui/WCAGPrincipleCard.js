import React, { useState } from 'react';
import AnimateIn from './AnimateIn';
import * as styles from './WCAGPrincipleCard.module.css';

const ICONS = {
  Perceivable: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <path d="M1 10s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z" />
      <circle cx="10" cy="10" r="3" />
    </svg>
  ),
  Operable: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <rect x="2" y="3" width="16" height="13" rx="2" />
      <path d="M8 17h4M10 14v3" />
      <path d="M7 8l2 2 4-4" />
    </svg>
  ),
  Understandable: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <path d="M10 2a5 5 0 015 5c0 2.1-1.3 3.9-3.1 4.7L11 13H9l-.9-1.3A5 5 0 0110 2z" />
      <path d="M9 16h2M9 13h2" />
    </svg>
  ),
  Robust: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
      <path d="M10 2L3 5v6c0 4 3.1 7.4 7 8 3.9-.6 7-4 7-8V5l-7-3z" />
      <path d="M7 10l2 2 4-4" />
    </svg>
  ),
};

const COLORS = {
  Perceivable:    { bg: '#EFF6FF', border: '#BFDBFE', icon: '#2563EB' },
  Operable:       { bg: '#F0FDF4', border: '#BBF7D0', icon: '#16A34A' },
  Understandable: { bg: '#FFFBEB', border: '#FDE68A', icon: '#D97706' },
  Robust:         { bg: '#FDF4FF', border: '#E9D5FF', icon: '#9333EA' },
};

export default function WCAGPrincipleCard({ principle, items, index }) {
  const [expanded, setExpanded] = useState(false);
  const colors = COLORS[principle] || COLORS.Robust;
  const visibleItems = expanded ? items : items.slice(0, 3);
  const hasMore = items.length > 3;

  return (
    <AnimateIn variant="fadeUp" delay={index}>
      <div className={styles.card} style={{ '--card-bg': colors.bg, '--card-border': colors.border, '--card-icon': colors.icon }}>
        <div className={styles.header}>
          <div className={styles.icon}>{ICONS[principle]}</div>
          <div>
            <h3 className={styles.title}>{principle}</h3>
            <span className={styles.count}>{items.length} criteria</span>
          </div>
        </div>
        <ul className={styles.list}>
          {visibleItems.map((item) => (
            <li key={item} className={styles.item}>
              <span className={styles.check} aria-hidden="true">
                <svg viewBox="0 0 12 12" fill="none" width="12" height="12">
                  <path d="M2 6l2.5 2.5L10 3.5" stroke="var(--color-success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            className={styles.toggle}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            type="button"
          >
            {expanded ? 'Show fewer' : `+${items.length - 3} more`}
          </button>
        )}
      </div>
    </AnimateIn>
  );
}
