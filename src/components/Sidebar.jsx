// src/components/Sidebar.jsx
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <nav className="mt-20">
          <ul>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Create New Transaction</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Login/Signup</li>
          </ul>
        </nav>
      </div>
      
      <button onClick={toggleSidebar} className="fixed top-5 left-5 text-white lg:hidden">
        <p>click to close</p>
      </button>
    </div>
  );
};

export default Sidebar;
