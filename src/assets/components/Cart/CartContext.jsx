import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  // Carregar os itens do carrinho do localStorage ao montar o componente
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(savedItems);
  }, []);

  // Adicionar item ao carrinho
  const addToCart = (product) => {
    // Garantir que o preço seja um número
    const precoNumerico =
      typeof product.preco === "string"
        ? Number(
            product.preco.replace("R$", "").replace(/\./g, "").replace(",", ".")
          )
        : product.preco;

    const produtoCorrigido = {
      ...product,
      preco: precoNumerico,
    };

    setItems((prevItems) => {
      const updatedItems = [...prevItems, produtoCorrigido];
      // Salvar os itens no localStorage sempre que eles mudarem
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // Remover item do carrinho
  const removeFromCart = (productToRemove) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item !== productToRemove);
      // Salvar os itens no localStorage após a remoção
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const value = {
    items,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
