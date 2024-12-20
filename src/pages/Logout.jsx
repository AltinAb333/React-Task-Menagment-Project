import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token and expiration
    localStorage.removeItem("isLogedIn");
    console.log("Logging out..."); // For debugging

    // Redirect to the login page
    navigate("/auth");
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default LogoutButton;
