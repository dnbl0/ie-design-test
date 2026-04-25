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
      { icon: '🎨', name: 'Figma UI Kit', desc: 'i.e., brand components, tokens, and design specs', link: '#' },
      { icon: '🎨', name: 'Figma Token Library', desc: 'Shared design token library with brand theming', link: '#' },
      { icon: '🎨', name: 'Icon Library', desc: 'Full icon set in Figma with multiple weights', link: '#' },
    ],
  },
  {
    category: 'Development',
    items: [
      { icon: '📦', name: '@ie-design/ie-ui', desc: 'i.e., React component library on npm', link: '#' },
      { icon: '📦', name: '@ie-design/tokens', desc: 'W3C format design tokens package', link: '#' },
      { icon: '📦', name: '@ie-design/icons', desc: 'SVG icon set as React components', link: '#' },
    ],
  },
  {
    category: 'Storybook',
    items: [
      { icon: '📖', name: 'i.e., Storybook', desc: 'Live interactive components and documentation', link: '#' },
      { icon: '📖', name: 'Accessibility Addon', desc: 'Storybook axe-core accessibility checks', link: '#' },
      { icon: '📖', name: 'Design Token Addon', desc: 'Visual token browser in Storybook', link: '#' },
    ],
  },
  {
    category: 'Design Tokens',
    items: [
      { icon: '🔷', name: 'Tokens (JSON)', desc: 'W3C format design tokens for i.e.,', link: '#' },
      { icon: '🔷', name: 'Tokens (CSS)', desc: 'CSS custom property token stylesheet', link: '#' },
      { icon: '🔷', name: 'Tokens (SCSS)', desc: 'SCSS variable token file', link: '#' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>Resources | i.e., Design System</title>
        <meta name="description" content="Design tools, component libraries, tokens, and documentation resources for the i.e., Design System." />
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
            Everything you need to design and build with the i.e., Design System.
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
              In-depth guidelines including colour usage, typography rules, and tone of voice.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <Link to="/ie/foundations/colour/" style={{
                padding: 'var(--space-2) var(--space-5)',
                background: 'var(--color-primary)', color: 'white',
                borderRadius: 'var(--radius-md)', textDecoration: 'none',
                fontWeight: 600, fontSize: 'var(--text-sm)',
              }}>
                View Guidelines
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
