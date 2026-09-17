import Link from "next/link";
import ComponentPage from "../_components/page";

export const metadata = {
  title: "Home",
  description: "A website where I sell courses",
};

export default function Home() {
  return (
    <main>
      <h1>This is Home Page</h1>
      <ComponentPage />
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>
        <Link href="/blogs">Blogs</Link>
      </p>
      <p>
        <Link href="/services">Services</Link>
      </p>
    </main>
  );
}
