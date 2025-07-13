import { useCart } from "./CartContext";

export default function ProductList() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Produto A" },
    { id: 2, name: "Produto B" },
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <span>{p.name}</span>
          <button onClick={() => addToCart(p)}>Adicionar ao carrinho</button>
        </div>
      ))}
    </div>
  );
}
