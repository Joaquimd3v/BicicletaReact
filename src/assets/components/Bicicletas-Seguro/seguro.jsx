import React from "react";
import { Link } from "react-router-dom";
import "./seguro.css";

const Seguro = () => {
  return (
    <article className="seguro-bg">
      <div className="seguro container">
        <div className="seguro-imagem">
          <img
            src="/BicicletaReact/img/Atores/NEYMAR.png"
            alt="Garoto Propaganda Vireon"
          />
        </div>
        <div className="seguro-conteudo">
          <h2 className="font-1-xxl cor-branco">
            Protegido como um craque em campo
            <span className="cor-p1">.</span>
          </h2>
          <p className="font-2-l cor-c5">
            Com o Neymar como nosso embaixador, garantimos a mesma proteção que
            um craque precisa dentro e fora das quadras. Nosso seguro para
            bicicletas é pensado para quem leva o pedal a sério e não abre mão
            da segurança.
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
