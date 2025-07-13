import React from "react";

const ComentariosLista = ({ comentarios }) => {
  if (!comentarios || comentarios.length === 0) {
    return (
      <p className="comentario-vazio">
        Ainda não há comentários para este produto.
      </p>
    );
  }

  return (
    <div className="comentarios-lista">
      {comentarios.map((comentario) => (
        <div key={comentario.id} className="comentario-card">
          <div className="comentario-header">
            <span className="comentario-nome">{comentario.nome}</span>
            <span className="comentario-nota">
              {"⭐".repeat(comentario.nota)}
            </span>
          </div>
          <p className="comentario-data">{comentario.data}</p>
          <p className="comentario-texto">{comentario.comentario}</p>
        </div>
      ))}
    </div>
  );
};

export default ComentariosLista;
