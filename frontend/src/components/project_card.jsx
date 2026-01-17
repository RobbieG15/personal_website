const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {project.image_url && (
        <div className="project-image-wrapper">
          <img
            src={`${BACKEND_URL}${project.image_url}`}
            alt={project.title}
            className="project-image"
          />
        </div>
      )}

      <div className="project-card-content">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <p className="project-tech">
          Tech:{" "}
          {Array.isArray(project.tech_stack)
            ? project.tech_stack.join(", ")
            : project.tech_stack}
        </p>

        <div className="project-links">
          {project.github_link && (
            <a href={project.github_link} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {project.live_demo_link && (
            <a href={project.live_demo_link} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
