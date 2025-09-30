import React from "react";
import { Link } from "react-router-dom";
import "./seguro.css";

const Seguro = () => {
  return (
    <article className="seguro-bg">
      <div className="seguro container">
        <div className="seguro-imagem">
          <img
            src="/BicicletaReact/img/Atores/ciclista.jpg"
            alt="Garoto Propaganda Vireon"
          />
        </div>
        <div className="seguro-conteudo">
          <h2 className="font-1-xxl cor-branco">
            Sua liberdade em duas rodas, nossa garantia.
            <span className="cor-p1">.</span>
          </h2>
          <p className="font-2-l cor-c5">
            A liberdade de pedalar sem limites é o que nos move. Nosso seguro para bicicletas foi criado para que você explore cada novo caminho com a certeza de que seu equipamento está protegido. Seja na cidade ou em trilhas 
            desafiantes, pedale com a confiança de que cuidamos do seu bem mais valioso.
          </p>
          <Link to="/seguro" className="botao">
            Conheça Mais
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Seguro;
