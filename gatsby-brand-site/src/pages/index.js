import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const BRANDS = [
  {
    id: 'ie',
    name: 'IE',
    fullName: 'IE Design',
    tagline: 'Innovation Everyday',
    description: 'The corporate design system powering IE digital products. Professional, clear, and inclusive.',
    color: '#003087',
    accent: '#0070CC',
    gradient: 'linear-gradient(135deg, #003087, #0070CC)',
    components: 50,
    status: 'stable',
  },
  {
    id: 'lexus',
    name: 'Lexus',
    fullName: 'Lexus Design',
    tagline: 'Experience Amazing',
    description: 'Premium design language for Lexus digital experiences. Refined, sophisticated, and meticulously crafted.',
    color: '#0A0A0A',
    accent: '#BF8B45',
    gradient: 'linear-gradient(135deg, #0A0A0A, #BF8B45)',
    components: 48,
    status: 'stable',
  },
  {
    id: 'toyota',
    name: 'Toyota',
    fullName: 'Toyota Design',
    tagline: "Let's Go Places",
    description: 'Bold and dynamic design system for Toyota digital touchpoints. Energetic, accessible, and built for everyone.',
    color: '#EB0A1E',
    accent: '#2C2C2C',
    gradient: 'linear-gradient(135deg, #EB0A1E, #2C2C2C)',
    components: 48,
    status: 'stable',
  },
];

function BrandCard({ brand }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--color-surface)',
        border: `1px solid ${hovered ? brand.color : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-2xl)',
        overflow: 'hidden',
        transition: 'all 250ms ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
        boxShadow: hovered ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
      }}
    >
      <div style={{ background: brand.gradient, padding: 'var(--space-8)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }} aria-hidden="true" />
        <div style={{
          width: 56, height: 56, borderRadius: 'var(--radius-xl)',
          background: 'rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '1.5rem', color: 'white',
          marginBottom: 'var(--space-4)', position: 'relative', zIndex: 1,
          backdropFilter: 'blur(4px)',
        }}>
          {brand.name[0]}
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'white', marginBottom: 4 }}>{brand.name}</h2>
          <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }}>{brand.tagline}</p>
        </div>
      </div>

      <div style={{ padding: 'var(--space-6)' }}>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)' }}>
          {brand.description}
        </p>

        <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-5)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A7A4A', display: 'inline-block' }} />
            {brand.status}
          </span>
          <span>·</span>
          <span>{brand.components}+ components</span>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Link to={`/${brand.id}/`} style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 'var(--space-3)',
            background: brand.color, color: 'white',
            borderRadius: 'var(--radius-md)', textDecoration: 'none',
            fontSize: 'var(--text-sm)', fontWeight: 600,
            transition: 'opacity var(--duration-fast)',
          }}>
            Explore System
          </Link>
          <Link to={`/${brand.id}/getting-started/overview/`} style={{
            padding: 'var(--space-3)',
            background: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-md)', textDecoration: 'none',
            fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)',
            transition: 'all var(--duration-fast)',
          }}>
            Docs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>IE Design System — Multi-Brand Design Guidelines</title>
        <meta name="description" content="IE Design System — Brand guidelines, components, and design tokens for IE, Lexus, and Toyota." />
        <html lang="en" />
      </Helmet>

      <Header activePath="/" />

      <main id="main-content" tabIndex={-1} style={{ flex: 1 }}>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(180deg, var(--color-bg-subtle) 0%, var(--color-bg) 100%)',
          padding: 'var(--space-20) 0 var(--space-16)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-2) var(--space-4)', background: 'var(--color-primary-subtle)', borderRadius: '9999px', marginBottom: 'var(--space-6)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1A7A4A' }} />
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>v3.2.0 — Now Available</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: 'var(--space-5)', fontFamily: 'var(--font-display)' }}>
              IE Design System
            </h1>
            <p style={{ fontSize: 'var(--text-xl)', color: 'var(--color-text-muted)', maxWidth: 600, margin: '0 auto var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
              A unified design ecosystem for IE, Lexus, and Toyota — with shared components, brand-specific tokens, and complete documentation.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/ie/getting-started/overview/" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: 'var(--space-4) var(--space-8)',
                background: 'var(--color-primary)', color: 'white',
                borderRadius: 'var(--radius-md)', textDecoration: 'none',
                fontWeight: 700, fontSize: 'var(--text-base)',
              }}>
                Get Started →
              </Link>
              <Link to="/design-systems" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: 'var(--space-4) var(--space-8)',
                background: 'transparent', color: 'var(--color-text-primary)',
                borderRadius: 'var(--radius-md)', textDecoration: 'none',
                fontWeight: 600, fontSize: 'var(--text-base)',
                border: '1.5px solid var(--color-border)',
              }}>
                View All Systems
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: 'var(--space-10) 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'var(--space-6)', textAlign: 'center' }}>
              {[
                { value: '3', label: 'Brand Systems' },
                { value: '150+', label: 'Components' },
                { value: '600+', label: 'Design Tokens' },
                { value: 'WCAG AA', label: 'Accessibility' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand cards */}
        <section style={{ padding: 'var(--space-16) 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
                Brand Design Systems
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', maxWidth: 560, margin: '0 auto' }}>
                Each brand has its own complete design system built on shared foundations.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-6)' }}>
              {BRANDS.map((brand) => <BrandCard key={brand.id} brand={brand} />)}
            </div>
          </div>
        </section>

        {/* Value props */}
        <section style={{ padding: 'var(--space-16) 0', background: 'var(--color-bg-subtle)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, marginBottom: 'var(--space-10)', fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', textAlign: 'center' }}>
              Why IE Design System?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-6)' }}>
              {[
                { icon: '⚡', title: 'Ship faster', desc: 'Pre-built, tested components mean your team spends time on problems, not pixels.' },
                { icon: '♿', title: 'Accessible by default', desc: 'Every component meets WCAG 2.1 AA out of the box. No extra accessibility work required.' },
                { icon: '🎨', title: 'Multi-brand ready', desc: 'One codebase, three brand themes. Switch brands with a single attribute.' },
                { icon: '📐', title: 'Design–dev parity', desc: 'Figma tokens sync directly to code. What you design is exactly what ships.' },
              ].map((v) => (
                <div key={v.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: 'var(--space-3)' }}>{v.icon}</div>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-text-primary)' }}>{v.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
