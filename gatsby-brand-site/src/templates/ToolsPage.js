import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

function ToolCard({ icon, title, description, link, linkLabel = 'Open →' }) {
  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
    }}>
      <div style={{ fontSize: '2rem' }}>{icon}</div>
      <div>
        <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>{title}</h3>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{description}</p>
      </div>
      <a href={link || '#'} target={link ? '_blank' : undefined} rel="noopener noreferrer" style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        padding: 'var(--space-2) var(--space-4)',
        background: 'var(--color-primary-subtle)', color: 'var(--color-primary)',
        borderRadius: 'var(--radius-md)', textDecoration: 'none',
        fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)',
        marginTop: 'auto',
        transition: 'background var(--duration-fast)',
      }}>
        {linkLabel}
      </a>
    </div>
  );
}

export default function ToolsPage({ pageContext, location }) {
  const { brand } = pageContext;
  const { switchBrand } = useBrand();

  useEffect(() => { switchBrand(brand); }, [brand]);

  const brandData = getBrand(brand);
  const path = location?.pathname || `/${brand}/tools-resources/`;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: brandData.name, path: `/${brand}/` },
    { label: 'Tools & Resources' },
  ];

  const tools = [
    { icon: '🎨', title: 'Figma UI Kit', description: `Auto-layout components, design tokens as Figma Variables, and design specs for the ${brandData.name} design system.`, link: brandData.figma, linkLabel: 'Open in Figma →' },
    { icon: '📖', title: 'Storybook', description: `Interactive component explorer with live previews, prop controls, and accessibility audits for all ${brandData.name} components.`, link: brandData.storybook, linkLabel: 'Open Storybook →' },
    { icon: '⚛️', title: 'React Component Library', description: `npm package containing all ${brandData.name} React components, TypeScript definitions, and CSS styles.`, link: '#', linkLabel: 'View on npm →' },
    { icon: '🐙', title: 'GitHub Repository', description: `Source code, contribution guidelines, issue tracker, and release notes for the ${brandData.name} design system.`, link: brandData.github, linkLabel: 'Open on GitHub →' },
    { icon: '🔷', title: 'Design Tokens', description: `Download design tokens in JSON (W3C format), CSS custom properties, or JavaScript. Suitable for Style Dictionary and Theo.`, link: '#', linkLabel: 'Download tokens →' },
    { icon: '🖼️', title: 'Icon Library', description: `200+ SVG icons in the ${brandData.name} visual style. Available as React components, SVG sprites, or individual files.`, link: '#', linkLabel: 'Browse icons →' },
    { icon: '🧪', title: 'Playground', description: `Interactive sandbox for testing components, composing layouts, and prototyping patterns.`, link: '#', linkLabel: 'Open playground →' },
    { icon: '📦', title: 'CSS / HTML Framework', description: `CSS custom properties, utility classes, and base styles for teams not using React.`, link: '#', linkLabel: 'View docs →' },
  ];

  return (
    <BrandLayout brand={brand} activePath={path} title="Tools & Resources">
      <Breadcrumbs items={breadcrumbs} />
      <div style={{ marginBottom: 'var(--space-2)' }}>
        <span className="tag">Tools & Resources</span>
      </div>
      <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-extrabold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
        Tools & Resources
      </h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-10)', lineHeight: 'var(--leading-relaxed)' }}>
        Everything you need to design and build with the {brandData.name} design system.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-5)' }}>
        {tools.map((tool) => <ToolCard key={tool.title} {...tool} />)}
      </div>

      <div style={{ marginTop: 'var(--space-12)', background: 'var(--color-primary-subtle)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)', borderLeftColor: 'var(--color-primary)', borderLeftWidth: 4 }}>
        <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)' }}>Need something not listed?</h2>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-5)', lineHeight: 'var(--leading-relaxed)' }}>
          If you need a resource that isn't listed here, reach out to the {brandData.name} design system team through the Governance section.
        </p>
        <a href={`/${brand}/governance/support/`} style={{
          display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
          padding: 'var(--space-3) var(--space-5)',
          background: 'var(--color-primary)', color: 'white',
          borderRadius: 'var(--radius-md)', textDecoration: 'none',
          fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)',
        }}>
          Contact the team →
        </a>
      </div>
    </BrandLayout>
  );
}
