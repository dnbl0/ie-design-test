import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import AnimateIn from '../components/ui/AnimateIn';
import WCAGPrincipleCard from '../components/ui/WCAGPrincipleCard';
import DisabilityTypeGrid from '../components/ui/DisabilityTypeGrid';
import KeyboardKey from '../components/ui/KeyboardKey';
import CodeBlock from '../components/ui/CodeBlock';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

const WCAG_PRINCIPLES = [
  {
    principle: 'Perceivable',
    items: [
      '1.1.1 Non-text Content (A)',
      '1.3.1 Info & Relationships (A)',
      '1.4.1 Use of Colour (A)',
      '1.4.3 Contrast Minimum (AA)',
      '1.4.4 Resize Text (AA)',
    ],
  },
  {
    principle: 'Operable',
    items: [
      '2.1.1 Keyboard (A)',
      '2.1.2 No Keyboard Trap (A)',
      '2.4.3 Focus Order (A)',
      '2.4.7 Focus Visible (AA)',
      '2.5.3 Label in Name (A)',
    ],
  },
  {
    principle: 'Understandable',
    items: [
      '3.1.1 Language of Page (A)',
      '3.2.1 On Focus (A)',
      '3.3.1 Error Identification (A)',
      '3.3.2 Labels or Instructions (A)',
    ],
  },
  {
    principle: 'Robust',
    items: [
      '4.1.1 Parsing (A)',
      '4.1.2 Name, Role, Value (A)',
      '4.1.3 Status Messages (AA)',
    ],
  },
];

const DESIGN_PRINCIPLES = [
  { icon: '🏗️', title: 'Semantic HTML', desc: 'Use elements for their intended purpose. Buttons for actions, links for navigation.' },
  { icon: '⌨️', title: 'Keyboard navigable', desc: 'All interactive elements are reachable and operable with a keyboard alone.' },
  { icon: '📢', title: 'Screen reader support', desc: 'ARIA roles, labels, and live regions are used correctly and tested.' },
  { icon: '🎨', title: 'Colour contrast', desc: 'All text meets 4.5:1 for normal text, 3:1 for large text (WCAG AA).' },
  { icon: '🎯', title: 'Focus management', desc: 'Focus rings are visible and logical. Focus trapping is applied in modals.' },
  { icon: '⚠️', title: 'Error handling', desc: 'Errors are communicated clearly, not just through colour.' },
];

function ContrastBar({ ratio, level }) {
  const numericRatio = parseFloat(ratio);
  const pct = Math.min((numericRatio / 21) * 100, 100);
  const barColor = level === 'AAA' ? 'var(--color-success)' : 'var(--color-info)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', width: '100%' }}>
      <div style={{ flex: 1, height: 6, background: 'var(--color-bg-muted)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: barColor, borderRadius: 'var(--radius-full)' }} />
      </div>
      <strong style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', minWidth: '5ch' }}>{ratio}</strong>
    </div>
  );
}

