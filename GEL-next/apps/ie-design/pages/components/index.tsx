import Layout from '../_layout';

export default function ComponentsIndex() {
  return (
    <Layout breadcrumbs={[{ label: 'Components', href: '/components' }]}> 
      <h1>Components</h1>
      <ul>
        <li><a href="/components/button">Button</a></li>
        {/* Add more components here */}
      </ul>
    </Layout>
  );
}
