import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="full-width-section section-light">
      <div className="container">
        <h1 style={{ marginBottom: "1rem" }}>
          Hi, I’m Robert Greenslade
        </h1>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem", maxWidth: "800px" }}>
          I’m a software developer with a strong background in building reliable,
          user-focused applications across backend systems, desktop software,
          and modern web technologies.
        </p>

        <p style={{ maxWidth: "800px", marginBottom: "2rem" }}>
          This site is a place where I share my projects, technical writing,
          and ideas around software engineering, system design, and emerging
          technologies like machine learning and autonomous systems.
        </p>

        <h2 style={{ marginBottom: "1rem" }}>
          What I Work On
        </h2>

        <ul style={{ marginLeft: "1.5rem", marginTop: "0.75rem", marginBottom: "1.5rem", lineHeight: "1.8" }}>
          <li>Full-stack web applications using Python, React, and modern frameworks</li>
          <li>Backend systems with APIs, databases, and scalable architectures</li>
          <li>Desktop applications with Python and C++ using the Qt framework</li>
          <li>Engineering-focused tools, simulations, and internal systems</li>
          <li>Projects involving data processing, automation, and performance</li>
          <li>Machine learning applications utilizing state of the art network architectures</li>
        </ul>

        <p style={{ maxWidth: "800px" }}>
          Feel free to explore my <Link to="/projects">projects</Link>, read through my <Link to="/blogs">blog posts</Link>,
          or <Link to="/contact">contact me</Link> if you’re interested in working together.
        </p>
      </div>
    </section>
  );
}
