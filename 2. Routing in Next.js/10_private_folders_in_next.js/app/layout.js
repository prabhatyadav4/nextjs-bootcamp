import Link from "next/link";

export const metadata = {
  title: {
    template: "%s | KernalPrab",
    default: "KernalPrab",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
