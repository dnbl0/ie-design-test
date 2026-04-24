import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import StorybookEmbed from '../components/ui/StorybookEmbed';
import { PropTable } from '../components/ui/TokenTable';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';
import { getComponent } from '../data/components';

const STATUS_STYLES = {
  stable:       { background: '#E6F4ED', color: '#1A7A4A' },
  beta:         { background: '#FEF3C7', color: '#B45309' },
  deprecated:   { background: '#FDEDEC', color: '#C0392B' },
  experimental: { background: '#E3F0FF', color: '#1565C0' },
};

function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES.stable;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '4px',
      padding: '2px 10px', borderRadius: '9999px',
      fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)',
      textTransform: 'capitalize', letterSpacing: '0.02em',
      ...style,
    }}>
      {status}
    </span>
  );
}

function MarkdownText({ text }) {
  if (!text) return null;
  const lines = text.trim().split('\n');
  return (
    <div>
      {lines.map((line, i) => {
        if (line.startsWith('### ')) {
          return <h3 key={i}>{line.slice(4)}</h3>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={i}>{line.slice(3)}</h2>;
        }
        if (line.startsWith('- ')) {
          return <li key={i}>{line.slice(2)}</li>;
        }
        if (line.startsWith('**When')) {
          return <h4 key={i} style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-2)' }}>{line.replace(/\*\*/g, '')}</h4>;
        }
        if (!line.trim()) return null;
        return <p key={i}>{line.replace(/\*\*(.*?)\*\*/g, '$1')}</p>;
      })}
    </div>
  );
}

function GenericDesign({ componentId, label, brand }) {
  return (
    <div className="prose">
      <h2>{label}</h2>
      <p>The {label} component for the {getBrand(brand).name} design system.</p>
      <div className="callout">
        Full documentation for this component is in development. See the Storybook instance for live examples.
      </div>
      <h3>Usage</h3>
      <pre><code>import {'{ ' + label.replace(/ /g, '') + ' }'} from &apos;@ie-design/{brand}-ui&apos;;</code></pre>
    </div>
  );
}

function KeyboardTable() {
  const rows = [
    ['Tab', 'Move focus to the component'],
    ['Enter / Space', 'Activate the component'],
    ['Escape', 'Close or dismiss (where applicable)'],
    ['Arrow keys', 'Navigate within component options'],
  ];
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--text-sm)' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
          <th style={{ textAlign: 'left', padding: 'var(--space-2) var(--space-3)', fontWeight: 'var(--weight-semibold)' }}>Key</th>
          <th style={{ textAlign: 'left', padding: 'var(--space-2) var(--space-3)', fontWeight: 'var(--weight-semibold)' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([key, action]) => (
          <tr key={key} style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
            <td style={{ padding: 'var(--space-2) var(--space-3)' }}>
              <kbd style={{
                background: 'var(--color-bg-muted)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-base)', padding: '1px 6px',
                fontSize: '11px', fontFamily: 'var(--font-mono)',
              }}>{key}</kbd>
            </td>
            <td style={{ padding: 'var(--space-2) var(--space-3)', color: 'var(--color-text-secondary)' }}>{action}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function ComponentPage({ pageContext, location }) {
  const { brand, componentId, componentLabel } = pageContext;
  const { switchBrand } = useBrand();

  useEffect(() => { switchBrand(brand); }, [brand]);

  const brandData = getBrand(brand);
  const component = getComponent(componentId);
  const path = (location && location.pathname) || ('/' + brand + '/components/' + componentId + '/');
  const label = (component && component.label) || componentLabel;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: brandData.name, path: '/' + brand + '/' },
    { label: 'Components', path: '/' + brand + '/components/button/' },
    { label },
  ];

  const designContent = component ? (
    <div className="prose">
      <h2>Overview</h2>
      <p>{component.description}</p>
      <h3>Design guidelines</h3>
      <MarkdownText text={component.designGuidelines} />
      {component.props && (
        <>
          <h2>Props</h2>
          <PropTable props={component.props} />
        </>
      )}
    </div>
  ) : (
    <GenericDesign componentId={componentId} label={label} brand={brand} />
  );

  const a11yContent = (
    <div className="prose">
      <h2>Accessibility</h2>
      {component && <MarkdownText text={component.accessibilityNotes} />}
      <h3>Keyboard interaction</h3>
      <KeyboardTable />
    </div>
  );

  const storyId = (component && component.storyIds && component.storyIds[brand]) || ('components-' + componentId + '--primary');
  const labelSlug = label.replace(/ /g, '');

  const codeContent = (
    <div>
      <StorybookEmbed
        storyId={storyId}
        title={label + ' — ' + brandData.name + ' Storybook'}
        brand={brand}
        height={320}
      />
      <div className="prose">
        <h2>Usage</h2>
        <pre><code>
          {'import { ' + labelSlug + " } from '@ie-design/" + brand + "-ui';\n\n"}
          {'export function Example() {\n'}
          {'  return (\n'}
          {'    <' + labelSlug + ' look="primary">\n'}
          {'      ' + label + '\n'}
          {'    </' + labelSlug + '>\n'}
          {'  );\n}'}
        </code></pre>
        {component && component.props && (
          <>
            <h2>Props reference</h2>
            <PropTable props={component.props} />
          </>
        )}
      </div>
    </div>
  );

  const tabs = [
    { id: 'design', label: 'Design', content: designContent },
    { id: 'accessibility', label: 'Accessibility', content: a11yContent },
    { id: 'code', label: 'Code', content: codeContent },
  ];

  return (
    <BrandLayout brand={brand} activePath={path} title={label + ' — Components'}>
      <Breadcrumbs items={breadcrumbs} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)', flexWrap: 'wrap' }}>
        <span className="tag">Components</span>
        {component && <StatusBadge status={component.status} />}
        {component && (
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
            v{component.version}
          </span>
        )}
      </div>

      <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-extrabold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
        {label}
      </h1>
      {component && (
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
          {component.description}
        </p>
      )}

      <Tabs tabs={tabs} defaultTab="design" />
    </BrandLayout>
  );
}
