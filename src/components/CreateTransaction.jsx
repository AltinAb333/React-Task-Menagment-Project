import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../util/auth";

export default function CreateTransaction() {
  const { isLoggedIn } = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    value: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          title: formData.title,
          value: formData.value,
          categoryId: formData.categoryId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create transaction");
      }

      navigate("/");
    } catch (err) {
      console.error("Error creating transaction:", err);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
          <h1 className="text-3xl font-semibold text-center mb-6">
            New Transaction
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="categoryId"
                className="block text-sm font-medium text-gray-700"
              >
                Category:
              </label>
              <select
                id="categoryId"
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select a Category</option>
                <option value="1">Technology</option>
                <option value="2">Entertainment</option>
                <option value="3">Health</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="value"
                className="block text-sm font-medium text-gray-700"
              >
                Amount:
              </label>
              <input
                type="number"
                id="value"
                name="value"
                value={formData.value}
                onChange={handleChange}
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Create Transaction
              </button>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="px-6 py-2 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-slate-800 m-3 p-3">
          <h1 className="text-red-600">
            You need to Be Logged in to acces this page !!!
          </h1>
        </div>
      )}
    </>
  );
}
