import React, { useState } from 'react';
import * as styles from './StorybookEmbed.module.css';

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M7 1h4v4M11 1L6 6M5 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FullscreenIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1 4V1h3M8 1h3v3M11 8v3H8M4 11H1V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function StorybookEmbed({
  storyUrl,
  storyId,
  title = 'Component Preview',
  height = 300,
  brand = 'ie',
}) {
  const [expanded, setExpanded] = useState(false);
  const frameHeight = expanded ? 600 : height;

  const resolvedUrl = storyUrl || (storyId
    ? `https://storybook.${brand}.ie-design.example.com/iframe.html?id=${storyId}&viewMode=story&globals=brand:${brand}`
    : null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div className={styles.title}>
          <span className={styles.storybookBadge}>SB</span>
          <span>{title}</span>
        </div>
        <div className={styles.actions}>
          <button
            className={styles.actionBtn}
            onClick={() => setExpanded((v) => !v)}
            type="button"
          >
            <FullscreenIcon />
            {expanded ? 'Collapse' : 'Expand'}
          </button>
          {resolvedUrl && (
            <a
              href={resolvedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.actionBtn}
            >
              <ExternalIcon />
              Open in Storybook
            </a>
          )}
        </div>
      </div>

      {resolvedUrl ? (
        <iframe
          src={resolvedUrl}
          className={styles.frame}
          style={{ height: frameHeight }}
          title={`Storybook preview: ${title}`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms"
        />
      ) : (
        <div className={styles.placeholder}>
          <svg className={styles.placeholderIcon} viewBox="0 0 48 48" fill="none">
            <rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" strokeWidth="2" />
            <path d="M4 16h40" stroke="currentColor" strokeWidth="2" />
            <circle cx="11" cy="12" r="2" fill="currentColor" />
            <circle cx="18" cy="12" r="2" fill="currentColor" />
            <circle cx="25" cy="12" r="2" fill="currentColor" />
          </svg>
          <p className={styles.placeholderText}>
            Live preview requires a running Storybook instance.
            <br />
            Configure <code>storyUrl</code> to enable the embed.
          </p>
          <a
            href={`https://storybook.${brand}.ie-design.example.com`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.openLink}
          >
            Open Storybook
            <ExternalIcon />
          </a>
        </div>
      )}
    </div>
  );
}
