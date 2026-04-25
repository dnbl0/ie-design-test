import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function IeLogoHero() {
  return (
    <svg width="170" height="68" viewBox="0 0 425 170" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g clipPath="url(#ielogohero_clip)">
        <path d="M36.5638 0C12.4747 23.6709 0 53.7975 0 85.2152C0 118.354 12.9049 150.203 36.1336 170C37.4241 170 40.8654 166.557 40.8654 165.696C24.9494 142.456 16.3462 112.759 16.3462 84.7848C16.3462 56.8101 24.9494 27.1139 40.8654 3.87342C41.2955 2.58228 37.4241 0 36.5638 0Z" fill="white"/>
        <path d="M64.9543 58.962C64.5241 59.3924 64.5241 63.6962 64.9543 64.1266C73.5575 67.5696 73.9877 68.4304 73.9877 75.3165V116.633C73.9877 126.101 71.4067 126.962 66.6749 127.392H62.8034C61.9431 128.253 61.9431 132.987 62.8034 133.848C69.686 133.848 77.429 133.418 86.0322 133.418C94.2053 133.418 101.948 133.418 108.401 133.848C109.261 133.418 109.261 128.253 108.401 127.392H105.389C99.7974 126.962 97.2164 126.101 97.2164 117.063V74.4557C97.2164 70.1519 97.6466 52.9367 97.6466 49.924C97.6466 48.6329 96.7862 47.7722 95.4958 47.7722C94.2053 47.7722 87.7528 51.2152 82.5909 52.9367C76.9988 55.519 70.5464 57.6709 64.9543 58.962ZM85.602 0C78.2893 0 72.267 6.02532 72.267 13.3418C72.267 20.6582 78.2893 26.6835 85.602 26.6835C92.9148 26.6835 98.937 20.6582 98.937 13.3418C98.937 6.02532 92.9148 0 85.602 0Z" fill="white"/>
        <path d="M145.396 105.013C136.793 105.013 129.91 111.899 129.91 120.506C129.91 129.114 136.793 136 145.396 136C153.999 136 160.882 129.114 160.882 120.506C160.882 111.899 153.999 105.013 145.396 105.013Z" fill="white"/>
        <path d="M250.784 84.3539C252.505 84.3539 253.365 83.9235 254.226 82.6324C255.086 81.7716 255.086 80.9109 255.086 80.0501C255.086 63.2653 244.762 49.4932 224.545 49.4932C199.165 49.4932 182.389 70.5818 182.389 94.683C182.389 116.202 196.154 135.999 221.103 135.999C234.868 135.999 248.634 128.253 256.807 113.189C256.807 111.468 253.796 108.886 252.935 109.316C246.913 117.063 239.6 119.215 232.287 119.215C212.5 119.215 203.897 102.86 203.897 88.2273C203.897 85.2147 204.757 84.3539 207.768 84.3539H250.784V84.3539ZM204.757 75.7463C206.048 66.7084 212.5 57.24 222.394 57.24C230.137 57.24 234.438 63.6957 234.438 70.5818C234.438 75.3159 233.148 76.1767 230.137 76.6071C227.556 77.0375 224.114 77.0375 217.662 77.0375H206.048C204.757 77.0375 204.757 76.1767 204.757 75.7463Z" fill="white"/>
        <path d="M294.23 104.582C285.627 104.582 278.744 111.468 278.744 120.076C278.744 128.683 285.627 135.569 294.23 135.569C302.833 135.569 309.716 128.683 309.716 120.076C309.716 111.468 302.833 104.582 294.23 104.582Z" fill="white"/>
        <path d="M330.793 164.405C348.43 160.101 363.916 148.481 363.916 128.253C363.916 113.62 354.882 105.013 344.558 105.013C336.815 105.013 330.363 111.468 330.363 118.785C330.363 123.519 332.944 126.532 335.955 127.823C341.117 129.975 348 131.266 348 140.304C348 150.633 336.385 156.658 328.212 159.241C326.922 159.241 328.642 163.975 330.793 164.405Z" fill="white"/>
        <path d="M388.435 0C387.144 0 383.703 2.58228 383.703 3.44304C399.619 26.6835 408.222 56.8101 408.222 84.3544C408.222 112.329 399.619 142.456 383.703 165.266C383.703 166.127 387.575 169.57 388.435 169.57C412.094 149.772 424.568 117.494 424.568 84.7848C424.999 53.7975 412.094 23.6709 388.435 0Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="ielogohero_clip">
          <rect width="425" height="170" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}

export default function IndexPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>i.e., Design System — Brand Guidelines</title>
        <meta name="description" content="i.e., Design System — Brand guidelines, components, and design tokens." />
        <html lang="en" />
      </Helmet>

      <Header activePath="/" />

      <main id="main-content" tabIndex={-1} style={{ flex: 1 }}>
        {/* Hero */}
        <section style={{
          background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
          padding: 'var(--space-20) 0 var(--space-16)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.06,
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }} aria-hidden="true" />
          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--space-8)' }}>
              <IeLogoHero />
            </div>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', padding: 'var(--space-2) var(--space-4)', background: 'rgba(255,255,255,0.15)', borderRadius: '9999px', marginBottom: 'var(--space-6)' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80' }} />
              <span style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>v3.2.0 — Now Available</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'white', lineHeight: 1.1, marginBottom: 'var(--space-5)', fontFamily: 'var(--font-display)' }}>
              Design System
            </h1>
            <p style={{ fontSize: 'var(--text-xl)', color: 'rgba(255,255,255,0.85)', maxWidth: 560, margin: '0 auto var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
              Brand guidelines, shared components, design tokens, and complete documentation — professional, clear, and forward-thinking.
            </p>

            <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/ie/getting-started/overview/" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: 'var(--space-4) var(--space-8)',
                background: 'white', color: 'var(--color-primary)',
                borderRadius: 'var(--radius-md)', textDecoration: 'none',
                fontWeight: 700, fontSize: 'var(--text-base)',
              }}>
                Get Started →
              </Link>
              <Link to="/ie/components/button/" style={{
                display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
                padding: 'var(--space-4) var(--space-8)',
                background: 'rgba(255,255,255,0.15)', color: 'white',
                borderRadius: 'var(--radius-md)', textDecoration: 'none',
                fontWeight: 600, fontSize: 'var(--text-base)',
                border: '1.5px solid rgba(255,255,255,0.3)',
              }}>
                Browse Components
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: 'var(--space-10) 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 'var(--space-6)', textAlign: 'center' }}>
              {[
                { value: '50+', label: 'Components' },
                { value: '200+', label: 'Design Tokens' },
                { value: 'WCAG AA', label: 'Accessibility' },
                { value: '100%', label: 'Tested' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 'var(--text-4xl)', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-display)', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature sections */}
        <section style={{ padding: 'var(--space-16) 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
              <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
                Everything in one place
              </h2>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', maxWidth: 560, margin: '0 auto' }}>
                From foundations to full components — all documented, accessible, and ready to use.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-5)' }}>
              {[
                { icon: '🚀', title: 'Getting Started', desc: 'Everything you need to start designing and building with i.e.,', to: '/ie/getting-started/overview/' },
                { icon: '🎨', title: 'Foundations', desc: 'Colours, typography, spacing tokens, and visual language fundamentals.', to: '/ie/foundations/colour/' },
                { icon: '🧩', title: 'Components', desc: '50+ production-ready, accessible React components with full documentation.', to: '/ie/components/button/' },
                { icon: '📐', title: 'Patterns', desc: 'Reusable compositions and patterns for common UX flows.', to: '/ie/patterns/forms/' },
                { icon: '✍️', title: 'Content', desc: 'Tone of voice, writing guidelines, and inclusive language principles.', to: '/ie/content/tone-of-voice/' },
                { icon: '♿', title: 'Accessibility', desc: 'WCAG compliance guides, keyboard navigation, and screen reader support.', to: '/ie/accessibility/accessible-by-design/' },
              ].map((item) => (
                <Link key={item.title} to={item.to} style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-6)',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'all var(--duration-fast)',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
                >
                  <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: 'var(--space-3)' }}>{item.icon}</span>
                  <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-text-primary)' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Value props */}
        <section style={{ padding: 'var(--space-16) 0', background: 'var(--color-bg-subtle)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, marginBottom: 'var(--space-10)', fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)', textAlign: 'center' }}>
              Why i.e., Design System?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-6)' }}>
              {[
                { icon: '⚡', title: 'Ship faster', desc: 'Pre-built, tested components mean your team spends time on problems, not pixels.' },
                { icon: '♿', title: 'Accessible by default', desc: 'Every component meets WCAG 2.1 AA out of the box. No extra accessibility work required.' },
                { icon: '🎨', title: 'Consistent brand', desc: "One design language, built for i.e., Cohesive experiences across every product." },
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
