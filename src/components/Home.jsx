import React, { useState } from "react";
import Transaction from "./Transaction";
import Sidebar from "./Sidebar";

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
  const [isOpen, setIsOpen] = useState(true);

  function toggleSidebar() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main
        className={`mt-16 p-4 h-screen overflow-y-auto ${
          isOpen ? " ml-72" : " ml-5"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
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
    </div>
  );
};

export default Home;
