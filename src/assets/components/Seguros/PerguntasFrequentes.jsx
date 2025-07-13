import React, { useState, useRef } from "react";
import "./perguntas.css";

const PerguntasFrequentes = () => {
  const [ativoIndex, setAtivoIndex] = useState(null);
  const respostasRef = useRef([]);

  const toggleResposta = (index) => {
    setAtivoIndex(ativoIndex === index ? null : index);
  };

  const perguntas = [
    {
      pergunta: "Quais são as formas de pagamento disponíveis?",
      resposta:
        "Aceitamos cartões de crédito, débito, Pix e boleto bancário. Parcelamos em até 12x sem juros no cartão.",
    },
    {
      pergunta: "Posso pagar no boleto?",
      resposta:
        "Sim! Oferecemos a opção de pagamento à vista via boleto com até 10% de desconto.",
    },
    {
      pergunta: "Tem desconto para pagamento à vista?",
      resposta:
        "Sim. Pagando via Pix ou boleto à vista, você garante um desconto exclusivo no valor final da sua bicicleta.",
    },
    {
      pergunta: "As bicicletas são entregues montadas?",
      resposta:
        "Sim. Entregamos sua bicicleta 100% montada e pronta para uso, com todos os ajustes feitos por técnicos especializados.",
    },
    {
      pergunta: "Qual o material das bicicletas?",
      resposta:
        "Trabalhamos com quadros em carbono e alumínio premium, que oferecem mais leveza, resistência e melhor performance.",
    },
    {
      pergunta: "As bicicletas são elétricas?",
      resposta:
        "Sim. Todos os nossos modelos são elétricos, projetados para oferecer desempenho, conforto e assistência inteligente em qualquer trajeto.",
    },
    {
      pergunta: "Como funciona a garantia?",
      resposta:
        "Oferecemos garantia para o quadro, componentes e parte elétrica. O prazo varia conforme o modelo, mas todos contam com suporte técnico especializado.",
    },
    {
      pergunta:
        "Vocês trabalham com bicicletas convencionais (sem motor elétrico)?",
      resposta:
        "Atualmente, oferecemos apenas modelos elétricos. No entanto, já estamos desenvolvendo novas linhas e em breve teremos bicicletas convencionais disponíveis em nosso catálogo.",
    },
  ];

  return (
    <article className="perguntas container">
      <h2 className="font-1-xxl">
        Perguntas que recebemos<span className="cor-p1">.</span>
      </h2>
      <dl id="faq">
        {perguntas.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${ativoIndex === index ? "ativo" : ""}`}
          >
            <dt
              className="font-1-m-b faq-pergunta"
              onClick={() => toggleResposta(index)}
            >
              {item.pergunta}
            </dt>
            <dd
              ref={(el) => (respostasRef.current[index] = el)}
              className="font-2-m-b cor-c9 faq-resposta"
              style={{
                maxHeight:
                  ativoIndex === index
                    ? respostasRef.current[index]?.scrollHeight + "px"
                    : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              {item.resposta}
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
};

export default PerguntasFrequentes;
