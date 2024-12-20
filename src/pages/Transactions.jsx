import React, { useEffect, useState } from "react";
import Transaction from "../components/Transaction";

const TransactionsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedTransaction, setFetchedTransaction] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTransactions() {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8080/api/expenses");

        if (!response.ok) {
          throw new Error("Fetching Transactions failed.");
        }

        const resData = await response.json();
        console.log("Fetched transactions:", resData); // Log to inspect the data

        setFetchedTransaction(resData); // Directly set the array of expenses
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTransactions();
  }, []);

  // Function to format date to 'YYYY-MM-DD'
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-CA");
  };

  // Handle transaction deletion
  const handleDelete = (id) => {
    setFetchedTransaction((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );

    // Send the DELETE request to the API
    fetch(`http://localhost:8080/api/expenses/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete transaction");
        }
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
        setFetchedTransaction((prevTransactions) => [
          ...prevTransactions,
          prevTransactions.find((transaction) => transaction.id === id),
        ]);
        alert("Failed to delete transaction");
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && fetchedTransaction.length === 0 && (
        <p>No transactions found.</p>
      )}
      {!isLoading && fetchedTransaction && fetchedTransaction.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {fetchedTransaction.map(
            (transaction) =>
              transaction?.id && (
                <Transaction
                  key={transaction.id}
                  id={transaction.id}
                  title={transaction.title}
                  category={transaction.category?.name || "Unknown"} 
                  amount={transaction.value}
                  date={formatDate(transaction.createdAt)}
                  onDelete={handleDelete} 
                />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default TransactionsPage;
