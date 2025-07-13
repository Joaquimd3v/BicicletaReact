import React from "react";
import "./vantagens.css";

const Vantagens = () => {
  return (
    <article className="vantagens-bg">
      <div className="vantagens container">
        <h2 className="font-2-xl cor-branco">
          Vantagens<span className="cor-p1">.</span>
        </h2>
        <ul>
          <li>
            <img src="./img/icones/eletrica.svg" alt="" />
            <h3 className="font-1-l cor-branco">
              Cobertura para componentes elétricos.
            </h3>
            <p className="font-2-s cor-c5">
              Do motor à bateria, oferecemos suporte completo em caso de falhas.
            </p>
          </li>
          <li>
            <img src="./img/icones/carbono.svg" alt="" />
            <h3 className="font-1-l cor-branco">
              Materiais de alta performance
            </h3>
            <p className="font-2-s cor-c5">
              Nossas bicicletas são produzidas com materiais de ponta, como
              carbono e alumínio premium.
            </p>
          </li>
          <li>
            <img src="./img/icones/sustentavel.svg" alt="" />
            <h3 className="font-1-l cor-branco">
              Compromisso com a sustentabilidade.
            </h3>
            <p className="font-2-s cor-c5">
              Desde os materiais até o processo de produção, adotamos práticas
              que respeitam o meio ambiente.
            </p>
          </li>
          <li>
            <img src="./img/icones/rastreador.svg" alt="" />
            <h3 className="font-1-l cor-branco">Localização em tempo real</h3>
            <p className="font-2-s cor-c5">
              Suas bicicletas podem contar com rastreamento por GPS.
            </p>
          </li>
          <li>
            <img src="./img/icones/seguro.svg" alt="" />
            <h3 className="font-1-l cor-branco">
              Segurança total para sua bicicleta
            </h3>
            <p className="font-2-s cor-c5">
              Cadeado exclusivo e bloqueio remoto pelo app.
            </p>
          </li>
          <li>
            <img src="./img/icones/velocidade.svg" alt="" />
            <h3 className="font-1-l cor-branco">
              Performance em alta velocidade
            </h3>
            <p className="font-2-s cor-c5">
              Bicicletas projetadas para alto desempenho.
            </p>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Vantagens;
