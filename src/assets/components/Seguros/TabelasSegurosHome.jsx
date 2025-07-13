import React from "react";
import { Link } from "react-router-dom";
import "./TabelasSeguros.css";

const TabelasSegurosHome = () => {
  return (
    <article className="seguros-bg">
      <div className="seguros container">
        <h2 className="font-1-xxl cor-branco">
          Planos e Coberturas<span className="cor-p1">.</span>
        </h2>

        <div className="seguros-item">
          <h3 className="font-1-xl cor-c6">PRATA</h3>
          <span className="font-1-xl cor-branco">
            R$ 250<span className="font-1-m cor-c5"> mensal</span>
          </span>
          <ul className="font-2-m cor-branco">
            <li>Cobertura contra furto simples e qualificado</li>
            <li>Proteção contra danos causados por acidentes</li>
            <li>Suporte técnico via telefone e WhatsApp</li>
            <li>Franquia reduzida em casos de sinistro</li>
          </ul>
          <Link to="/orcamento" className="botao secundario">
            Contrate
          </Link>
        </div>

        <div className="seguros-item">
          <h3 className="font-1-xl cor-p1">OURO</h3>
          <span className="font-1-xl cor-branco">
            R$ 500<span className="font-1-m cor-c5"> mensal</span>
          </span>
          <ul className="font-2-m cor-branco">
            <li>Todos os benefícios do plano Prata</li>
            <li>Atendimento prioritário ou personalizado</li>
            <li>Cobertura adicional contra danos por vandalismo</li>
            <li>Manutenção preventiva gratuita anual</li>
            <li>Atendimento em até 48h úteis após solicitação</li>
            <li>Franquia reduzida em casos de sinistro</li>
            <li>Cobertura nacional válida em todo o território brasileiro</li>
            <li>Acompanhamento de processo 100% online</li>
          </ul>
          <Link to="/orcamento" className="botao">
            Contrate
          </Link>
        </div>
      </div>
    </article>
  );
};

export default TabelasSegurosHome;
