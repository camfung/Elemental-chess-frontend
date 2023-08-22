// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // You can use BrowserRouter or any other router you prefer
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App"; // Import the App component you created

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-xgayk3inhap4a5pa.us.auth0.com"
      clientId="n29vdEWsdxtMO1rySBLBYOdHwKekQBku"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://dev-xgayk3inhap4a5pa.us.auth0.com/api/v2/",
        scope: "read:current_user update:current_user_metadata",
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
