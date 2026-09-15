export default async function DocsPage({ params }) {
  const { slug } = await params;

  return (
    <main>
      <h1>Documentation</h1>
      <p>{JSON.stringify(slug)}</p>
    </main>
  );
}
