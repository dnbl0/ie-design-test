import React from 'react';
import { useInView } from '../../hooks/useInView';
import * as styles from './TokenHierarchyDiagram.module.css';

const TIERS = [
  {
    badge: '1',
    label: 'Primitive',
    sublabel: 'Raw values',
    color: '#7C3AED',
    bg: '#7C3AED12',
    borderColor: '#7C3AED33',
    examples: ['--blue-600: #0070CC', '--space-4: 16px'],
  },
  {
    badge: '2',
    label: 'Semantic',
    sublabel: 'Purpose-based',
    color: '#2563EB',
    bg: '#2563EB12',
    borderColor: '#2563EB33',
    examples: ['--color-primary', '--space-content'],
  },
  {
    badge: '3',
    label: 'Component',
    sublabel: 'Component-scoped',
    color: '#059669',
    bg: '#05966912',
    borderColor: '#05966933',
    examples: ['--btn-bg', '--input-border'],
  },
];

export default function TokenHierarchyDiagram() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className={`${styles.diagram} ${inView ? styles.visible : ''}`} role="list" aria-label="Token hierarchy">
      {TIERS.map((tier, i) => (
        <React.Fragment key={tier.label}>
          <div
            className={styles.card}
            style={{ '--tier-color': tier.color, '--tier-bg': tier.bg, '--tier-border': tier.borderColor, '--delay': `${i * 120}ms` }}
            role="listitem"
          >
            <div className={styles.badge}>{tier.badge}</div>
            <div className={styles.label}>{tier.label}</div>
            <div className={styles.sublabel}>{tier.sublabel}</div>
            <div className={styles.examples}>
              {tier.examples.map((ex) => (
                <code key={ex} className={styles.example}>{ex}</code>
              ))}
            </div>
          </div>
          {i < TIERS.length - 1 && (
            <div className={styles.arrow} aria-hidden="true">
              <svg viewBox="0 0 32 14" fill="none" width="32" height="14">
                <path d="M0 7h26M20 2l7 5-7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
