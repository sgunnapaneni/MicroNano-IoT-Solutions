import React from "react";
import Navigation from "./Navigation";
import './Style.css';
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