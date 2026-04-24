import React from 'react';
import { Link } from 'gatsby';
import * as styles from './Breadcrumbs.module.css';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
      <ol style={{ display: 'contents', listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path || item.label} className={styles.item}>
              {!isLast ? (
                <>
                  <Link to={item.path} className={styles.link}>
                    {item.label}
                  </Link>
                  <span className={styles.separator} aria-hidden="true">›</span>
                </>
              ) : (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
