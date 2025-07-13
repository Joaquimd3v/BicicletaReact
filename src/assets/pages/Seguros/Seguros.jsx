import React from "react";
import TabelasSeguros from "../../components/Seguros/TabelasSeguros";
import Vantagens from "../../components/Seguros/vantagens";
import PerguntasFrequentes from "../../components/Seguros/PerguntasFrequentes";

const Seguros = () => {
  return (
    <main>
      <TabelasSeguros />
      <Vantagens />
      <PerguntasFrequentes />
    </main>
  );
};

export default Seguros;
