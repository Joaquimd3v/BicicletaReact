import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

  // Isola os estilos do body apenas para esta página
  useEffect(() => {
    document.body.classList.add('auth-page');
    
    return () => {
      document.body.classList.remove('auth-page');
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validações
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      await register(formData);
      navigate('/');
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="logo-section">
          <div className="bike-icon">
            <i className="fas fa-bicycle"></i>
          </div>
          <h1>Vireon</h1>
          <p>Junte-se à nossa comunidade</p>
        </div>
        
        <div className="features">
          <div className="feature">
            <i className="fas fa-tags"></i>
            <span>Ofertas exclusivas</span>
          </div>
          <div className="feature">
            <i className="fas fa-history"></i>
            <span>Histórico de pedidos</span>
          </div>
          <div className="feature">
            <i className="fas fa-heart"></i>
            <span>Lista de desejos</span>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <div className="form-header">
            <h2>Crie sua conta</h2>
            <p>Preencha os dados abaixo para se cadastrar</p>
          </div>

          {error && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="nome">
                <i className="fas fa-user"></i>
                Nome completo
              </label>
              <input 
                type="text" 
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i>
                E-mail
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="telefone">
                <i className="fas fa-phone"></i>
                Telefone
              </label>
              <input 
                type="tel" 
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                required
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">
                <i className="fas fa-lock"></i>
                Senha
              </label>
              <input 
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mínimo 6 caracteres"
                required
                disabled={loading}
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loading}
              >
                <i className={`fas fa-${showPassword ? 'eye-slash' : 'eye'}`}></i>
              </button>
            </div>

            <div className="input-group">
              <label htmlFor="confirmPassword">
                <i className="fas fa-lock"></i>
                Confirmar senha
              </label>
              <input 
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Digite a senha novamente"
                required
                disabled={loading}
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                disabled={loading}
              >
                <i className={`fas fa-${showConfirmPassword ? 'eye-slash' : 'eye'}`}></i>
              </button>
            </div>

            <button 
              type="submit" 
              className="auth-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Cadastrando...
                </>
              ) : (
                <>
                  <span>Criar conta</span>
                  <i className="fas fa-arrow-right"></i>
                </>
              )}
            </button>

            <div className="auth-link">
              Já tem uma conta? <Link to="/login">Faça login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;