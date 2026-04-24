import React, { useEffect } from 'react';
import { BrandLayout } from '../components/layout/Layout';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import Tabs from '../components/ui/Tabs';
import { useBrand } from '../context/BrandContext';
import { getBrand } from '../data/brands';

const LAYOUTS = [
  {
    id: 'basic',
    name: 'Basic Layout',
    description: 'Single-column, full-width content area. Used for forms, articles, and focused flows.',
    columns: 1,
  },
  {
    id: 'sidebar',
    name: 'Sidebar Layout',
    description: 'Fixed sidebar with main content area. Used for documentation, dashboards, and navigation-heavy apps.',
    columns: '1/4 + 3/4',
  },
  {
    id: 'two-col',
    name: 'Two Column',
    description: 'Equal two-column layout for comparison views, settings panels, or side-by-side content.',
    columns: '1/2 + 1/2',
  },
  {
    id: 'card-grid',
    name: 'Card Grid',
    description: 'Responsive grid of cards. Uses auto-fill with a minimum card width of 280px.',
    columns: 'auto-fill (min 280px)',
  },
  {
    id: 'hero',
    name: 'Hero + Content',
    description: 'Full-width hero banner followed by constrained content area.',
    columns: 'full + constrained',
  },
];

function LayoutDiagram({ layout }) {
  const diagramStyle = {
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    background: 'var(--color-bg-subtle)',
  };
  const headerStyle = {
    background: 'var(--color-primary)', height: 12, opacity: 0.4,
  };
  const contentArea = {
    display: 'flex', gap: 4, padding: 8, minHeight: 60,
  };
  const sidebarBox = {
    width: '25%', background: 'var(--color-border)', borderRadius: 4, opacity: 0.5,
  };
  const mainBox = {
    flex: 1, background: 'var(--color-border-subtle)', borderRadius: 4,
  };

  return (
    <div style={diagramStyle} aria-hidden="true">
      <div style={headerStyle} />
      <div style={contentArea}>
        {layout.id === 'sidebar' && <div style={sidebarBox} />}
        {layout.id === 'two-col' ? (
          <><div style={{ ...mainBox, flex: '0 0 50%' }} /><div style={mainBox} /></>
        ) : (
          <div style={mainBox} />
        )}
      </div>
    </div>
  );
}

export default function LayoutsPage({ pageContext, location }) {
  const { brand } = pageContext;
  const { switchBrand } = useBrand();

  useEffect(() => { switchBrand(brand); }, [brand]);

  const brandData = getBrand(brand);
  const path = location?.pathname || `/${brand}/layouts/`;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: brandData.name, path: `/${brand}/` },
    { label: 'Layouts / Templates' },
  ];

  const tabs = [
    {
      id: 'design',
      label: 'Design',
      content: (
        <div>
          <div className="prose">
            <h2>Layout templates</h2>
            <p>Standardised page layouts ensure consistent structure across the {brandData.name} product family. Choose the layout that best matches your page's content hierarchy and user tasks.</p>
            <h3>Grid system</h3>
            <p>All layouts use a 12-column grid with responsive gutters:</p>
            <ul>
              <li>Mobile: 4 columns, 16px gutter</li>
              <li>Tablet (768px): 8 columns, 24px gutter</li>
              <li>Desktop (1024px): 12 columns, 24px gutter</li>
              <li>Wide (1280px): 12 columns, 32px gutter</li>
            </ul>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-5)', marginTop: 'var(--space-6)' }}>
            {LAYOUTS.map((layout) => (
              <div key={layout.id} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
                <div style={{ padding: 'var(--space-4)' }}>
                  <LayoutDiagram layout={layout} />
                </div>
                <div style={{ padding: '0 var(--space-4) var(--space-4)' }}>
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-1)', color: 'var(--color-text-primary)' }}>{layout.name}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0, lineHeight: 'var(--leading-relaxed)' }}>{layout.description}</p>
                  <div style={{ marginTop: 'var(--space-2)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-primary)' }}>{layout.columns}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'code',
      label: 'Code',
      content: (
        <div className="prose">
          <h2>Layout components</h2>
          <p>Use the layout components to implement these patterns in code.</p>
          <pre><code>{`import { PageLayout, SidebarLayout, Grid } from '@ie-design/${brand}-ui/layouts';

// Basic layout
<PageLayout>
  <PageLayout.Content>...</PageLayout.Content>
</PageLayout>

// Sidebar layout
<SidebarLayout>
  <SidebarLayout.Sidebar>...</SidebarLayout.Sidebar>
  <SidebarLayout.Main>...</SidebarLayout.Main>
</SidebarLayout>

// Responsive grid
<Grid columns={{ sm: 1, md: 2, lg: 3 }} gap="md">
  <Grid.Item>...</Grid.Item>
</Grid>`}</code></pre>
        </div>
      ),
    },
  ];

  return (
    <BrandLayout brand={brand} activePath={path} title="Layouts / Templates">
      <Breadcrumbs items={breadcrumbs} />
      <div style={{ marginBottom: 'var(--space-2)' }}>
        <span className="tag">Layouts</span>
      </div>
      <h1 style={{ fontSize: 'var(--text-4xl)', fontWeight: 'var(--weight-extrabold)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)', fontFamily: 'var(--font-display)' }}>
        Layouts & Templates
      </h1>
      <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-8)', lineHeight: 'var(--leading-relaxed)' }}>
        Standardised page layout templates for the {brandData.name} product family.
      </p>
      <Tabs tabs={tabs} defaultTab="design" />
    </BrandLayout>
  );
}
