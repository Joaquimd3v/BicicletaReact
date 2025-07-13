import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Header junto com o Footer
import MainLayout from "./assets/components/Layout/MainLayout";

// Componentes reutilizáveis
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

// Pagina Bicicletas Individuais
import DetalheBicicleta from "./assets/pages/Bicicletas/DetalheBicicleta";

//ChatBOT
import MeuChatBot from "./assets/components/ChatBot/MeuChatBot";

// Cart
import { CartProvider } from "../src/assets/components/Cart/CartContext.jsx"; // importa o contexto do carrinho

// Contato
import Contato from "./assets/pages/Contato/contato.jsx";

// Orçamento
import Orçamento from "./assets/pages/Orçamento/orcamento.jsx";

//  Bike Customize
import BikeCustomizer from "./assets/pages/BikeCustomizer/bikecustomizer.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <CartProvider>
      <MeuChatBot />
      <Routes>
        {/* Todas as rotas com Header e Footer dentro de MainLayout */}
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

        {/* Página 404 isolada, sem header/footer */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}
