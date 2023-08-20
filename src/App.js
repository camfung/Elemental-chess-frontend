// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import TeamBuilder from "./pages/TeamBuilder/TeamBuilder.jsx";
import Play from "./pages/Play/Play.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TeamBuilder" element={<TeamBuilder />} />
      <Route path="/Play" element={<Play />} />
    </Routes>
  );
}

export default App;
