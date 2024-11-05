import React from "react";

const Transaction = ({ title, category, amount, date }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full sm:w-80 md:w-60 lg:w-64">
      <div className="mt-4 justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">Category: {category}</p>
        <p className="text-gray-800 font-bold">{amount}</p>
        <p className="text-gray-500 text-sm">Date: {date}</p>
      </div>

      <div className="mt-4 flex justify-between">
        <button className="text-blue-500 hover:text-blue-700">Edit</button>
        <button className="text-red-500 hover:text-red-700">Delete</button>
      </div>
    </div>
  );
};

export default Transaction;
