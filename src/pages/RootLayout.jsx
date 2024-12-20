import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useState } from "react";
import useAuth from "../util/auth.js";

function RootLayout({ isOpen, toggleSidebar, reloadPage }) {
  const [loggedOut, setLoggedOut] = useState(false); // Track logout
  const { isLoggedIn } = useAuth();
  // reloadPage();
  

  const handleSidebarLogout = () => {
    setLoggedOut(true); // Trigger re-render on logout
  };

  return (
    <div className="">
      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        onLogout={handleSidebarLogout}
        isLoggedIn={isLoggedIn}
      />
      <main
        className={`mt-16 p-4 h-screen  ${
          isOpen ? " ml-72" : " ml-5"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
