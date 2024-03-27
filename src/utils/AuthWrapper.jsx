import { createContext, useContext, useState } from "react";
import AppRouter from "../router/AppRouter";

const AuthContext = createContext();
export const useUser = () => useContext(AuthContext);

const AuthWrapper = () => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "nida@mail.com" && password === "1q2w3e") {
      setUser({ email });
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <AuthContext.Provider value={{ user, login, logout }}>
        <AppRouter />
      </AuthContext.Provider>
    </>
  );
};

export default AuthWrapper;
