import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Breadcrumbs from '../components/layout/Breadcrumbs';

const SECTIONS = [
  { id: 'getting-started', label: 'Getting Started', path: 'getting-started/overview', icon: '🚀' },
  { id: 'foundations', label: 'Foundations', path: 'foundations/colour', icon: '🎨' },
  { id: 'components', label: 'Components', path: 'components/button', icon: '🧩' },
  { id: 'patterns', label: 'Patterns', path: 'patterns/forms', icon: '📐' },
  { id: 'accessibility', label: 'Accessibility', path: 'accessibility/accessible-by-design', icon: '♿' },
  { id: 'tools', label: 'Tools & Resources', path: 'tools-resources', icon: '🛠️' },
];

export default function DesignSystemsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>i.e., Design System | Brand Guidelines</title>
        <meta name="description" content="i.e., Design System — complete brand guidelines, component documentation, and design tokens." />
        <html lang="en" />
      </Helmet>

      <Header activePath="/design-systems" />

      <main id="main-content" tabIndex={-1} style={{ flex: 1, padding: 'var(--space-10) 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Design System' }]} />

          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-display)' }}>
            i.e., Design System
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', maxWidth: 600, marginBottom: 'var(--space-10)', lineHeight: 'var(--leading-relaxed)' }}>
            A complete design system built on shared foundations with brand-specific tokens, typography, and visual identity.
          </p>

          <section style={{
            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-2xl)', overflow: 'hidden', marginBottom: 'var(--space-8)',
          }}>
            <div style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', padding: 'var(--space-6) var(--space-8)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <div>
                <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'white', margin: 0 }}>i.e.,</h2>
                <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.75)', margin: 0 }}>Corporate design system — professional, clear, and inclusive.</p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-3)' }}>
                <Link to="/ie/" style={{
                  padding: 'var(--space-2) var(--space-5)',
                  background: 'white', color: 'var(--color-primary)',
                  borderRadius: 'var(--radius-md)', textDecoration: 'none',
                  fontWeight: 700, fontSize: 'var(--text-sm)',
                }}>
                  Explore →
                </Link>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 0 }}>
              {SECTIONS.map((section, i) => (
                <Link key={section.id} to={`/ie/${section.path}/`} style={{
                  display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                  padding: 'var(--space-4) var(--space-5)',
                  textDecoration: 'none',
                  borderRight: i % 3 !== 2 ? '1px solid var(--color-border-subtle)' : 'none',
                  borderBottom: '1px solid var(--color-border-subtle)',
                  color: 'var(--color-text-secondary)',
                  transition: 'background var(--duration-fast)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-bg-subtle)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                >
                  <span style={{ fontSize: '1.1rem' }}>{section.icon}</span>
                  <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500 }}>{section.label}</span>
                  <span style={{ marginLeft: 'auto', opacity: 0.4, fontSize: 'var(--text-xs)' }}>→</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
