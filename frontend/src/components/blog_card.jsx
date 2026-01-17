import { Link } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function BlogCard({ blog }) {
  return (
    <div className="project-card">
      {blog.image_url && (
        <div className="project-image-wrapper">
          <img
            src={`${BACKEND_URL}${blog.image_url}`}
            alt={blog.title}
            className="project-image"
          />
        </div>
      )}

      <div className="project-card-content">
        <h2>{blog.title}</h2>
        <p>{blog.summary}</p>

        <Link to={`/blogs/${blog.slug}`} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  );
}
