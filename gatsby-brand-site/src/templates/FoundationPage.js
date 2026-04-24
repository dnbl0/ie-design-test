import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import ColorSwatchGrid from '../components/ui/ColorSwatch';
import { ColorTokenTable, SpacingTokenTable, TypographyTable } from '../components/ui/TokenTable';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';
import { getTokens } from '../data/tokens';

function ColourContent({ brand }) {
  const tokens = getTokens(brand);
  return (
    <>
      <div className="prose">
        <h2>Colour palette</h2>
        <p>The colour palette is the foundation of the {getBrand(brand).name} visual identity. Each colour has a specific purpose and usage guideline. Always use semantic tokens, not raw hex values, in your code.</p>
        <div className="callout">
          Hover over any swatch to reveal a copy button. Clicking it copies the hex value to your clipboard.
        </div>
      </div>
      <ColorSwatchGrid swatches={tokens.color.palette} />
      <div className="prose" style={{ marginTop: 'var(--space-8)' }}>
        <h2>Semantic tokens</h2>
        <p>These tokens map to specific roles in the UI. Use these in components rather than palette colours directly.</p>
      </div>
      <ColorTokenTable tokens={tokens.color.semantic} />
    </>
  );
}

function ColourAccessibility({ brand }) {
  return (
    <div className="prose">
      <h2>Colour and contrast</h2>
      <p>All foreground/background colour combinations in the {getBrand(brand).name} design system are tested against WCAG 2.1 contrast requirements.</p>
      <h3>Minimum contrast ratios</h3>
      <ul>
        <li><strong>Normal text (≤18px regular, ≤14px bold)</strong>: 4.5:1 minimum (Level AA)</li>
        <li><strong>Large text (&gt;18px regular, &gt;14px bold)</strong>: 3:1 minimum (Level AA)</li>
        <li><strong>UI components and graphical objects</strong>: 3:1 minimum (Level AA)</li>
        <li><strong>Enhanced text contrast</strong>: 7:1 (Level AAA)</li>
      </ul>
      <h3>Rules</h3>
      <ul>
        <li>Never use colour alone to convey meaning — always pair with text or iconography</li>
        <li>Test all custom colour combinations with the token contrast checker</li>
        <li>Provide high-contrast alternatives for critical UI states (errors, warnings)</li>
      </ul>
      <div className="callout">
        Use the <a href={`/${brand}/accessibility/colour-contrast/`}>Colour Contrast checker</a> to verify any custom pairings you create.
      </div>
    </div>
  );
}

