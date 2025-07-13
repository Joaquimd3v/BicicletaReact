import { useParams } from "react-router-dom";
import ProdutosBicicletas from "../../../data/ProdutosBicicletas.json";
import "../Produtos/produtos.css";

const Produto = () => {
  const { nome } = useParams();
  const produto = produtos.bicicletas.find(
    (item) => item.nome.toLowerCase().replace(/\s/g, "") === nome.toLowerCase()
  );

  if (!produto) return <p>Produto não encontrado.</p>;

  return (
    <main className="titulo-bg">
      <div className="titulo container">
        <p className="font-2-xl cor-c5">{produto.preco}</p>
        <h1 className="font-1-xxl cor-branco">
          {produto.nome}
          <span className="cor-p1">.</span>
        </h1>
      </div>

      <div className="bicicleta container">
        <div className="bicicleta-imagens">
          <img
            src={`/img/bicicletas-catalogo/${produto.imagem}`}
            alt={`Imagem ${produto.nome}`}
          />
        </div>

        <div className="bicicleta-conteudo">
          <p className="font-2-l cor-c5">{produto.descricao}</p>

          <div className="bicicleta-comprar">
            <a className="botao" href="../orcamento.html">
              Comprar Agora
            </a>
            <a className="botao estoque" href="">
              Adicionar ao carrinho
            </a>
          </div>

          <h2 className="font-1-xs cor-0">Informações</h2>
          <ul className="bicicleta-informacoes">
            {produto.caracteristicas.map((carac, i) => (
              <li key={i}>
                <img src={`/img/icones/${carac.icone}`} alt="" />
                <h3 className="font-1-m cor-branco">{carac.descricao}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Produto;
