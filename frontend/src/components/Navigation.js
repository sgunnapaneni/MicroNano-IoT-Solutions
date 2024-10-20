import React from "react";
import '../App.css';

const Navigation = ({ setActivePage, activePage }) => {
  const handleNavigation = (e, page) => {
    e.preventDefault(); // Prevent default link behavior
    setActivePage(page); // Set the active page
  };

  return (
    <nav>
      <a 
        href="#"
        onClick={(e) => handleNavigation(e, "home")}
        className={`nav-link ${activePage === "home" ? "active" : ""}`}
      >
        Home
      </a>
      <a 
        href="#"
        onClick={(e) => handleNavigation(e, "content")}
        className={`nav-link ${activePage === "content" ? "active" : ""}`}
      >
        Content
      </a>
      <a 
        href="#"
        onClick={(e) => handleNavigation(e, "taxonomy")}
        className={`nav-link ${activePage === "taxonomy" ? "active" : ""}`}
      >
        Taxonomy
      </a>
      <a 
        href="#"
        onClick={(e) => handleNavigation(e, "teampage")}
        className={`nav-link ${activePage === "teampage" ? "active" : ""}`}
      >
        Team Page
      </a>
      <a 
        href="#"
        onClick={(e) => handleNavigation(e, "references")}
        className={`nav-link ${activePage === "references" ? "active" : ""}`}
      >
        References
      </a>
    </nav>
  );
};

export default Navigation;