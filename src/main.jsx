import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./assets/styles/componentes.css";
import "./assets/styles/tipografia.css";
import "./assets/styles/cores.css";
import "./assets/styles/globals.css";
import "./assets/styles/formulario.css";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
