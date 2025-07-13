import React, { useEffect, useState } from "react";
import "./contato.css";
import "./lojas.css";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  useEffect(() => {
    document.body.id = "contato-body";
    return () => {
      document.body.id = "";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setMensagemEnviada(true);
    setFormData({
      nome: "",
      telefone: "",
      email: "",
      mensagem: "",
    });

    setTimeout(() => {
      setMensagemEnviada(false);
    }, 4000);
  };

  return (
    <>
      <main>
        <div className="titulo-bg">
          <div className="titulo container">
            <p className="font-2-l-b cor-c5">Respostas em até 24h</p>
            <h1 className="font-1-xxl cor-branco">
              nosso contato<span className="cor-p1">.</span>
            </h1>
          </div>
        </div>

        <div className="contato container">
          <section aria-label="Endereço" className="contato-dados">
            <h2 className="font-1-m cor-branco">Loja online</h2>
            <div className="contato-endereco font-2-s cor-c4">
              <p> Rua da Empresa, 123 -</p>
              <p>Tangamandápio - PE</p>
              <p>Rua da Aurora</p>
            </div>
            <address className="contato-meios font-2-s cor-c4">
              <a href="mailto:contato@vireon.com.br">contato@vireon.com.br</a>
              <a href="mailto:assistencia@vireon.com.br">
                assistencia@vireon.com.br
              </a>
              <a href="tel:+811234-5678">81 1234-5678</a>
            </address>
            <div className="contato-redes">
              <a href="/">
                <img src="/BicicletaReact/img/Redes/facebook-p.svg" alt="" />
              </a>
              <a href="/">
                <img src="/BicicletaReact/img/Redes/instagram-p.svg" alt="" />
              </a>
              <a href="/">
                <img src="/BicicletaReact/img/Redes/youtube-p.svg" alt="" />
              </a>
              <a href="/">
                <img src="/BicicletaReact/img/Redes/x-p.svg" alt="" />
              </a>
            </div>
          </section>
          <section className="contato-formulario" aria-label="Formulário">
            {mensagemEnviada && (
              <p className="mensagem-sucesso">Mensagem enviada com sucesso!</p>
            )}
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Escreva seu nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="telefone">Telefone</label>
                <input
                  type="text"
                  id="telefone"
                  name="telefone"
                  placeholder="(51) 91234-5678"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="contato@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-2">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  rows={5}
                  name="mensagem"
                  id="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="botao col-2" type="submit">
                Enviar Mensagem
              </button>
            </form>
          </section>
        </div>
      </main>
      <article className="lojas container">
        <h2 className="font-1-xxl">
          lojas locais<span className="cor-p1">.</span>
        </h2>

        <div className="lojas-item">
          <img
            src="/BicicletaReact/img/lojas/recife.jpg"
            alt="Mapa marcando o endereço em Rua Tangamandápio, 25 - Recife - PE"
          />
          <div className="lojas-conteudo">
            <h3 className="font-1-xl">Recife</h3>
            <div className="lojas-dados font-2-s cor-8">
              <p>Rua Tangamandápio, 25</p>
              <p>Recife - PE</p>
            </div>
            <div className="lojas-dados font-2-s cor-8">
              <a href="mailto:recife@vireon.com">recife@vireon.com</a>
              <a href="tel:+558112345678">+55 81 1234-5678</a>
            </div>
            <p className="lojas-tempo font-1-s">
              <img
                src="/BicicletaReact/img/icones/horario.svg"
                alt="Horário de funcionamento"
              />
              Das 13h às 13h15 — quando o gerente quiser aparecer
            </p>
          </div>
        </div>

        <div className="lojas-item">
          <img
            src="/BicicletaReact/img/lojas/recife-2.jpg"
            alt="Mapa marcando o endereço em Rua da Paz, 500 - Recife - PE"
          />
          <div className="lojas-conteudo">
            <h3 className="font-1-xl">Recife</h3>
            <div className="lojas-dados font-2-s cor-8">
              <p>Rua da Paz, 500</p>
              <p>Recife - PE</p>
            </div>
            <div className="lojas-dados font-2-s cor-8">
              <a href="mailto:recife2@vireon.com">recife2@vireon.com</a>
              <a href="tel:+558199876543">+55 81 9876-5432</a>
            </div>
            <p className="lojas-tempo font-1-s">
              <img
                src="/BicicletaReact/img/icones/horario.svg"
                alt="Horário de funcionamento"
              />
              Das 09h às 17h — Ou quando o estoque for reposto, ou quando o café
              acabar.
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Contato;
