import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, clearCart } = useCart(); // ⬅️ ADICIONE clearCart AQUI
  const navigate = useNavigate();

  const total = items.length > 0 ? items.reduce((acc, item) => acc + Number(item.preco), 0) : 0;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("cart-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("cart-open");
    }
  }, [isOpen]);

  function handleCheckout() {
    if (items.length === 0) return;
    setIsOpen(false);
    navigate("/checkout", { state: { items } });
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
        <div 
          className={`cart-overlay ${isOpen ? "open" : ""}`} 
          onClick={() => setIsOpen(false)} 
        />
      )}

      <div className={`cart-dropdown ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h3>Seu Carrinho</h3>
          <button className="cart-close-button" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>

        <div className="cart-content">
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
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.nome}</p>
                      <p className="cart-item-price">
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
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <strong>Total:</strong>{" "}
              <strong>
                {total.toLocaleString("pt-BR", { 
                  style: "currency", 
                  currency: "BRL" 
                })}
              </strong>
            </div>

            <button className="cart-checkout" onClick={handleCheckout}>
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}