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
        "Trabalhamos com quadros em aço e alumínio, garantindo resistência, conforto e excelente custo-benefício.",
    },
    {
      pergunta: "Vocês ainda trabalham com bicicletas elétricas?",
      resposta:
        "Atualmente, não. Focamos exclusivamente em bicicletas convencionais para tornar nossos produtos mais acessíveis e atender melhor à realidade do ciclista brasileiro.",
    },
    {
      pergunta: "Como funciona a garantia?",
      resposta:
        "Todas as bicicletas têm garantia de fábrica para o quadro e componentes. O prazo pode variar de acordo com o modelo e a marca, mas você conta com todo o nosso suporte técnico.",
    },
    {
      pergunta: "As bicicletas são novas ou usadas?",
      resposta:
        "Todos os nossos modelos são novos, com garantia e nota fiscal. Trabalhamos apenas com produtos de qualidade e procedência confiável.",
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
