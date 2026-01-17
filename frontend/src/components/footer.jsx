import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Robert Greenslade. All rights reserved.
        </p>

        <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem" }}>
          <a href="https://www.linkedin.com/in/robertgreenslade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/RobbieG15" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub size={24} />
          </a>
          <a href="mailto:robert.greenslade03@gmail.com" aria-label="Email">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}