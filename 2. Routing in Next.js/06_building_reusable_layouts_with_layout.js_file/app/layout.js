import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>&copy; 2026 Demo App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
