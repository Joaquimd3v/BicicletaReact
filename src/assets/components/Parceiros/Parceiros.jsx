import React from "react";
import "./Parceiros.css";

const basePath = "/BicicletaReact";

const parceiros = [
  { name: "Caloi", logo: `${basePath}/img/parceiros/caloi.svg` },
  { name: "Cannondale", logo: `${basePath}/img/parceiros/cannondale.svg` },
  { name: "Gt", logo: `${basePath}/img/parceiros/gt.png` },
  { name: "Trek", logo: `${basePath}/img/parceiros/trek.svg` },
  { name: "Bianchi", logo: `${basePath}/img/parceiros/bianchi.svg` },
  { name: "Santa Cruz", logo: `${basePath}/img/parceiros/santa.png` },
  { name: "Pinarrelo", logo: `${basePath}/img/parceiros/pinarrelo.png` },
];

export default function Parceiros() {
  return (
    <section className="parceiros" aria-label="Nossos parceiros">
      <h2 className="font-1-xxl container">
        Nossos parceiros<span className="cor-p1">.</span>
      </h2>
      <div className="marquee-container">
        <div className="fade-left"></div>
        <div className="fade-right"></div>
        <ul className="marquee">
          {[...parceiros, ...parceiros].map((p, idx) => (
            <li key={idx}>
              <img src={p.logo} alt={p.name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
