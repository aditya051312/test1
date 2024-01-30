import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const register = (name, email, password) => {
    setUsers([...users, { name, email, password }]);
  };

  const login = (email, password) => {
    return users.find((user) => user.email === email && user.password === password);
  };

  return <AuthContext.Provider value={{ register, login }}>{children}</AuthContext.Provider>;
};