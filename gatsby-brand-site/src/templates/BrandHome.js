import React from 'react';
import { Link } from 'gatsby';
import { BrandLayout } from '../components/layout/Layout';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';
import AnimateIn from '../components/ui/AnimateIn';
import AnimatedStat from '../components/ui/AnimatedStat';

const cardStyle = {
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-xl)',
  padding: 'var(--space-6)',
  transition: 'box-shadow var(--duration-fast) var(--ease-in-out), transform var(--duration-fast)',
  textDecoration: 'none',
  display: 'block',
};

const cardHoverStyle = {
  boxShadow: 'var(--shadow-md)',
  transform: 'translateY(-2px)',
};

function FeatureCard({ icon, title, description, to }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Link
      to={to}
      style={{ ...cardStyle, ...(hovered ? cardHoverStyle : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: 'var(--space-3)' }}>
        {icon}
      </span>
      <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-2)', color: 'var(--color-text-primary)' }}>
        {title}
      </h3>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
        {description}
      </p>
    </Link>
  );
}

function HeroSection({ brand }) {
  const brandData = getBrand(brand);
  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'var(--space-12) var(--space-10)',
      marginBottom: 'var(--space-10)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.05,
        backgroundImage: 'radial-gradient(circle at 70% 50%, white 1px, transparent 1px)',
        backgroundSize: '30px 30px',
      }} aria-hidden="true" />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <span className="tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', marginBottom: 'var(--space-4)', display: 'inline-flex' }}>
          Design System v3.2
        </span>
        <h1 style={{
          fontSize: 'var(--text-5xl)',
          fontWeight: 'var(--weight-extrabold)',
          color: 'white',
          marginBottom: 'var(--space-4)',
          fontFamily: 'var(--font-display)',
          lineHeight: '1.1',
        }}>
          {brandData.name} Design System
        </h1>
        <p style={{
          fontSize: 'var(--text-xl)',
          color: 'rgba(255,255,255,0.85)',
          maxWidth: '560px',
          lineHeight: 'var(--leading-relaxed)',
          marginBottom: 'var(--space-8)',
        }}>
          {brandData.description}
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Link to={`/${brand}/getting-started/overview/`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: 'var(--space-3) var(--space-6)',
            background: 'white', color: 'var(--color-primary)',
            borderRadius: 'var(--radius-md)', textDecoration: 'none',
            fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)',
            transition: 'transform var(--duration-fast)',
          }}>
            Get Started →
          </Link>
          <Link to={`/${brand}/components/button/`} style={{
            display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
            padding: 'var(--space-3) var(--space-6)',
            background: 'rgba(255,255,255,0.15)', color: 'white',
            borderRadius: 'var(--radius-md)', textDecoration: 'none',
            fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-sm)',
            border: '1.5px solid rgba(255,255,255,0.3)',
          }}>
            Browse Components
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { label: 'Components', value: '50+' },
    { label: 'Design Tokens', value: '200+' },
    { label: 'WCAG AA', value: '100%' },
    { label: 'Version', value: 'v3.2.0' },
  ];
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-4)', marginBottom: 'var(--space-10)',
    }}>
      {stats.map((s, i) => (
        <AnimateIn key={s.label} variant="scaleIn" delay={i}>
          <div style={{
            background: 'var(--color-surface)', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)',
          }}>
            <AnimatedStat value={s.value} label={s.label} />
          </div>
        </AnimateIn>
      ))}
    </div>
  );
}

export default function BrandHome({ pageContext }) {
  const { brand } = pageContext;
  const { switchBrand } = useBrand();

  React.useEffect(() => { switchBrand(brand); }, [brand]);

  const features = [
    { icon: '🚀', title: 'Getting Started', description: 'Everything you need to start designing and building with this system.', to: `/${brand}/getting-started/overview/` },
    { icon: '🎨', title: 'Foundations', description: 'Colours, typography, spacing tokens, and the visual language fundamentals.', to: `/${brand}/foundations/colour/` },
    { icon: '🧩', title: 'Components', description: '50+ production-ready, accessible React components with full documentation.', to: `/${brand}/components/button/` },
    { icon: '📐', title: 'Patterns', description: 'Reusable compositions and patterns for common UX flows.', to: `/${brand}/patterns/forms/` },
    { icon: '✍️', title: 'Content', description: 'Tone of voice, writing guidelines, and inclusive language principles.', to: `/${brand}/content/tone-of-voice/` },
    { icon: '♿', title: 'Accessibility', description: 'WCAG compliance guides, keyboard navigation, and screen reader support.', to: `/${brand}/accessibility/accessible-by-design/` },
  ];

  return (
    <BrandLayout
      brand={brand}
      activePath={`/${brand}/`}
      title={`${getBrand(brand).name} Design System`}
      description={getBrand(brand).description}
    >
      <HeroSection brand={brand} />
      <StatsBar brand={brand} />

      <section style={{ marginBottom: 'var(--space-10)' }}>
        <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--space-2)', color: 'var(--color-text-primary)' }}>
          Explore the system
        </h2>
        <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-6)' }}>
          Start with foundations and build up to complex patterns.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 'var(--space-4)' }}>
          {features.map((f, i) => (
            <AnimateIn key={f.title} variant="fadeUp" delay={i}>
              <FeatureCard {...f} />
            </AnimateIn>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-bold)', marginBottom: 'var(--space-2)', color: 'var(--color-text-primary)' }}>
          What's new in v3.2
        </h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {['New DatePicker component with full keyboard navigation', 'Updated colour tokens with improved WCAG AA contrast ratios', 'Motion tokens — spring and ease curves now available', 'New Figma UI Kit with auto-layout components'].map((item) => (
            <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)' }}>
              <span style={{ color: 'var(--color-primary)', fontWeight: 'var(--weight-bold)', flexShrink: 0 }}>→</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </BrandLayout>
  );
}
