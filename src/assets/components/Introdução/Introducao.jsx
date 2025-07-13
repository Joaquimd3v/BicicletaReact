import { Link } from "react-router-dom";
import "./Introducao.css";

export default function Header() {
  return (
    <main className="introducao-bg">
      <div className="introducao container">
        <div className="introducao-conteudo">
          <h1 className="font-1-xxl cor-branco">
            <span className="nowrap">Mais que uma bike</span>
            <br />
            <span className="gradient">Uma extensão de você.</span>
          </h1>
          <p className="font-2-l cor-c5">
            Vireon — Bicicletas elétricas feitas sob medida, com precisão e
            qualidade de alto nível. Descubra o seu ritmo. Explore o mundo com a
            sua identidade.
          </p>
          <Link to="/bicicletas" className="botao">
            Escolha a sua
          </Link>
        </div>
        <div className="introducao-imagem">
          <img
            src="img/bicicletas-design/img-intro.png"
            alt="Bicicletas Elétrica"
          />
        </div>
      </div>
    </main>
  );
}
