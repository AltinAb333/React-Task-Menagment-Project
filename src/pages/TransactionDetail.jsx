import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../util/auth";

const TransactionDetail = () => {
  const { id } = useParams(); // Get the transaction ID from the URL
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    categoryId: "",
    value: "",
  });

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/expenses");
        if (!response.ok) {
          throw new Error("Failed to fetch expenses");
        }
        const data = await response.json();

        // Find the expense with the matching ID
        const selectedTransaction = data.find(
          (expense) => expense.id.toString() === id
        );
        if (selectedTransaction) {
          setTransaction(selectedTransaction);
          setFormData({
            title: selectedTransaction.title,
            categoryId: selectedTransaction.category.id,
            value: selectedTransaction.value,
          });
        } else {
          setError("Transaction not found");
        }
      } catch (err) {
        setError(
          err.message || "An error occurred while fetching the transaction"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/expenses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          value: formData.value,
          categoryId: formData.categoryId,
        }),
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Failed to update expense");
      }
      navigate(`/`);
    } catch (err) {
      setError(
        err.message || "An error occurred while updating the transaction"
      );
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  return (
    <>
      {isLoggedIn ? (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Edit Transaction
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
                Update Transaction
              </button>
              <button
                type="button"
                onClick={() => navigate(`/`)}
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
};

export default TransactionDetail;
