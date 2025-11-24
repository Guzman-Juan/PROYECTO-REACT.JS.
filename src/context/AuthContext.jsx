import { useState, useContext, createContext, useEffect } from 'react';
// creamos el contexto de Autenticacion 
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    // Verificar si hay un token en el localStorage al cargar el componente
    const token = localStorage.getItem('authToken');
    const nombreUsuario = localStorage.getItem('usuario');
    if (token && nombreUsuario) {
      setUsuario(nombreUsuario);
    }
  }, []);

  const estaLogiado = !!usuario;
  const login = (nombreUsuario) => {
    // Simulamos la creacion del token 
    const token = `fake-token-${nombreUsuario}`;
    localStorage.setItem('authToken', token);
    localStorage.setItem('usuario', nombreUsuario);
    setUsuario(nombreUsuario);
  }                                        
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('usuario');
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{usuario, login, logout, estaLogiado}}> 
      {children}
    </AuthContext.Provider>
  ); 
}

export const useAuthContext = () => useContext(AuthContext);