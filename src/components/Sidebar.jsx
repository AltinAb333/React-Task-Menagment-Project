import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <div>
        <div
          className={` fixed top-0 left-0 h-full bg-gray-800 text-white transform ${
            isOpen ? " translate-x-0 w-64" : " -translate-x-full "
          } transition-transform duration-300`}
        >
          <nav className="mt-20">
            <ul>
              <li className="p-4 hover:bg-gray-700 cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="p-4 hover:bg-gray-700 cursor-pointer">
                <Link to="/create">Create Transaction</Link>
              </li>
              <li className="p-4 hover:bg-gray-700 cursor-pointer">
                <Link to="/login">Login/Signup</Link>
              </li>
              <li className="p-4 cursor-pointer">
                <button
                  onClick={toggleSidebar}
                  className="top-5 left-5 text-white sm:hidden bg-red-800 rounded-lg p-2 "
                >
                  <p>Click to close</p>
                  {console.log("Sidebar " + isOpen)}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