const PAGE_CONTENT = {
  'accessible-by-design': {
    title: 'Accessible by Design',
    intro: "Accessibility is not an afterthought — it's built into every decision from the ground up.",
    body: () => (
      <div className="prose">
        <h2>Our commitment</h2>
        <p>Every component, pattern, and guideline in this design system is created with accessibility as a first principle. We target WCAG 2.1 AA compliance as a minimum baseline for all production components.</p>

        <h3>What &ldquo;accessible by design&rdquo; means</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-4)', margin: 'var(--space-6) 0' }}>
          {DESIGN_PRINCIPLES.map((p, i) => (
            <AnimateIn key={p.title} variant="fadeUp" delay={i}>
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)', height: '100%' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-3)' }}>{p.icon}</div>
                <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>{p.title}</h4>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>{p.desc}</p>
              </div>
            </AnimateIn>
          ))}
        </div>

        <h3>Disability types we design for</h3>
        <DisabilityTypeGrid />

        <AnimateIn variant="fadeIn">
          <div className="callout">
            The most impactful accessibility improvements come from the design phase — don&apos;t wait for development to start thinking about accessibility.
          </div>
        </AnimateIn>
      </div>
    ),
  },
  'wcag': {
    title: 'WCAG Compliance',
    intro: 'WCAG 2.1 AA compliance is the minimum standard. We provide detailed mapping of all criteria relevant to UI components.',
    body: () => (
      <div className="prose">
        <h2>WCAG 2.1 — Key criteria</h2>
        <p>The Web Content Accessibility Guidelines (WCAG) 2.1 are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-4)', margin: 'var(--space-6) 0' }}>
          {WCAG_PRINCIPLES.map((p, i) => (
            <WCAGPrincipleCard key={p.principle} principle={p.principle} items={p.items} index={i} />
          ))}
        </div>
      </div>
    ),
  },
  'colour-contrast': {
    title: 'Colour Contrast',
    intro: 'All colour combinations used in the system are tested for WCAG AA contrast ratios.',
    body: ({ brand }) => (
      <div className="prose">
        <h2>Contrast checker</h2>
        <p>Use the colour tokens in combination as defined below. Never use colours outside these approved pairings without testing the contrast ratio.</p>
        <h3>Approved pairings</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', margin: 'var(--space-4) 0' }}>
          {[
            { fg: 'color-text-primary', bg: 'color-bg', fgHex: '#1A1A2E', bgHex: '#FFFFFF', ratio: '14.5:1', level: 'AAA' },
            { fg: 'color-text-on-primary', bg: 'color-primary', fgHex: '#FFFFFF', bgHex: '#003087', ratio: '4.6:1', level: 'AA' },
            { fg: 'color-text-secondary', bg: 'color-bg', fgHex: '#4A5568', bgHex: '#FFFFFF', ratio: '7.2:1', level: 'AAA' },
            { fg: 'color-text-muted', bg: 'color-bg', fgHex: '#718096', bgHex: '#FFFFFF', ratio: '4.5:1', level: 'AA' },
          ].map((row) => (
            <AnimateIn key={row.fg + row.bg} variant="slideRight">
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-4)', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 'var(--space-4)', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 'var(--radius-base)', background: row.bgHex, border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: row.fgHex }} />
                  </div>
                  <div>
                    <code style={{ fontSize: 'var(--text-xs)', display: 'block' }}>{`--${row.fg}`}</code>
                    <code style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{`on --${row.bg}`}</code>
                  </div>
                </div>
                <ContrastBar ratio={row.ratio} level={row.level} />
                <span style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', padding: '2px 8px', borderRadius: 'var(--radius-full)', background: row.level === 'AAA' ? 'var(--color-success-subtle)' : 'var(--color-info-subtle)', color: row.level === 'AAA' ? 'var(--color-success)' : 'var(--color-info)' }}>{row.level}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    ),
  },
  'keyboard-navigation': {
    title: 'Keyboard Navigation',
    intro: 'All interactive elements must be reachable and operable using a keyboard alone.',
    body: () => (
      <div className="prose">
        <h2>Keyboard guidelines</h2>
        <h3>Focus order</h3>
        <p>Focus must follow a logical, predictable order that matches the visual and conceptual flow of the page. Generally this is left-to-right, top-to-bottom for LTR languages.</p>
        <h3>Focus indicators</h3>
        <p>All interactive elements must have a visible focus indicator. The design system applies a <code>3px outline</code> focus ring using the <code>--focus-ring</code> token.</p>
        <h3>Common keyboard patterns</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', margin: 'var(--space-4) 0' }}>
          {[
            ['Tab', 'Move focus forward through interactive elements'],
            ['Shift + Tab', 'Move focus backward'],
            ['Enter', 'Activate buttons, links, submit forms'],
            ['Space', 'Activate buttons, toggle checkboxes'],
            ['Arrow keys', 'Navigate within composite widgets (menus, tabs, carousels)'],
            ['Escape', 'Close modals, dismiss tooltips, cancel operations'],
            ['Home / End', 'Jump to first / last item in a list or table'],
          ].map(([key, action], i) => (
            <AnimateIn key={key} variant="slideRight" delay={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-3) var(--space-4)' }}>
                <div style={{ minWidth: 160, flexShrink: 0 }}>
                  <KeyboardKey>{key}</KeyboardKey>
                </div>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>{action}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    ),
  },
};

function getContent(pageId) {
  return PAGE_CONTENT[pageId] || {
    title: 'Accessibility',
    intro: 'Accessibility documentation for this section.',
    body: () => (
      <div className="prose">
        <h2>Coming soon</h2>
        <p>This accessibility section is being developed. Check back soon.</p>
      </div>
    ),
  };
}

export default function AccessibilityPage({ pageContext, location }) {
  const { brand, pageId, pageLabel } = pageContext;
  const { switchBrand } = useBrand();

  useEffect(() => { switchBrand(brand); }, [brand]);

  const brandData = getBrand(brand);
  const path = location?.pathname || `/${brand}/accessibility/${pageId}/`;
  const content = getContent(pageId);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: brandData.name, path: `/${brand}/` },
    { label: 'Accessibility', path: `/${brand}/accessibility/accessible-by-design/` },
    { label: content.title },
  ];

  const tabs = [
    {
      id: 'design',
      label: 'Design',
      content: typeof content.body === 'function' ? content.body({ brand }) : content.body,
    },
    {
      id: 'code',
      label: 'Code',
      content: (
        <div className="prose">
          <h2>Implementation</h2>
          <p>Code examples and ARIA patterns for {content.title.toLowerCase()}.</p>
          <CodeBlock
            language="html"
            filename={`${content.title.toLowerCase().replace(/ /g, '-')}.html`}
            code={`<!-- Accessible ${content.title} implementation -->
<div role="region" aria-label="${content.title}">
  <!-- Content here -->
</div>`}
          />
        </div>
      ),
    },
  ];

  return (
    <BrandLayout brand={brand} activePath={path} title={`${content.title} — Accessibility`}>
      <Breadcrumbs items={breadcrumbs} />
      <div style={{ marginBottom: 'var(--space-2)' }}>
        <span className="tag">Accessibility</span>
      </div>
      <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-extrabold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
        {content.title}
      </h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
        {content.intro}
      </p>
      <Tabs tabs={tabs} defaultTab="design" />
    </BrandLayout>
  );
}
