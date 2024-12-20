import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import useAuth from "../util/auth";

function AuthenticationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [authData, setAuthData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogin } = useAuth();
  const [isSignin,setIsSignin] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const mode = searchParams.get("mode") || "login";

  useEffect(() => {
    if (!authData) return;

    const authenticateUser = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8080/api/${mode}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(authData),
        });

        setIsLoading(false);

        if (response.status === 422 || response.status === 401) {
          setError("Authentication failed. Please check your credentials.");
          return;
        }

        if (response.status === 200) {
          localStorage.setItem("isLoggedIn", "true");
          console.log(
            "Stored isLoggedIn value:",
            localStorage.getItem("isLoggedIn")
          );
          handleLogin();

          // navigate("/");
          navigate("/", { replace: true }); // navigate to root without adding a new history entry
          // Perform a full page reload after navigation
          window.location.reload(); // Reload the page
        }
        if (response.status === 201) {
          setError("User created succesfully !");
          setAuthData(null);
          setIsSignin(true);
          navigate("/auth");
        }
        if (response.status === 409) {
          setError("This User already exist !");
        }
      
      } catch (err) {
        setIsLoading(false);
        setError(err.message || "Authentication failed.");
      }
    };

    authenticateUser();
  }, [authData, mode, navigate]);

  const handleAuthSubmit = (data) => {
    setAuthData({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <AuthForm onSubmit={handleAuthSubmit} />
    </div>
  );
}

export default AuthenticationPage;
