import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./components/Home.jsx";
import Transaction from "./components/Transaction.jsx"; // Example additional component

function App() {
  return (
    <Router>
      {" "}
      {/* This provides the Router context to the app */}
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Sidebar />
        <Routes>
          {" "}
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/new-transaction" element={<Transaction />} />
          {/* Add other routes like Login/Signup */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
