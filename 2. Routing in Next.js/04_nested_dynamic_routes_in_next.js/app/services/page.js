import Link from "next/link";

export default function Service() {
    return(
        <main>
            <h1>These are our services:</h1>
            <p><Link href="/services/front-end">Frontend Development</Link></p>
            <p><Link href="/services/back-end">Backend Development</Link></p>
            <p><Link href="/services/full-stack">Fullstack Development</Link></p>
            <p><Link href="/services/app-dev">App Development</Link></p>
        </main>
    )
}