import React, { useState } from "react";
import BikeModel from "./BikeModel";
import "./bicicletacustomizer.css";

const parts = [
  { key: "frame", label: "Cor do quadro" },
  { key: "seat", label: "Cor da sela" },
  { key: "tiresInner", label: "Rodas" },
  { key: "handlebar", label: "Cor do guidão" },
  { key: "brakes", label: "Cor dos freios" },
  { key: "chain", label: "Cor da corrente" },
];

export default function BikeCustomizer() {
  const [step, setStep] = useState(0);
  const [selectedColors, setSelectedColors] = useState({
    frame: "#ff0000",
    seat: "#000000",
    tiresInner: "#333333",
    handlebar: "#444444",
    brakes: "#666666",
    chain: "#777777",
  });

  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColors((prev) => ({
      ...prev,
      [parts[step].key]: color,
    }));
  };

  const nextStep = () => {
    if (step < parts.length - 1) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const randomizeColors = () => {
    const randomColor = () =>
      "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    setSelectedColors({
      frame: randomColor(),
      seat: randomColor(),
      tiresInner: randomColor(),
      handlebar: randomColor(),
      brakes: randomColor(),
      chain: randomColor(),
    });
  };

  return (
    <div className="bike-wrapper">
      <div className="bike-3d-area">
        <BikeModel
          glbPath={`/BicicletaReact/img/3D/YT_Tues/YT_Tues.glb`}
          selectedColors={selectedColors}
        />
      </div>

      <div className="bike-ui-footer">
        <div className="part-label">{parts[step].label}</div>

        <input
          type="color"
          value={selectedColors[parts[step].key]}
          onChange={handleColorChange}
          className="color-selector"
        />

        <div className="bike-buttons">
          <button onClick={prevStep} disabled={step === 0}>
            Anterior
          </button>
          <button onClick={nextStep} disabled={step === parts.length - 1}>
            Próximo
          </button>
        </div>

        <button className="random-button" onClick={randomizeColors}>
          Cores aleatórias
        </button>
      </div>
    </div>
  );
}
