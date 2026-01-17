import { useEffect, useState } from "react";
import ProjectCard from "../components/project_card.jsx";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(fetch(`${backendUrl}/projects`))
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: "2rem" }}>Loading projects...</p>;

  return (
    <section className="full-width-section section-light">
      <div className="container">
        <h1 style={{ marginBottom: "1.5rem" }}>Projects</h1>
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div className="cards-grid">
            {projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
