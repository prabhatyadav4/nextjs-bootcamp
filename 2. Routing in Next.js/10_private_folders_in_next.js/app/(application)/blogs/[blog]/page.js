import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { blog } = await params;
  return {
    title: `${blog} blog`,
  };
}

const blogs = {
  html: {
    title: "Learn HTML",
    description: "HTML is used to create the structure of web pages.",
  },

  css: {
    title: "Learn CSS",
    description: "CSS is used to style web pages.",
  },

  javascript: {
    title: "Learn JavaScript",
    description: "JavaScript is used to add logic and interactivity.",
  },
};

export default async function BlogPage({ params }) {
  const { blog } = await params;

  const currentBlog = blogs[blog];

  if (/^\d+$/.test(blog)) {
    notFound();
  }

  return (
    <main>
      <h1>{currentBlog.title}</h1>

      <p>{currentBlog.description}</p>

      <Link href={`/blogs/${blog}/comments`}>View comments</Link>
    </main>
  );
}
