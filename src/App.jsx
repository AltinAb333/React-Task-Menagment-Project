import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import CreateTransaction from "./components/CreateTransaction.jsx";
import Transaction from "./components/Transaction.jsx";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home isOpen={isOpen} toggleSidebar={toggleSidebar} />} />
          <Route path="/create" element={<CreateTransaction isOpen={isOpen} toggleSidebar={toggleSidebar} />} />
          <Route path="/login" element={<Login isOpen={isOpen} toggleSidebar={toggleSidebar} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
