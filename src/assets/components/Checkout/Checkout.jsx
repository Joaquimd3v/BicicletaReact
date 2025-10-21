import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';
import CheckoutStepper from "./CheckoutStepper"; 
import './Checkout.css';

// Componente Resumo do Pedido
const Summary = ({ items, frete, seguro, removeFromCheckout }) => {
  const formatCurrency = (value) =>
    `R$ ${value.toFixed(2).replace('.', ',')}`;

  const subtotal = items.reduce((acc, item) => acc + Number(item.preco), 0);
  const total = subtotal + frete + seguro;

  return (
    <div className="checkout-summary">
      <h3>Resumo do Pedido</h3>
      {items.length === 0 && <p>Carrinho vazio</p>}
      {items.map((item) => (
        <div key={item.id} className="summary-item">
          <img
            src={`/BicicletaReact/img/${item.imagens ? item.imagens[0] : 'default.jpg'}`}
            alt={item.nome}
          />
          <div>
            <p className="summary-item-name">{item.nome}</p>
            <p className="summary-item-price">{formatCurrency(item.preco)}</p>
            <button
              className="summary-remove-item"
              onClick={() => removeFromCheckout(item)}
            >
              Remover
            </button>
          </div>
        </div>
      ))}

      <div className="summary-line">
        <span>Subtotal:</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>

      {frete > 0 && (
        <div className="summary-line">
          <span>Frete:</span>
          <span>{formatCurrency(frete)}</span>
        </div>
      )}

      {seguro > 0 && (
        <div className="summary-line">
          <span>Seguro:</span>
          <span>{formatCurrency(seguro)}</span>
        </div>
      )}

      <p className="summary-total">Total: {formatCurrency(total)}</p>
    </div>
  );
};

export default function Checkout() {
  const { items: cartItems, clearCart } = useCart(); // ⬅️ ADICIONE clearCart AQUI
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const [checkoutItems, setCheckoutItems] = useState(cartItems);

  const [formData, setFormData] = useState({
    nome: "", email: "", telefone: "", rua: "", cidade: "", estado: "", cep: "",
    cartaoNumero: "", cartaoNome: "", cartaoValidade: "", cartaoCVV: "",
  });

  const [seguro, setSeguro] = useState(0);
  const [frete, setFrete] = useState(0);
  const [pedidoFinalizado, setPedidoFinalizado] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const nextStep = () => currentStep < totalSteps && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 1 && setCurrentStep(currentStep - 1);

  const calcularFretePorCEP = (cep) => {
    if (cep.length < 2) return 0;
    const prefixo = parseInt(cep.substring(0, 2));
    if (prefixo >= 1 && prefixo <= 29) return 15;
    if (prefixo >= 80 && prefixo <= 89) return 20;
    return 30;
  };

  useEffect(() => {
    if (formData.cep.length === 8) {
      setFrete(calcularFretePorCEP(formData.cep));
    } else {
      setFrete(0);
    }
  }, [formData.cep]);

  // ⬇️ FUNÇÃO ATUALIZADA PARA LIMPAR CARRINHO
  const finalizarPedido = () => {
    // Limpa o carrinho ANTES de mostrar o modal
    clearCart();
    setPedidoFinalizado(true);
  };

  // ⬇️ FUNÇÃO PARA VOLTAR À LOJA (LIMPA CARRINHO TAMBÉM)
  const voltarParaLoja = () => {
    clearCart();
    navigate("/");
  };

  const subtotal = checkoutItems.reduce((acc, i) => acc + i.preco, 0);
  const totalPedido = subtotal + frete + seguro;

  return (
    <>
      <CheckoutStepper
        currentStep={currentStep}
        totalSteps={totalSteps}
        nextStep={nextStep}
        prevStep={prevStep}
        formData={formData}
        handleChange={handleChange}
        finalizarPedido={finalizarPedido}
        summaryComponent={
          <div className="checkout-right">
            <Summary 
              items={checkoutItems} 
              frete={frete} 
              seguro={seguro} 
              removeFromCheckout={(item) =>
                setCheckoutItems(prev => prev.filter(i => i.id !== item.id))
              }
            />

            <div className="checkout-seguro">
              <h4>Escolha um Seguro</h4>
              <div className="seguro-options">
                <div 
                  className={`seguro-card ${seguro === 500 ? 'selected' : ''}`} 
                  onClick={() => setSeguro(500)}
                >
                  <span className="seguro-valor">R$500/mês</span>
                  <span className="seguro-desc">Cobertura completa</span>
                </div>
                <div 
                  className={`seguro-card ${seguro === 250 ? 'selected' : ''}`} 
                  onClick={() => setSeguro(250)}
                >
                  <span className="seguro-valor">R$250/mês</span>
                  <span className="seguro-desc">Cobertura parcial</span>
                </div>
                <div 
                  className={`seguro-card ${seguro === 0 ? 'selected' : ''}`} 
                  onClick={() => setSeguro(0)}
                >
                  <span className="seguro-valor">Sem seguro</span>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* Modal detalhado */}
      {pedidoFinalizado && (
        <div className="modal-pedido">
          <div className="modal-conteudo">
            <h2>✅ Pedido Finalizado!</h2>
            <p>Obrigado pela sua compra. Confira abaixo os detalhes do seu pedido:</p>

            <ul className="modal-itens">
              {checkoutItems.map(item => (
                <li key={item.id} className="modal-item">
                  <img src={`/BicicletaReact/img/${item.imagens[0]}`} alt={item.nome} />
                  <span>{item.nome}</span>
                  <span>R$ {item.preco.toFixed(2).replace('.', ',')}</span>
                </li>
              ))}
            </ul>

            <div className="modal-resumo">
              <p>Subtotal: R$ {subtotal.toFixed(2).replace('.', ',')}</p>
              {frete > 0 && <p>Frete: R$ {frete.toFixed(2).replace('.', ',')}</p>}
              {seguro > 0 && <p>Seguro: R$ {seguro.toFixed(2).replace('.', ',')}</p>}
              <p><strong>Total: R$ {totalPedido.toFixed(2).replace('.', ',')}</strong></p>
            </div>

            <button onClick={() => setPedidoFinalizado(false)}>Fechar</button>
            {/* ⬇️ BOTÃO ATUALIZADO PARA LIMPAR CARRINHO */}
            <button onClick={voltarParaLoja}>Voltar à Loja</button>
          </div>
        </div>
      )}
    </>
  );
}