// MainLayout.jsx
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AvisoCookies from "../Cookies/AvisoCookies";

export default function MainLayout() {
  return (
    <>
      {/* Aviso de cookies fixo no topo */}
      <AvisoCookies />

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
