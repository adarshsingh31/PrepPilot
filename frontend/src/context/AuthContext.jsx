import { createContext, useContext, useState, useEffect } from "react";
import { getProfile } from "../services/authService";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getProfile();

        setUser(response.user);

        localStorage.setItem("user", JSON.stringify(response.user));
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      }
    };

    const token = localStorage.getItem("token");

    if (token) {
      fetchUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
