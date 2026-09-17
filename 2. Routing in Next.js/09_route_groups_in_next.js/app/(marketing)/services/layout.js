import Link from "next/link";

export default function ServicesLayout({ children }) {
  return (
    <section>
      <header>
        <h1>Our Services</h1>
        <nav aria-label="Services navigation">
          <Link href="/services">Overview</Link>{" "}
          <Link href="/services/front-end">Frontend</Link>{" "}
          <Link href="/services/back-end">Backend</Link>{" "}
          <Link href="/services/full-stack">Fullstack</Link>{" "}
          <Link href="/services/app-dev">App Development</Link>
        </nav>
      </header>

      <main>{children}</main>
    </section>
  );
}
