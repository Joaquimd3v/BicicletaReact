import React from "react";

const ResumoComentarios = ({ comentarios }) => {
  const total = comentarios.length;

  if (total === 0) return null;

  const somaEstrelas = comentarios.reduce((acc, c) => acc + c.estrelas, 0);
  const media = (somaEstrelas / total).toFixed(1);

  const contagem = [0, 0, 0, 0, 0];
  comentarios.forEach((c) => {
    contagem[c.estrelas - 1]++;
  });

  return (
    <div className="comentarios-resumo">
      <div className="avaliacao-resumo">
        <strong>{media}</strong>
        <div className="estrelas">{"★".repeat(Math.round(media))}</div>
        <span>Baseado em {total} avaliações</span>
      </div>

      <ul>
        {contagem
          .map((qtd, i) => ({ estrelas: 5 - i, qtd }))
          .map((item) => (
            <li key={item.estrelas}>
              {item.estrelas} estrelas: {item.qtd}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ResumoComentarios;
