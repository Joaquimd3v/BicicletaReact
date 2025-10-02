import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bicicletas from "../../../data/bicicletas.json";
import { useCart } from "../../../assets/components/Cart/CartContext.jsx";
import "./DetalheBicicleta.css";
import Comentarios from "../../components/comentarios/Comentarios";
import Seguro from "../../components/Bicicletas-Seguro/seguro";

function DetalheBicicleta() {
  const { nome } = useParams();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const bicicleta = bicicletas.bicicletas.find(
    (bike) => bike.nome.toLowerCase().replace(/\s+/g, "-") === nome
  );

  useEffect(() => {
    const zoomLens = document.createElement("div");
    zoomLens.classList.add("zoom-lens");
    document.body.appendChild(zoomLens);

    const imgs = document.querySelectorAll(".zoom-img");

    function handleMouseMove(e) {
      const img = e.currentTarget;
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      zoomLens.style.display = "block";
      zoomLens.style.left = `${e.pageX - zoomLens.offsetWidth / 2}px`;
      zoomLens.style.top = `${e.pageY - zoomLens.offsetHeight / 2}px`;
      zoomLens.style.backgroundImage = `url(${img.src})`;
      zoomLens.style.backgroundPosition = `${(x / rect.width) * 100}% ${
        (y / rect.height) * 100
      }%`;
      zoomLens.style.backgroundSize = `${img.width * 3}px ${img.height * 3}px`;
    }

    function handleMouseLeave() {
      zoomLens.style.display = "none";
    }

    imgs.forEach((img) => {
      img.addEventListener("mousemove", handleMouseMove);
      img.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      imgs.forEach((img) => {
        img.removeEventListener("mousemove", handleMouseMove);
        img.removeEventListener("mouseleave", handleMouseLeave);
      });
      document.body.removeChild(zoomLens);
    };
  }, []);

  if (!bicicleta) return <p>Bicicleta não encontrada.</p>;

  // Adicionar ao carrinho global
  function handleAddToCart() {
    addToCart(bicicleta);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  // Comprar agora -> adiciona ao carrinho e vai para checkout
  function handleComprarAgora() {
    addToCart(bicicleta); // garante que vá para o checkout
    navigate("/checkout");
  }

  return (
    <>
      <main className="titulo-bg">
        <div className="titulo container">
          <p className="font-2-xl cor-c5">{bicicleta.preco}</p>
          <h1 className="font-1-xxl cor-branco">
            {bicicleta.nome}
            <span className="cor-p1">.</span>
          </h1>
        </div>

        <div className="bicicleta container">
          <div className="bicicleta-imagens">
            <div className="zoom-container">
              <img
                src={`/BicicletaReact/img/${bicicleta.imagens[0]}`}
                alt="Imagem bicicleta"
                className="zoom-img"
              />
              <div className="zoom-lens"></div>
            </div>

            {bicicleta.imagens.slice(1).map((img, index) => (
              <img
                key={index}
                src={`/BicicletaReact/img/${img}`}
                alt=""
                className="zoom-img"
              />
            ))}
          </div>

          <div className="bicicleta-conteudo">
            <p className="font-2-l cor-c5">{bicicleta.descricao}</p>

            <div className="bicicleta-comprar">
              <a className="botao" role="button" onClick={handleComprarAgora}>
                Comprar Agora
              </a>

              <a
                className="botao estoque"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart();
                }}
              >
                {added ? "Adicionado ao carrinho!" : "Adicionar ao carrinho"}
              </a>

              <div className="bicicleta-info">
                <span className="font-1-xs cor-c6">
                  <img src="/BicicletaReact/img/icones/entrega.svg" alt="Entrega" />{" "}
                  {bicicleta.entrega}
                </span>
                <span className="font-1-xs cor-c6">
                  <img src="/BicicletaReact/img/icones/estoque.svg" alt="Estoque" />{" "}
                  {bicicleta.estoque} em estoque
                </span>
              </div>
            </div>

            <h2 className="font-1-xs cor-c6">Informações</h2>
            <ul className="bicicleta-informacoes">
              {bicicleta.informacoes.map((info, index) => (
                <li key={index}>
                  <img
                    src={`/BicicletaReact/img/icones/${info.icone}`}
                    alt={info.titulo}
                  />
                  <h3 className="font-1-m cor-branco">{info.titulo}</h3>
                  <p className="font-2-xs cor-c5">{info.descricao}</p>
                </li>
              ))}
            </ul>

            <h2 className="font-1-xs cor-branco">Ficha Técnica</h2>
            <ul className="bicicleta-ficha font-2-s cor-c5">
              {Object.entries(bicicleta.fichaTecnica).map(([label, valor]) => (
                <li key={label}>
                  {label} <span>{valor}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Comentarios produtoId={bicicleta.id || nome} />
      <Seguro />
    </>
  );
}

export default DetalheBicicleta;
