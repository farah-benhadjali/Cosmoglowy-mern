import { createContext, useEffect, useState } from "react";

const AuthStore = createContext({
  //   email: "",
  //   password: "",
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: () => {},
});
export default AuthStore;

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log("abc");
  useEffect(() => {
    // console.log("effect");
    const x = localStorage.getItem("isLoggedIn");
    if (x === "abc") {
      setIsLoggedIn(true);
    }
  }, []);
  // console.log("123");
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "abc");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <AuthStore.Provider
      value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: logoutHandler,
      }}
    >
      {children}
    </AuthStore.Provider>
  );
};