import React from 'react';
import AnimateIn from './AnimateIn';
import * as styles from './WritingExampleBlock.module.css';

export default function WritingExampleBlock({ doText, dontText, rule }) {
  return (
    <AnimateIn variant="fadeUp">
      <div className={styles.wrapper}>
        {rule && <p className={styles.rule}>{rule}</p>}
        <div className={styles.panels}>
          <div className={styles.dont}>
            <span className={styles.dontLabel} aria-label="Don't">
              <svg viewBox="0 0 14 14" fill="none" width="12" height="12" aria-hidden="true">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Don&apos;t
            </span>
            <blockquote className={styles.quote}>{dontText}</blockquote>
          </div>
          <div className={styles.doPanel}>
            <span className={styles.doLabel} aria-label="Do">
              <svg viewBox="0 0 14 14" fill="none" width="12" height="12" aria-hidden="true">
                <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Do
            </span>
            <blockquote className={styles.quote}>{doText}</blockquote>
          </div>
        </div>
      </div>
    </AnimateIn>
  );
}
