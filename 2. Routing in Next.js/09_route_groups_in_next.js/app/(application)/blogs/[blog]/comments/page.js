import Link from "next/link";

const comments = {
  html: [
    "HTML is very easy to learn!",
    "Great article.",
    "Can you write about semantic HTML?",
  ],

  css: ["The flexbox explanation helped me.", "Please write about Grid."],

  javascript: ["JavaScript is confusing initially.", "Good explanation!"],
};

export default async function CommentsPage({ params }) {
  const { blog } = await params;

  const blogComments = comments[blog];

  return (
    <main>
      <h1>Comments for: {blog}</h1>

      {blogComments.map((comment, index) => (
        <p key={index}>
          <Link href={`/blogs/${blog}/comments/${index + 1}`}>
            {index + 1}. {comment}
          </Link>
        </p>
      ))}
    </main>
  );
}
