import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App"; // මෙතන src/App.tsx එකට කෙලින්ම යනවා

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
