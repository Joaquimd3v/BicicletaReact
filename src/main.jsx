import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import App from "./App.jsx";
import { AuthProvider } from "./assets/components/Login/AuthContext.jsx"; 

import "./assets/styles/componentes.css";
import "./assets/styles/tipografia.css";
import "./assets/styles/cores.css";
import "./assets/styles/globals.css";
import "./assets/styles/formulario.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider> 
      <HashRouter>
        <App />
      </HashRouter>
    </AuthProvider>
  </StrictMode>
);
