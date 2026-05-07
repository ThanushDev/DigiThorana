import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client"; // මේක වෙනස් කළා
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container!); 
root.render(<App />);
