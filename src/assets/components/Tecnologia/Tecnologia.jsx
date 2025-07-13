import React from "react";
import { Link } from "react-router-dom";
import "./Tecnologia.css";

export default function Tecnologia() {
  return (
    <>
      <article className="tecnologia-bg">
        <div className="tecnologia container">
          <div className="tecnologia-conteudo">
            <span className="font-2-l-b cor-c5">Tecnologia Avançada</span>
            <h2 className="font-1-xxl cor-branco">
              Você escolhe o visual. Você escolhe o desempenho
              <span className="cor-p1">.</span>
            </h2>
            <p className="font-2-l cor-c5">
              Cada Vireon carrega a sua essência. Projetada especialmente para o
              seu biotipo, proporciona uma experiência de pedal única. E claro,
              com as cores que você escolhe para deixar tudo com a sua cara.
            </p>
            <Link to="/customize" className="meu-link">
              CUSTOMIZE A SUA
            </Link>
            <div className="tecnologia-vantagens">
              <div>
                <img src="img/icones/SVGRepo_iconCarrier.svg" alt="" />
                <h3 className="font-1-m cor-branco">Amigo do planeta</h3>
                <p className="font-2-s cor-c5">
                  Nossas bicicletas foram pensadas para ir além do desempenho:
                  elas ajudam a preservar o planeta. Com emissão de carbono
                  praticamente nula, você pedala com consciência e faz parte de
                  um futuro mais sustentável.
                </p>
              </div>
              <div>
                <img src="img/icones/pata-amiga 1 (1).svg" alt="" />
                <h3 className="font-1-m cor-branco">Pata Solidária</h3>
                <p className="font-2-s cor-c5">
                  Cada bicicleta Vireon carrega mais do que inovação e estilo —
                  carrega também um propósito. Parte do valor das nossas vendas
                  é destinada a projetos que acolhem e protegem animais
                  abandonados. Pedale com a gente por um mundo mais justo para
                  todos os seres vivos.
                </p>
              </div>
            </div>
          </div>
          <div className="tecnologia-imagem">
            <img src="img/fotos/diferencial.jpg" alt="" />
          </div>
        </div>
      </article>
    </>
  );
}
