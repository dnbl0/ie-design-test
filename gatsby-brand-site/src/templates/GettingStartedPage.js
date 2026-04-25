import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import AnimateIn from '../components/ui/AnimateIn';
import CodeBlock from '../components/ui/CodeBlock';
import TokenHierarchyDiagram from '../components/ui/TokenHierarchyDiagram';
import AdoptionLevelTrack from '../components/ui/AdoptionLevelTrack';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

const TOKEN_FORMATS = [
  { icon: '#', label: 'CSS', sublabel: 'Custom properties', color: '#2563EB', bg: '#2563EB12' },
  { icon: 'JS', label: 'JavaScript', sublabel: 'Importable constants', color: '#D97706', bg: '#D97706`12' },
  { icon: '{}', label: 'JSON', sublabel: 'W3C token format', color: '#7C3AED', bg: '#7C3AED12' },
  { icon: '▲', label: 'Figma', sublabel: 'Variables & styles', color: '#059669', bg: '#05966912' },
];

function OverviewDesign({ brand }) {
  const brandName = getBrand(brand).name;
  return (
    <div className="prose">
      <h2>What is the {brandName} Design System?</h2>
      <p>
        The {brandName} Design System is a shared language for designers and developers — a
        collection of reusable components, design tokens, patterns, and guidelines that enables
        teams to build consistent, accessible, and on-brand digital experiences.
      </p>

      <h3>Principles</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-3)', margin: 'var(--space-4) 0' }}>
        {[
          { title: 'Consistent', desc: 'Every touchpoint reflects a single, cohesive visual language.', icon: '🔗' },
          { title: 'Accessible', desc: 'All components meet WCAG 2.1 AA standards as a baseline.', icon: '♿' },
          { title: 'Efficient', desc: 'Pre-built, tested components let teams ship faster.', icon: '⚡' },
          { title: 'Flexible', desc: 'Tokens and variants allow brand-appropriate customisation within guardrails.', icon: '🎨' },
        ].map((p, i) => (
          <AnimateIn key={p.title} variant="fadeUp" delay={i}>
            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-4)', height: '100%' }}>
              <div style={{ fontSize: '1.25rem', marginBottom: 'var(--space-2)' }}>{p.icon}</div>
              <div style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>{p.title}</div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>{p.desc}</p>
            </div>
          </AnimateIn>
        ))}
      </div>

      <h3>What&apos;s included</h3>
      <AnimateIn variant="fadeIn">
        <ul>
          <li>Design tokens (colour, typography, spacing, motion)</li>
          <li>50+ React components with full accessibility support</li>
          <li>Pattern library and composition guidelines</li>
          <li>Figma UI Kit with auto-layout and component variants</li>
          <li>Storybook component explorer with live code examples</li>
          <li>Content guidelines and tone of voice</li>
        </ul>
      </AnimateIn>

      <AnimateIn variant="fadeIn">
        <div className="callout">
          <strong>New to design systems?</strong> A design system is not just a component
          library — it is a shared set of decisions that span design, development, and content.
          Start with Foundations to understand the building blocks.
        </div>
      </AnimateIn>
    </div>
  );
}

function OverviewCode({ brand }) {
  return (
    <div className="prose">
      <h2>Installation</h2>
      <p>The {getBrand(brand).name} component library is available as an npm package.</p>
      <CodeBlock language="bash" filename="terminal" code={`npm install @ie-design/${brand}-ui`} />
      <h3>Setup</h3>
      <p>Import the base CSS in your app entry point:</p>
      <CodeBlock language="javascript" filename="main.js" code={`import '@ie-design/${brand}-ui/styles/base.css';`} />
      <h3>Usage</h3>
      <CodeBlock language="jsx" filename="App.jsx" code={`import { Button } from '@ie-design/${brand}-ui';\n\nexport default function App() {\n  return <Button variant="primary">Get started</Button>;\n}`} />
      <h3>TypeScript</h3>
      <p>The library ships with full TypeScript definitions. No additional <code>@types</code> package is required.</p>
    </div>
  );
}

function DesignTabContent({ brand }) {
  const brandName = getBrand(brand).name;
  return (
    <div className="prose">
      <h2>Designing with {brandName}</h2>
      <p>Our Figma UI Kit provides all components, tokens, and patterns you need.</p>

      <h3>Getting the Figma UI Kit</h3>
      <AnimateIn variant="fadeIn">
        <ol>
          <li>Visit the Figma Community page</li>
          <li>Duplicate the file to your Figma workspace</li>
          <li>Link it as a library in your project files</li>
        </ol>
      </AnimateIn>

      <h3>Figma Variables</h3>
      <p>All design tokens are published as Figma Variables, enabling true design-to-code parity.</p>

      <h3>Design workflow</h3>
      <AnimateIn variant="fadeIn">
        <ul>
          <li>Use components from the library rather than building from scratch</li>
          <li>Apply tokens rather than raw values for consistency</li>
          <li>Review the component usage guidelines before designing a new pattern</li>
          <li>Submit new patterns through the contribution process</li>
        </ul>
      </AnimateIn>
    </div>
  );
}

