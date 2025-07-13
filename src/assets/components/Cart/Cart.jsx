import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";
import "./Cart.css";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState(null);
  const [cepErro, setCepErro] = useState("");
  const { items, removeFromCart } = useCart();

  const totalProdutos = items.reduce((acc, item) => acc + item.preco, 0);
  const total = frete !== null ? totalProdutos + frete : totalProdutos;

  function calcularFrete(cepDigitado) {
    const cepNum = parseInt(cepDigitado.substring(0, 2));

    if (cepDigitado.length !== 8 || isNaN(cepNum)) {
      setFrete(null);
      setCepErro("CEP inválido");
      return;
    }

    setCepErro("");

    if (cepNum >= 1 && cepNum <= 29) {
      setFrete(15);
    } else if (cepNum >= 80 && cepNum <= 89) {
      setFrete(20);
    } else {
      setFrete(30);
    }
  }

  return (
    <div className="cart-container">
      <button
        className="cart-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Abrir carrinho"
      >
        <FaShoppingCart size={24} color="white" />
        {items.length > 0 && <span className="cart-count">{items.length}</span>}
      </button>

      {isOpen && (
        <div className="cart-dropdown">
          <div className="cart-header">
            <h3>Seu Carrinho</h3>
            <button onClick={() => setIsOpen(false)}>&times;</button>
          </div>

          {items.length === 0 ? (
            <p className="cart-empty">Seu carrinho está vazio</p>
          ) : (
            <>
              <ul className="cart-items">
                {items.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img
                      src={`/BicicletaReact/img/${item.imagens[0]}`}
                      alt={item.nome}
                      className="cart-thumb"
                    />
                    <div>
                      <p className="font-1-s cor-branco">{item.nome}</p>
                      <p className="font-2-xs cor-c5">
                        {item.preco.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <button
                        className="botao-remover"
                        onClick={() => removeFromCart(item)}
                      >
                        Remover
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-cep">
                <label htmlFor="cep">Calcular frete:</label>
                <input
                  id="cep"
                  type="text"
                  placeholder="Digite seu CEP (ex: 01001000)"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  maxLength={8}
                />
                <button onClick={() => calcularFrete(cep)}>Calcular</button>
                {cepErro && <p className="cep-erro">{cepErro}</p>}
                {frete !== null && (
                  <p className="frete-valor">
                    Frete: {frete.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                )}
              </div>

              <div className="cart-total">
                <strong>Total:</strong>
                <strong>
                  {total.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>
            </>
          )}

          <button className="cart-checkout" disabled={items.length === 0}>
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
}
