import { useState, useEffect } from "react";
import "./AvisoCookies.css";

export default function AvisoCookies() {
  const [mostrarAviso, setMostrarAviso] = useState(false);

  // Função para verificar se o cookie existe
  function verificarCookieConsentimento() {
    return document.cookie.includes("cookiesAceitos=true");
  }

  // Função para criar um cookie (expira em 30 dias)
  function salvarConsentimento() {
    const dias = 30;
    const dataExpiracao = new Date();
    dataExpiracao.setTime(dataExpiracao.getTime() + dias * 24 * 60 * 60 * 1000);
    const expira = "expires=" + dataExpiracao.toUTCString();
    document.cookie = "cookiesAceitos=true; path=/; " + expira;
  }

  useEffect(() => {
    if (!verificarCookieConsentimento()) {
      setMostrarAviso(true);
    }
  }, []);

  const aceitarCookies = () => {
    salvarConsentimento();
    setMostrarAviso(false);
  };

  const rejeitarCookies = () => {
    // Aqui você pode salvar outro cookie se quiser marcar como rejeitado
    setMostrarAviso(false);
  };

  if (!mostrarAviso) return null;

  return (
    <div className="overlay-cookies">
      <div className="aviso-cookies">
        <div className="conteudo-cookies">
          <div className="icone-cookie">🍪</div>
          <div className="texto-cookie">
            <h2 className="font-1-x cor-c12">Este site usa cookies</h2>
            <p className="font-2-m cor-c8">Usamos cookies para melhorar sua experiência de navegação.</p>
          </div>
          <div className="botoes-cookie">
            <button className="botao-aceitar" onClick={aceitarCookies}>
              Aceitar
            </button>
            <button className="botao-rejeitar" onClick={rejeitarCookies}>
              Rejeitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
