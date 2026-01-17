import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="full-width-section section-light">
      <div className="container">
        <h1 style={{ marginBottom: "1.5rem" }}>
          About Me
        </h1>

        <p>
          I’m a software developer with a strong foundation in computer science,
          engineering, and applied research. I graduated from The Ohio State
          University in December 2025 with a Bachelor of Science in Computer
          Science & Engineering, where I maintained a 3.93 GPA and focused on
          areas such as machine learning, databases, and systems development.
        </p>

        <br />

        <p>
          In January 2026, I began working as a Software Developer at Resonant
          Sciences, LLC, where I design and build reliable, scalable software
          solutions with real-world impact. My work spans backend API
          development, frontend interfaces, and automation, often in technically demanding or research-driven
          environments. If you are interested in learning more about my teams work, please visit Resonant Sciences <a
            href="https://www.resonantsciences.com/capabilities/razr">RAZR product page</a>.
        </p>

        <br />

        <p>
          Previously, I worked as a Computational Technical Intern at Applied
          Research Associates, where I contributed to asynchronous RESTful APIs,
          CI/CD pipelines, and secure desktop applications. I also served as an
          Electrical Engineering Intern at Whirlpool Corporation, gaining
          hands-on experience with industrial automation, control systems, and
          safety-critical software.
        </p>

        <br />

        <h2>What I Work On</h2>

        <ul style={{ marginLeft: "1.5rem", marginTop: "0.75rem", marginBottom: "1.5rem", lineHeight: "1.8" }}>
          <li>Full-stack web applications using FastAPI and React</li>
          <li>Backend systems, APIs, and database design</li>
          <li>Machine learning and AI-driven software solutions</li>
          <li>Engineering and research-focused tools and automation</li>
          <li>Desktop and visualization tools for technical users</li>
        </ul>

        <p>
          I enjoy working on challenging problems that sit at the intersection
          of software engineering, research, and real-world deployment. Whether
          it’s building a production web application, developing internal tools,
          or applying machine learning to complex data, I focus on creating
          software that is reliable, maintainable, and effective.
        </p>

        <br />

        <p>
          If you’re interested in collaborating, have a project in mind, or are
          looking for custom software development, feel free to reach out
          through the <Link to="/contact">Contact</Link> page. I’m always open to new
          opportunities and conversations.
        </p>
      </div>
    </section>
  );
}
