import React from 'react';
import { useInView } from '../../hooks/useInView';
import * as styles from './AnimateIn.module.css';

export default function AnimateIn({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`${styles.base} ${styles[variant] || ''} ${inView ? styles.visible : ''} ${className}`}
      style={delay ? { '--animate-delay': `${delay * 80}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
