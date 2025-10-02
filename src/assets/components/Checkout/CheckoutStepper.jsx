import React from 'react';
import { FaUser, FaTruck, FaCreditCard, FaCheckCircle } from 'react-icons/fa'; 

// Componente que renderiza o passo a passo horizontal (Stepper)
function StepIndicator({ currentStep, totalSteps }) {
    const stepsData = [
        { id: 1, name: "Dados Pessoais", Icon: FaUser },
        { id: 2, name: "Endereço", Icon: FaTruck },
        { id: 3, name: "Pagamento", Icon: FaCreditCard },
        { id: 4, name: "Revisão", Icon: FaCheckCircle },
    ];

    return (
        <div className="stepper-header">
            {stepsData.map((step) => {
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;

                return (
                    <div 
                        key={step.id} 
                        className={`step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                    >
                        <div className="step-icon">
                            <step.Icon />
                        </div>
                        <span className="step-name">{step.name}</span>
                        {step.id < totalSteps && <div className="step-connector"></div>}
                    </div>
                );
            })}
        </div>
    );
}

// Componente principal de apresentação do Checkout
export default function CheckoutStepper({ 
    currentStep, 
    totalSteps, 
    nextStep, 
    prevStep, 
    formData, 
    handleChange, 
    finalizarPedido, 
    summaryComponent,
    // onRemoveAll foi removido
}) {
    
    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <>
                        <h3><FaUser /> Seus Dados</h3>
                        <input name="nome" placeholder="Nome Completo" value={formData.nome} onChange={handleChange} />
                        <input name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
                        <input name="telefone" placeholder="Telefone" value={formData.telefone} onChange={handleChange} />
                    </>
                );
            case 2:
                return (
                    <>
                        <h3><FaTruck /> Endereço de Entrega</h3>
                        <input name="rua" placeholder="Rua e Número" value={formData.rua} onChange={handleChange} />
                        <input name="cidade" placeholder="Cidade" value={formData.cidade} onChange={handleChange} />
                        <input name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange} />
                        <input name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} />
                    </>
                );
            case 3:
                return (
                    <>
                        <h3><FaCreditCard /> Informações de Pagamento</h3>
                        <input name="cartaoNumero" placeholder="Número do Cartão" value={formData.cartaoNumero} onChange={handleChange} />
                        <input name="cartaoNome" placeholder="Nome no Cartão" value={formData.cartaoNome} onChange={handleChange} />
                        <input name="cartaoValidade" placeholder="Validade (MM/AA)" value={formData.cartaoValidade} onChange={handleChange} />
                        <input name="cartaoCVV" placeholder="CVV" value={formData.cartaoCVV} onChange={handleChange} />
                    </>
                );
            case 4:
                return (
                    <>
                        <h3><FaCheckCircle /> Revisão Final</h3>
                        <div className="review-details">
                            <h4>Dados Pessoais & Contato</h4>
                            <p><strong>Nome:</strong> {formData.nome || '...'}</p>
                            <p><strong>Email:</strong> {formData.email || '...'}</p>
                            
                            <h4>Endereço</h4>
                            <p>{formData.rua}, {formData.cidade} / {formData.estado} - {formData.cep}</p>
                            
                            <h4>Pagamento</h4>
                            <p>Cartão final: **{formData.cartaoNumero ? formData.cartaoNumero.slice(-4) : '****'}**</p>
                        </div>
                    </>
                );
            default:
                return null;
        }
    }

    return (
        <div className="checkout-container">
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

            <div className="main-form-area">
                
                <div className="checkout-form">
                    {/* Ações do cabeçalho removidas aqui */}
                    
                    <div className="step-content">
                        {renderStepContent()}
                    </div>

                    <div className="step-buttons">
                        <button onClick={prevStep} disabled={currentStep === 1}>
                            ← Voltar
                        </button>
                        {currentStep < totalSteps ? (
                            <button onClick={nextStep}>
                                Próximo →
                            </button>
                        ) : (
                            <button onClick={finalizarPedido} className="finish-button">
                                Finalizar Pedido
                            </button>
                        )}
                    </div>
                </div>

                {summaryComponent}
                
            </div>
        </div>
    );
}