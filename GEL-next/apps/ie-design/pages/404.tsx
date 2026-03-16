import Layout from './_layout';

export default function NotFound() {
  return (
    <Layout breadcrumbs={[{ label: '404', href: '/404' }]}> 
      <h1>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </Layout>
  );
}
