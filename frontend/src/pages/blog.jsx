import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Blog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`/api/blogs/${slug}`)
      .then(res => res.json())
      .then(setBlog)
      .catch(console.error);
  }, [slug]);

  if (!blog) return <p>Loading...</p>;

  return (
    <section className="full-width-section section-light">
      <div className="container blog-content">
        {blog.image_url && (
          <img
            src={`${BACKEND_URL}${blog.image_url}`}
            alt={blog.title}
            className="blog-hero"
          />
        )}

        <h1>{blog.title}</h1>
        <p className="blog-date">
          {new Date(blog.created_at).toLocaleDateString()}
        </p>

        <article>
          {blog.content.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </div>
    </section>
  );
}
