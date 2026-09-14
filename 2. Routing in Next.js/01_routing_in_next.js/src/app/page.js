import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Hey, this is Home Page</div>
      {/* <a href="/service">Service</a> */}
      <Link href="/service">Service</Link>
      <br />
      <Link href="/about">About</Link>
    </>
  );
}
