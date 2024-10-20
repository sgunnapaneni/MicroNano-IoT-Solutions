import React, { useState } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import Content from "./components/Content";
import TeamPage from "./components/TeamPage";
import Taxonomy from "./components/Taxonomy";
import References from "./components/References";

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