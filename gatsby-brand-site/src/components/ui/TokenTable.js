import React from 'react';
import * as styles from './TokenTable.module.css';

export function ColorTokenTable({ tokens = [] }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th} scope="col">Token</th>
            <th className={styles.th} scope="col">Value</th>
            <th className={styles.th} scope="col">Preview</th>
            <th className={styles.th} scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.token} className={styles.tr}>
              <td className={styles.td}>
                <code className={styles.tokenCell}>{`--${token.token}`}</code>
              </td>
              <td className={styles.td}>
                <span className={styles.valueCell}>{token.value}</span>
              </td>
              <td className={styles.td}>
                <div className={styles.preview}>
                  <div
                    className={styles.colorPreview}
                    style={{ backgroundColor: token.value }}
                    aria-hidden="true"
                    title={token.value}
                  />
                </div>
              </td>
              <td className={styles.td}>{token.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SpacingTokenTable({ tokens = [] }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th} scope="col">Token</th>
            <th className={styles.th} scope="col">Value</th>
            <th className={styles.th} scope="col">Visual</th>
            <th className={styles.th} scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => {
            const px = parseInt(token.value.split('/')[0].trim(), 10);
            return (
              <tr key={token.token} className={styles.tr}>
                <td className={styles.td}>
                  <code className={styles.tokenCell}>{`--${token.token}`}</code>
                </td>
                <td className={styles.td}>
                  <span className={styles.valueCell}>{token.value}</span>
                </td>
                <td className={styles.td}>
                  <div
                    className={styles.spacingPreview}
                    style={{ width: Math.min(px, 96) }}
                    aria-label={`${px}px wide`}
                  />
                </td>
                <td className={styles.td}>{token.usage}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function TypographyTable({ scale = [] }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th} scope="col">Token</th>
            <th className={styles.th} scope="col">Value</th>
            <th className={styles.th} scope="col">Weight</th>
            <th className={styles.th} scope="col">Preview</th>
            <th className={styles.th} scope="col">Usage</th>
          </tr>
        </thead>
        <tbody>
          {scale.map((item) => (
            <tr key={item.token} className={styles.tr}>
              <td className={styles.td}>
                <code className={styles.tokenCell}>{`--${item.token}`}</code>
              </td>
              <td className={styles.td}>
                <span className={styles.valueCell}>{item.value}</span>
              </td>
              <td className={styles.td}>
                <span className={styles.valueCell}>{item.weight}</span>
              </td>
              <td className={styles.td}>
                <span
                  style={{
                    fontSize: item.value.split('/')[0].trim(),
                    fontWeight: item.weight,
                    fontFamily: 'var(--font-display)',
                    lineHeight: 1,
                    display: 'block',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    maxWidth: '200px',
                  }}
                >
                  Aa
                </span>
              </td>
              <td className={styles.td}>{item.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PropTable({ props = [] }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th} scope="col">Prop</th>
            <th className={styles.th} scope="col">Type</th>
            <th className={styles.th} scope="col">Default</th>
            <th className={styles.th} scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className={styles.tr}>
              <td className={styles.td}>
                <code className={styles.tokenCell}>{prop.name}</code>
              </td>
              <td className={styles.td}>
                <span className={styles.valueCell}>{prop.type}</span>
              </td>
              <td className={styles.td}>
                <span className={styles.valueCell}>{prop.default}</span>
              </td>
              <td className={styles.td}>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
