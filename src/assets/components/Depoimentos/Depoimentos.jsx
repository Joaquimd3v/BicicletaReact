import React, { useEffect } from "react";
import "./Depoimentos.css";

const Depoimentos = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    let currentIndex = 0;
    let interval;

    // Função para mostrar slide atual
    function showSlide(index) {
      const slideWidth = slides[0].clientWidth;
      document.querySelector(".slides").style.transform = `translateX(-${index * slideWidth}px)`;
    }

    // Próximo slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }

    // Slide anterior
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }

    // Iniciar rotação automática
    function startAutoSlide() {
      interval = setInterval(nextSlide, 6000); // troca a cada 6 segundos
    }

    // Parar rotação automática
    function stopAutoSlide() {
      clearInterval(interval);
    }

    // Eventos das setas
    nextBtn.addEventListener("click", () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide(); // reinicia a rotação
    });

    prevBtn.addEventListener("click", () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide(); // reinicia a rotação
    });

    // Iniciar
    showSlide(currentIndex);
    startAutoSlide();

    // Limpeza do efeito (se o componente for desmontado)
    return () => {
      stopAutoSlide();
    };
  }, []);

  return (
    <section className="depoimentos-bg">
      <div className="depoimentos container">
        <h2 className="font-1-xxl container cor-c12">
          O que nossos clientes dizem<span className="cor-p1">.</span>
        </h2>
        <div className="carrossel">
          <div className="slides" id="slides">
            {/* Depoimento 1 */}
            <div className="slide">
              <div className="conteudo">
                <div className="avatar">
                  <img
                    src="https://conteudo.imguol.com.br/c/entretenimento/1f/2020/01/24/o-cantor-pericles-1579896864104_v2_4x3.jpg"
                    alt="Magro Marrone"
                  />
                </div>
                <div className="texto">
                  <p className="citacao font-2-l-i cor-c11">
                    "Já tentei de tudo pra emagrecer, mas nada funcionava... até conhecer a Vireon Legacy. A bike é
                    tão confortável e estilosa que pedalar virou parte da minha rotina. Resultado? Já se foram 30kg -
                    e ganhei fôlego até pra show de 3 horas."
                  </p>
                  <p className="nome cor-c12 font-1-l">Magro Marrone</p>
                </div>
              </div>
            </div>
            {/* Depoimento 2 */}
            <div className="slide">
              <div className="conteudo">
                <div className="avatar">
                  <img
                    src="https://static.poder360.com.br/2022/09/kidbengala-instagram-15set2022-848x477.png"
                    alt="Jorge Malakias"
                  />
                </div>
                <div className="texto">
                  <p className="citacao font-2-l-i cor-c11">
                    "A Vireon é pau pra toda obra! Uso minha Legacy tanto pra ir trabalhar quanto pra explorar
                    trilhas no fim de semana. Confortável, resistente e com um visual que chama atenção por onde passa."
                  </p>
                  <p className="nome cor-c12 font-1-l">Jorge Malakias</p>
                </div>
              </div>
            </div>
            {/* Depoimento 3 */}
            <div className="slide">
              <div className="conteudo">
                <div className="avatar">
                  <img
                    src="https://uploads.diariodopoder.com.br/2025/02/2a769a2d-meme-lula-5.jpeg"
                    alt="Claudio Subtraires"
                  />
                </div>
                <div className="texto">
                  <p className="citacao font-2-l-i cor-c11">
                    "Comprei uma Vireon Legacy e me apaixonei. Design incrível, desempenho impecável... Mas o
                    instinto falou mais alto. Tentei sair com uma bateria reserva escondida na maleta. Fui pego,
                    claro. Agora pedalo no pátio do presídio, mas com estilo."
                  </p>
                  <p className="nome cor-c12 font-1-l">Claudio Subtraires</p>
                </div>
              </div>
            </div>
            {/* Depoimento 4 */}
            <div className="slide">
              <div className="conteudo">
                <div className="avatar">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKv6Ec4FwznhcEbED9bqpoqw2yFKFzqU0WAA&s"
                    alt="Juliana Lopes"
                  />
                </div>
                <div className="texto">
                  <p className="citacao font-2-l-i cor-c11">
                    "Depois de conhecer a Vireon Legacy, pensei seriamente em não taxar mais nada. Uma bike dessas
                    merece incentivo, não imposto!"
                  </p>
                  <p className="nome cor-c12 font-1-l">Ivan Impostinho</p>
                </div>
              </div>
            </div>
            {/* Depoimento 5 */}
            <div className="slide">
              <div className="conteudo">
                <div className="avatar">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPq8Wv9883QQ7DCRTj7HJ40UVVqElz0FKs7A&s"
                    alt="Seu Ramon"
                  />
                </div>
                <div className="texto">
                  <p className="citacao font-2-l-i cor-c11">
                    "A Vireon Legacy é tão boa que até esqueci as 14 vezes que fui despejado. Não pago aluguel, mas
                    pelo menos ando com estilo. E como diz o ditado: 'Não existe trabalho ruim. O ruim é ter que ir
                    a pé!' - ainda bem que agora eu vou de bike."
                  </p>
                  <p className="nome cor-c12 font-1-l">Seu Ramon</p>
                </div>
              </div>
            </div>
            {/* Depoimento 6 */}
            <div className="slide">
              <div className="conteudo">
                <div className="avatar">
                  <img
                    src="https://pm1.aminoapps.com/7358/23897f66e0e470720cc273a84f9ac8f58129ba46r1-256-256v2_00.jpg"
                    alt="Carlos Jorge"
                  />
                </div>
                <div className="texto">
                  <p className="citacao font-2-l-i cor-c11">
                    "Ah shit, here we go again... But this time, it's on a Vireon Legacy. I was done with those
                    old, noisy bikes. When I got on this one, it was a whole different story - sleek design,
                    comfort, and even the cops stopped chasing me. Now, I ride in style and without a care in the
                    world!"
                  </p>
                  <p className="nome cor-c12 font-1-l">Carlos Jorge</p>
                </div>
              </div>
            </div>
          </div>
          {/* Setas */}
          <div className="controles-seta">
            <button id="prev">&#10094;</button>
            <button id="next">&#10095;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
