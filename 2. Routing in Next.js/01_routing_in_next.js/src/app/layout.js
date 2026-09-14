export const metadata = {
  title: "Routing in Next.js",
  description: "A simple Next.js routing example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
