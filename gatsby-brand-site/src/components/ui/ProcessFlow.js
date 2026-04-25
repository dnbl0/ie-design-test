import React, { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import * as styles from './ProcessFlow.module.css';

export default function ProcessFlow({ steps = [], variant = 'horizontal' }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setRevealed(steps.length);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setRevealed(i);
      if (i >= steps.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [inView, steps.length]);

  return (
    <div
      ref={ref}
      className={`${styles.flow} ${variant === 'vertical' ? styles.vertical : styles.horizontal}`}
      role="list"
      aria-label="Process steps"
    >
      {steps.map((step, i) => (
        <React.Fragment key={step.label}>
          <div
            className={`${styles.stepWrapper} ${i < revealed ? styles.stepVisible : ''}`}
            style={{ '--step-index': i }}
            role="listitem"
          >
            <div className={styles.step}>
              <div className={styles.number} aria-hidden="true">{i + 1}</div>
              <div className={styles.content}>
                <div className={styles.label}>{step.label}</div>
                {step.description && (
                  <div className={styles.description}>{step.description}</div>
                )}
              </div>
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className={styles.connector} aria-hidden="true">
              {variant === 'horizontal' ? (
                <svg viewBox="0 0 24 24" fill="none" className={styles.arrow}>
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className={styles.arrowDown}>
                  <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
