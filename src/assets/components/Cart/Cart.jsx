import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = items.length > 0 ? items.reduce((acc, item) => acc + Number(item.preco), 0) : 0;

  function handleCheckout() {
    if (items.length === 0) return;
    navigate("/checkout", { state: { items } }); // Sem frete
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
                      src={`/BicicletaReact/img/${item.imagens?.[0]}`}
                      alt={item.nome}
                      className="cart-thumb"
                    />
                    <div>
                      <p>{item.nome}</p>
                      <p>
                        {item.preco.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                      <button className="botao-remover" onClick={() => removeFromCart(item)}>
                        Remover
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-total">
                <strong>Total:</strong>{" "}
                <strong>
                  {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </strong>
              </div>

              <button className="cart-checkout" onClick={handleCheckout}>
                Finalizar Compra
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
