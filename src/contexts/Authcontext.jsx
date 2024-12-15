import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  const login = async (credentials) => {
    // This will be connected to Spring Boot later
    // Mock authentication for now
    if (credentials.email && credentials.password) {
      setUser({
        id: 1,
        email: credentials.email,
        name: "John Doe",
      });
      setRole("admin");
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
