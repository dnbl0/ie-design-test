import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import StorybookEmbed from '../components/ui/StorybookEmbed';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

const PATTERN_CONTENT = {
  forms: {
    title: 'Forms',
    intro: 'Form patterns combine inputs, labels, validation, and actions into cohesive, accessible user flows.',
    storyId: 'patterns-forms--default',
  },
  'data-tables': {
    title: 'Data Tables',
    intro: 'Data table patterns for displaying and interacting with structured datasets.',
    storyId: 'patterns-data-tables--default',
  },
  'navigation-patterns': {
    title: 'Navigation Patterns',
    intro: 'Standard navigation structures — top nav, sidebar, breadcrumbs, and tabs.',
    storyId: 'patterns-navigation--default',
  },
  search: {
    title: 'Search',
    intro: 'Search input, results display, filtering, and empty state patterns.',
    storyId: 'patterns-search--default',
  },
  notifications: {
    title: 'Notifications',
    intro: 'Toast, alert, banner, and inline notification patterns for system feedback.',
    storyId: 'patterns-notifications--default',
  },
};

export default function PatternPage({ pageContext, location }) {
  const { brand, pageId, pageLabel } = pageContext;
  const { switchBrand } = useBrand();

  useEffect(() => { switchBrand(brand); }, [brand]);

  const brandData = getBrand(brand);
  const path = location?.pathname || `/${brand}/patterns/${pageId}/`;
  const content = PATTERN_CONTENT[pageId] || { title: pageLabel, intro: 'Pattern documentation.', storyId: null };

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: brandData.name, path: `/${brand}/` },
    { label: 'Patterns', path: `/${brand}/patterns/forms/` },
    { label: content.title },
  ];

  const tabs = [
    {
      id: 'design',
      label: 'Design',
      content: (
        <div className="prose">
          <h2>Pattern overview</h2>
          <p>{content.intro}</p>
          <h3>When to use</h3>
          <p>Use the {content.title.toLowerCase()} pattern when you need a standardised, accessible implementation that aligns with the {brandData.name} design language.</p>
          <h3>Anatomy</h3>
          <p>This pattern is composed of multiple components working together. See the Storybook embed in the Code tab for an interactive breakdown.</p>
          <div className="callout">
            All compositions in this pattern meet WCAG 2.1 AA accessibility standards when implemented as documented.
          </div>
        </div>
      ),
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      content: (
        <div className="prose">
          <h2>Accessibility considerations</h2>
          <p>The {content.title} pattern has specific accessibility requirements that go beyond individual component compliance.</p>
          <h3>Key requirements</h3>
          <ul>
            <li>Logical focus order throughout the pattern</li>
            <li>ARIA landmarks to group related content</li>
            <li>Live region announcements for dynamic updates</li>
            <li>Error summary at the top of the pattern for screen readers</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'code',
      label: 'Code',
      content: (
        <div>
          <StorybookEmbed
            storyId={content.storyId || `patterns-${pageId}--default`}
            title={`${content.title} Pattern — ${brandData.name} Storybook`}
            brand={brand}
            height={400}
          />
          <div className="prose">
            <h2>Implementation</h2>
            <pre><code>{`import { ${content.title.replace(/ /g, '')}Pattern } from '@ie-design/${brand}-ui/patterns';`}</code></pre>
          </div>
        </div>
      ),
    },
  ];

  return (
    <BrandLayout brand={brand} activePath={path} title={`${content.title} — Patterns`}>
      <Breadcrumbs items={breadcrumbs} />
      <div style={{ marginBottom: 'var(--space-2)' }}>
        <span className="tag">Patterns</span>
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
