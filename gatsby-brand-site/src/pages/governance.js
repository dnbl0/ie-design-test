import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Breadcrumbs from '../components/layout/Breadcrumbs';

const GOVERNANCE_SECTIONS = [
  { icon: '🤝', title: 'Contribution Guidelines', desc: 'How to propose and contribute new components, bug fixes, and improvements.', path: '/ie/governance/contribution/' },
  { icon: '🔍', title: 'Design Review Process', desc: 'The structured process for reviewing and approving design system changes.', path: '/ie/governance/design-review/' },
  { icon: '🔄', title: 'Component Lifecycle', desc: 'Stages from experimental to stable to deprecated, and what each means.', path: '/ie/governance/component-lifecycle/' },
  { icon: '📋', title: 'Versioning & Release Notes', desc: 'How we version releases, and what changed in each version.', path: '/ie/governance/versioning/' },
  { icon: '💬', title: 'Support / Contact', desc: 'How to get help from the design system team.', path: '/ie/governance/support/' },
];

export default function GovernancePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>Governance | IE Design System</title>
        <meta name="description" content="IE Design System governance — contribution guidelines, design review process, and versioning." />
        <html lang="en" />
      </Helmet>

      <Header activePath="/governance" />

      <main id="main-content" tabIndex={-1} style={{ flex: 1, padding: 'var(--space-10) 0' }}>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Governance' }]} />

          <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-display)' }}>
            Governance
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', maxWidth: 600, marginBottom: 'var(--space-10)', lineHeight: 'var(--leading-relaxed)' }}>
            How the IE Design System is maintained, evolved, and supported. Clear processes for contribution and change management.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-5)', marginBottom: 'var(--space-12)' }}>
            {GOVERNANCE_SECTIONS.map((section) => (
              <Link key={section.title} to={section.path} style={{
                display: 'flex', flexDirection: 'column', gap: 'var(--space-3)',
                padding: 'var(--space-6)',
                background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)', textDecoration: 'none',
                transition: 'all var(--duration-fast)',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <span style={{ fontSize: '1.75rem' }}>{section.icon}</span>
                <div>
                  <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 'var(--space-2)' }}>{section.title}</h2>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>{section.desc}</p>
                </div>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-primary)', fontWeight: 600, marginTop: 'auto' }}>Learn more →</span>
              </Link>
            ))}
          </div>

          <div style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-3)', color: 'var(--color-text-primary)' }}>Design System Team</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)', lineHeight: 'var(--leading-relaxed)' }}>
              The IE Design System is maintained by a dedicated team of designers and developers. We're committed to making the system better for everyone who uses it.
            </p>
            <Link to="/ie/governance/support/" style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-5)',
              background: 'var(--color-primary)', color: 'white',
              borderRadius: 'var(--radius-md)', textDecoration: 'none',
              fontWeight: 600, fontSize: 'var(--text-sm)',
            }}>
              Contact the team
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
