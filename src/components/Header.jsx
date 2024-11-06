import { Link } from "react-router-dom";
import image from "../images/interface.png"

export default function Header({ isOpen, toggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-10 shadow-md">
      <div className="flex pr-4">
        <button
          onClick={toggleSidebar}
          className={` rounded-lg mr-3 ${
            isOpen ? " hidden" : " "
          }`}
        >
          <img src={image} alt="Hamburgerrrrr!!" className="size-6"/>
        </button>
        <Link to="/">
          <h1 className="text-xl font-semibold">Transactions</h1>
        </Link>
      </div>
    </header>
  );
}
