import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Retrieve the value from localStorage on initial render
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    // Sync with localStorage whenever isLoggedIn changes
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return { isLoggedIn, handleLogin, handleLogout };
};

export function tokenLoader() {
  // setIsLoggedIn();
  return localStorage.getItem("isLoggedIn") === "true";
}

export default useAuth;
