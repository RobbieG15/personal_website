import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  return (
    <header>
      <div className="container">
        <h1 style={{ fontSize: "1.5rem" }}>Robert Greenslade</h1>
        <nav>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
