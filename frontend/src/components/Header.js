import React from "react";
import Navigation from "./navigation";
import './style.css';
import './header.css';
const Header = ({ setActivePage }) => {
  return (
    <header>
      <h1>Microservice & Nanoservice Solutions</h1>
      <h2>IoT Edge and Cloud Computing</h2>
      <Navigation setActivePage={setActivePage} />
    </header>
  );
};

export default Header;