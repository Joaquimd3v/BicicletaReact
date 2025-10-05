import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Sobre */}
        <div>
          <h3>Sobre a empresa</h3>
          <p>
            Fundada em 2025 em Recife, a Vireon Legacy é uma marca apaixonada
            por transformar a experiência de pedalar. Com bicicletas elétricas
            personalizadas, buscamos unir design, tecnologia e sustentabilidade.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/?lang=pt" target="_blank" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://br.linkedin.com/" target="_blank" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Menu Rápido */}
        <div>
          <h3>Menu Rápido</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="Seguro">Seguros</Link></li>
            <li><Link to="Contato">Contato</Link></li>
          </ul>
        </div>

        {/* Suporte */}
        <div>
          <h3>Suporte</h3>
          <ul>
            <li><Link to="./termos-usuario">Contrato de usuário</Link></li>
            <li><Link to="./termo-privacidade">Política de privacidade</Link></li>
            <li><Link to="./termos-uso">Termos de serviço</Link></li>
          </ul>
        </div>

        {/* Localização */}
        <div>
          <h3>Onde estamos</h3>
          <ul>
            <li>Rua da Empresa, 123 - Bairro, Recife, PE, Brasil.</li>
            <li><a href="tel:+5581987212345">Telefone: (81) 1234-5678</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="bottom">
        © 2025 Todos os direitos reservados. <span>Vireon</span>.
      </div>
    </footer>
  );
};

export default Footer;
