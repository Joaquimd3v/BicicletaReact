import React from "react";

const ComentarioItem = ({ nome, data, texto, estrelas }) => {
  const dataFormatada = new Date(data).toLocaleDateString("pt-BR");

  return (
    <div className="comentario-item">
      <div className="comentario-topo">
        <strong>{nome}</strong>
        <div className="comentario-estrelas">
          {"★".repeat(estrelas)}{"☆".repeat(5 - estrelas)}
        </div>
      </div>
      <div className="comentario-data">{dataFormatada}</div>
      <p>{texto}</p>
    </div>
  );
};

export default ComentarioItem;
