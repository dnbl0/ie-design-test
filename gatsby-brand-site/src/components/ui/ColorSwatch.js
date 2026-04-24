import React, { useState, useCallback } from 'react';
import * as styles from './ColorSwatch.module.css';

function CopyIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="9" height="9" rx="1" />
      <path d="M11 5V3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h2" />
    </svg>
  );
}

function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

function SwatchCard({ swatch }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(swatch.value).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    }
  }, [swatch.value]);

  const textColor = swatch.value.startsWith('#') ? getContrastColor(swatch.value) : '#000';

  return (
    <div className={styles.swatch}>
      <div
        className={styles.color}
        style={{ backgroundColor: swatch.value }}
        title={`${swatch.name}: ${swatch.value}`}
      >
        <button
          className={styles.copyButton}
          onClick={handleCopy}
          aria-label={`Copy ${swatch.value} to clipboard`}
          type="button"
          style={{ color: textColor }}
        >
          <CopyIcon />
        </button>
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{swatch.name}</p>
        <p className={styles.token}>{`--${swatch.token}`}</p>
        <span className={styles.hex}>{copied ? 'Copied!' : swatch.value}</span>
        {swatch.usage && <p className={styles.usage}>{swatch.usage}</p>}
      </div>
    </div>
  );
}

export default function ColorSwatchGrid({ swatches = [] }) {
  const groups = swatches.reduce((acc, swatch) => {
    const key = swatch.group || 'Other';
    if (!acc[key]) acc[key] = [];
    acc[key].push(swatch);
    return acc;
  }, {});

  const groupOrder = ['Brand', 'Text', 'Background', 'Border', 'State', 'Semantic', 'Other'];
  const sortedGroups = Object.keys(groups).sort(
    (a, b) => groupOrder.indexOf(a) - groupOrder.indexOf(b)
  );

  return (
    <>
      {sortedGroups.map((group) => (
        <div key={group}>
          <h3 className={styles.groupHeading}>{group}</h3>
          <div className={styles.grid}>
            {groups[group].map((swatch) => (
              <SwatchCard key={swatch.token} swatch={swatch} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
