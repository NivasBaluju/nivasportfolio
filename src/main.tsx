import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // make sure this exists

const root = document.getElementById("app");

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Could not find root element with id 'app'");
}
