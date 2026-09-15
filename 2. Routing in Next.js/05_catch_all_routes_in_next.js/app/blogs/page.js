import Link from "next/link";

export default function BlogsPage() {
  return (
    <main>
      <h1>My Blogs</h1>

      <Link href="/blogs/html">HTML Blog</Link>
      <br />

      <Link href="/blogs/css">CSS Blog</Link>
      <br />

      <Link href="/blogs/javascript">Javascript Blog</Link>
    </main>
  );
}
