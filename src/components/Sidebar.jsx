import React, { useState } from "react";
import { Link } from "react-router-dom";
import image from "../images/menu.png";

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
                <Link to="/"><button className="w-full text-left">Home</button></Link>
              </li>
              <li className="p-4 hover:bg-gray-700 cursor-pointer">
                <Link to="/create"><button className="w-full text-left">Create Transaction</button></Link>
              </li>
              <li className="p-4 hover:bg-gray-700 cursor-pointer">
                <Link to="/login"><button className="w-full text-left">Login/Signup</button></Link>
              </li>
              <li className="p-4 cursor-pointer top-3/4"></li>
            </ul>
          </nav>
          <button
            onClick={toggleSidebar}
            className="bottom-2.5 end-2.5 text-white bg-gray-300 rounded-lg p-2 absolute inline-flex items-center "
          >
            <img src={image} alt="Close sidebar" className="size-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
