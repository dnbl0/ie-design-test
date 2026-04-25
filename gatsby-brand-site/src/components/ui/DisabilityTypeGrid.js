import React from 'react';
import AnimateIn from './AnimateIn';
import * as styles from './DisabilityTypeGrid.module.css';

const DISABILITY_TYPES = [
  {
    label: 'Visual',
    color: { bg: '#EFF6FF', border: '#BFDBFE', icon: '#2563EB' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
    subtypes: ['Blindness', 'Low vision', 'Colour blindness', 'Light sensitivity'],
  },
  {
    label: 'Motor',
    color: { bg: '#F0FDF4', border: '#BBF7D0', icon: '#16A34A' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    subtypes: ['Tremors', 'Paralysis', 'Limited dexterity', 'Repetitive strain'],
  },
  {
    label: 'Cognitive',
    color: { bg: '#FFFBEB', border: '#FDE68A', icon: '#D97706' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    subtypes: ['Dyslexia', 'ADHD', 'Memory challenges', 'Attention difficulty'],
  },
  {
    label: 'Auditory',
    color: { bg: '#FDF4FF', border: '#E9D5FF', icon: '#9333EA' },
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24" aria-hidden="true">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </svg>
    ),
    subtypes: ['Deafness', 'Hard of hearing', 'Auditory processing', 'Tinnitus'],
  },
];

export default function DisabilityTypeGrid() {
  return (
    <div className={styles.grid}>
      {DISABILITY_TYPES.map((type, i) => (
        <AnimateIn key={type.label} variant="fadeUp" delay={i}>
          <div
            className={styles.card}
            style={{ '--card-bg': type.color.bg, '--card-border': type.color.border, '--card-icon': type.color.icon }}
          >
            <div className={styles.icon}>{type.icon}</div>
            <h4 className={styles.label}>{type.label}</h4>
            <ul className={styles.subtypes}>
              {type.subtypes.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}
