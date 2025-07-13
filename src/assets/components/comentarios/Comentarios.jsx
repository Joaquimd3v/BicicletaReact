import React, { useEffect, useState } from "react";
import ComentarioItem from "./ComentarioItem";
import ResumoComentarios from "./ResumoComentarios";
import NovoComentarioForm from "./NovoComentarioForm";
import "./Comentarios.css";

const Comentarios = ({ produtoId }) => {
  const localKey = `comentarios-${produtoId}`;
  const [comentarios, setComentarios] = useState([]);
  const [filtroEstrelas, setFiltroEstrelas] = useState("Todas");
  const [ordem, setOrdem] = useState("Mais recentes");

  useEffect(() => {
    const salvos = localStorage.getItem(localKey);
    if (salvos) {
      setComentarios(JSON.parse(salvos));
    }
  }, [produtoId]);

  const adicionarComentario = (novo) => {
    const atualizados = [novo, ...comentarios];
    setComentarios(atualizados);
    localStorage.setItem(localKey, JSON.stringify(atualizados));
  };

  const comentariosFiltrados = comentarios
    .filter((c) => {
      if (filtroEstrelas === "Todas") return true;
      return c.estrelas === parseInt(filtroEstrelas);
    })
    .sort((a, b) => {
      if (ordem === "Mais recentes") {
        return new Date(b.data) - new Date(a.data);
      } else {
        return new Date(a.data) - new Date(b.data);
      }
    });

  return (
    <section className="comentarios-section">
      <div className="comentarios-header">
        <h2>
          <span className="estrela">★</span> AVALIAÇÕES DOS USUÁRIOS
        </h2>
      </div>

      <ResumoComentarios comentarios={comentarios} />

      <div className="comentarios-filtros">
        <div>
          <label>Ordenar:</label>
          <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
            <option>Mais recentes</option>
            <option>Mais antigas</option>
          </select>
        </div>
        <div>
          <label>Filtrar por:</label>
          <select
            value={filtroEstrelas}
            onChange={(e) => setFiltroEstrelas(e.target.value)}
          >
            <option>Todas</option>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </div>
      </div>

      <NovoComentarioForm onAdicionar={adicionarComentario} />

      <div className="comentarios-lista">
        {comentariosFiltrados.map((comentario, index) => (
          <ComentarioItem key={index} {...comentario} />
        ))}
      </div>
    </section>
  );
};

export default Comentarios;
