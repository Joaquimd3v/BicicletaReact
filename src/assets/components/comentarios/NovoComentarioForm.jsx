import React, { useState } from "react";

const NovoComentarioForm = ({ onAdicionar }) => {
  const [nome, setNome] = useState("");
  const [texto, setTexto] = useState("");
  const [estrelas, setEstrelas] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    const novo = {
      nome: nome || "Anônimo",
      texto,
      estrelas: parseInt(estrelas),
      data: new Date().toISOString().split("T")[0],
    };
    onAdicionar(novo);
    setNome("");
    setTexto("");
    setEstrelas(5);
  }

  return (
    <form onSubmit={handleSubmit} className="novo-comentario-form">
      <h3>Deixe seu comentário</h3>
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <textarea
        placeholder="Comentário"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <label>
        Estrelas:
        <select
          value={estrelas}
          onChange={(e) => setEstrelas(e.target.value)}
        >
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default NovoComentarioForm;
