import Layout from '../_layout';

export default function ButtonComponentPage() {
  return (
    <Layout
      breadcrumbs={[{ label: 'Components', href: '/components' }, { label: 'Button', href: '/components/button' }]}
      tabs={[
        { label: 'Design', href: '/components/button' },
        { label: 'Accessibility', href: '/components/button/accessibility' },
        { label: 'Code', href: '/components/button/code' },
      ]}
    >
      <h1>Button</h1>
      <p>Standard GEL-next component documentation pattern.</p>
      <section>
        <h2>Live Example</h2>
        {/* Storybook Embed Example */}
        <iframe
          src="https://storybook.ie-design.com/iframe.html?id=button--primary&viewMode=story"
          title="Button Storybook"
          width="100%"
          height="400"
          style={{ border: '1px solid #eee', borderRadius: 8 }}
          allowFullScreen
        />
      </section>
    </Layout>
  );
}
