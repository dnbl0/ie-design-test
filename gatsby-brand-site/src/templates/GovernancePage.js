import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import AnimateIn from '../components/ui/AnimateIn';
import ProcessFlow from '../components/ui/ProcessFlow';
import ComponentLifecycleDiagram from '../components/ui/ComponentLifecycleDiagram';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

const CONTRIBUTION_STEPS = [
  { label: 'Discovery', description: 'Check if a similar issue or PR already exists.' },
  { label: 'Proposal', description: 'Open an issue with rationale and context.' },
  { label: 'Design review', description: 'Required for any visual changes.' },
  { label: 'Development', description: 'Fork, implement, and open a PR.' },
  { label: 'Review', description: 'Design system team reviews and approves.' },
  { label: 'Release', description: 'Merged in the next minor version.' },
];

const DESIGN_REVIEW_STEPS = [
  { label: 'Initial Review', description: 'Checked against existing patterns and brand guidelines. Takes 1–3 business days.' },
  { label: 'Accessibility Audit', description: 'WCAG compliance via automated tools and manual screen reader testing.' },
  { label: 'Brand Alignment', description: 'Reviewed against the i.e., brand guidelines.' },
  { label: 'Cross-team Review', description: 'Significant changes shared with product teams for feedback.' },
  { label: 'Approval & Release', description: 'Approved changes scheduled for the next release cycle.' },
];

const SUPPORT_CHANNELS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    channel: 'GitHub Issues',
    use: 'Bug reports, feature requests',
    time: '2–5 business days',
    color: 'var(--color-primary)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    channel: 'GitHub Discussions',
    use: 'Questions, design discussions',
    time: '1–3 business days',
    color: '#7C3AED',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    channel: 'Slack #design-system',
    use: 'Quick questions, real-time help',
    time: 'Same day (business hours)',
    color: '#059669',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    channel: 'Design reviews',
    use: 'Figma file reviews, design approvals',
    time: '3–5 business days',
    color: '#D97706',
  },
];

const PAGE_CONTENT = {
  contribution: {
    title: 'Contribution Guidelines',
    intro: 'How to contribute to the design system — proposing new components, reporting bugs, and submitting design changes.',
    body: ({ brand }) => (
      <div className="prose">
        <h2>Ways to contribute</h2>
        <AnimateIn variant="fadeIn">
          <ul>
            <li><strong>Propose a new component</strong> — If you need a component that doesn&apos;t exist, open a proposal issue on GitHub</li>
            <li><strong>Report a bug</strong> — Use the GitHub issue tracker with a clear reproduction case</li>
            <li><strong>Submit a design change</strong> — Open a Figma comment or GitHub discussion for token/guideline changes</li>
            <li><strong>Improve documentation</strong> — Pull requests for docs improvements are always welcome</li>
          </ul>
        </AnimateIn>

        <h3>Contribution process</h3>
        <ProcessFlow steps={CONTRIBUTION_STEPS} variant="horizontal" />

        <AnimateIn variant="fadeIn">
          <div className="callout">
            Before proposing a new component, check if the use case can be solved by composing existing components. The design system aims to stay lean and avoid duplication.
          </div>
        </AnimateIn>

        <h3>PR checklist</h3>
        <AnimateIn variant="fadeUp">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', margin: 'var(--space-4) 0' }}>
            {[
              'Component has unit tests covering all props and states',
              'Component meets WCAG 2.1 AA accessibility standards',
              'Storybook stories cover all variants and states',
              'TypeScript definitions are complete and accurate',
              'Design tokens are used (no hardcoded values)',
              'Documentation is updated',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-3) var(--space-4)' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2, color: 'var(--color-success)' }}>
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </AnimateIn>
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
        <ProcessFlow steps={DESIGN_REVIEW_STEPS} variant="vertical" />
      </div>
    ),
  },
  'component-lifecycle': {
    title: 'Component Lifecycle',
    intro: 'How components progress from proposal to stable, and what each status means.',
    body: () => (
      <div className="prose">
        <h2>Lifecycle stages</h2>
        <ComponentLifecycleDiagram />
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
        <p>The design system follows <a href="https://semver.org" target="_blank" rel="noopener noreferrer">Semantic Versioning (semver)</a>. Changes are categorised into three types:</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 'var(--space-4)', margin: 'var(--space-5) 0' }}>
          {[
            { bump: 'PATCH', example: 'x.x.1', color: '#059669', bg: '#05966912', desc: 'Bug fixes, documentation updates', cadence: 'As needed' },
            { bump: 'MINOR', example: 'x.1.x', color: '#2563EB', bg: '#2563EB12', desc: 'New components, backwards-compatible features', cadence: 'Monthly' },
            { bump: 'MAJOR', example: '1.x.x', color: '#DC2626', bg: '#DC262612', desc: 'Breaking changes, API removals', cadence: 'Annually' },
          ].map((v, i) => (
            <AnimateIn key={v.bump} variant="scaleIn" delay={i}>
              <div style={{ background: v.bg, border: `1.5px solid ${v.color}33`, borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-extrabold)', color: v.color, marginBottom: 'var(--space-1)', lineHeight: 1 }}>{v.example}</div>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-semibold)', color: v.color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-3)' }}>{v.bump}</div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: '0 0 var(--space-2)' }}>{v.desc}</p>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', color: 'var(--color-text-secondary)' }}>{v.cadence}</div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <h3>Recent releases</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', margin: 'var(--space-4) 0' }}>
          {[
            { version: 'v3.2.0', date: '2026-04', summary: 'New DatePicker, updated colour tokens, motion system' },
            { version: 'v3.1.0', date: '2026-03', summary: 'Multi-Select component, improved form validation patterns' },
            { version: 'v3.0.0', date: '2026-01', summary: 'Tailwind v4 migration, new token structure (breaking)' },
          ].map((r, i) => (
            <AnimateIn key={r.version} variant="slideRight" delay={i}>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'var(--space-4)', alignItems: 'center', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-3) var(--space-4)' }}>
                <div>
                  <code style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-primary)' }}>{r.version}</code>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>{r.date}</div>
                </div>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>{r.summary}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 'var(--space-4)', margin: 'var(--space-4) 0' }}>
          {SUPPORT_CHANNELS.map((ch, i) => (
            <AnimateIn key={ch.channel} variant="fadeUp" delay={i}>
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)', height: '100%' }}>
                <div style={{ color: ch.color, marginBottom: 'var(--space-3)' }}>{ch.icon}</div>
                <div style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>{ch.channel}</div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: '0 0 var(--space-2)', lineHeight: 'var(--leading-relaxed)' }}>{ch.use}</p>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 'var(--weight-medium)', color: ch.color }}>{ch.time}</div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <h3>Before asking for help</h3>
        <AnimateIn variant="fadeIn">
          <ul>
            <li>Check the documentation — this site covers most use cases</li>
            <li>Search GitHub issues for similar questions</li>
            <li>Review the Storybook for component examples</li>
          </ul>
        </AnimateIn>

        <AnimateIn variant="fadeUp">
          <div className="callout" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <span
              className="pulse-dot"
              style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: 'var(--color-success)', flexShrink: 0 }}
              aria-hidden="true"
            />
            <span><strong>Office hours:</strong> The design system team hosts weekly drop-in sessions every Thursday 2–3pm. Join the Slack channel for the video link.</span>
          </div>
        </AnimateIn>
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
