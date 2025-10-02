import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Carregar carrinho do localStorage ao iniciar
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(savedItems);
  }, []);

  // Salvar carrinho no localStorage sempre que items mudar
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Adicionar produto ao carrinho
  const addToCart = (product) => {
    const precoNumerico =
      typeof product.preco === "string"
        ? Number(product.preco.replace("R$", "").replace(/\./g, "").replace(",", "."))
        : product.preco;

    const produtoCorrigido = { ...product, preco: precoNumerico };

    setItems((prev) => [...prev, produtoCorrigido]);
  };

  // Remover produto pelo id
  const removeFromCart = (productToRemove) => {
    setItems((prev) => prev.filter((item) => item.id !== productToRemove.id));
  };

  // Limpar carrinho
  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
