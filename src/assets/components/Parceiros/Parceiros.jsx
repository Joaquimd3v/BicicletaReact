import React from "react";
import "./Parceiros.css";

export default function Parceiros() {
  return (
    <section className="parceiros" aria-label="Nossos parceiros">
      <h2 className="font-1-xxl container">
        Nossos parceiros<span className="cor-p1">.</span>
      </h2>
      <ul>
        <li>
          <img src="img/parceiros/caloi-2 1.svg" alt="Caloi" />
        </li>
        <li>
          <img src="img/parceiros/cannondale-1 1.svg" alt="Cannondale" />
        </li>
        <li>
          <img src="img/parceiros/fuji-bicycles 1.svg" alt="Fuji" />
        </li>
        <li>
          <img src="img/parceiros/giant-bicycles 1.svg" alt="Giant" />
        </li>
        <li>
          <img src="img/parceiros/thor-2 1.svg" alt="Thor" />
        </li>
        <li>
          <img src="img/parceiros/green-giant 2.svg" alt="Green" />
        </li>
        <li>
          <img src="img/parceiros/shimano-1- 1.svg" alt="Shimano" />
        </li>
        <li>
          <img src="img/parceiros/huffy-bicycles 1.svg" alt="Huffy" />
        </li>
      </ul>
    </section>
  );
}
