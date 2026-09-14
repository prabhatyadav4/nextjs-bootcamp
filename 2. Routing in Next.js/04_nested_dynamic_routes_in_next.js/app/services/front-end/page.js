export default function FrontEndCoursePage() {
	return (
		<main style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px", fontFamily: "Arial, sans-serif" }}>
			<section style={{ background: "#eef4ff", borderRadius: 16, padding: 40 }}>
				<p style={{ color: "#3157d5", fontWeight: 700 }}>WEB DEVELOPMENT COURSE</p>
				<h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", margin: "12px 0" }}>
					Become a Front-End Developer
				</h1>
				<p style={{ color: "#4b5563", fontSize: "1.1rem", lineHeight: 1.6 }}>
					Learn to build modern, responsive websites with HTML, CSS, JavaScript, and React through practical projects.
				</p>
				<button type="button" style={{ background: "#3157d5", color: "white", border: 0, borderRadius: 8, padding: "12px 22px", fontWeight: 700 }}>
					Enroll Now
				</button>
			</section>

			<section style={{ padding: "36px 0" }}>
				<h2>What you&apos;ll learn</h2>
				<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
					{["Semantic HTML", "Responsive CSS", "JavaScript Fundamentals", "React Components"].map((topic) => (
						<article key={topic} style={{ border: "1px solid #e5e7eb", borderRadius: 10, padding: 20 }}>
							<h3 style={{ marginTop: 0 }}>{topic}</h3>
							<p style={{ color: "#6b7280", lineHeight: 1.5 }}>Build confidence with guided lessons and hands-on exercises.</p>
						</article>
					))}
				</div>
			</section>

			<p style={{ color: "#6b7280" }}>Duration: 8 weeks · Beginner friendly · Project-based learning</p>
		</main>
	);
}
