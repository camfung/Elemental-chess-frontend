// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TeamBuilder from "./pages/TeamBuilder/TeamBuilder.jsx";
import Play from "./pages/Play/Play.jsx";
import Test from "./pages/Test/Test.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/TeamBuilder",
    element: <TeamBuilder />,
  },
  {
    path: "/Play",
    element: <Play />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
