import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// AuthProvider component to wrap around the app and provide context values
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // Login function: Sets token in context and localStorage
  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);  // Store the token in localStorage
  };

  // Logout function: Clears token from context and localStorage
  const logout = () => {
    setToken('');
    localStorage.removeItem('token');  // Remove token from localStorage
  };

  // Use useEffect to persist the token state from localStorage on initial load
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);