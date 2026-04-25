import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import * as styles from './CodeBlock.module.css';

function CopyIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" width="13" height="13" aria-hidden="true">
      <rect x="5" y="5" width="9" height="9" rx="1" />
      <path d="M11 5V3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" width="13" height="13" aria-hidden="true">
      <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CodeBlock({ code = '', language = 'jsx', filename, showLineNumbers = false }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code.trim()).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          {filename && <span className={styles.filename}>{filename}</span>}
          <span className={styles.lang}>{language}</span>
        </div>
        <button
          className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
          onClick={handleCopy}
          type="button"
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <Highlight code={code.trim()} language={language} theme={themes.nightOwl}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${styles.pre} ${className}`} style={style}>
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {showLineNumbers && (
                    <span className={styles.lineNo} aria-hidden="true">{i + 1}</span>
                  )}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
