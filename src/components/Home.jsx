import React, { useState } from "react";
import Transaction from "./Transaction";
import Sidebar from "./Sidebar";
import { transactions } from "../data/transactions";
import Header from "./Header";

const Home = ({ isOpen, toggleSidebar }) => {
  
  return (
    <div>
      <Header isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main
        className={`mt-16 p-4 h-screen overflow-y-auto ${
          isOpen ? " ml-72" : " ml-5"
        }`}
      >
        {console.log("Home " + isOpen)}

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