function CodeSetupContent({ brand }) {
  return (
    <div className="prose">
      <h2>Developer Setup</h2>
      <h3>Requirements</h3>
      <AnimateIn variant="fadeIn">
        <ul>
          <li>Node.js 18+</li>
          <li>React 18+</li>
          <li>TypeScript 5+ (recommended)</li>
        </ul>
      </AnimateIn>
      <h3>Package installation</h3>
      <CodeBlock language="bash" filename="terminal" code={`npm install @ie-design/${brand}-ui`} />
      <h3>Next.js integration</h3>
      <CodeBlock language="javascript" filename="next.config.js" code={`/** @type {import('next').NextConfig} */\nmodule.exports = {\n  transpilePackages: ['@ie-design/${brand}-ui'],\n};`} />
    </div>
  );
}

function TokensContent() {
  return (
    <div className="prose">
      <h2>Design Tokens Overview</h2>
      <p>
        Design tokens are the atomic values of the design system — colours, spacing, typography,
        motion. They create a single source of truth shared between design tools and code.
      </p>

      <h3>Token hierarchy</h3>
      <TokenHierarchyDiagram />

      <AnimateIn variant="fadeIn">
        <div className="callout">
          Always use semantic tokens in your code — never reference primitive tokens directly.
          This keeps your code resilient to future token restructuring.
        </div>
      </AnimateIn>

      <h3>Token formats</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 'var(--space-3)', margin: 'var(--space-4) 0' }}>
        {TOKEN_FORMATS.map((f, i) => (
          <AnimateIn key={f.label} variant="scaleIn" delay={i}>
            <div style={{ background: f.bg, border: `1.5px solid ${f.color}33`, borderRadius: 'var(--radius-xl)', padding: 'var(--space-4)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-bold)', color: f.color, marginBottom: 'var(--space-2)' }}>{f.icon}</div>
              <div style={{ fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', marginBottom: 2 }}>{f.label}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{f.sublabel}</div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}

function AdoptionContent() {
  return (
    <div className="prose">
      <h2>Adoption Levels</h2>
      <p>Teams adopt design systems progressively. These levels help set expectations at each stage.</p>
      <AdoptionLevelTrack />
    </div>
  );
}

/* ---- Page metadata ---- */

const PAGE_META = {
  overview: { title: 'Overview',        description: 'Get familiar with the design system — what it is, what it contains, and how to get up and running.' },
  design:   { title: 'Design',          description: 'How to design with this design system using Figma and our design token library.' },
  code:     { title: 'Code',            description: 'Developer setup, tooling, and integration guide for the component library.' },
  tokens:   { title: 'Design Tokens',   description: 'How design tokens work, how they are structured, and how to use them in code.' },
  adoption: { title: 'Adoption Levels', description: 'Understand the different levels of design system adoption and what is expected at each stage.' },
};

function getDesignContent(pageId, brand) {
  switch (pageId) {
    case 'overview':  return <OverviewDesign brand={brand} />;
    case 'design':    return <DesignTabContent brand={brand} />;
    case 'code':      return <CodeSetupContent brand={brand} />;
    case 'tokens':    return <TokensContent />;
    case 'adoption':  return <AdoptionContent />;
    default:          return <OverviewDesign brand={brand} />;
  }
}

function getCodeContent(pageId, brand) {
  if (pageId === 'overview') return <OverviewCode brand={brand} />;
  return (
    <div className="prose">
      <h2>Code Examples</h2>
      <p>Code examples and implementation details.</p>
      <CodeBlock language="javascript" filename="example.js" code={`import { } from '@ie-design/${brand}-ui';`} />
    </div>
  );
}

export default function GettingStartedPage({ pageContext, location }) {
  const { brand, pageId } = pageContext;
  const { switchBrand } = useBrand();

  useEffect(() => { switchBrand(brand); }, [brand]);

  const brandData = getBrand(brand);
  const meta = PAGE_META[pageId] || PAGE_META.overview;
  const path = (location && location.pathname) || ('/' + brand + '/getting-started/' + pageId + '/');

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: brandData.name, path: '/' + brand + '/' },
    { label: 'Getting Started', path: '/' + brand + '/getting-started/overview/' },
    { label: meta.title },
  ];

  const tabs = [
    {
      id: 'design',
      label: 'Design',
      content: getDesignContent(pageId, brand),
    },
    {
      id: 'accessibility',
      label: 'Accessibility',
      content: (
        <div className="prose">
          <h2>Accessibility Notes</h2>
          <p>
            Accessibility considerations for {meta.title.toLowerCase()} in the {brandData.name} design system.
            See the <a href={'/' + brand + '/accessibility/accessible-by-design/'}>Accessibility section</a> for
            detailed guidance.
          </p>
        </div>
      ),
    },
    {
      id: 'code',
      label: 'Code',
      content: getCodeContent(pageId, brand),
    },
  ];

  return (
    <BrandLayout brand={brand} activePath={path} title={meta.title + ' — Getting Started'} description={meta.description}>
      <Breadcrumbs items={breadcrumbs} />
      <div style={{ marginBottom: 'var(--space-2)' }}>
        <span className="tag">Getting Started</span>
      </div>
      <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-extrabold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
        {meta.title}
      </h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
        {meta.description}
      </p>
      <Tabs tabs={tabs} defaultTab="design" />
    </BrandLayout>
  );
}
