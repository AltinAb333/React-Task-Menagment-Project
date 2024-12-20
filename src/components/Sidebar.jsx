import { Link } from "react-router-dom";
import image from "../images/menu.png";
import useAuth from "../util/auth";
import { useEffect } from "react";

const Sidebar = ({ isOpen, toggleSidebar, onLogout }) => {
  const { handleLogout, isLoggedIn } = useAuth();

  const handleLogoutAndRefresh = () => {
    handleLogout();
    onLogout(); // Trigger the callback to refresh data in the parent
    window.location.reload();
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0 w-64" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <nav className="mt-20">
          <ul>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">
              <Link to="/">
                <button className="w-full text-left">Home</button>
              </Link>
            </li>
            {isLoggedIn && (
              <li className="p-4 hover:bg-gray-700 cursor-pointer">
                <Link to="transaction/new">
                  <button className="w-full text-left">
                    Create Transaction
                  </button>
                </Link>
              </li>
            )}
            {!isLoggedIn ? (
              <li className="p-4 hover:bg-gray-700 cursor-pointer">
                <Link to="auth">
                  <button className="w-full text-left">Login/Signup</button>
                </Link>
              </li>
            ) : (
              <li className="p-4 hover:bg-gray-700 cursor-pointer text-red-500">
                <button
                  className="w-full text-left"
                  onClick={handleLogoutAndRefresh}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>
        <button
          onClick={toggleSidebar}
          className="bottom-2.5 end-2.5 text-white bg-gray-300 rounded-lg p-2 absolute inline-flex items-center"
        >
          <img src={image} alt="Close sidebar" className="size-6" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
