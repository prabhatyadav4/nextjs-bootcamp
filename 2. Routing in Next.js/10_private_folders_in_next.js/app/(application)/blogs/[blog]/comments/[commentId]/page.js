export default async function CommentPage({ params }) {
  const { blog, commentId } = await params;

  return (
    <main>
      <h1>Comment</h1>

      <p>Blog: {blog}</p>
      <p>Comment ID: {commentId}</p>
    </main>
  );
}
