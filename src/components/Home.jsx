import React from "react";
import Transaction from "./Transaction";

const transactions = [
  { title: "Groceries", category: "Food", amount: "$50", date: "2024-10-01" },
  {
    title: "Rent",
    category: "Rent",
    amount: "$12",
    date: "2024-09-30",
  },
  { title: "Coffee", category: "Food", amount: "$5", date: "2024-10-05" },
  { title: "Groceries", category: "Food", amount: "$50", date: "2024-10-01" },
  {
    title: "Rent",
    category: "Rent",
    amount: "$12",
    date: "2024-09-30",
  },
  { title: "Coffee", category: "Food", amount: "$5", date: "2024-10-05" },
  { title: "Groceries", category: "Food", amount: "$50", date: "2024-10-01" },
  {
    title: "Rent",
    category: "Rent",
    amount: "$12",
    date: "2024-09-30",
  },
  { title: "Coffee", category: "Food", amount: "$5", date: "2024-10-05" },
];

const Home = () => {
  return (
    <main className="ml-64 mt-16 p-4 h-screen overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {transactions.map((transaction, index) => (
          <Transaction
            key={index}
            title={transaction.title}
            category={transaction.category}
            amount={transaction.amount}
            date={transaction.date}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
