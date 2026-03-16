import { useState } from 'react';
import { GELDocLayout, GELSidebar, GELFooter, GELBreadcrumbs, GELTabs } from '@westpac/ui';
import { BrandSwitcher } from '../components/BrandSwitcher';

const sidebarItems = [
  { label: 'Getting Started', href: '/getting-started' },
  { label: 'Foundations', href: '/foundations' },
  { label: 'Components', href: '/components' },
  { label: 'Compositions / Patterns', href: '/patterns' },
  { label: 'Layouts / Templates', href: '/layouts' },
  { label: 'Content', href: '/content' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'Tools & Resources', href: '/resources' },
  { label: 'Governance', href: '/governance' },
];

export default function Layout({ children, breadcrumbs, tabs }) {
  const [brand, setBrand] = useState('IE');
  return (
    <GELDocLayout
      header={<BrandSwitcher onSwitch={setBrand} activeBrand={brand} />}
      sidebar={<GELSidebar items={sidebarItems} brand={brand} />}
      footer={<GELFooter />}
    >
      <div style={{ marginTop: 16 }}>
        <GELBreadcrumbs items={breadcrumbs} />
        {tabs && <GELTabs tabs={tabs} />}
        {children}
      </div>
    </GELDocLayout>
  );
}
