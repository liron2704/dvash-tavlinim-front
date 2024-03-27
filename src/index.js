import React from "react";
import "./index.css";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
