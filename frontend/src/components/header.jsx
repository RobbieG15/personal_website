import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import profilePic from "../assets/robbie.jpg";

export default function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/blogs", label: "Blogs" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  return (
    <header>
      <div className="container">
        <div className="header-left">
          <img
            src={profilePic}
            alt="Robert Greenslade"
            className="header-profile-pic"
          />
          <h1>Robert Greenslade</h1>
        </div>

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

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
}
