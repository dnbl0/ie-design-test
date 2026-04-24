import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

/* ---- Design tab content per page ---- */

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
      <ul>
        <li><strong>Consistent</strong> — Every touchpoint reflects a single, cohesive visual language.</li>
        <li><strong>Accessible</strong> — All components meet WCAG 2.1 AA standards as a baseline.</li>
        <li><strong>Efficient</strong> — Pre-built, tested components let teams ship faster.</li>
        <li><strong>Flexible</strong> — Tokens and variants allow brand-appropriate customisation within guardrails.</li>
      </ul>
      <h3>What&apos;s included</h3>
      <ul>
        <li>Design tokens (colour, typography, spacing, motion)</li>
        <li>50+ React components with full accessibility support</li>
        <li>Pattern library and composition guidelines</li>
        <li>Figma UI Kit with auto-layout and component variants</li>
        <li>Storybook component explorer with live code examples</li>
        <li>Content guidelines and tone of voice</li>
      </ul>
      <div className="callout">
        <strong>New to design systems?</strong> A design system is not just a component
        library — it is a shared set of decisions that span design, development, and content.
        Start with Foundations to understand the building blocks.
      </div>
    </div>
  );
}

function OverviewCode({ brand }) {
  return (
    <div className="prose">
      <h2>Installation</h2>
      <p>The {getBrand(brand).name} component library is available as an npm package.</p>
      <pre><code>npm install @ie-design/{brand}-ui</code></pre>
      <h3>Setup</h3>
      <p>Import the base CSS in your app entry point:</p>
      <pre><code>import &apos;@ie-design/{brand}-ui/styles/base.css&apos;;</code></pre>
      <h3>Usage</h3>
      <pre><code>import {'{ Button }'} from &apos;@ie-design/{brand}-ui&apos;;</code></pre>
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
      <ol>
        <li>Visit the Figma Community page</li>
        <li>Duplicate the file to your Figma workspace</li>
        <li>Link it as a library in your project files</li>
      </ol>
      <h3>Figma Variables</h3>
      <p>All design tokens are published as Figma Variables, enabling true design-to-code parity.</p>
      <h3>Design workflow</h3>
      <ul>
        <li>Use components from the library rather than building from scratch</li>
        <li>Apply tokens rather than raw values for consistency</li>
        <li>Review the component usage guidelines before designing a new pattern</li>
        <li>Submit new patterns through the contribution process</li>
      </ul>
    </div>
  );
}

function CodeSetupContent({ brand }) {
  return (
    <div className="prose">
      <h2>Developer Setup</h2>
      <h3>Requirements</h3>
      <ul>
        <li>Node.js 18+</li>
        <li>React 18+</li>
        <li>TypeScript 5+ (recommended)</li>
      </ul>
      <h3>Package installation</h3>
      <pre><code>npm install @ie-design/{brand}-ui</code></pre>
      <h3>Next.js integration</h3>
      <pre><code>transpilePackages: [&apos;@ie-design/{brand}-ui&apos;]</code></pre>
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
      <h3>Token formats</h3>
      <ul>
        <li><strong>CSS custom properties</strong> — <code>--color-primary: #003087</code></li>
        <li><strong>JavaScript/TypeScript</strong> — importable constants</li>
        <li><strong>JSON (W3C format)</strong> — for tooling integration</li>
        <li><strong>Figma Variables</strong> — for design tools</li>
      </ul>
      <h3>Token tiers</h3>
      <ul>
        <li><strong>Primitive tokens</strong> — Raw values (e.g., <code>--blue-600: #0070CC</code>)</li>
        <li><strong>Semantic tokens</strong> — Purpose-based (e.g., <code>--color-primary</code>)</li>
        <li><strong>Component tokens</strong> — Component-specific overrides</li>
      </ul>
      <div className="callout">
        Always use semantic tokens in your code — never reference primitive tokens directly.
      </div>
    </div>
  );
}

function AdoptionContent() {
  const levels = [
    { level: '1', name: 'Token Adoption', desc: 'Use the colour, spacing, and typography tokens. No custom values.' },
    { level: '2', name: 'Component Adoption', desc: 'Use the component library for all standard UI patterns.' },
    { level: '3', name: 'Full Integration', desc: 'Use patterns, layouts, and content guidelines. Design files use the Figma UI Kit.' },
    { level: '4', name: 'Contributing', desc: 'Actively contribute new components, patterns, and token updates back to the system.' },
  ];
  return (
    <div className="prose">
      <h2>Adoption Levels</h2>
      <p>Teams adopt design systems progressively. These levels help set expectations at each stage.</p>
      {levels.map((l) => (
        <div key={l.level} style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-4)', alignItems: 'flex-start' }}>
          <div style={{
            width: 32, height: 32, borderRadius: 'var(--radius-full)',
            background: 'var(--color-primary)', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-sm)', flexShrink: 0,
          }}>{l.level}</div>
          <div>
            <h4 style={{ marginBottom: 'var(--space-1)' }}>{l.name}</h4>
            <p style={{ margin: 0 }}>{l.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---- Page metadata ---- */

const PAGE_META = {
  overview:  { title: 'Overview',        description: 'Get familiar with the design system — what it is, what it contains, and how to get up and running.' },
  design:    { title: 'Design',          description: 'How to design with this design system using Figma and our design token library.' },
  code:      { title: 'Code',            description: 'Developer setup, tooling, and integration guide for the component library.' },
  tokens:    { title: 'Design Tokens',   description: 'How design tokens work, how they are structured, and how to use them in code.' },
  adoption:  { title: 'Adoption Levels', description: 'Understand the different levels of design system adoption and what is expected at each stage.' },
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
      <pre><code>import {'{ }'} from &apos;@ie-design/{brand}-ui&apos;;</code></pre>
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
