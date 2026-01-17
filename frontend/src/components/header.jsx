import { Link, useLocation } from "react-router-dom";

import profilePic from "../assets/robbie.jpg";

export default function Header() {
  const location = useLocation();

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
          <img src={profilePic} alt="Robert Greenslade" className="header-profile-pic" />
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
        </nav>
      </div>
    </header>
  );
}
