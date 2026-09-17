import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        color: "#f8fafc",
        background:
          "radial-gradient(circle at top, #312e81 0%, #111827 45%, #020617 100%)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <section
        style={{
          maxWidth: "560px",
          padding: "3.5rem 2.5rem",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: "24px",
          background: "rgba(15, 23, 42, 0.72)",
          boxShadow: "0 24px 80px rgba(0, 0, 0, 0.35)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div style={{ fontSize: "5rem", lineHeight: 1, marginBottom: "1rem" }}>
          🌌
        </div>
        <p
          style={{
            margin: "0 0 0.75rem",
            color: "#a5b4fc",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Error 404
        </p>
        <h1
          style={{ margin: "0 0 1rem", fontSize: "clamp(2rem, 6vw, 3.5rem)" }}
        >
          Lost in space?
        </h1>
        <p style={{ margin: "0 0 2rem", color: "#cbd5e1", lineHeight: 1.7 }}>
          The page you are looking for drifted away. Let&apos;s get you back to
          somewhere familiar.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "0.85rem 1.5rem",
            borderRadius: "999px",
            color: "#172554",
            background: "#c4b5fd",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
