import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../util/auth";

const Transaction = ({ id, title, category, amount, date, onDelete }) => {
  const { isLoggedIn } = useAuth();

  // Handle delete button click
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this transaction? with id: "+ id)) {
      onDelete(id); // Call the onDelete function from the parent component
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full sm:w-80 md:w-72 lg:w-72 ">
      <div className="mt-4 justify-between flex-row gap-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">Category: {category}</p>
        <p className="text-gray-800 font-bold">{amount}</p>
        <p className="text-gray-500 text-sm">Date: {date}</p>
      </div>

      {isLoggedIn && (
        <div className="mt-4 flex justify-between">
          <Link to={`transaction/${id}`}>
            <button className="text-blue-500 hover:text-blue-700">Edit</button>
          </Link>

          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Transaction;
