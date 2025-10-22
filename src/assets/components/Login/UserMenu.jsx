import { useState, useRef, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './UserMenu.css';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/profile');
    setIsOpen(false);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (!user) {
    return (
      <div className="auth-buttons">
        <button 
          className="button"
          onClick={() => navigate('/login')}
        >
          Entrar
        </button>
        <button 
          className="button secundary"
          onClick={() => navigate('/register')}
        >
          Cadastrar
        </button>
      </div>
    );
  }

  return (
    <div className="user-menu" ref={dropdownRef}>
      <button 
        className="user-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="user-avatar">
          {getInitials(user.nome)}
        </div>
        <span className="user-name">
          Olá, {user.nome.split(' ')[0]}
        </span>
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>

      {isOpen && (
        <div className="user-dropdown">
          <div className="user-info">
            <div className="user-avatar large">
              {getInitials(user.nome)}
            </div>
            <div className="user-details">
              <strong>{user.nome}</strong>
              <span>{user.email}</span>
            </div>
          </div>

          <div className="dropdown-divider"></div>

          <button className="dropdown-item" onClick={handleProfile}>
            <i className="fas fa-user"></i>
            Meu Perfil
          </button>

          <button className="dropdown-item">
            <i className="fas fa-shopping-bag"></i>
            Meus Pedidos
          </button>

          <button className="dropdown-item">
            <i className="fas fa-heart"></i>
            Favoritos
          </button>

          <div className="dropdown-divider"></div>

          <button className="dropdown-item logout" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            Sair
          </button>
        </div>
      )}
    </div>
  );
}