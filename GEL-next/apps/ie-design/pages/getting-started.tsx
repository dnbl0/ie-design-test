import Layout from './_layout';

export default function GettingStarted() {
  return (
    <Layout breadcrumbs={[{ label: 'Getting Started', href: '/getting-started' }]}
      tabs={[{ label: 'Overview', href: '/getting-started' }, { label: 'Design', href: '/getting-started/design' }, { label: 'Code', href: '/getting-started/code' }]}
    >
      <h1>Getting Started</h1>
      <p>Welcome to the IE Design System. This section uses GEL-next templates for onboarding, design, code, and tokens.</p>
    </Layout>
  );
}
