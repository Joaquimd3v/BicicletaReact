import { useEffect, useState } from "react";
import produtos from "../../../data/produtos.json";
import "./Bicicletas.css";
import { Link } from "react-router-dom";

function Bicicletas() {
  const [bicicletas, setBicicletas] = useState([]);

  useEffect(() => {
    setBicicletas(produtos.bicicletas);
  }, []);

  return (
    <main>
      <div className="titulo-bg">
        <div className="titulo container">
          <p className="font-2-l-b cor-c5">Encontre a sua</p>
          <h1 className="font-1-xxl cor-branco">
            nossos modelos premium<span className="cor-p1">.</span>
          </h1>
        </div>
      </div>

      {bicicletas.map((bike, index) => (
        <div className="bicicletas-bg" key={index}>
          <div className="bicicletas container">
            <div className="bicicletas-imagem">
              <img
                src={`/BicicletaReact/img/bicicletas-catalogo/${bike.imagem}`}
                alt={`Bicicleta ${bike.nome}`}
              />
              <span className="font-2-m cor-branco">{bike.preco}</span>
            </div>
            <div className="bicicletas-conteudo">
              <h2
                className={`font-1-xl ${
                  index % 2 === 0 ? "cor-preta" : "cor-branco"
                }`}
              >
                {bike.nome}
              </h2>

              <p
                className={`font-2-s ${index % 2 === 0 ? "cor-c8" : "cor-c5"}`}
              >
                {bike.descricao}
              </p>
              <ul
                className={`font-1-l ${index % 2 === 0 ? "cor-c8" : "cor-c5"}`}
              >
                {bike.caracteristicas.map((carac, i) => (
                  <li key={i}>
                    <img
                      src={`/BicicletaReact/img/icones/${carac.icone}`}
                      alt={carac.descricao}
                    />
                    {carac.descricao}
                  </li>
                ))}
              </ul>
              <Link
                className="botao seta"
                to={`/bicicletas/${bike.nome
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                Veja Mais
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Bicicletas;
