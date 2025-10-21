import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
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

    try {
      await login(formData.email, formData.password);
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
          <p>Pedale para o seu próximo destino</p>
        </div>
        
        <div className="features">
          <div className="feature">
            <i className="fas fa-shield-alt"></i>
            <span>Compra 100% segura</span>
          </div>
          <div className="feature">
            <i className="fas fa-shipping-fast"></i>
            <span>Entrega rápida</span>
          </div>
          <div className="feature">
            <i className="fas fa-headset"></i>
            <span>Suporte especializado</span>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-form-container">
          <div className="form-header">
            <h2>Bem-vindo de volta!</h2>
            <p>Entre na sua conta para continuar</p>
          </div>

          {error && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </div>
          )}

          <form className="auth-form" onSubmit={handleSubmit}>
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
                placeholder="Sua senha"
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

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" id="remember" disabled={loading} />
                <span className="checkmark"></span>
                Lembrar de mim
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Esqueci a senha
              </Link>
            </div>

            <button 
              type="submit" 
              className="auth-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Entrando...
                </>
              ) : (
                <>
                  <span>Entrar</span>
                  <i className="fas fa-arrow-right"></i>
                </>
              )}
            </button>

            <div className="divider">
              <span>ou</span>
            </div>

            <div className="social-auth">
              <button type="button" className="social-btn google" disabled={loading}>
                <i className="fab fa-google"></i>
                Continuar com Google
              </button>
              <button type="button" className="social-btn facebook" disabled={loading}>
                <i className="fab fa-facebook-f"></i>
                Continuar com Facebook
              </button>
            </div>

            <div className="auth-link">
              Não tem uma conta? <Link to="/register">Cadastre-se</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}