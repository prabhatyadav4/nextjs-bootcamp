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

  return (
    <main>
      <h1>{currentBlog.title}</h1>

      <p>{currentBlog.description}</p>
    </main>
  );
}
