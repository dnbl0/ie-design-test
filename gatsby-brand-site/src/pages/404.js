import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export default function NotFoundPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>404 — Page Not Found | IE Design System</title>
        <html lang="en" />
      </Helmet>

      <Header />

      <main id="main-content" tabIndex={-1} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--space-16)' }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <div style={{ fontSize: '5rem', marginBottom: 'var(--space-4)', lineHeight: 1 }}>404</div>
          <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', fontFamily: 'var(--font-display)' }}>
            Page not found
          </h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" style={{
              padding: 'var(--space-3) var(--space-6)',
              background: 'var(--color-primary)', color: 'white',
              borderRadius: 'var(--radius-md)', textDecoration: 'none',
              fontWeight: 600, fontSize: 'var(--text-sm)',
            }}>
              Go home
            </Link>
            <Link to="/ie/getting-started/overview/" style={{
              padding: 'var(--space-3) var(--space-6)',
              background: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)', textDecoration: 'none',
              fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)',
            }}>
              Documentation
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
