import React, { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import * as styles from './AnimatedStat.module.css';

function useCountUp(target, duration, started) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setValue(target);
      return;
    }

    const start = performance.now();
    let raf;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return value;
}

export default function AnimatedStat({ value, label, duration = 1200 }) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  const strValue = String(value);
  const numericMatch = strValue.match(/^(\d+)/);
  const numericPart = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = numericMatch ? strValue.slice(numericMatch[1].length) : strValue;

  const count = useCountUp(numericPart ?? 0, duration, inView && numericPart !== null);
  const displayValue = numericPart !== null ? `${count}${suffix}` : value;

  return (
    <div ref={ref} className={styles.stat}>
      <div className={styles.value}>{displayValue}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
