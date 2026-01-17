import { useEffect, useState } from "react";
import BlogCard from "../components/blog_card";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then(res => res.json())
      .then(setBlogs)
      .catch(console.error);
  }, []);

  return (
    <section className="full-width-section section-light">
      <div className="container">
        <h1 style={{ marginBottom: "1.5rem" }}>
          Blogs
        </h1>
        {blogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
        <div className="cards-grid">
          {blogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        )}
      </div>
    </section>
  );
}
