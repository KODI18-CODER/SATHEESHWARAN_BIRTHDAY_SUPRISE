import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

// Global styles
import "./styles/global.css";
import "./styles/animations.css";
import "./styles/components.css";
import "./styles/responsive.css";

// Find the root element in index.html
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element "#root" was not found in index.html'
  );
}

// Render the React application
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);