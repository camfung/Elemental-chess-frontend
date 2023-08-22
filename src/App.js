// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import TeamBuilder from "./pages/TeamBuilder/TeamBuilder.jsx";
import Play from "./pages/Play/Play.jsx";
import ProfileComponent from "./pages/Profile/Profile.jsx";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TeamBuilder" element={<TeamBuilder />} />

      <Route path="/Play" element={<Play />} />
      <Route path="/Profile" element={<ProfileComponent />} />
    </Routes>
  );
}

export default App;