function TypographyContent({ brand }) {
  const tokens = getTokens(brand);
  return (
    <>
      <div className="prose">
        <h2>Type families</h2>
        <p>Typography establishes hierarchy and voice. The {getBrand(brand).name} design system uses a curated set of typefaces aligned with brand identity.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
        {tokens.typography.families.map((f) => (
          <div key={f.token} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)' }}>
            <div style={{ fontFamily: f.value.split(',')[0].replace(/'/g, ''), fontSize: 'var(--text-4xl)', fontWeight: 700, lineHeight: 1, marginBottom: 'var(--space-3)', color: 'var(--color-text-primary)' }}>
              Aa
            </div>
            <div style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>{f.name}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>{`--${f.token}`}</div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{f.usage}</div>
          </div>
        ))}
      </div>
      <div className="prose">
        <h2>Type scale</h2>
        <p>A harmonious type scale provides visual rhythm and clear hierarchy.</p>
      </div>
      <TypographyTable scale={tokens.typography.scale} />
    </>
  );
}

function SpacingContent({ brand }) {
  const tokens = getTokens(brand);
  return (
    <>
      <div className="prose">
        <h2>Spacing system</h2>
        <p>The {getBrand(brand).name} spacing system is built on a 4px base grid. All spacing values are multiples of 4px, creating visual rhythm and alignment consistency.</p>
        <h3>Principles</h3>
        <ul>
          <li>Use spacing tokens, never hardcoded pixel values</li>
          <li>Prefer smaller increments within components, larger increments between sections</li>
          <li>Maintain consistent spacing within a given context</li>
        </ul>
      </div>
      <SpacingTokenTable tokens={tokens.spacing} />
    </>
  );
}

function BreakpointsContent({ brand }) {
  const tokens = getTokens(brand);
  return (
    <>
      <div className="prose">
        <h2>Responsive breakpoints</h2>
        <p>The {getBrand(brand).name} grid uses a mobile-first approach. Breakpoints define where layout changes occur.</p>
        <h3>Approach</h3>
        <ul>
          <li>Design for mobile first, then enhance for larger screens</li>
          <li>Use the <code>md</code> breakpoint (768px) to show the sidebar</li>
          <li>Use the <code>lg</code> breakpoint (1024px) for 3-column grids</li>
        </ul>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', margin: 'var(--space-6) 0' }}>
        {tokens.breakpoints.map((bp) => (
          <div key={bp.token} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)' }}>
            <code style={{ background: 'var(--color-primary-subtle)', color: 'var(--color-primary)', padding: '2px var(--space-2)', borderRadius: 'var(--radius-base)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap' }}>{bp.value}</code>
            <div>
              <div style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>{bp.name} — <code style={{ fontSize: 'var(--text-xs)' }}>{`--${bp.token}`}</code></div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{bp.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function GenericFoundationContent({ pageId, pageLabel, brand }) {
  const contentMap = {
    'design-tokens': {
      title: 'Design Tokens',
      body: `Design tokens are the named variables that encode design decisions across the system. They connect design tools to code, ensuring consistent implementation.`,
    },
    'iconography': {
      title: 'Iconography',
      body: `The ${getBrand(brand).name} icon set is a collection of 200+ SVG icons optimized for all screen sizes. Icons follow a consistent visual style with 2px stroke weight.`,
    },
    'grid-layout': {
      title: 'Grid & Layout',
      body: `The layout grid provides a consistent structure for page composition. The system uses a 12-column grid with responsive gutters and margins.`,
    },
    'motion': {
      title: 'Motion & Elevation',
      body: `Motion gives life to the interface — it provides feedback, guides attention, and communicates state changes. Use motion purposefully and sparingly.`,
    },
    'shadows': {
      title: 'Shadows',
      body: `Shadows convey elevation and depth. The ${getBrand(brand).name} shadow system uses 5 levels of elevation, from xs (subtle) to 2xl (overlay).`,
    },
  };
  const c = contentMap[pageId] || { title: pageLabel, body: 'Content coming soon.' };
  return (
    <div className="prose">
      <h2>{c.title}</h2>
      <p>{c.body}</p>
      <div className="callout">This section is actively being developed. Check back soon for complete documentation.</div>
    </div>
  );
}

const FOUNDATION_LABELS = {
  colour: 'Colour',
  typography: 'Typography',
  'design-tokens': 'Design Tokens',
  iconography: 'Iconography',
  'grid-layout': 'Grid & Layout',
  spacing: 'Spacing',
  breakpoints: 'Breakpoints',
  motion: 'Motion & Elevation',
  shadows: 'Shadows',
};

export default function FoundationPage({ pageContext, location }) {
  const { brand, pageId, pageLabel } = pageContext;
  const { switchBrand } = useBrand();

  useEffect(() => { switchBrand(brand); }, [brand]);

  const brandData = getBrand(brand);
  const path = location?.pathname || `/${brand}/foundations/${pageId}/`;
  const label = FOUNDATION_LABELS[pageId] || pageLabel;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: brandData.name, path: `/${brand}/` },
    { label: 'Foundations', path: `/${brand}/foundations/colour/` },
    { label },
  ];

  function getDesignContent() {
    switch (pageId) {
      case 'colour': return <ColourContent brand={brand} />;
      case 'typography': return <TypographyContent brand={brand} />;
      case 'spacing': return <SpacingContent brand={brand} />;
      case 'breakpoints': return <BreakpointsContent brand={brand} />;
      default: return <GenericFoundationContent pageId={pageId} pageLabel={label} brand={brand} />;
    }
  }

  function getA11yContent() {
    if (pageId === 'colour') return <ColourAccessibility brand={brand} />;
    return (
      <div className="prose">
        <h2>Accessibility considerations</h2>
        <p>Accessibility considerations for {label.toLowerCase()} in the {brandData.name} design system.</p>
        <p>Refer to the <a href={`/${brand}/accessibility/accessible-by-design/`}>Accessibility section</a> for detailed guidance.</p>
      </div>
    );
  }

  const tabs = [
    { id: 'design', label: 'Design', content: getDesignContent() },
    { id: 'accessibility', label: 'Accessibility', content: getA11yContent() },
    {
      id: 'code',
      label: 'Code',
      content: (
        <div className="prose">
          <h2>Using {label} tokens in code</h2>
          <p>Import and use the {label.toLowerCase()} tokens in your CSS or JavaScript.</p>
          <pre><code>{`/* CSS custom properties */
.my-component {
  ${pageId === 'colour' ? 'color: var(--color-primary);' : ''}
  ${pageId === 'spacing' ? 'padding: var(--space-4);' : ''}
  ${pageId === 'typography' ? 'font-family: var(--font-body);\n  font-size: var(--text-base);' : ''}
}`}</code></pre>
          <pre><code>{`/* JavaScript tokens import */
import tokens from '@ie-design/${brand}-ui/tokens/${pageId}';`}</code></pre>
        </div>
      ),
    },
  ];

  return (
    <BrandLayout brand={brand} activePath={path} title={`${label} — Foundations`}>
      <Breadcrumbs items={breadcrumbs} />

      <div style={{ marginBottom: 'var(--space-2)' }}>
        <span className="tag">Foundations</span>
      </div>
      <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-extrabold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
        {label}
      </h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
        The {label.toLowerCase()} system for {brandData.name} — purpose-built tokens and guidelines for consistent implementation.
      </p>

      <Tabs tabs={tabs} defaultTab="design" />
    </BrandLayout>
  );
}
