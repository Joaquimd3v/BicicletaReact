import { useState } from 'react';
import { useAuth } from './AuthContext';

export default function Profile() {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nome: user?.nome || '',
    email: user?.email || '',
    telefone: user?.telefone || ''
  });

  const handleSave = () => {
    updateUser(formData);
    setIsEditing(false);
  };

  if (!user) {
    return <div>Usuário não encontrado</div>;
  }

  return (
    <div className="profile-container">
      <h1>Meu Perfil</h1>
      
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.nome.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
          </div>
          <div>
            <h2>{user.nome}</h2>
            <p>Membro desde {new Date(user.createdAt).toLocaleDateString('pt-BR')}</p>
          </div>
          <button 
            className="edit-btn"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancelar' : 'Editar'}
          </button>
        </div>

        <div className="profile-info">
          <div className="info-group">
            <label>Nome completo</label>
            {isEditing ? (
              <input 
                type="text" 
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            ) : (
              <p>{user.nome}</p>
            )}
          </div>

          <div className="info-group">
            <label>E-mail</label>
            {isEditing ? (
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            ) : (
              <p>{user.email}</p>
            )}
          </div>

          <div className="info-group">
            <label>Telefone</label>
            {isEditing ? (
              <input 
                type="tel" 
                value={formData.telefone}
                onChange={(e) => setFormData({...formData, telefone: e.target.value})}
              />
            ) : (
              <p>{user.telefone}</p>
            )}
          </div>

          {isEditing && (
            <button className="save-btn" onClick={handleSave}>
              Salvar Alterações
            </button>
          )}
        </div>
      </div>
    </div>
  );
}