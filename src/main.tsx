import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // or wherever your root component is

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
