import React from "react";
import '../App.css';

const Header = ({ activePage, setActivePage }) => {
  const menuItems = ["home", "content", "taxonomy", "teampage", "references"];
  
  return (
    <nav>
      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => setActivePage(item)}
          className={`nav-link ${activePage === item ? "active" : ""}`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default Header;