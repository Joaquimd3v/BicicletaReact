import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  // Login
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulação de verificação no "backend"
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
          const userData = { ...user };
          delete userData.password; // Remove a senha do estado
          
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          resolve(userData);
        } else {
          reject("E-mail ou senha incorretos");
        }
      }, 1000);
    });
  };

  // Cadastro
  const register = (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        
        // Verificar se usuário já existe
        if (users.find(u => u.email === userData.email)) {
          reject("Este e-mail já está cadastrado");
          return;
        }

        const newUser = {
          id: Date.now().toString(),
          ...userData,
          createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Logar automaticamente após cadastro
        const userWithoutPassword = { ...newUser };
        delete userWithoutPassword.password;
        
        setUser(userWithoutPassword);
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        resolve(userWithoutPassword);
      }, 1000);
    });
  };

  // Logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      loading,
      isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);