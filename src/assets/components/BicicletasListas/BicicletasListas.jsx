import React from "react";
import { Link } from "react-router-dom";
import "./BicicletasListas.css";

export default function BicicletasLista() {
  return (
    <article className="bicicletas-lista">
      <h2 className="font-1-xxl container">
        Modelos de destaque da nossa linha<span className="cor-p1">.</span>
      </h2>
      <ul className="bicicletas-lista-items">
        <li>
          <Link to="/bicicletas/vireon-element">
            <img
              src="img/bicicletas-home/element-home-resized.jpg"
              alt="Bicicleta moderna element"
            />
            <h3 className="font-1-xl">Element</h3>
            <span className="font-2-m cor-c8">R$ 17.000</span>
          </Link>
        </li>
        <li>
          <Link to="/bicicletas/vireon-ignite">
            <img
              src="img/bicicletas-home/ignite-home-resized.jpg"
              alt="Bicicleta moderna ignite"
            />
            <h3 className="font-1-xl">Ignite</h3>
            <span className="font-2-m cor-c8">R$ 35.000</span>
          </Link>
        </li>
        <li>
          <Link to="/bicicletas/vireon-nebula">
            <img
              src="img/bicicletas-home/nebula-home.jpg"
              alt="Bicicleta moderna nebula"
            />
            <h3 className="font-1-xl">Nebula</h3>
            <span className="font-2-m cor-c8">R$ 64.000</span>
          </Link>
        </li>
      </ul>
    </article>
  );
}
