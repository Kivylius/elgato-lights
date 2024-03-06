import App from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

// Nothing needs to chagne here.
// Make all changes in <App> component.

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App config={{}} setConfig={() => {}} />);
