import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

const PAGE_CONTENT = {
  contribution: {
    title: 'Contribution Guidelines',
    intro: 'How to contribute to the design system — proposing new components, reporting bugs, and submitting design changes.',
    body: ({ brand }) => (
      <div className="prose">
        <h2>Ways to contribute</h2>
        <ul>
          <li><strong>Propose a new component</strong> — If you need a component that doesn't exist, open a proposal issue on GitHub</li>
          <li><strong>Report a bug</strong> — Use the GitHub issue tracker to report bugs with a clear reproduction case</li>
          <li><strong>Submit a design change</strong> — Open a Figma comment or GitHub discussion for design token or guideline changes</li>
          <li><strong>Improve documentation</strong> — Pull requests for documentation improvements are always welcome</li>
        </ul>
        <h3>Contribution process</h3>
        <ol>
          <li><strong>Discovery</strong> — Check if a similar issue or PR already exists</li>
          <li><strong>Proposal</strong> — Open an issue describing the change and its rationale</li>
          <li><strong>Design review</strong> — A design review is required for any visual changes</li>
          <li><strong>Development</strong> — Fork the repo, implement the change, and open a PR</li>
          <li><strong>Review</strong> — The design system team reviews and approves</li>
          <li><strong>Release</strong> — Merged changes are released in the next minor version</li>
        </ol>
        <div className="callout">
          Before proposing a new component, check if the use case can be solved by composing existing components. The design system aims to stay lean and avoid duplication.
        </div>
        <h3>PR checklist</h3>
        <ul>
          <li>Component has unit tests covering all props and states</li>
          <li>Component meets WCAG 2.1 AA accessibility standards</li>
          <li>Storybook stories cover all variants and states</li>
          <li>TypeScript definitions are complete and accurate</li>
          <li>Design tokens are used (no hardcoded values)</li>
          <li>Documentation is updated</li>
        </ul>
      </div>
    ),
  },
  'design-review': {
    title: 'Design Review Process',
    intro: 'How design changes are reviewed, approved, and incorporated into the system.',
    body: () => (
      <div className="prose">
        <h2>Review process</h2>
        <p>All visual and interaction design changes to the design system go through a structured review process to ensure quality, consistency, and accessibility.</p>
        <h3>Review stages</h3>
        {[
          { stage: '1. Initial Review', desc: 'The design system team reviews the proposal against existing patterns and brand guidelines. Takes 1–3 business days.' },
          { stage: '2. Accessibility Audit', desc: 'Changes are audited for WCAG compliance using automated tools and manual testing with screen readers.' },
          { stage: '3. Brand Alignment', desc: 'Changes are reviewed against brand guidelines for each affected brand (IE, Lexus, Toyota).' },
          { stage: '4. Cross-team Review', desc: 'Significant changes are shared with product teams for feedback before finalisation.' },
          { stage: '5. Approval & Release', desc: 'Approved changes are added to the backlog and scheduled for the next release cycle.' },
        ].map((s) => (
          <div key={s.stage} style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
            <h4 style={{ marginBottom: 'var(--space-1)' }}>{s.stage}</h4>
            <p style={{ margin: 0 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  'component-lifecycle': {
    title: 'Component Lifecycle',
    intro: 'How components progress from proposal to stable, and what each status means.',
    body: () => (
      <div className="prose">
        <h2>Lifecycle stages</h2>
        {[
          { stage: 'Proposed', color: '#718096', desc: 'Component has been suggested but not yet designed or built.' },
          { stage: 'Experimental', color: '#1565C0', desc: 'Component is in early development. API may change. Not recommended for production.' },
          { stage: 'Beta', color: '#B45309', desc: 'Component is feature-complete but undergoing testing. API is mostly stable.' },
          { stage: 'Stable', color: '#1A7A4A', desc: 'Component is production-ready. API is stable. Changes follow semver.' },
          { stage: 'Deprecated', color: '#C0392B', desc: 'Component is scheduled for removal. A replacement is available.' },
        ].map((s) => (
          <div key={s.stage} style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-4)', alignItems: 'flex-start' }}>
            <span style={{ display: 'inline-flex', padding: '2px 10px', borderRadius: '9999px', background: `${s.color}22`, color: s.color, fontWeight: 600, fontSize: 'var(--text-xs)', whiteSpace: 'nowrap', marginTop: 2 }}>
              {s.stage}
            </span>
            <p style={{ margin: 0 }}>{s.desc}</p>
          </div>
        ))}
        <h3>Deprecation policy</h3>
        <p>Deprecated components are maintained for at least 2 major versions before removal. Deprecation notices appear in Storybook, documentation, and the npm package as console warnings.</p>
      </div>
    ),
  },
  versioning: {
    title: 'Versioning & Release Notes',
    intro: 'How the design system is versioned and how to stay up to date.',
    body: () => (
      <div className="prose">
        <h2>Versioning</h2>
        <p>The design system follows <a href="https://semver.org" target="_blank" rel="noopener noreferrer">Semantic Versioning (semver)</a>:</p>
        <ul>
          <li><strong>Patch (x.x.1)</strong> — Bug fixes, documentation updates</li>
          <li><strong>Minor (x.1.x)</strong> — New components, new features (backwards-compatible)</li>
          <li><strong>Major (1.x.x)</strong> — Breaking changes, API removals</li>
        </ul>
        <h3>Release cadence</h3>
        <ul>
          <li>Patch releases: as needed</li>
          <li>Minor releases: monthly</li>
          <li>Major releases: annually (with 3-month deprecation notice)</li>
        </ul>
        <h3>Recent releases</h3>
        <table>
          <thead><tr><th>Version</th><th>Date</th><th>Summary</th></tr></thead>
          <tbody>
            {[
              ['v3.2.0', '2026-04', 'New DatePicker, updated colour tokens, motion system'],
              ['v3.1.0', '2026-03', 'Multi-Select component, improved form validation patterns'],
              ['v3.0.0', '2026-01', 'Tailwind v4 migration, new token structure (breaking)'],
            ].map(([v, d, s]) => (
              <tr key={v}><td><code>{v}</code></td><td>{d}</td><td>{s}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  support: {
    title: 'Support / Contact',
    intro: 'How to get help with the design system.',
    body: ({ brand }) => (
      <div className="prose">
        <h2>Getting support</h2>
        <p>The {getBrand(brand).name} design system team is here to help. Choose the right channel for your question.</p>
        <h3>Channels</h3>
        <table>
          <thead><tr><th>Channel</th><th>Use for</th><th>Response time</th></tr></thead>
          <tbody>
            {[
              ['GitHub Issues', 'Bug reports, feature requests', '2–5 business days'],
              ['GitHub Discussions', 'Questions, design discussions', '1–3 business days'],
              ['Slack #design-system', 'Quick questions, real-time help', 'Same day (business hours)'],
              ['Design reviews', 'Figma file reviews, design approvals', '3–5 business days'],
            ].map(([ch, u, rt]) => (
              <tr key={ch}><td>{ch}</td><td>{u}</td><td>{rt}</td></tr>
            ))}
          </tbody>
        </table>
        <h3>Before asking for help</h3>
        <ul>
          <li>Check the documentation — this site covers most use cases</li>
          <li>Search GitHub issues for similar questions</li>
          <li>Review the Storybook for component examples</li>
        </ul>
        <div className="callout">
          <strong>Office hours:</strong> The design system team hosts weekly drop-in sessions every Thursday 2–3pm. Join the Slack channel for the video link.
        </div>
      </div>
    ),
  },
};

export default function GovernancePage({ pageContext, location }) {
  const { brand, pageId, pageLabel } = pageContext;
  const { switchBrand } = useBrand();

  useEffect(() => { switchBrand(brand); }, [brand]);

  const brandData = getBrand(brand);
  const path = location?.pathname || `/${brand}/governance/${pageId}/`;
  const content = PAGE_CONTENT[pageId] || {
    title: pageLabel || 'Governance',
    intro: 'Governance documentation.',
    body: () => <div className="prose"><h2>Coming soon</h2><p>This page is being developed.</p></div>,
  };

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: brandData.name, path: `/${brand}/` },
    { label: 'Governance', path: `/${brand}/governance/contribution/` },
    { label: content.title },
  ];

  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: typeof content.body === 'function' ? content.body({ brand }) : content.body,
    },
  ];

  return (
    <BrandLayout brand={brand} activePath={path} title={`${content.title} — Governance`}>
      <Breadcrumbs items={breadcrumbs} />
      <div style={{ marginBottom: 'var(--space-2)' }}>
        <span className="tag">Governance</span>
      </div>
      <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-extrabold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
        {content.title}
      </h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
        {content.intro}
      </p>
      <Tabs tabs={tabs} defaultTab="overview" />
    </BrandLayout>
  );
}
