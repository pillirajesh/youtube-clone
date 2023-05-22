import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Videos from "./RecomendedVideos";
import Search from "./SearchVideos";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="left-right-container">
        <Sidebar />

        <Routes>
          <Route exact path="/" element={<Videos />} />
          <Route exact path="/search/:inputSearch" element={<Search />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
