import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layout padrão com Header e Footer
import MainLayout from "./assets/components/Layout/MainLayout";

// Componentes reutilizáveis da Home
import Introducao from "./assets/components/Introdução/Introducao";
import BicicletasListas from "./assets/components/BicicletasListas/BicicletasListas";
import Tecnologia from "./assets/components/Tecnologia/Tecnologia";
import Parceiros from "./assets/components/Parceiros/Parceiros";
import Depoimentos from "./assets/components/Depoimentos/Depoimentos";
import TabelasSegurosHome from "./assets/components/Seguros/TabelasSegurosHome";

// Páginas principais
import TermoPrivacidade from "./assets/pages/Termos/TermoPrivacidade";
import TermosDeUso from "./assets/pages/Termos/TermosDeUso";
import TermosDeUsuario from "./assets/pages/Termos/TermosDeUsuario";
import NotFound from "./assets/pages/NotFound/NotFound";
import Bicicletas from "./assets/pages/Bicicletas/Bicicletas";
import Seguro from "./assets/pages/Seguros/Seguros";

// Página de Detalhe da Bicicleta
import DetalheBicicleta from "./assets/pages/Bicicletas/DetalheBicicleta";

// Cart Context
import { CartProvider } from "./assets/components/Cart/CartContext.jsx";

// Outras páginas
import Contato from "./assets/pages/Contato/contato.jsx";
import Orçamento from "./assets/pages/Orçamento/orcamento.jsx";
import BikeCustomizer from "./assets/pages/BikeCustomizer/bikecustomizer.jsx";

// Páginas independentes
import Checkout from "./assets/components/Checkout/Checkout.jsx";
import Login from "./assets/components/Login/Login.jsx";
import Register from "./assets/components/Login/Register.jsx";

export default function App() {
  const location = useLocation();

  // Rolagem para o topo ao navegar entre páginas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <CartProvider>
      <Routes>
        {/* Rotas com Header e Footer */}
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <>
                <Introducao />
                <BicicletasListas />
                <Tecnologia />
                <Parceiros />
                <Depoimentos />
                <TabelasSegurosHome />
              </>
            }
          />
          <Route path="/bicicletas" element={<Bicicletas />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/termo-privacidade" element={<TermoPrivacidade />} />
          <Route path="/termos-uso" element={<TermosDeUso />} />
          <Route path="/termos-usuario" element={<TermosDeUsuario />} />
          <Route path="/seguro" element={<Seguro />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/bicicletas/:nome" element={<DetalheBicicleta />} />
          <Route path="/orcamento" element={<Orçamento />} />
          <Route path="/customize" element={<BikeCustomizer />} />
        </Route>

        {/* Rotas fora do layout (sem Header/Footer) */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Página 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}
