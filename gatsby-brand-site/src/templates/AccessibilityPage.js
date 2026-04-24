import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

const PAGE_CONTENT = {
  'accessible-by-design': {
    title: 'Accessible by Design',
    intro: "Accessibility is not an afterthought — it's built into every decision from the ground up.",
    body: () => (
      <div className="prose">
        <h2>Our commitment</h2>
        <p>Every component, pattern, and guideline in this design system is created with accessibility as a first principle. We target WCAG 2.1 AA compliance as a minimum baseline for all production components.</p>
        <h3>What "accessible by design" means</h3>
        <ul>
          <li><strong>Semantic HTML</strong> — Use elements for their intended purpose. Buttons for actions, links for navigation.</li>
          <li><strong>Keyboard navigable</strong> — All interactive elements are reachable and operable with a keyboard alone.</li>
          <li><strong>Screen reader support</strong> — ARIA roles, labels, and live regions are used correctly and tested.</li>
          <li><strong>Colour contrast</strong> — All text meets 4.5:1 for normal text, 3:1 for large text (WCAG AA).</li>
          <li><strong>Focus management</strong> — Focus rings are visible and logical. Focus trapping is applied in modals.</li>
          <li><strong>Error handling</strong> — Errors are communicated clearly, not just through colour.</li>
        </ul>
        <h3>Disability types we design for</h3>
        <ul>
          <li>Visual: blindness, low vision, colour blindness</li>
          <li>Motor: difficulty using a mouse or keyboard</li>
          <li>Cognitive: dyslexia, ADHD, memory or attention challenges</li>
          <li>Auditory: deafness or hard of hearing (for any audio/video content)</li>
        </ul>
        <div className="callout">
          The most impactful accessibility improvements come from the design phase — don't wait for development to start thinking about accessibility.
        </div>
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
        {[
          { principle: 'Perceivable', items: ['1.1.1 Non-text Content (A)', '1.3.1 Info & Relationships (A)', '1.4.1 Use of Colour (A)', '1.4.3 Contrast Minimum (AA)', '1.4.4 Resize Text (AA)'] },
          { principle: 'Operable', items: ['2.1.1 Keyboard (A)', '2.1.2 No Keyboard Trap (A)', '2.4.3 Focus Order (A)', '2.4.7 Focus Visible (AA)', '2.5.3 Label in Name (A)'] },
          { principle: 'Understandable', items: ['3.1.1 Language of Page (A)', '3.2.1 On Focus (A)', '3.3.1 Error Identification (A)', '3.3.2 Labels or Instructions (A)'] },
          { principle: 'Robust', items: ['4.1.1 Parsing (A)', '4.1.2 Name, Role, Value (A)', '4.1.3 Status Messages (AA)'] },
        ].map((p) => (
          <div key={p.principle} style={{ marginBottom: 'var(--space-6)' }}>
            <h3>{p.principle}</h3>
            <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
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
        <table>
          <thead>
            <tr><th>Foreground</th><th>Background</th><th>Ratio</th><th>Level</th></tr>
          </thead>
          <tbody>
            {[
              ['color-text-primary', 'color-bg', '14.5:1', 'AAA'],
              ['color-text-on-primary', 'color-primary', '4.6:1', 'AA'],
              ['color-text-secondary', 'color-bg', '7.2:1', 'AAA'],
              ['color-text-muted', 'color-bg', '4.5:1', 'AA'],
            ].map(([fg, bg, ratio, level]) => (
              <tr key={fg + bg}>
                <td><code>{`--${fg}`}</code></td>
                <td><code>{`--${bg}`}</code></td>
                <td><strong>{ratio}</strong></td>
                <td><span style={{ color: level === 'AAA' ? 'var(--color-success)' : 'var(--color-info)' }}>{level}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
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
        <table>
          <thead><tr><th>Key</th><th>Action</th></tr></thead>
          <tbody>
            {[
              ['Tab', 'Move focus forward through interactive elements'],
              ['Shift + Tab', 'Move focus backward'],
              ['Enter', 'Activate buttons, links, submit forms'],
              ['Space', 'Activate buttons, toggle checkboxes'],
              ['Arrow keys', 'Navigate within composite widgets (menus, tabs, carousels)'],
              ['Escape', 'Close modals, dismiss tooltips, cancel operations'],
              ['Home / End', 'Jump to first / last item in a list or table'],
            ].map(([k, a]) => (
              <tr key={k}><td><kbd style={{ background: 'var(--color-bg-muted)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-base)', padding: '1px 6px', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>{k}</kbd></td><td>{a}</td></tr>
            ))}
          </tbody>
        </table>
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
          <pre><code>{`<!-- Accessible ${content.title} implementation -->
<div role="region" aria-label="${content.title}">
  <!-- Content here -->
</div>`}</code></pre>
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
