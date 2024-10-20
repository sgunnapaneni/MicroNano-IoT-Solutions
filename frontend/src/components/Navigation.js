import React from "react";
import './Style.css';
const Navigation = ({ setActivePage }) => {
  return (
    <nav>
      <a href="#" onClick={() => setActivePage("home")}>Home</a>
      <a href="#" onClick={() => setActivePage("content")}>Content</a>
      <a href="#" onClick={() => setActivePage("taxonomy")}>Taxonomy</a>
      <a href="#" onClick={() => setActivePage("teampage")}>Team Page</a>
      <a href="#" onClick={() => setActivePage("references")}>References</a>
    </nav>
  );
};

export default Navigation;