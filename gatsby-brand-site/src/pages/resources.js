import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Breadcrumbs from '../components/layout/Breadcrumbs';

const RESOURCES = [
  {
    category: 'Design Tools',
    items: [
      { icon: '🎨', name: 'Figma UI Kit — IE', desc: 'IE brand components, tokens, and design specs', link: '#' },
      { icon: '🎨', name: 'Figma UI Kit — Lexus', desc: 'Lexus brand components, tokens, and design specs', link: '#' },
      { icon: '🎨', name: 'Figma UI Kit — Toyota', desc: 'Toyota brand components, tokens, and design specs', link: '#' },
    ],
  },
  {
    category: 'Development',
    items: [
      { icon: '📦', name: '@ie-design/ie-ui', desc: 'IE React component library on npm', link: '#' },
      { icon: '📦', name: '@ie-design/lexus-ui', desc: 'Lexus React component library on npm', link: '#' },
      { icon: '📦', name: '@ie-design/toyota-ui', desc: 'Toyota React component library on npm', link: '#' },
    ],
  },
  {
    category: 'Storybook',
    items: [
      { icon: '📖', name: 'IE Storybook', desc: 'Live interactive components and documentation', link: '#' },
      { icon: '📖', name: 'Lexus Storybook', desc: 'Live interactive components and documentation', link: '#' },
      { icon: '📖', name: 'Toyota Storybook', desc: 'Live interactive components and documentation', link: '#' },
    ],
  },
  {
    category: 'Design Tokens',
    items: [
      { icon: '🔷', name: 'IE Tokens (JSON)', desc: 'W3C format design tokens for IE', link: '#' },
      { icon: '🔷', name: 'Lexus Tokens (JSON)', desc: 'W3C format design tokens for Lexus', link: '#' },
      { icon: '🔷', name: 'Toyota Tokens (JSON)', desc: 'W3C format design tokens for Toyota', link: '#' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>Resources | IE Design System</title>
        <meta name="description" content="Design tools, component libraries, tokens, and documentation resources for the IE Design System." />
        <html lang="en" />
      </Helmet>

      <Header activePath="/resources" />

      <main id="main-content" tabIndex={-1} style={{ flex: 1, padding: 'var(--space-10) 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Resources' }]} />

          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-display)' }}>
            Resources
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', maxWidth: 600, marginBottom: 'var(--space-10)', lineHeight: 'var(--leading-relaxed)' }}>
            Everything you need to design and build with the IE Design System family.
          </p>

          {RESOURCES.map((cat) => (
            <section key={cat.category} style={{ marginBottom: 'var(--space-10)' }}>
              <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', paddingBottom: 'var(--space-3)', borderBottom: '1px solid var(--color-border)' }}>
                {cat.category}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
                {cat.items.map((item) => (
                  <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)',
                    padding: 'var(--space-5)',
                    background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)', textDecoration: 'none',
                    transition: 'all var(--duration-fast)',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <span style={{ fontSize: '1.5rem', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', marginBottom: 4 }}>{item.name}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{item.desc}</div>
                    </div>
                    <span style={{ marginLeft: 'auto', color: 'var(--color-text-disabled)', fontSize: 'var(--text-sm)', flexShrink: 0 }}>↗</span>
                  </a>
                ))}
              </div>
            </section>
          ))}

          <div style={{ background: 'var(--color-primary-subtle)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)', marginTop: 'var(--space-6)' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text-primary)' }}>
              Brand Guidelines
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-5)', lineHeight: 'var(--leading-relaxed)' }}>
              In-depth brand guidelines for each design system, including colour usage, typography rules, and tone of voice.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              {['ie', 'lexus', 'toyota'].map((brand) => (
                <Link key={brand} to={`/${brand}/foundations/colour/`} style={{
                  padding: 'var(--space-2) var(--space-5)',
                  background: 'var(--color-primary)', color: 'white',
                  borderRadius: 'var(--radius-md)', textDecoration: 'none',
                  fontWeight: 600, fontSize: 'var(--text-sm)', textTransform: 'capitalize',
                }}>
                  {brand} Guidelines
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
