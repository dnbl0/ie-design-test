import React, { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import * as styles from './AdoptionLevelTrack.module.css';

const LEVELS = [
  { number: '1', label: 'Token Adoption', desc: 'Use colour, spacing, and typography tokens. No custom values.' },
  { number: '2', label: 'Component Adoption', desc: 'Use the component library for all standard UI patterns.' },
  { number: '3', label: 'Full Integration', desc: 'Use patterns, layouts, and content guidelines. Figma UI Kit in use.' },
  { number: '4', label: 'Contributing', desc: 'Actively contribute new components, patterns, and token updates back.' },
];

export default function AdoptionLevelTrack() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setFilled(true); return; }
    const t = setTimeout(() => setFilled(true), 200);
    return () => clearTimeout(t);
  }, [inView]);

  return (
    <div ref={ref} className={styles.track} role="list" aria-label="Adoption levels">
      <div className={styles.rail} aria-hidden="true">
        <div className={`${styles.fill} ${filled ? styles.fillActive : ''}`} />
      </div>
      {LEVELS.map((level, i) => (
        <div
          key={level.number}
          className={`${styles.node} ${inView ? styles.nodeVisible : ''}`}
          style={{ '--node-delay': `${i * 100}ms` }}
          role="listitem"
        >
          <div className={`${styles.circle} ${filled ? styles.circleActive : ''}`} style={{ '--circle-delay': `${i * 150 + 200}ms` }}>
            {level.number}
          </div>
          <div className={styles.info}>
            <div className={styles.label}>{level.label}</div>
            <p className={styles.desc}>{level.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
