import React, { useState } from "react";
import Home from "./components/home";
import Header from "./components/header";
import Content from "./components/content";
import TeamPage from "./components/teampage";
import Taxonomy from "./components/taxonomy";
import References from "./components/references";

import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;
      case "content":
        return <Content />;
      case "taxonomy":
        return <Taxonomy />;
      case "teampage":
        return <TeamPage />;
      case "references":
        return <References />;
      default:
        return <Home />;
    }
  };

  return (
    <><div>
      <Header setActivePage={setActivePage} />
      <main>{renderPage()}</main>
    </div><div>
        <footer>&copy; 2024 Microservice & Nanoservice Solutions | All rights reserved</footer>
      </div></>
  );
}

export default App;