import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer">
        <div className="footer-conteudo">
          <h3>Sobre a empresa</h3>
          <p>
            Fundada em 2025 em Recife, a Vireon Legacy é uma marca apaixonada
            por transformar a experiência de pedalar. Com bicicletas elétricas
            personalizadas, buscamos unir design, tecnologia e sustentabilidade
            para oferecer uma nova forma de se locomover pela cidade.
          </p>

          <div className="icones">
            <a
              href="https://www.facebook.com/?locale=pt_BR"
              aria-label="Facebook"
              target="_blank"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/?lang=pt"
              aria-label="Twitter"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
                href="https://br.linkedin.com/"
              aria-label="LinkedIn"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Seção Menu Rápido */}
        <div className="footer-conteudo">
          <h3>Menu Rápido</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Seguro">Seguros</Link>
            </li>
            <li>
              <Link to="Contato">Contato</Link>
            </li>
          </ul>
        </div>

        {/* Seção Suporte */}
        <div className="footer-conteudo">
          <h3>Suporte</h3>
          <ul className="footer-links">
            <li>
              <Link to="./termos-usuario">Contrato de usuário</Link>
            </li>
            <li>
              <Link to="./termo-privacidade">Política de privacidade</Link>
            </li>
            <li>
              <Link to="./termos-uso">Termos de serviço</Link>
            </li>
          </ul>
        </div>

        {/* Seção Promoções */}
        <div className="footer-conteudo footer-noticias">
          <h3>Promoções</h3>
          <p>Se inscreva para receber promoções no seu email.</p>
          <form className="footer-form">
            <input
              type="email"
              id="email"
              placeholder="Digite seu email aqui"
            />
            <button className="botao-form">Se inscrever</button>
          </form>
          <p>Ao se inscrever, você aceita nossa política de privacidade.</p>
        </div>

        {/* Seção Local */}
        <div className="footer-conteudo">
          <div className="footer-local">
            <h3>Onde estamos</h3>
            <ul>
              <li>
                Endereço: Rua da Empresa, 123 - Bairro, Recife, PE, Brasil.
              </li>
              <li>
                <a href="tel:+5581987212345">Telefone: (81) 1234-5678</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="footer-bottom">
        <div className="direito">
          <p>
            © 2025 Todos os direitos reservados. <span>Vireon</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
