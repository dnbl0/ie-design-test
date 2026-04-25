import React, { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import * as styles from './ComponentLifecycleDiagram.module.css';

const STAGES = [
  { label: 'Proposed', color: '#718096', bg: '#71809622', desc: 'Suggested, not yet designed or built.' },
  { label: 'Experimental', color: '#1565C0', bg: '#1565C022', desc: 'Early dev. API may change.' },
  { label: 'Beta', color: '#B45309', bg: '#B4530922', desc: 'Feature-complete, mostly stable API.' },
  { label: 'Stable', color: '#1A7A4A', bg: '#1A7A4A22', desc: 'Production-ready. Semver applies.' },
  { label: 'Deprecated', color: '#C0392B', bg: '#C0392B22', desc: 'Scheduled for removal. Use replacement.' },
];

export default function ComponentLifecycleDiagram() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setRevealed(STAGES.length); return; }
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setRevealed(i);
      if (i >= STAGES.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={ref} className={styles.diagram} role="list" aria-label="Component lifecycle stages">
      {STAGES.map((stage, i) => (
        <React.Fragment key={stage.label}>
          <div
            className={`${styles.node} ${i < revealed ? styles.nodeVisible : ''}`}
            role="listitem"
          >
            <div className={styles.badge} style={{ background: stage.bg, color: stage.color, borderColor: stage.color + '55' }}>
              {stage.label}
            </div>
            <p className={styles.desc}>{stage.desc}</p>
          </div>
          {i < STAGES.length - 1 && (
            <div className={`${styles.arrow} ${i < revealed - 1 ? styles.arrowVisible : ''}`} aria-hidden="true">
              <svg viewBox="0 0 24 10" fill="none" width="32" height="14">
                <path d="M0 5h20M16 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
