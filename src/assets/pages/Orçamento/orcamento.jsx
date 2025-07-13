import React, { useState, useEffect } from "react";
import bicicletasData from "../../../data/bicicletas-orcamento.json";
import "./orcamento.css";

export default function Orcamento() {
  useEffect(() => {
    document.body.id = "orcamento-body";
    return () => {
      document.body.id = "";
    };
  }, []);

  const [bicicletas, setBicicletas] = useState([]);
  const [formData, setFormData] = useState({});
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  useEffect(() => {
    setBicicletas(bicicletasData.bicicletas);
  }, []);

  useEffect(() => {
    const cep = formData.cep?.replace(/\D/g, "");

    if (!cep || cep.length < 8) {
      setFormData((prev) => ({
        ...prev,
        logradouro: "",
        bairro: "",
        cidade: "",
        estado: "",
      }));
      return;
    }

    const buscarEndereco = async () => {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
          console.warn("CEP não encontrado.");
          return;
        }

        setFormData((prev) => ({
          ...prev,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf,
        }));
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
      }
    };

    buscarEndereco();
  }, [formData.cep]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let novoValor = value;

    if (name === "cep") {
      const somenteNumeros = value.replace(/\D/g, "");
      if (somenteNumeros.length <= 5) {
        novoValor = somenteNumeros;
      } else {
        novoValor =
          somenteNumeros.slice(0, 5) + "-" + somenteNumeros.slice(5, 8);
      }
    }

    if (name === "cpf") {
      const somenteNumeros = value.replace(/\D/g, "").slice(0, 11);
      if (somenteNumeros.length <= 3) {
        novoValor = somenteNumeros;
      } else if (somenteNumeros.length <= 6) {
        novoValor = somenteNumeros.slice(0, 3) + "." + somenteNumeros.slice(3);
      } else if (somenteNumeros.length <= 9) {
        novoValor =
          somenteNumeros.slice(0, 3) +
          "." +
          somenteNumeros.slice(3, 6) +
          "." +
          somenteNumeros.slice(6);
      } else {
        novoValor =
          somenteNumeros.slice(0, 3) +
          "." +
          somenteNumeros.slice(3, 6) +
          "." +
          somenteNumeros.slice(6, 9) +
          "-" +
          somenteNumeros.slice(9);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: novoValor,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    setMensagemEnviada(true);
    setFormData({});

    setTimeout(() => {
      setMensagemEnviada(false);
    }, 4000);
  };

  return (
    <main>
      <div className="titulo-bg">
        <div className="titulo container">
          <p className="font-2-l-b cor-c5">Cotações no seu email</p>
          <h1 className="font-1-xxl cor-branco">
            solicite um orçamento<span className="cor-p1">.</span>
          </h1>
        </div>
      </div>

      <form className="orcamento container" onSubmit={handleSubmit}>
        {mensagemEnviada && (
          <p className="mensagem-sucesso-orcamento">
            Orçamento enviado com sucesso!
          </p>
        )}
        <div className="orcamento-produto">
          <h2 className="font-1-xs cor-c5">Bicicleta ou Seguro?</h2>

          <input
            type="radio"
            name="tipo"
            value="vireon"
            id="vireon"
            onChange={handleChange}
          />
          <label htmlFor="vireon">Vireon</label>

          <input
            type="radio"
            name="tipo"
            value="seguro"
            id="seguro"
            onChange={handleChange}
          />
          <label htmlFor="seguro">Seguro</label>

          <div className="orcamento-conteudo" id="orcamento-vireon">
            <h2 className="font-1-xs cor-c5">Escolha a sua</h2>

            {bicicletas.map((bike, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="produto"
                  value={bike.nome}
                  id={bike.nome}
                  onChange={handleChange}
                />
                <label htmlFor={bike.nome}>
                  {bike.nome} <span>{bike.preco}</span>
                </label>
                <div className="orcamento-detalhes">
                  <ul className="font-1-xs cor-c8">
                    {bike.caracteristicas.map((carac, i) => (
                      <li key={i}>
                        <img
                          src={`/BicicletaReact/img/icones/${carac.icone}`}
                          alt={carac.descricao}
                        />
                        {carac.descricao}
                      </li>
                    ))}
                  </ul>
                  <img
                    src={`/BicicletaReact/img/bicicletas-catalogo/${bike.imagem}`}
                    alt={`Imagem da ${bike.nome}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="orcamento-conteudo" id="orcamento-seguro">
            <h2 className="font-1-xs cor-c5">Escolha o plano</h2>

            <input
              type="radio"
              name="produto"
              value="prata"
              id="prata"
              onChange={handleChange}
            />
            <label htmlFor="prata">
              Prata <span>R$ 250</span>
            </label>

            <input
              type="radio"
              name="produto"
              value="ouro"
              id="ouro"
              onChange={handleChange}
            />
            <label htmlFor="ouro">
              Ouro <span>R$ 500</span>
            </label>
          </div>
        </div>

        <div className="orcamento-dados form">
          <h2 className="font-1-xs cor-c9 col-2">Dados Pessoais</h2>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="sobrenome">Sobrenome</label>
            <input
              type="text"
              id="sobrenome"
              name="sobrenome"
              value={formData.sobrenome || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-2">
            <label htmlFor="cpf">CPF</label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              placeholder="000.000.000-00"
              value={formData.cpf || ""}
              onChange={handleChange}
            />
          </div>
          <div className="col-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </div>
          <h2 className="font-1-xs cor-c9 col-2">Entrega</h2>
          <div>
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={formData.cep || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="numero">Número</label>
            <input
              type="text"
              id="numero"
              name="numero"
              value={formData.numero || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="logradouro">Logradouro</label>
            <input
              type="text"
              id="logradouro"
              name="logradouro"
              value={formData.logradouro || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="bairro">Bairro</label>
            <input
              type="text"
              id="bairro"
              name="bairro"
              value={formData.bairro || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="cidade">Cidade</label>
            <input
              type="text"
              id="cidade"
              name="cidade"
              value={formData.cidade || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="estado">Estado</label>
            <input
              type="text"
              id="estado"
              name="estado"
              value={formData.estado || ""}
              onChange={handleChange}
            />
          </div>
          <button className="botao col-2" type="submit">
            Solicitar Orçamento
          </button>
        </div>
      </form>
    </main>
  );
}
